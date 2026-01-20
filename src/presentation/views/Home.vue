<script>
export default {
  name: "AppHome",
};
</script>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount, nextTick } from "vue";
import usePageMeta from "@/presentation/composables/usePageMeta";
import { defineOptions } from "vue";
// import { useHead } from "@vueuse/head";
import M from "materialize-css";

import CustomButton from "@/presentation/components/CustomButton.vue";
import Counter from "@/presentation/components/Counter.vue";
import Rating from "@/presentation/components/Rating.vue";
import ContactSection from "@/presentation/modules/ContactSection.vue";
import CatalogSection from "@/presentation/modules/CatalogSection.vue";

/* ======= meta ======= */
defineOptions({ name: "AppHome" });
usePageMeta({
  title: 'INDFER - Ferramentas diamantadas',
  description:
    "Ferramentas diamantadas de alta performance: soluções desenvolvidas com tecnologia própria e controle de qualidade rigoroso.",
});

/* ======= state ======= */
const elfsightContainer = ref(null);
const yearsExperience = computed(() => new Date().getFullYear() - 1993);

/* ======= Elfsight tools (refinado) ======= */
const DEBUG = false;
const selector = ".elfsight-app-f35d0164-0588-452d-8397-5813e046bb15";
const textMatch = "Free Google Reviews widget";
const intervalMs = 300;
// dá um fôlego maior por conta do "data-elfsight-app-lazy"
const maxTries = 600; // ~3min

let containerEl = null;
let intervalId = null;
let tries = 0;
let containerObserver = null;
let documentObserver = null;

const isQueryable = (n) =>
  !!n &&
  (n instanceof Element ||
    n instanceof Document ||
    n instanceof DocumentFragment);

const log = (...a) => DEBUG && console.debug("[useElfsight]", ...a);

function attachToElement(refEl) {
  if (!refEl) return;
  if (typeof refEl === "object" && "value" in refEl) {
    containerEl = isQueryable(refEl.value) ? refEl.value : null;
    return;
  }
  if (isQueryable(refEl)) {
    containerEl = refEl;
    return;
  }
  if (typeof refEl === "string") {
    const el = document.querySelector(refEl);
    containerEl = isQueryable(el) ? el : null;
    return;
  }
  containerEl = null;
}

function getContainer() {
  if (isQueryable(containerEl)) return containerEl;
  const el = document.querySelector(selector);
  return isQueryable(el) ? el : null;
}

function getAnchor(root = null) {
  const parent = getContainer();
  const scope = isQueryable(root) ? root : parent;
  if (!isQueryable(scope)) return null;
  const anchors = scope.querySelectorAll(
    "a[href^='https://elfsight.com/google-reviews-widget']",
  );
  for (const a of anchors) {
    if ((a.textContent || "").includes(textMatch)) return a;
  }
  return null;
}

function enforceHiddenStyles(anchor) {
  if (!isQueryable(anchor)) return false;
  if (anchor.__hiding) return true;

  anchor.__hiding = true;
  const setImp = (p, v) => anchor.style.setProperty(p, v, "important");

  setImp("display", "none");
  setImp("visibility", "hidden");
  setImp("opacity", "0");
  setImp("pointer-events", "none");
  setImp("width", "0px");
  setImp("height", "0px");
  setImp("margin", "0");
  setImp("padding", "0");
  setImp("transform", "none");
  setImp("line-height", "0");
  setImp("font-size", "0");
  setImp("z-index", "-1");
  anchor.setAttribute("aria-hidden", "true");
  anchor.tabIndex = -1;
  anchor.dataset.elfsightHidden = "1";

  anchor.__hiding = false;
  log("hidden styles enforced");
  return true;
}

function attachAnchorObserver(anchor) {
  if (!isQueryable(anchor) || anchor.__elfsightObserver) return;
  const obs = new MutationObserver((muts) => {
    if (anchor.__hiding) return;
    const styleChanged = muts.some(
      (m) => m.type === "attributes" && m.attributeName === "style",
    );
    if (styleChanged) {
      log("style changed -> re-enforce");
      enforceHiddenStyles(anchor);
    }
  });
  obs.observe(anchor, { attributes: true, attributeFilter: ["style"] });
  anchor.__elfsightObserver = obs;
  log("anchor observer attached");
}

function handleNodeForAnchor(node) {
  // nó já é um <a> alvo?
  if (
    node.tagName === "A" &&
    node.href?.startsWith("https://elfsight.com/google-reviews-widget")
  ) {
    enforceHiddenStyles(node);
    attachAnchorObserver(node); // ⚠️ FALTAVA NO SEU CÓDIGO NOVO
    return true;
  }
  // procurar dentro
  const a = getAnchor(node);
  if (a) {
    enforceHiddenStyles(a);
    attachAnchorObserver(a);
    return true;
  }
  return false;
}

function attachContainerObserver() {
  const parent = getContainer();
  if (!isQueryable(parent) || parent.__elfsightContainerObs) return;

  const containerObs = new MutationObserver((muts) => {
    for (const m of muts) {
      for (const node of m.addedNodes || []) {
        if (!isQueryable(node)) continue;
        if (handleNodeForAnchor(node)) log("anchor handled in container");
      }
    }
  });

  containerObs.observe(parent, { childList: true, subtree: true });
  parent.__elfsightContainerObs = containerObs;
  containerObserver = containerObs;

  // primeira passada
  const a = getAnchor(parent);
  if (a) {
    enforceHiddenStyles(a);
    attachAnchorObserver(a);
  }
  log("container observer attached");
}

function attachDocumentFallbackObserver() {
  if (documentObserver) return;
  // Fallback caso o <a> apareça fora do container
  const obs = new MutationObserver((muts) => {
    for (const m of muts) {
      for (const node of m.addedNodes || []) {
        if (!isQueryable(node)) continue;
        if (handleNodeForAnchor(node)) log("anchor handled in document");
      }
    }
  });
  obs.observe(document.body, { childList: true, subtree: true });
  documentObserver = obs;
  log("document observer attached (fallback)");
}

function hideOnceFound() {
  // tenta no container primeiro
  let a = getAnchor();
  if (!a) {
    // tenta global
    const global = document.querySelectorAll(
      "a[href^='https://elfsight.com/google-reviews-widget']",
    );
    a = Array.from(global).find((el) =>
      (el.textContent || "").includes(textMatch),
    );
  }
  if (!a) return false;

  enforceHiddenStyles(a);
  attachAnchorObserver(a);
  attachContainerObserver(); // garante que acompanhe recriações
  return true;
}

function tick() {
  tries += 1;
  if (hideOnceFound()) {
    stopWatcher(); // achou uma vez, observers dão conta do resto
    return;
  }
  if (tries >= maxTries) {
    log("maxTries reached; relying on observers");
    stopWatcher();
  }
}

function startWatcher() {
  if (intervalId) return;
  if (hideOnceFound()) return;
  tries = 0;
  intervalId = setInterval(tick, intervalMs);
  log("polling started");
}

function stopWatcher() {
  if (intervalId) {
    clearInterval(intervalId);
    intervalId = null;
  }
  tries = 0;
  log("polling stopped");
}

function cleanupObservers() {
  if (containerObserver) {
    try {
      containerObserver.disconnect();
    } catch (e) {
      console.warn("[useElfsight] containerObserver.disconnect error:", e);
    }
    containerObserver = null;
  }
  const parent = getContainer();
  if (isQueryable(parent) && parent.__elfsightContainerObs) {
    try {
      parent.__elfsightContainerObs.disconnect();
    } catch (e) {
      console.warn("[useElfsight] parent.__elfsightContainerObs error:", e);
    }
    parent.__elfsightContainerObs = null;
  }
  if (documentObserver) {
    try {
      documentObserver.disconnect();
    } catch (e) {
      console.warn("[useElfsight] documentObserver.disconnect error:", e);
    }
    documentObserver = null;
  }
  // limpa observers dos anchors atuais
  try {
    const scope = getContainer() || document;
    scope.querySelectorAll("a").forEach((a) => {
      if (a.__elfsightObserver) {
        try {
          a.__elfsightObserver.disconnect();
        } catch (e) {
          console.warn("[useElfsight] anchor observer disconnect error:", e);
        }
        a.__elfsightObserver = null;
      }
    });
  } catch (e) {
    console.warn("[useElfsight] cleanup anchors error:", e);
  }
}

function initWidgets() {
  try {
    window.elfsightWidgets?.init?.();
    log("elfsight init called");
  } catch (e) {
    console.debug("[useElfsight] initWidgets error:", e);
  }
}

function buildWidget() {
  if (typeof window === "undefined") return;
  const SRC = "https://elfsightcdn.com/platform.js";
  const existing = document.querySelector(`script[src="${SRC}"]`);
  if (!existing) {
    const s = document.createElement("script");
    s.src = SRC;
    s.async = true;
    s.addEventListener("load", initWidgets, { once: true });
    document.body.appendChild(s);
  } else {
    initWidgets();
  }
}

/* ======= lifecycle ======= */
onMounted(async () => {
  // garante que o ref do container esteja pronto
  await nextTick();
  attachToElement(elfsightContainer);

  // Materialize Parallax (defensivo)
  try {
    if (M?.Parallax) {
      const elems = document.querySelectorAll(".parallax");
      if (elems.length) M.Parallax.init(elems);
    }
  } catch (e) {
    console.warn("[home] Parallax init error:", e);
  }

  // monta widget e instala observadores
  buildWidget();
  attachContainerObserver();
  attachDocumentFallbackObserver();
  startWatcher(); // polling só pra descoberta inicial tardia
});

onBeforeUnmount(() => {
  try {
    if (M?.Parallax?.getInstance) {
      document.querySelectorAll(".parallax").forEach((el) => {
        const inst = M.Parallax.getInstance(el);
        inst?.destroy?.();
      });
    }
  } catch (e) {
    console.warn("[home] Parallax destroy error:", e);
  }
  stopWatcher();
  cleanupObservers();
});
</script>

<template>
  <main class="home">
    <section class="banner">
      <div class="container">
        <div class="content__row">
          <div class="column-desktop--8 column--4">
            <img
              class="diamond"
              src="@/assets/images/png/white-diamond.png"
              alt="Diamante branco - INDFER"
              width="120"
              height="120"
              loading="lazy"
            />

            <h1>
              TECNOLOGIA EM<br />
              <strong>FERRAMENTAS DIAMANTADAS</strong>
            </h1>

            <p>
              Ferramentas diamantadas de alta performance: soluções
              desenvolvidas com tecnologia própria e controle de qualidade
              rigoroso —
              <strong>mais eficiência e menor custo por peça.</strong>
            </p>

            <CustomButton :link="{ name: 'about' }" type="secondary"
              >SAIBA MAIS</CustomButton
            >
          </div>
          <div class="column-desktop--4 column--4"></div>
        </div>
      </div>
    </section>

    <section class="about">
      <div class="container">
        <div class="content__row">
          <div class="column-desktop--6 column--4">
            <img
              width="410"
              height="300"
              src="@/assets/images/webp/about-diamond.webp"
              title="INDFER - sobre a empresa"
              alt="Trabalhador dentro de uma máscara de diamante"
            />
          </div>
          <div class="column-desktop--1 only-desktop"></div>
          <div class="column-desktop--5 column--4">
            <div class="category-block">
              <h3 class="category-title">SOBRE</h3>
              <h2 class="category-calling text-blue">
                <strong>INOVAÇÃO & RENOVAÇÃO</strong>
                que garantem nossa
                <strong class="text-orange">qualidade</strong>
              </h2>
              <CustomButton :link="{ name: 'about' }"
                >CONHEÇA NOSSA HISTÓRIA</CustomButton
              >
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="our-products">
      <div class="center-statement">
        <h2 class="center-statement__title text-white">NOSSOS PRODUTOS</h2>
        <p class="center-statement__text text-white">
          Soluções especializadas para metalurgia e usinagem de alianças com
          precisão e acabamento superior.
        </p>
      </div>

      <ul class="our-products__products_gallery">
        <li class="our-products__products_gallery__item">
          <img
            src="@/assets/images/webp/our_products-metallurgy.webp"
            title="Nossos produtos - Metalurgia"
            alt="Nossos produtos - metalurgia"
          />
          <h4>METALURGIA</h4>
          <CustomButton link="produtos/#metalurgia">VER PRODUTOS</CustomButton>
        </li>

        <li v-if="false" class="our-products__products_gallery__item">
          <img
            src="@/assets/images/webp/our_products-civil_building.webp"
            title="Nossos produtos - Construção Civil"
            alt="Nossos produtos - Construção Civil"
          />
          <h4>CONSTRUÇÃO CIVIL</h4>
          <CustomButton link="produtos/#construcao-civil"
            >VER PRODUTOS</CustomButton
          >
        </li>

        <li class="our-products__products_gallery__item">
          <img
            src="@/assets/images/webp/our_products-gold_tools.webp"
            title="Nossos produtos - Ferramentas ouro"
            alt="Nossos produtos - Ferramentas ouro"
          />
          <h4>FERRAMENTAS PARA USINAGEM DE ALIANÇAS</h4>
          <CustomButton link="produtos/#ferramentas-ouro"
            >VER PRODUTOS</CustomButton
          >
        </li>
      </ul>

      <div class="content__row justify-content--center">
        <CustomButton :link="{ name: 'products' }"
          >VER TODOS OS PRODUTOS</CustomButton
        >
      </div>
    </section>

    <section class="counter">
      <div class="container">
        <div class="counter__list content__row">
          <div class="counter__list__item column-desktop--4 column--4">
            <Counter :number="50000" />
            <p>FERRAMENTAS DESENVOLVIDAS</p>
          </div>
          <div class="counter__list__item column-desktop--4 column--4">
            <Counter :number="yearsExperience" />
            <p>ANOS DE EXPERIÊNCIA</p>
          </div>
          <div class="counter__list__item column-desktop--4 column--4">
            <Counter :number="350" />
            <p>CLIENTES ATENDIDOS</p>
          </div>
        </div>
      </div>
    </section>

    <section class="testimonials">
      <div class="center-statement">
        <h2 class="center-statement__title text-blue">
          O QUE NOSSOS CLIENTES DIZEM
        </h2>

        <p class="center-statement__text">
          Depoimentos extraídos de avaliações reais feitas no
          <strong>Google Avaliações</strong>
        </p>
      </div>

      <div class="container">
        <div v-if="false" class="content__row">
          <div class="column-desktop--4 column--4">
            <div class="testimonials__item">
              <div class="testimonials__item__box">
                <p>
                  Estou muito satisfeito com a experiência que tive com a
                  Indfer. A ferramenta diamantada que recebi tem uma qualidade
                  excelente e chegou até mim antes do prazo, o que foi uma
                  surpresa muito boa. O atendimento também foi ótimo! A Silmara
                  foi super atenciosa, me explicou tudo o que eu precisava saber
                  sobre as questões técnicas dos diamantes. Isso fez toda a
                  diferença para que eu me sentisse mais seguro na compra. Com
                  certeza recomendo a Indfer para quem busca produtos de
                  qualidade e um atendimento de primeira!
                </p>
                <Rating />
              </div>
              <div class="testimonials__item__client">
                <h4>Alex R Silva</h4>
                <p>Diretor</p>
              </div>
            </div>
          </div>

          <div class="column-desktop--4 column--4">
            <div class="testimonials__item">
              <div class="testimonials__item__box">
                <p>Ótimo atendimento e qualidade!</p>
                <Rating />
              </div>
              <div class="testimonials__item__client">
                <h4>Flávia Simões</h4>
                <p>Fornecedor</p>
              </div>
            </div>
          </div>

          <div class="column-desktop--4 column--4">
            <div class="testimonials__item">
              <div class="testimonials__item__box">
                <p>
                  Sempre fui muito bem atendido pela equipe Indifer , qualidade
                  nos produtos , prazo sempre em dia , top de mais.
                </p>
                <Rating />
              </div>
              <div class="testimonials__item__client">
                <h4>Dória Piratuba</h4>
                <p>Comprador</p>
              </div>
            </div>
          </div>
        </div>

        <div class="content__row">
          <div
            ref="elfsightContainer"
            class="elfsight-app-f35d0164-0588-452d-8397-5813e046bb15"
            data-elfsight-app-lazy
          ></div>
        </div>
      </div>
    </section>

    <CatalogSection />
    <ContactSection />
  </main>
</template>

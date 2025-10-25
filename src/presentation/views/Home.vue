<template>
  <main class="home">
    <section class="banner">
      <div class="container">
        <div class="content__row">
          <div class="column-desktop--8 column--4">
            
            <img class="diamond" src="@/assets/images/png/white-diamond.png" alt="">

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

            <Button :link="{ name: 'about' }" type="secondary"
              >SAIBA MAIS</Button
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
              <Button :link="{ name: 'about' }">CONHEÇA NOSSA HISTÓRIA</Button>
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
          <Button link="produtos/#metalugia">VER PRODUTOS</Button>
        </li>

        <li v-if="false" class="our-products__products_gallery__item">
          <img
            src="@/assets/images/webp/our_products-civil_building.webp"
            title="Nossos produtos - Construção Civil"
            alt="Nossos produtos - Construção Civil"
          />
          <h4>CONSTRUÇÃO CIVIL</h4>
          <Button link="produtos/#construcao-civil">VER PRODUTOS</Button>
        </li>

        <li class="our-products__products_gallery__item">
          <img
            src="@/assets/images/webp/our_products-gold_tools.webp"
            title="Nossos produtos - Ferramentas ouro"
            alt="Nossos produtos - Ferramentas ouro"
          />
          <h4>FERRAMENTAS PARA USINAGEM DE ALIANÇAS</h4>
          <Button link="produtos/#ferramentas-ouro">VER PRODUTOS</Button>
        </li>
      </ul>

      <div class="content__row justify-content--center">
        <Button :link="{ name: 'products' }">VER TODOS OS PRODUTOS</Button>
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

          <div class="column-desktop--4 column--4">
            <div class="testimonials__item">
              <div class="testimonials__item__box">
                <p>
                  Comprei a primeira vez e superou as expectativas, produtos de
                  alta qualidade, profissionais bem qualificados, voltarei a
                  comprar.
                </p>
                <Rating />
              </div>
              <div class="testimonials__item__client">
                <h4>Sérgio Nenevê</h4>
                <p>Oficina</p>
              </div>
            </div>
          </div>

          <div class="column-desktop--4 column--4">
            <div class="testimonials__item">
              <div class="testimonials__item__box">
                <p>
                  Sempre que preciso...eles me atenderam cerretamente....com os
                  produtos e prazos..
                </p>
                <Rating />
              </div>
              <div class="testimonials__item__client">
                <h4>Antônio Claudir Pereira de Oliveira</h4>
                <p>Parceiro</p>
              </div>
            </div>
          </div>

          <div class="column-desktop--4 column--4">
            <div class="testimonials__item">
              <div class="testimonials__item__box">
                <p>
                  Produtos de qualidade, estão sempre prontos a modificação de
                  alguma peça e entregam sempre antes do prazo!
                </p>
                <Rating />
              </div>
              <div class="testimonials__item__client">
                <h4>Marcos Palma Pinheiro</h4>
                <p>Cliente</p>
              </div>
            </div>
          </div>
        </div>

        <div class="content__row">
          <div
            class="elfsight-app-f35d0164-0588-452d-8397-5813e046bb15"
            data-elfsight-app-lazy
          ></div>
        </div>
      </div>
    </section>

    <CatalogSection></CatalogSection>

    <ContactSection></ContactSection>
  </main>
</template>
<script>
import M from "materialize-css";

import Button from "@/presentation/components/Button.vue";
import Counter from "@/presentation/components/Counter.vue";
import Rating from "@/presentation/components/Rating.vue";
import ContactSection from "@/presentation/modules/ContactSection.vue";
import CatalogSection from "@/presentation/modules/CatalogSection.vue";

export default {
  name: "app-home",

  data() {
    return {
      elfsightSelector: ".elfsight-app-f35d0164-0588-452d-8397-5813e046bb15",
      elfsightTextMatch: "Free Google Reviews widget",
      elfsightIntervalId: null,
      elfsightIntervalMs: 300,
      elfsightMaxTries: 60,
      elfsightTries: 0,
    };
  },

  computed: {
    yearsExperience() {
      return new Date().getFullYear() - 1993;
    },
  },

  methods: {
    getElfsightParent() {
      return document.querySelector(this.elfsightSelector);
    },

    getElfsightAnchor(root = null) {
      const parent = this.getElfsightParent();
      if (!parent) return null;
      const scope = root instanceof Element ? root : parent;
      const anchors = scope.querySelectorAll(
        "a[href^='https://elfsight.com/google-reviews-widget']"
      );
      for (const a of anchors) {
        if ((a.textContent || "").includes(this.elfsightTextMatch)) return a;
      }
      return null;
    },

    // aplica inline !important e só quando necessário
    enforceHiddenStyles(anchor) {
      if (!anchor) return false;

      // evita reentrância do observer
      if (anchor.__hiding) return true;
      anchor.__hiding = true;

      const setImp = (prop, value) =>
        anchor.style.setProperty(prop, value, "important");

      // cheque rápido para evitar writes desnecessários
      const need =
        anchor.style.display !== "none" ||
        anchor.style.visibility !== "hidden" ||
        anchor.style.opacity !== "0" ||
        anchor.style.pointerEvents !== "none" ||
        anchor.getAttribute("aria-hidden") !== "true" ||
        anchor.tabIndex !== -1;

      if (need) {
        setImp("display", "none");
        setImp("visibility", "hidden");
        setImp("opacity", "0");
        setImp("pointer-events", "none");
        // a seguir ajudam a não “pular” na tela se o widget mover o nó
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
      }

      anchor.__hiding = false;
      return true;
    },

    attachAnchorObserver(anchor) {
      if (!anchor || anchor.__elfsightObserver) return;

      const obs = new MutationObserver((muts) => {
        // se fomos nós que mexemos, ignorar
        if (anchor.__hiding) return;

        // só reagir quando style mudar de fato
        const styleChanged = muts.some(
          (m) => m.type === "attributes" && m.attributeName === "style"
        );
        if (styleChanged) {
          this.enforceHiddenStyles(anchor);
        }
      });

      // ⚠️ observe apenas style pra não criar loops por alterações internas
      obs.observe(anchor, {
        attributes: true,
        attributeFilter: ["style"],
      });

      anchor.__elfsightObserver = obs;
    },

    // observa o CONTAINER para capturar recriações do <a>
    attachContainerObserver() {
      const parent = this.getElfsightParent();
      if (!parent || parent.__elfsightContainerObs) return;

      const containerObs = new MutationObserver((muts) => {
        for (const m of muts) {
          // novos nós?
          for (const node of m.addedNodes || []) {
            if (!(node instanceof Element)) continue;

            if (
              node.tagName === "A" &&
              node.href?.startsWith(
                "https://elfsight.com/google-reviews-widget"
              )
            ) {
              // achou direto
              this.enforceHiddenStyles(node);
              this.attachAnchorObserver(node);
            } else {
              // ou procura dentro
              const a = this.getElfsightAnchor(node);
              if (a) {
                this.enforceHiddenStyles(a);
                this.attachAnchorObserver(a);
              }
            }
          }
        }
      });

      containerObs.observe(parent, {
        childList: true,
        subtree: true,
      });

      parent.__elfsightContainerObs = containerObs;

      // primeira passada
      const a = this.getElfsightAnchor(parent);
      if (a) {
        this.enforceHiddenStyles(a);
        this.attachAnchorObserver(a);
      }
    },

    hideElfsightAnchorOnceFound() {
      const anchor = this.getElfsightAnchor();
      if (!anchor) return false;

      this.enforceHiddenStyles(anchor);
      this.attachAnchorObserver(anchor);

      // *** em vez de parar aqui, já conecta o observer do container
      this.attachContainerObserver();
      this.stopElfsightAnchorWatcher();
      return true;
    },

    tickElfsightAnchorWatcher() {
      this.elfsightTries += 1;
      const ok = this.hideElfsightAnchorOnceFound();
      if (ok) return;

      if (this.elfsightTries >= this.elfsightMaxTries) {
        this.stopElfsightAnchorWatcher();
      }
    },

    startElfsightAnchorWatcher() {
      if (this.elfsightIntervalId) return;

      if (this.hideElfsightAnchorOnceFound()) return;

      this.elfsightTries = 0;
      this.elfsightIntervalId = setInterval(
        this.tickElfsightAnchorWatcher,
        this.elfsightIntervalMs
      );
    },

    stopElfsightAnchorWatcher() {
      if (this.elfsightIntervalId) {
        clearInterval(this.elfsightIntervalId);
        this.elfsightIntervalId = null;
      }
    },

    initElfsightWidgets() {
      if (window.elfsightWidgets?.init) window.elfsightWidgets.init();
    },

    buildGoogleReviewsWidget() {
      if (typeof window === "undefined") return;

      const SRC = "https://elfsightcdn.com/platform.js";
      const existing = document.querySelector(`script[src="${SRC}"]`);

      if (!existing) {
        const s = document.createElement("script");
        s.src = SRC;
        s.async = true;
        s.onload = this.initElfsightWidgets;
        document.body.appendChild(s);
      } else {
        this.initElfsightWidgets();
      }

      // inicia a descoberta do anchor
      this.startElfsightAnchorWatcher();
    },
  },

  mounted() {
    M.Parallax.init(this.$refs.parallax);
    this.buildGoogleReviewsWidget();
  },

  unmounted() {
    this.stopElfsightAnchorWatcher();
  },

  components: {
    Button,
    Counter,
    Rating,
    ContactSection,
    CatalogSection,
  },
};
</script>

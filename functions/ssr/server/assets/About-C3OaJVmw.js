import { ref, onMounted, onBeforeUnmount, withCtx, createTextVNode, createVNode, useSSRContext } from "vue";
import { ssrRenderAttr, ssrRenderComponent } from "vue/server-renderer";
import { C as ContactSection } from "./ContactSection-BFbD_bdW.js";
import { _ as _sfc_main$1 } from "./BackDownAnchor-nW5uQA_p.js";
import { _ as _sfc_main$2, a as Modal, b as _sfc_main$3 } from "../entry-server.js";
import { u as usePageMeta } from "./usePageMeta-CeEXd9ar.js";
import "@vue/server-renderer";
import "vue-router";
import "emailjs-com";
import "vue-the-mask";
import "@vueuse/head";
import "@prismicio/vue";
import "@fortawesome/vue-fontawesome";
import "@fortawesome/fontawesome-svg-core";
import "@fortawesome/free-solid-svg-icons";
import "@fortawesome/free-brands-svg-icons";
import "@fortawesome/free-regular-svg-icons";
const _imports_0 = "/assets/about-our_focus-D-CQtsah.webp";
const _imports_1 = "/assets/about-our_values-BhTRtXG-.webp";
const _imports_2 = "/assets/about-ethics_conduct_code-BXTnSlFW.webp";
const __default__ = {
  name: "AboutView"
};
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __ssrInlineRender: true,
  setup(__props) {
    const contactFormModal = ref(null);
    const ourValuesSectionTop = ref(0);
    function verifyScrollToStartCounter() {
      const currentTop = window.scrollY || document.documentElement.scrollTop;
      if (currentTop >= ourValuesSectionTop.value) {
        const el = document.getElementsByClassName("our-history__timeline")[0];
        if (el) el.classList.add("animate");
        window.removeEventListener("scroll", verifyScrollToStartCounter);
      }
    }
    function showModal(refName) {
      const map = { contactFormModal };
      const r = map[refName];
      if (r && r.value && typeof r.value.showModal === "function") {
        r.value.showModal(refName);
      }
    }
    onMounted(() => {
      const ourValuesSection = document.getElementsByClassName("our-values")[0];
      if (ourValuesSection) {
        ourValuesSectionTop.value = ourValuesSection.offsetTop;
        window.addEventListener("scroll", verifyScrollToStartCounter, {
          passive: true
        });
      }
    });
    onBeforeUnmount(() => {
      window.removeEventListener("scroll", verifyScrollToStartCounter);
    });
    usePageMeta({ title: "Sobre a INDFER - Ferramentas diamantadas", description: "Conheça a INDFER: inovação e qualidade em ferramentas diamantadas desde 1993." });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><section class="our-focus"><div class="container"><div class="content__row content__row--align-center"><div class="column-desktop--6 column--4"><h1> NOSSO <div class="our-focus__highlight"><span>FOCO</span></div></h1><div class="category-block"><h2 class="category-calling text-blue"><strong>INOVAÇÃO &amp; RENOVAÇÃO</strong><br> que garantem <br> nossa <strong class="text-orange">qualidade</strong></h2></div></div><div class="column-desktop--6 column--4"><p> Nossa empresa surgiu em 1993 e se tornou independente a partir do ano de 2008, tornando-se conhecida como <strong class="text-blue">INDFER</strong>. </p><p> Atuamos no ramo de ferramentas diamantadas para atender diversos segmentos, como <strong>metalurgia e ferramentas para tornos de alianças</strong>, entre outros. </p><p> Temos o objetivo de promover uma busca contínua pelo melhor entendimento das necessidades de cada cliente, para que, assim, possamos desenvolver as melhores ferramentas e produtos mais adequados para cada aplicação, sempre dando enfoque em inovar as atividades industriais. </p><p><strong>Nosso foco</strong> é melhorar processos e aumentar a produtividade no desenvolvimento de nossos produtos e serviços através da <strong>inovação</strong> e <strong>renovação</strong> que garantem nossa <strong>qualidade</strong>. </p></div></div><div class="content__row"><div class="our-focus__media"><span class="our-focus__media__shape our-focus__media__shape--colored"></span><span class="our-focus__media__shape our-focus__media__shape--grey"></span><span class="our-focus__media__shape our-focus__media__shape--light"></span><img${ssrRenderAttr("src", _imports_0)} title="Homem trabalhador represetando o foco da empresa" alt="Nosso foco"></div></div><div class="our-focus__misson-vision"><div class="content__row"><div class="column-desktop--4 column--4"><div class="our-focus__misson-vision__box our-focus__misson-vision__box--mission"><h3>MISSÃO</h3><p> Fabricar nossos produtos com qualidade, eficiência, buscando permanentemente a melhoria contínua de nossos processos para superar as expectativas de nossos clientes. </p></div></div><div class="column-desktop--1 only-desktop"></div><div class="column-desktop--4 column--4"><div class="our-focus__misson-vision__box our-focus__misson-vision__box--vision"><h3>VISÃO</h3><p> Ser ético, trabalhando na obtenção de melhores resultados, conquistando nossos clientes na qualidade dos processos. </p></div></div><div class="column-desktop--3 only-desktop"></div></div></div></div></section><section class="our-values"><div class="container"><div class="content__row content__row--align-center"><div class="column-desktop--6 column--4"><div class="our-values__media"><img${ssrRenderAttr("src", _imports_1)} title="Nossos valores" alt="Nossos valores"></div></div><div class="column-desktop--1 only-desktop"></div><div class="column-desktop--5 column--4"><div class="category-block"><h3 class="category-title">VALORES</h3></div><ul class="our-values__list"><li class="our-values__list__item"><span class="icon-diamond"></span><span>Valorizar a <strong>confiança</strong>;</span></li><li class="our-values__list__item"><span class="icon-diamond"></span><span>Ter <strong>responsabilidade</strong>;</span></li><li class="our-values__list__item"><span class="icon-diamond"></span><span>Ter <strong>agilidade</strong>;</span></li><li class="our-values__list__item"><span class="icon-diamond"></span><span>Buscar <strong>credibilidade</strong>;</span></li><li class="our-values__list__item"><span class="icon-diamond"></span><span>Contribuir para uma sociedade mais <strong>justa</strong>;</span></li></ul>`);
      _push(ssrRenderComponent(_sfc_main$1, { type: "secondary-orange" }, {
        icon: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) ;
          else {
            return [];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` CONHEÇA NOSSA HISTÓRIA `);
          } else {
            return [
              createTextVNode(" CONHEÇA NOSSA HISTÓRIA ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></section><section class="our-history"><div class="container"><div class="content-title"><span class="content-title__subtitle">CONHEÇA</span><h2 class="content-title__title">NOSSA HISTÓRIA</h2></div><div class="our-history__timeline"><div class="our-history__timeline__row"><div class="our-history__timeline__item"><div class="our-history__timeline__item__box our-history__timeline__item__box--1"><h4>Início de um sonho</h4><p><strong>José Candido Filho</strong> iniciou no ramo de Ferramentas Diamantadas com lapidação de pedras e foi adquirindo conhecimento e experiência no decorrer de sua vida. </p></div><div class="our-history__timeline__item__date our-history__timeline__item__date--1"><span class="icon-diamond"></span><p>1960 - 1970</p></div></div><div class="our-history__timeline__item"><div class="our-history__timeline__item__box our-history__timeline__item__box--2"><h4>Primeiros anos</h4><p> Fundou a empresa Dimafer Ferramentas Especiais Diamantadas, onde iniciou a ramificação de seus familiares para que dessem continuidade em sua experiência e conhecimento. </p></div><div class="our-history__timeline__item__date our-history__timeline__item__date--2"><span class="icon-diamond"></span><p>1985 - 2008</p></div></div></div><div class="our-history__timeline__row"><div class="our-history__timeline__item our-history__timeline__item--bottom"><div class="our-history__timeline__item__box our-history__timeline__item__box--3"><h4>Primeira empresa</h4><p> Tornou-se sócio proprietário e fundador da sua <strong>primeira empresa</strong> no ramo Ferramentas Diamantadas. </p></div><div class="our-history__timeline__item__date our-history__timeline__item__date--3"><span class="icon-diamond"></span><p>1975 - 1984</p></div></div><div class="our-history__timeline__item our-history__timeline__item--bottom"><div class="our-history__timeline__item__box our-history__timeline__item__box--4 our-history__timeline__item__box--highlight"><h4>Sonho de independência</h4><p> Nasce a empresa INDFER Industria de Ferramentas Diamantadas, fundada pelo Sr. José Candido e seus familiares. Com responsabilidade, conhecimento, inovação e qualidade, a empresa busca cuidar de suas principais joias: <strong>seus clientes</strong>. </p></div><div class="our-history__timeline__item__date our-history__timeline__item__date--4"><span class="icon-diamond"></span><p>2008 - ATUALMENTE</p></div></div></div></div></div></section><section class="ethics-conduct-code"><div class="container"><div class="ethics-conduct-code__content"><div class="content-title content-title--white"><span class="content-title__subtitle orange text-white">ECOLOGICAMENTE</span><h2 class="content-title__title">CORRETOS</h2></div><p> Seguindo a tendência mundial, nossos equipamentos são projetados e produzidos dentro do melhor padrão que preza pelo comprometimento com o meio ambiente, tendo na composição os principais materiaus que, além de não agreditar o meio ambiente, contribuem para a sua melhoria. </p><p>Entre em contato conosco para mais informações.</p>`);
      _push(ssrRenderComponent(_sfc_main$2, {
        onClick: ($event) => showModal("contactFormModal"),
        type: "secondary"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`SOLICITE UM ORÇAMENTO`);
          } else {
            return [
              createTextVNode("SOLICITE UM ORÇAMENTO")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="ethics-conduct-code__media"><img${ssrRenderAttr("src", _imports_2)} title="Código de ética e conduta" alt="Código de ética e conduta"></div></div>`);
      _push(ssrRenderComponent(Modal, {
        isContactForm: true,
        id: "contact-form-modal",
        ref_key: "contactFormModal",
        ref: contactFormModal
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="category-block"${_scopeId}><h3 class="category-title"${_scopeId}>SOLICITE UM ORÇAMENTO</h3></div>`);
            _push2(ssrRenderComponent(_sfc_main$3, { formId: "about-page-contact-form" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode("div", { class: "category-block" }, [
                createVNode("h3", { class: "category-title" }, "SOLICITE UM ORÇAMENTO")
              ]),
              createVNode(_sfc_main$3, { formId: "about-page-contact-form" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</section>`);
      _push(ssrRenderComponent(ContactSection, null, null, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/presentation/views/About.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};

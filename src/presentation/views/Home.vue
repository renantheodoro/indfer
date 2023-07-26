<template>
  <main class="home">
    <section class="banner">
      <div class="container">
        <div class="content__row">
          <div class="column-desktop--9 column--4">
            <h1>
              TECNOLOGIA EM<br />
              FERRAMENTAS DIAMANTADAS
            </h1>
            <p>
              Soluções focadas em construção civil, metalurgia, marmoraria e
              ferramentas ouro. <br />Clique e saiba mais!
            </p>

            <Button :link="{ name: 'about' }" type="secondary"
              >SAIBA MAIS</Button
            >

          </div>
          <div class="column-desktop--3 column--4"></div>
        </div>
      </div>
    </section>

    <section class="about">
      <div class="container">
        <div class="content__row flex-v-center">
          <div class="column-desktop--6 column--4">
            <!-- <img
              width="410"
              height="300"
              src="@/assets/images/webp/about-diamond.webp"
              title="INDFER - sobre a empresa"
              alt="Trabalhador dentro de uma máscara de diamante"
            /> -->
            <img src="@/assets/images/png/about-diamond_2.png" alt="" />
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
      </div>

      <ul class="our-products__products_gallery">
        <li class="our-products__products_gallery__item">
          <img
            src="@/assets/images/webp/our_products-metallurgy.webp"
            title="Nossos produtos - Metalurgia"
            alt="Nossos produtos - metalurgia"
          />
          <h4>{{ $products.productNames.metallurgy }}</h4>
          <Button link="produtos/#metalugia">VER PRODUTOS</Button>
        </li>

        <li class="our-products__products_gallery__item">
          <img
            src="@/assets/images/webp/our_products-civil_building.webp"
            title="Nossos produtos - Construção Civil"
            alt="Nossos produtos - Construção Civil"
          />
          <h4>{{ $products.productNames.civilBuilding }}</h4>
          <Button link="produtos/#construcao-civil">VER PRODUTOS</Button>
        </li>

        <li class="our-products__products_gallery__item">
          <img
            src="@/assets/images/webp/our_products-gold_tools.webp"
            title="Nossos produtos - Ferramentas ouro"
            alt="Nossos produtos - Ferramentas ouro"
          />
          <h4>{{ $products.productNames.goldTools }}</h4>
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
            <Counter :number="40" />
            <p>DE EXPERIÊNCIA</p>
          </div>
          <div class="counter__list__item column-desktop--4 column--4">
            <Counter :number="200" />
            <p>CLIENTES ATENDIDOS</p>
          </div>
        </div>
      </div>
    </section>

    <!-- <section class="testimonials">
      <div class="center-statement">
        <h2 class="center-statement__title text-blue">
          O QUE NOSSOS CLIENTES DIZEM
        </h2>

        <p class="center-statement__text">
          Veja alguns depoimentos de nossos melhores clientes
        </p>
      </div>

      <div class="container">
        <div class="content__row">
          <div class="column-desktop--4 column--4">
            <div class="testimonials__item">
              <div class="testimonials__item__box">
                <p>
                  This is due to their excellent service, competitive pricing
                  and customer support. It’s throughly refresing to get such a
                  personal touch.
                </p>
                <Rating />
              </div>
              <div class="testimonials__item__client">
                <h4>Mariana Camargo</h4>
                <p>Diretora</p>
              </div>
            </div>
          </div>
          <div class="column-desktop--4 column--4">
            <div class="testimonials__item">
              <div class="testimonials__item__box">
                <p>
                  This is due to their excellent service, competitive pricing
                  and customer support. It’s throughly refresing to get such a
                  personal touch.
                </p>
                <Rating />
              </div>
              <div class="testimonials__item__client">
                <h4>Mariana Camargo</h4>
                <p>Diretora</p>
              </div>
            </div>
          </div>
          <div class="column-desktop--4 column--4">
            <div class="testimonials__item">
              <div class="testimonials__item__box">
                <p>
                  This is due to their excellent service, competitive pricing
                  and customer support. It’s throughly refresing to get such a
                  personal touch.
                </p>
                <Rating />
              </div>
              <div class="testimonials__item__client">
                <h4>Mariana Camargo</h4>
                <p>Diretora</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section> -->

    <section class="catalog">
      <div class="parallax-container">
        <div class="parallax" ref="parallax">
          <!-- src="@/assets/images/webp/catalog-bg.webp" -->
          <img
            width="1400"
            height="1080"
            title="Fundo da seção catálogo - INDFER"
            alt="Fundo da seção catálogo - INDFER"
            src="@/assets/images/jpg/catalog-bg.jpeg"
          />

          <div class="container">
            <div class="center-statement">
              <h2 class="center-statement__title text-white">
                BAIXE NOSSO CATÁLOGO
              </h2>

              <p class="center-statement__text text-white">
                Acesse todos os nossos catálogos e baixe gratuitamente para
                saber mais detalhes de cada produto.
              </p>

              <div class="content__row justify-content--center">
                <Button :link="{ name: 'catalog' }" type="secondary"
                  >ACESSAR CATÁLOGO</Button
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <ContactSection></ContactSection>
  </main>
</template>
<script>
import M from "materialize-css";

import Button from "@/presentation/components/Button.vue";
import Counter from "@/presentation/components/Counter.vue";
// import Rating from "@/presentation/components/Rating.vue";
import ContactSection from "@/presentation/modules/ContactSection.vue";

export default {
  name: "app-home",

  mounted() {
    M.Parallax.init(this.$refs.parallax);
  },

  components: {
    Button,
    Counter,
    // Rating,
    ContactSection,
  },
};
</script>

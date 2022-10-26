<template>
  <main class="home">
    <section class="banner">
      <div class="container">
        <div class="content__row">
          <div class="column-desktop--8 column--4">
            <h1>
              TECNOLOGIA EM<br />
              FERRAMENTAS DIAMANTADAS
            </h1>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              euismod bibendum laoreet. Proin gravida dolor sit amet lacus
              accumsan et viverra justo commodo.
            </p>

            <Button :link="{name: 'about'}" type="secondary">SAIBA MAIS</Button>
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
              src="@/assets/images/about-diamond.png"
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
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                euismod bibendum laoreet. Proin gravida dolor sit amet lacus
                accumsan et viverra justo commodo.
              </p>
              <Button :link="{name: 'about'}">CONHEÇA NOSSA HISTÓRIA</Button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="our-products">
      <div class="center-statement">
        <h2 class="center-statement__title text-white">NOSSOS PRODUTOS</h2>

        <p class="center-statement__text text-white">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>

      <ul class="our-products__products_gallery">
        <li class="our-products__products_gallery__item">
          <img
            src="@/assets/images/our_products-metallurgy.jpg"
            title="Nossos produtos - Metalurgia"
            alt="Nossos produtos - metalurgia"
          />
          <h4>METALURGIA</h4>
          <Button link="produtos/#metalugia">VER PRODUTOS</Button>
        </li>

        <li class="our-products__products_gallery__item">
          <img
            src="@/assets/images/our_products-civil_building.jpg"
            title="Nossos produtos - Construção Civil"
            alt="Nossos produtos - Construção Civil"
          />
          <h4>CONSTRUÇÃO CIVIL</h4>
          <Button link="produtos/#construcao-civil">VER PRODUTOS</Button>
        </li>

        <li class="our-products__products_gallery__item">
          <img
            src="@/assets/images/our_products-gold_tools.jpg"
            title="Nossos produtos - Ferramentas ouro"
            alt="Nossos produtos - Ferramentas ouro"
          />
          <h4>FERRAMENTAS OURO</h4>
          <Button link="produtos/#ferramentas-ouro">VER PRODUTOS</Button>
        </li>
      </ul>

      <div class="content__row justify-content--center">
        <Button :link="{name: 'products'}">VER TODOS OS PRODUTOS</Button>
      </div>
    </section>

    <section class="counter">
      <div class="container">
        <div class="counter__list content__row">
          <div class="counter__list__item column-desktop--4 column--4">
            <Counter :number="50000" />
            <p>FERRAMENTAS DESENVOLVIDAS</p>
          </div>
          <div class="counter__list__item column-desktop--4  column--4">
            <Counter :number="40" />
            <p>DE EXPERIÊNCIA</p>
          </div>
          <div class="counter__list__item column-desktop--4  column--4">
            <Counter :number="200" />
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
    </section>

    <section class="catalog">
      <div class="container">
        <div class="center-statement">
          <h2 class="center-statement__title text-white">
            BAIXE NOSSO CATÁLOGO
          </h2>

          <p class="center-statement__text text-white">
            Acesse todos os nossos catálogos e baixe gratuitamente para saber
            mais detalhes de cada produto.
          </p>

          <div class="content__row justify-content--center">
            <Button :link="{name: 'catalog'}" type="secondary">ACESSAR CATÁLOGO</Button>
          </div>
        </div>
      </div>
    </section>

    <ContactSection></ContactSection>
  </main>
</template>
<script>
import Button from "@/presentation/components/Button.vue";
import Counter from "@/presentation/components/Counter.vue";
import Rating from "@/presentation/components/Rating.vue";
import ContactSection from "@/presentation/modules/ContactSection.vue";

export default {
  name: "app-home",
  components: {
    Button,
    Counter,
    Rating,
    ContactSection,
  },
};
</script>

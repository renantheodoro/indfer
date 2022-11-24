<template>
  <footer class="footer">
    <div class="container">
      <div class="content__row">
        <div class="column-desktop--4 column--4">
          <router-link :to="{ name: 'home' }">
            <img
              width="240"
              height="50"
              src="@/assets/images/png/secondary-logo.png"
              alt="INDFER - Ferramentas diamantadas"
              title="INDFER - Ferramentas diamantadas"
              class="footer__logo"
            />
          </router-link>

          <p class="footer__description">
            A melhor base para a qualidade é a <strong>experiência</strong>.
          </p>

          <nav class="footer__pages">
            <ul>
              <li>
                <router-link :to="{ name: 'about' }">SOBRE</router-link>
              </li>
              <li>
                <router-link :to="{ name: 'products' }">PRODUTOS</router-link>
              </li>
              <li>
                <router-link :to="{ name: 'catalog' }">CATÁLOGO</router-link>
              </li>
              <li>
                <router-link :to="{ name: 'contact' }">CONTATO</router-link>
              </li>
            </ul>
          </nav>
        </div>
        <div class="column-desktop--1 only-desktop"></div>
        <div class="column-desktop--3 column--4">
          <h3 class="footer__title">CONTATO</h3>

          <div class="footer__info-set">
            <font-awesome-icon icon="fa-solid fa-phone" />
            <ul class="footer__info-set__block">
              <li><a href="tel:55112083-2079">(11) 2083-2079</a></li>
              <li><a href="tel:551123089270">(11) 2308-9270</a></li>
              <li><a href="tel:551120836505">(11) 2083-6505</a></li>
              <li>
                <a href="tel:5511985800731" class="icon-whatsapp"
                  >(11) 98580-0731
                  <font-awesome-icon icon="fa-brands fa-whatsapp" />
                </a>
              </li>
            </ul>
          </div>

          <div class="footer__info-set">
            <font-awesome-icon icon="fa-solid fa-envelope-open" />
            <ul class="footer__info-set__block">
              <li>
                <a href="mailto:vendas@indfer.com.br">vendas@indfer.com.br</a>
              </li>
              <li>
                <a href="mailto:indfer@indfer.com.br">indfer@indfer.com.br</a>
              </li>
            </ul>
          </div>

          <div class="footer__info-set">
            <font-awesome-icon icon="fa-solid fa-location-dot" />
            <div class="footer__info-set__block">
              <address>
                R. Dom Vilares, 565<br />
                Vila das Mercês<br />
                São Paulo - SP<br />
                CEP: 04160-001
              </address>
            </div>
          </div>
        </div>
        <div class="column-desktop--1 only-desktop"></div>
        <div class="column-desktop--3 column--4">
          <h3 class="footer__title">REDES SOCIAIS</h3>

          <ul class="footer_social-media">
            <li>
              <a href="https://www.facebook.com/indfer/" target="_blank"
                ><font-awesome-icon icon="fa-brands fa-facebook-f"
              /></a>
            </li>
            <li>
              <a href="https://www.instagram.com/indfer10/" target="_blank"
                ><font-awesome-icon icon="fa-brands fa-instagram"
              /></a>
            </li>
            <li>
              <a href="tel:5511985800731"
                ><font-awesome-icon icon="fa-brands fa-whatsapp"
              /></a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="footer__bottom">
      <p>
        Copyright © 2022 • Developed by
        <a href="https://renantheodoro.com/" target="_blank" class="text-orange"
          >Renan Theodoro</a
        >
      </p>
    </div>
  </footer>
</template>
<script>
export default {
  name: "app-footer",
};
</script>

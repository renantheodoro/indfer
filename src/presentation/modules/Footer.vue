<template>
  <footer class="footer">
    <div class="container">
      <div class="content__row">
        <div class="column-desktop--4">
          <a href="/">
            <img
              src="@/assets/images/svg/secondary-logo.svg"
              alt="INDFER - Ferramentas diamantadas"
              title="INDFER - Ferramentas diamantadas"
            />
          </a>

          <p class="footer__description">
            lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis
            sem nibh elit. Duis sed odio sit amet auctror a ornare odio non
            mauris vitae erat in elit
          </p>

          <nav class="footer__pages">
            <ul>
              <li>
                <a href="/">SOBRE</a>
              </li>
              <li>
                <a href="/">PRODUTOS</a>
              </li>
              <li>
                <a href="/">CATÁLOGOS</a>
              </li>
              <li>
                <a href="/">CONTATO</a>
              </li>
            </ul>
          </nav>
        </div>
        <div class="column-desktop--1"></div>
        <div class="column-desktop--3">
          <h3 class="footer__title">CONTATO</h3>

          <div class="footer__info-set">
            <font-awesome-icon icon="fa-solid fa-phone" />
            <ul class="footer__info-set__block">
              <li><a href="">(11) 2083-2079</a></li>
              <li><a href="">(11) 2308-9270</a></li>
              <li><a href="">(11) 2083-6505</a></li>
              <li>
                <a href=""
                  >(11) 98580-0731
                  <font-awesome-icon icon="fa-brands fa-whatsapp" />
                </a>
              </li>
            </ul>
          </div>

          <div class="footer__info-set">
            <font-awesome-icon icon="fa-solid fa-envelope-open" />
            <ul class="footer__info-set__block">
              <li><a href="">vendas@indfer.com.br</a></li>
              <li><a href="">indfer@indfer.com.br</a></li>
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
        <div class="column-desktop--1"></div>
        <div class="column-desktop--3">
          <h3 class="footer__title">REDES SOCIAIS</h3>

          <ul class="footer_social-media">
            <li>
              <a href=""
                ><font-awesome-icon icon="fa-brands fa-facebook-f"
              /></a>
            </li>
            <li>
              <a href=""><font-awesome-icon icon="fa-brands fa-instagram" /></a>
            </li>
            <li>
              <a href=""
                ><font-awesome-icon icon="fa-brands fa-linkedin-in"
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

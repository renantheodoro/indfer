<template>
  <section class="contact-page">
    <div class="container">
      <div class="category-block">
        <h3 class="category-title">ENTRE EM CONTATO</h3>
        <h2 class="category-calling text-blue">
          <strong
            >SOLICITE UM ORÇAMENTO.<br />
            NÃO DEIXE DE NOS CONTATAR</strong
          >
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
          suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
          lacus vel facilisis.
        </p>
      </div>

      <div class="content__row">
        <div class="column-desktop--6">
          <div class="contact-page__center">
            <div class="contact-page__info-set">
              <font-awesome-icon icon="fa-solid fa-phone" />
              <ul class="contact-page__info-set__block">
                <li><a href="tel:55112083-2079">(11) 2083-2079</a></li>
                <li><a href="tel:551123089270">(11) 2308-9270</a></li>
                <li><a href="tel:551120836505">(11) 2083-6505</a></li>
                <li>
                  <a href="tel:5511985800731"
                    >(11) 98580-0731
                    <font-awesome-icon icon="fa-brands fa-whatsapp" />
                  </a>
                </li>
              </ul>
            </div>

            <div class="contact-page__info-set">
              <font-awesome-icon icon="fa-solid fa-envelope-open" />
              <ul class="contact-page__info-set__block">
                <li>
                  <a href="mailto:vendas@indfer.com.br">vendas@indfer.com.br</a>
                </li>
                <li>
                  <a href="mailto:indfer@indfer.com.br">indfer@indfer.com.br</a>
                </li>
              </ul>
            </div>
          </div>

          <div class="contact-page__info-set">
            <font-awesome-icon icon="fa-solid fa-location-dot" />
            <div class="contact-page__info-set__block">
              <address>
                R. Dom Vilares, 565 - Vila das Mercês<br />
                São Paulo - SP<br />
                CEP: 04160-001
              </address>
            </div>
          </div>

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3655.4152809417915!2d-46.61600694897376!3d-23.625294384575852!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5b0d3dfc5523%3A0x987dc0ae75f46e81!2sR.%20Dom%20Vilares%2C%20565%20-%20Vila%20das%20Merces%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2004160-001!5e0!3m2!1spt-BR!2sbr!4v1664551517760!5m2!1spt-BR!2sbr"
            width="600"
            height="450"
            style="border: 0"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div class="column-desktop--1"></div>
        <div class="column-desktop--5">
          <ContactForm></ContactForm>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import ContactForm from "@/presentation/modules/ContactForm.vue";

export default {
  name: "app-contact",

  components: {
    ContactForm
}
};
</script>

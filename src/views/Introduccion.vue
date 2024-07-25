<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.pb-3.pb-md-3
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row.mb-5.align-items-center
      .col-lg-9.mb-4.mb-lg-0
        .row.mb-4(data-aos="fade-down")
          .col-lg-5.pe-lg-0
            .fondo-color-sistema-j.py-3.px-4.px-md-5.h-100.d-flex.align-items-center
              figure
                img.mx-auto(src="@/assets/curso/temas/1.svg",style="max-width: 356px;")
          .col-lg-7.ps-lg-0
            .fondo-color-primario.p-4.h-100.d-flex.align-items-center
              p.mb-0 La manipulación de alimentos es un proceso fundamental que abarca #[b diversas técnicas y métodos destinados a conservar las propiedades físicas y químicas] de los alimentos para garantizar su seguridad y prolongar su vida útil. Este componente ofrece una visión integral sobre las prácticas adecuadas en la manipulación de alimentos, enfocándose en la importancia de mantener altos estándares de higiene y control durante todo el proceso, desde la recepción hasta el consumo final.

        p.mb-0(data-aos="fade") Este componente detalla las prácticas esenciales para la manipulación de alimentos, destacando los siguientes puntos clave:

      .col-lg-3(data-aos="fade-left")
        figure
          img.mx-auto(src="@/assets/curso/temas/2.png",style="max-width: 286px;")

    .row 
      .col-lg-8.mb-4
        .tarjeta-per-1.p-4.mb-4
          img.fig-1(src="@/assets/curso/temas/3.svg")
          img.fig-2(src="@/assets/curso/temas/4.svg")
          .row.align-items-center
            .col-lg-6
              figure.mb-5.mb-lg-0
                img.mx-auto(src="@/assets/curso/temas/5.svg",style="max-width: 345px;")
            .col-lg-6.mb-5.mb-lg-0
              .d-flex.mb-5.mb-lg-4
                .tit-deco.mx-auto.mx-lg-0
                  span 1
              p.mb-0.me-lg-5 El personal encargado de manipular alimentos es crucial en la cadena alimentaria. Su salud y formación higiénica son esenciales para prevenir la contaminación y asegurar la inocuidad de los productos.
        .tarjeta-per-1.p-4
          img.fig-1(src="@/assets/curso/temas/3.svg")
          img.fig-2(src="@/assets/curso/temas/4.svg")
          .row.align-items-center
            .col-lg-6
              figure.mb-5.mb-lg-0
                img.mx-auto(src="@/assets/curso/temas/6.svg",style="max-width: 345px;")
            .col-lg-6.mb-5.mb-lg-0
              .d-flex.mb-5.mb-lg-4
                .tit-deco.mx-auto.mx-lg-0
                  span 2
              p.mb-0.me-lg-5 Se abordan las responsabilidades de los manipuladores, incluyendo exámenes médicos periódicos, formación continua en buenas prácticas de manufactura, y medidas específicas de higiene personal y laboral.
      .col-lg-4.mb-4
        .tarjeta-per-1.p-4.h-100
          img.fig-1.larga(src="@/assets/curso/temas/3.svg")
          img.fig-2(src="@/assets/curso/temas/4.svg")
          .row.align-items-center
            .col-12
              figure.mb-5
                img.mx-auto(src="@/assets/curso/temas/7.svg",style="max-width: 345px;")
            .col-12.mb-5.mb-lg-4
              .d-flex.mb-5
                .tit-deco.mx-auto
                  span 3
              p.mb-0 Se detallan las etapas críticas de recepción, almacenamiento y transporte de alimentos, la importancia de mantener la cadena de frío y evitar la contaminación cruzada, y la implementación del sistema HACCP para asegurar alimentos seguros.

    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>

<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p.mb-5 A continuación, se muestra un mapa conceptual con los elementos más importantes desarrollados en este componente.

    .row.justify-content-center
      .col-lg-10.mb-5
        .fondo-color-sistema-i.borde-25.p-3.py-4
          figure
            img(src="@/assets/curso/temas/sintesis.svg", alt="La síntesis  de Manipulación de Alimentos, que incluye técnicas y procedimientos para conservar la seguridad y calidad. Se abordan responsabilidades y salud del personal manipulador, higiene personal (manos, boca, mucosas, intestino), manejo de refrigerados, registro, almacenamiento y transporte de alimentos con control de temperatura. También se integra el sistema HACCP con análisis de peligros, controles críticos, vigilancia, acciones correctivas y registro.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>

<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Manipulación de alimentos

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5(data-aos="zoom-in-out")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/8.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La manipulación de alimentos son los diferentes métodos que se llevan a cabo al momento de conservar las propiedades físicas y químicas de un alimento para prolongar su vida útil. Esto contribuye a que el alimento sea seguro para las personas que lo van a consumir.

    
    .titulo-decorativo.mt-5(data-aos="fade-left")
      .cont-figura
        img(src="@/assets/curso/temas/img-tit-dec.svg")
      .cont-text 
        h3 ¿Qué es un manipulador de alimentos?
    .fondo-personalizado-1.pos-full.f1
      .fondo-personalizado-1__contenido.pt-5
        .row 
          .col-lg-5.mb-4(data-aos="fade-left")
            .fondo-color-secundario.p-4.p-lg-5.h-100.align-content-center
              p.mb-0 Son todas las personas que de una u otra manera están involucradas de forma directa en la transformación, fabricación, expendio, almacenamiento y distribución de un alimento. De estas personas depende la buena calidad de los productos elaborados y su inocuidad.
          .col-lg-3.mb-4(data-aos="fade-up")
            .fondo-color-primario.h-100.d-flex.align-items-center
              figure
                img.mx-auto(src="@/assets/curso/temas/9.svg",style="max-width: 295px;")
          .col-lg-4.align-self-end.mb-4(data-aos="fade-right")
            figure.mb-4
              img.me-auto(src="@/assets/curso/temas/10.svg",style="max-width: 63px;")
            p.mb-0 Los manipuladores de alimentos tienen la responsabilidad ética de proteger la salud de los consumidores al elaborar los alimentos de acuerdo con lo establecido en la normativa vigente, utilizando técnicas higiénicas para realizar esta labor.
        
        .titulo-decorativo.my-5(data-aos="fade-left")
          .cont-figura
            img(src="@/assets/curso/temas/img-tit-dec.svg")
          .cont-text 
            h3 Personal Manipulador de los Alimentos
        
        p.mb-3(data-aos="fade") El personal manipulador, con relación a su estado de salud, debe cumplir con lo siguiente:

        .fondo-personalizado-1.f2(data-aos="flip-up")
          .fondo-personalizado-1__contenido.py-5
            .bg-white.borde-20.p-4.pt-lg-5
              SlyderA.slider-personalizado-1.pt-lg-2(tipo="b")
                .row.justify-content-center.mb-2.align-items-center
                  .col-lg-6.mb-4.mb-lg-0
                    h4.mb-4 Constancia médica
                    p.mb-0 El personal manipulador de alimentos debe tener una constancia médica que acredite su buen estado de salud para manipular las materias primas y alimentos elaborados. La empresa debe realizar a los operarios un reconocimiento médico general una vez al año.
                  .col-lg-5
                    figure
                      img.mx-auto(src="@/assets/curso/temas/12.png",style="max-width: 424px;")
                .row.justify-content-center.mb-2.align-items-center
                  .col-lg-6.mb-4.mb-lg-0
                    h4.mb-4 Reconocimiento médico periódico
                    p.mb-0 El reconocimiento médico se debe realizar cada que la empresa lo considere necesario, o después de su ausencia del trabajo por síntomas infecciosos que pudieran ser foco de contaminación del alimento que manipula.
                  .col-lg-5
                    figure
                      img.mx-auto(src="@/assets/curso/temas/13.png",style="max-width: 424px;")
                .row.justify-content-center.mb-2.align-items-center
                  .col-lg-6.mb-4.mb-lg-0
                    h4.mb-4 Pruebas de laboratorio
                    p.mb-0 Dependiendo del dictamen médico se deben realizar pruebas de laboratorio, si se consideran necesarias.
                  .col-lg-5
                    figure
                      img.mx-auto(src="@/assets/curso/temas/14.png",style="max-width: 424px;")
                .row.justify-content-center.mb-2.align-items-center
                  .col-lg-6.mb-4.mb-lg-0
                    h4.mb-4 Certificado de aptitud
                    p.mb-0 Después de que el manipulador es valorado por el médico, este debe dar un certificado médico que acredite su aptitud para manipular alimentos.
                  .col-lg-5
                    figure
                      img.mx-auto(src="@/assets/curso/temas/15.png",style="max-width: 424px;")
                .row.justify-content-center.mb-2.align-items-center
                  .col-lg-6.mb-4.mb-lg-0
                    h4.mb-4 Garantía de recuperación
                    p.mb-0 Si al operario le formularon tratamientos médicos, la empresa debe garantizar que el manipulador esté completamente recuperado. Una vez haya terminado con el tratamiento, el médico debe expedir un nuevo certificado que acredite que el trabajador está sano y apto para manipular alimentos.
                  .col-lg-5
                    figure
                      img.mx-auto(src="@/assets/curso/temas/16.png",style="max-width: 424px;")
                .row.justify-content-center.mb-2.align-items-center
                  .col-lg-6.mb-4.mb-lg-0
                    h4.mb-4 Medidas adecuadas
                    p.mb-0 La empresa es responsable de tomar las medidas adecuadas cuando el manipulador padezca de alguna enfermedad que pueda representar riesgos para la salud de los alimentos.
                  .col-lg-5
                    figure
                      img.mx-auto(src="@/assets/curso/temas/17.png",style="max-width: 424px;")
    
    .titulo-decorativo.my-4(data-aos="fade-left")
      .cont-figura
        img(src="@/assets/curso/temas/img-tit-dec.svg")
      .cont-text 
        h3 Educación y Capacitación
    
    .row.mb-4(data-aos="fade-up")
      .col-auto.d-none.d-lg-block 
        figure
          img.mx-auto(src="@/assets/curso/temas/19.svg",style="max-width: 83px;")
      .col
        p.mb-0 Todas las personas que manipulen alimentos deben tener formación en #[b buenas prácticas higiénicas de manipulación y aspectos sanitarios]. La empresa debe capacitar a todos en precauciones y medidas para evitar daños, riesgos de deterioro y en su educación. Las empresas deben capacitar al operario manipulador en buenas prácticas higiénicas y de manufactura al momento de ser contratado; además, deben actualizarlo mediante charlas y capacitación.
    
    .row(data-aos="fade-down")
      .col-lg-8.mb-4
        .tarjeta-per-1.dise-2.p-4.mb-4
          img.fig-1(src="@/assets/curso/temas/23.svg")
          img.fig-2(src="@/assets/curso/temas/4.svg")
          .row.align-items-center
            .col-lg-6
              figure.mb-5.mb-lg-0
                img.mx-auto(src="@/assets/curso/temas/20.svg",style="max-width: 345px;")
            .col-lg-6.mb-5.mb-lg-0
              .d-flex.mb-5.mb-lg-4
                .tit-deco.mx-auto.mx-lg-0
                  span 1
              p.mb-0.me-lg-5 La capacitación debe ser de al menos 10 horas al año e incluir la Resolución 2674 que fue la modificación del Decreto 3075 del 1997, en la cual están estipulados todos los parámetros que deben cumplir las personas naturales y jurídicas que ejerzan la actividad de fabricar alimentos.
        .tarjeta-per-1.dise-2.p-4
          img.fig-1(src="@/assets/curso/temas/23.svg")
          img.fig-2(src="@/assets/curso/temas/4.svg")
          .row.align-items-center
            .col-lg-6
              figure.mb-5.mb-lg-0
                img.mx-auto(src="@/assets/curso/temas/21.svg",style="max-width: 345px;")
            .col-lg-6.mb-5.mb-lg-0
              .d-flex.mb-5.mb-lg-4
                .tit-deco.mx-auto.mx-lg-0
                  span 2
              p.mb-0.me-lg-5 La capacitación debe ser realizada por personas ajenas a la empresa que demuestren que tienen la capacidad técnica y experiencia para impartir dicha información.
      .col-lg-4.mb-4
        .tarjeta-per-1.dise-2.p-4.h-100
          img.fig-1.larga(src="@/assets/curso/temas/23.svg")
          img.fig-2(src="@/assets/curso/temas/4.svg")
          .row.align-items-center
            .col-12
              figure.mb-5
                img.mx-auto(src="@/assets/curso/temas/22.svg",style="max-width: 345px;")
            .col-12.mb-5.mb-lg-4
              .d-flex.mb-5
                .tit-deco.mx-auto
                  span 3
              p.mb-0 La capacitación impartida debe ser acorde a la empresa, establecimiento o proceso tecnológico, todo lo enseñado en la capacitación se verá reflejado en el desempeño de los operarios y las condiciones sanitarias del establecimiento.



      
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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

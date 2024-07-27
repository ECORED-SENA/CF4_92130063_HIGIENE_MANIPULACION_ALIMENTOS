<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Recepción, almacenamiento y transporte
    
    p.mb-0 Esta etapa incluye el momento desde que se descargan los alimentos del carro de transporte, hasta que los dejamos en la zona de almacenamiento o cámaras de frío.

    .titulo-decorativo.mt-5.mb-4
      .cont-figura
        img(src="@/assets/curso/temas/img-tit-dec.svg")
      .cont-text 
        h3 Recepción
    
    .row.mb-4 
      .col-auto.d-none.d-lg-block 
        figure
          img.mx-auto(src="@/assets/curso/temas/41.svg",style="max-width: 83px;")
      .col
        p.mb-0 Si se trata de productos refrigerados o congelados, la recepción debe hacerse lo más rápido posible para no romper la cadena de frío. Y se debe comprobar que la materia prima que se recibe está en buen estado y a la temperatura adecuada.

    .borde-20.overflow-hidden
      .row 
        .col-lg-6.pe-lg-0
          .fondo-color-primario.p-4.h-100
            figure
              img.mx-auto(src="@/assets/curso/temas/54.png")
            p.mb-0.pt-4.pt-lg-5.pb-lg-4.px-lg-4 Se debe comprobar que los productos llegan en condiciones óptimas, sin roturas, abombados o con animales, sino se cumple con el requisito, hay que devolver la materia prima.
        .col-lg-6.ps-lg-0
          .fondo-color-sistema-k.p-4.h-100
            figure
              img.mx-auto(src="@/assets/curso/temas/55.png")
            p.mb-0.pt-4.pt-lg-5.pb-lg-4.px-lg-4 Se debe comprobar que los productos llegan en condiciones óptimas, sin roturas, abombados o con animales, sino se cumple con el requisito, hay que devolver la materia prima.
    
    .row.my-4
      .col-md-auto
        figure.mb-4.mb-md-0
          img.mx-auto(src="@/assets/curso/temas/56.svg",style="max-width: 85px;")
      .col
        p.mb-0 Se hará un registro de los productos que llegan anotando todo lo referente al producto, indicando, día de llegada, la empresa que lo envía, el lote, la cantidad de productos, fechas de vencimiento y posibles contaminantes. En caso de tratarse de productos congelados se verificará antes de nada la temperatura a la que llegan. Cada empresa tendrá un formulario específico que deberá completar con cada recepción. El formato debe ser como el siguiente:

    .titulo-sexto.color-acento-contenido
      p.mb-0 #[b Tabla 1.] Ejemplo formato de registro
    
    .tabla-a.tabla-per-1.fondo-color-sistema-h.mb-5
      table(style="min-width: 350px;")
        thead
          tr
            th Fecha de ingreso
            th Producto
            th Empresa
            th Cantidad
            th Temperatura
            th Fecha de vencimiento
            th Lote
            th Nombre y firma
        tbody
          tr
            td
            td
            td
            td
            td
            td
            td
            td
    
    #t_3_1.titulo-segundo.color-acento-contenido
      h2 3.1 Almacenamiento
    
    p.mb-0 Se deben tener en cuenta los diferentes aspectos que hay que cumplir para asegurar la vida útil de los alimentos:

    .titulo-decorativo.mt-5.mb-4
      .cont-figura
        img(src="@/assets/curso/temas/img-tit-dec.svg")
      .cont-text 
        h3 Almacenar de forma correcta los productos:
    
    p.mb-4 A continuación, se presentan algunas recomendaciones para el almacenamiento adecuado de productos:

    .row.mb-4.align-items-center
      .col-lg-5
        figure.mb-4.mb-lg-0
          img.mx-auto(src="@/assets/curso/temas/57.png",style="max-width: 505px;")
      .col-lg-7
        .d-flex.align-items-center.cont_per_1.p-4.p-md-0.mb-2
          .circle-fig.fondo-color-primario.d-inline-flex.rounded-circle.me-md-3.mb-4.mb-md-0.align-items-center.justify-content-center
            figure
              img.mx-auto(src="@/assets/curso/temas/58.svg",style="max-width: 52px;")
          p.mb-0.pe-md-3 Estibar el área de almacenamiento, es decir, no dejar alimentos en contacto directo con el suelo ni paredes.
        .d-flex.align-items-center.cont_per_1.p-4.p-md-0.mb-2
          .circle-fig.fondo-color-primario.d-inline-flex.rounded-circle.me-md-3.mb-4.mb-md-0.align-items-center.justify-content-center
            figure
              img.mx-auto(src="@/assets/curso/temas/59.svg",style="max-width: 44px;")
          p.mb-0.pe-md-3 No almacenar productos alimenticios junto con productos que pueden contaminarlos como productos de limpieza, etc.
        .d-flex.align-items-center.cont_per_1.p-4.p-md-0.mb-2
          .circle-fig.fondo-color-primario.d-inline-flex.rounded-circle.me-md-3.mb-4.mb-md-0.align-items-center.justify-content-center
            figure
              img.mx-auto(src="@/assets/curso/temas/60.svg",style="max-width: 45px;")
          p.mb-0.pe-md-3 No sobrepasar la capacidad del refrigerador o congelador, debido a que no enfriarán los productos correctamente.
        .d-flex.align-items-center.cont_per_1.p-4.p-md-0.mb-2
          .circle-fig.fondo-color-primario.d-inline-flex.rounded-circle.me-md-3.mb-4.mb-md-0.align-items-center.justify-content-center
            figure
              img.mx-auto(src="@/assets/curso/temas/61.svg",style="max-width: 48px;")
          p.mb-0.pe-md-3 Hacer que los productos que llegan primero al almacén salgan primero; con el fin de que la rotación de los mismos sea adecuada y se tenga en nuestra propiedad productos viejos, que pueden incluso caducarse.
        .d-flex.align-items-center.cont_per_1.p-4.p-md-0.mb-2
          .circle-fig.fondo-color-primario.d-inline-flex.rounded-circle.me-md-3.mb-4.mb-md-0.align-items-center.justify-content-center
            figure
              img.mx-auto(src="@/assets/curso/temas/62.svg",style="max-width: 48px;")
          p.mb-0.pe-md-3 Este sistema se denomina PEPS (Primeros en Entrar, Primeros en Salir).
    
    p.mb-3 A continuación, se detallan las prácticas recomendadas para el almacenamiento y conservación de alimentos:

    .fondo-personalizado-1.f2(data-aos="flip-up")
      .fondo-personalizado-1__contenido.py-5
        .bg-white.borde-20.p-4.pt-lg-5
          SlyderA.slider-personalizado-1.pt-lg-2(tipo="b")
            .row.justify-content-center.mb-2.align-items-center
              .col-lg-6.mb-4.mb-lg-0
                h4.mb-4 Control diario de temperaturas
                p.mb-0 Controlar al menos una vez al día las temperaturas de los cuartos fríos de almacenamiento y asegurarse de que se cumplen los límites de las temperaturas adecuadas (refrigeración 0 ° 5 °C, congelación -18 °C).
              .col-lg-5
                figure
                  img.mx-auto(src="@/assets/curso/temas/63.png",style="max-width: 424px;")
            .row.justify-content-center.mb-2.align-items-center
              .col-lg-6.mb-4.mb-lg-0
                h4.mb-4 Circulación de aire
                p.mb-0 Permitir la circulación de aire entre los productos alimenticios.
              .col-lg-5
                figure
                  img.mx-auto(src="@/assets/curso/temas/64.png",style="max-width: 424px;")
            .row.justify-content-center.mb-2.align-items-center
              .col-lg-6.mb-4.mb-lg-0
                h4.mb-4 Separación de alimentos y desechos
                p.mb-0 No dejar alimentos aptos para el consumo cerca de la zona de basuras o desechos.
              .col-lg-5
                figure
                  img.mx-auto(src="@/assets/curso/temas/65.png",style="max-width: 424px;")
            .row.justify-content-center.mb-2.align-items-center
              .col-lg-6.mb-4.mb-lg-0
                h4.mb-4 Respeto de fechas de vencimiento
                p.mb-0 Respetar las fechas de vencimiento y consumo preferente que requiere cada producto y que vienen indicadas por el fabricante (no reutilizar los productos una vez que están caducados).
              .col-lg-5
                figure
                  img.mx-auto(src="@/assets/curso/temas/66.png",style="max-width: 424px;")
            .row.justify-content-center.mb-2.align-items-center
              .col-lg-6.mb-4.mb-lg-0
                h4.mb-4 Separación de alimentos crudos y cocidos
                p.mb-0 Dentro de los cuartos fríos, no mezclar alimentos crudos y cocidos, para evitar las posibles contaminaciones cruzadas.
              .col-lg-5
                figure
                  img.mx-auto(src="@/assets/curso/temas/67.png",style="max-width: 424px;")
            .row.justify-content-center.mb-2.align-items-center
              .col-lg-6.mb-4.mb-lg-0
                h4.mb-4 Estado de los embalajes
                p.mb-0 No introducir alimentos con embalajes sucios, en mal estado o sin etiquetado.
              .col-lg-5
                figure
                  img.mx-auto(src="@/assets/curso/temas/68.png",style="max-width: 424px;")
            .row.justify-content-center.mb-2.align-items-center
              .col-lg-6.mb-4.mb-lg-0
                h4.mb-4 Condiciones de almacenamiento
                p.mb-0 El almacenamiento de alimentos secos y enlatados se debe conservar en condiciones de una temperatura entre 10 °C y 21 °C.
              .col-lg-5
                figure
                  img.mx-auto(src="@/assets/curso/temas/69.png",style="max-width: 424px;")
            .row.justify-content-center.mb-2.align-items-center
              .col-lg-6.mb-4.mb-lg-0
                h4.mb-4 Mantenimiento del empaque original
                p.mb-0 Se debe mantener el empaque original.
              .col-lg-5
                figure
                  img.mx-auto(src="@/assets/curso/temas/70.png",style="max-width: 424px;")


       


</template>

<script>
export default {
  name: 'Tema3',
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

<style lang="sass" scoped>
.cont_per_1
  .circle-fig
    width: 85px
    height: 85px
    min-width: 85px
    min-height: 85px
  position: relative
  *
    position: relative
  &::before
    content: ""
    position: absolute
    top: 4px
    left: 5px
    right: 0
    bottom: 4px
    background-color: #C1DDC7
    border-radius: 38px
  @media screen and (max-width: 768px)
    flex-direction: column
    &::before
      top: 0
      left: 0
      bottom: 0
</style>

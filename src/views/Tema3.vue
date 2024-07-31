<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Recepción, almacenamiento y transporte
    
    p.mb-0(data-aos="fade") Esta etapa incluye el momento desde que se descargan los alimentos del carro de transporte, hasta que los dejamos en la zona de almacenamiento o cámaras de frío.

    .titulo-decorativo.mt-5.mb-4(data-aos="fade-left")
      .cont-figura
        img(src="@/assets/curso/temas/img-tit-dec.svg")
      .cont-text 
        h3 Recepción
    
    .row.mb-4(data-aos="fade-up")
      .col-auto.d-none.d-lg-block 
        figure
          img.mx-auto(src="@/assets/curso/temas/41.svg",style="max-width: 83px;")
      .col
        p.mb-0 Si se trata de productos refrigerados o congelados, la recepción debe hacerse lo más rápido posible para no romper la cadena de frío. Y se debe comprobar que la materia prima que se recibe está en buen estado y a la temperatura adecuada.

    .borde-20.overflow-hidden
      .row 
        .col-lg-6.pe-lg-0(data-aos="fade-right")
          .fondo-color-primario.p-4.h-100
            figure
              img.mx-auto(src="@/assets/curso/temas/54.png")
            p.mb-0.pt-4.pt-lg-5.pb-lg-4.px-lg-4 Se debe comprobar que los productos llegan en condiciones óptimas, sin roturas, abombados o con animales, sino se cumple con el requisito, hay que devolver la materia prima.
        .col-lg-6.ps-lg-0(data-aos="fade-left")
          .fondo-color-sistema-k.p-4.h-100
            figure
              img.mx-auto(src="@/assets/curso/temas/55.png")
            p.mb-0.pt-4.pt-lg-5.pb-lg-4.px-lg-4 Se debe comprobar que los productos llegan en condiciones óptimas, sin roturas, abombados o con animales, sino se cumple con el requisito, hay que devolver la materia prima.
    
    .row.my-4
      .col-md-auto(data-aos="fade-up")
        figure.mb-4.mb-md-0
          img.mx-auto(src="@/assets/curso/temas/56.svg",style="max-width: 85px;")
      .col(data-aos="fade-down")
        p.mb-0 Se hará un registro de los productos que llegan anotando todo lo referente al producto, indicando, día de llegada, la empresa que lo envía, el lote, la cantidad de productos, fechas de vencimiento y posibles contaminantes. En caso de tratarse de productos congelados se verificará antes de nada la temperatura a la que llegan. Cada empresa tendrá un formulario específico que deberá completar con cada recepción. El formato debe ser como el siguiente:

    .titulo-sexto.color-acento-contenido(data-aos="fade")
      p.mb-0 #[b Tabla 1.] Ejemplo formato de registro
    
    .tabla-a.tabla-per-1.fondo-color-sistema-h.mb-5(data-aos="zoom-in-out")
      table
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
    
    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.1 Almacenamiento
    
    p.mb-5(data-aos="fade") Se deben tener en cuenta los diferentes aspectos que hay que cumplir para asegurar la vida útil de los alimentos:

    .fondo-personalizado-1.pos-full.top-1.f1
      .fondo-personalizado-1__contenido
        .titulo-decorativo.mb-4(data-aos="fade-left")
          .cont-figura
            img(src="@/assets/curso/temas/img-tit-dec.svg")
          .cont-text 
            h3 Almacenar de forma correcta los productos:
        
        p.mb-4(data-aos="fade") A continuación, se presentan algunas recomendaciones para el almacenamiento adecuado de productos:

        .row.mb-4.align-items-center(data-aos="flip-up")
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
        
        p.mb-3(data-aos="fade-right") A continuación, se detallan las prácticas recomendadas para el almacenamiento y conservación de alimentos:

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
    
    Separador

    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 3.2 Transporte

    p.mb-4(data-aos="fade-right") El transporte de alimentos y materias primas debe cumplir con lo siguiente:

    .row.mb-4(data-aos="flip-up")
      .col-lg-3
        figure.mb-4.mb-lg-0
          img.mx-auto(src="@/assets/curso/temas/71.png",style="max-width: 295px;")
      .col-lg-9
        AcordionA.acordion-personalizado-1(tipo="a" clase-tarjeta="tarjeta")
          .div(titulo="Condiciones óptimas de transporte")
            p.ps-md-5.ms-md-3 Las condiciones del transporte deben ser óptimas para que impidan el deterioro y daños en los envases, también para prevenir la contaminación y propagación de agentes patógenos en los alimentos. 
          .div(titulo="Revisión sanitaria del medio de transporte")
            p.ps-md-5.ms-md-3 Se debe revisar que el medio de transporte cumpla con las condiciones sanitarias antes de ser cargado.
          .div(titulo="Cadena de frío")
            p.ps-md-5.ms-md-3 Los alimentos y materias primas que requieran ser transportados bajo refrigeración deben garantizar que conservarán la cadena de frío hasta el destino final.
          .div(titulo="Verificación de temperatura")
            p.ps-md-5.ms-md-3 Las verificaciones al vehículo durante el transporte de alimentos se harán por medio de planillas de registro de temperatura.

    .row(data-aos="flip-down")
      .col-lg-3.order-first.order-lg-last
        figure.mb-4.mb-lg-0
          img.mx-auto(src="@/assets/curso/temas/72.png",style="max-width: 295px;")
      .col-lg-9
        AcordionA.acordion-personalizado-1(tipo="a" clase-tarjeta="tarjeta")
          .div(titulo="Transporte de diferentes categorías")
            p.ps-md-5.ms-md-3 La Resolución 2674 permite el transporte de alimentos de diferentes categorías, siempre y cuando estén debidamente empacados para evitar la contaminación cruzada.
          .div(titulo="Prohibición de transporte sobre el piso")
            p.ps-md-5.ms-md-3 Está prohibido transportar alimentos sobre el piso, estos deben ser aislados dentro del vehículo.
          .div(titulo="Prohibición de transporte con sustancias peligrosas")
            p.ps-md-5.ms-md-3 Está prohibido transportar alimentos y materias primas con sustancias peligrosas u otras sustancias que puedan contaminar el alimento.
          .div(titulo="Cumplimiento de requisitos sanitarios")
            p.ps-md-5.ms-md-3 Dentro del país los vehículos en los cuales se transportan alimentos deben cumplir con los requisitos sanitarios estipulados por las autoridades competentes y sanitarias; estas serán las que realizarán la inspección y vigilancia del cumplimiento de dichos requisitos.
    
    Separador 

    #t_3_3.titulo-segundo.color-acento-contenido(data-aos="fade")
      h2 3.3 Sistema HACCP
    
    .row 
      .col-lg-5.mb-4(data-aos="fade-up")
        .fondo-color-sistema-j.p-4.px-lg-5.h-100.d-flex.align-items-center.borde-13
          p.mb-0 El sistema de autocontrol HACCP corresponde a las siglas #[b Análisis de Peligros y Puntos de Control Crítico]. Este sistema permite identificar, evaluar y controlar todos aquellos puntos que puedan ser peligrosos; así como establecer medidas preventivas para eliminarlos y/o reducirlos hasta niveles aceptables. Su cumplimiento es de carácter obligatorio por parte de todas las empresas del sector alimentario y su objetivo es obtener alimentos seguros para la salud del consumidor.
      .col-lg-3.mb-4(data-aos="fade-down")
        .fondo-color-sistema-l.h-100.d-flex.align-items-center.borde-13.p-2
          figure
            img.mx-auto(src="@/assets/curso/temas/73.svg",style="max-width: 267px;")
      .col-lg-4.mb-4(data-aos="fade-up")
        .rounded-circle.fondo-color-acento-contenido.d-inline-flex.p-3.mb-4
          figure
            img(src="@/assets/curso/temas/74.svg",style="max-width: 53px;")
        p.mb-0 Cada HACCP va a ser específico de cada empresa alimentaria, puesto que será distinto en función de los productos alimenticios que van a manipular o elaborar en el establecimiento. El éxito o fracaso del HACCP depende principalmente de la implicación de todas las personas que intervienen en la manipulación de los alimentos. Es importante que todo el mundo sea consciente de su utilidad y conozcan que se debe hacer en cada fase.
    
    p.mb-4.pt-2(data-aos="fade") Antes de empezar a ejecutar el HACCP deben seguirse los siguientes principios para su correcta implementación en la empresa:
    
    .row.align-items-center(data-aos="zoom-in-out")
      .col-lg-8
        LineaTiempoD.linea-tiempo-1
          .row(numero="1" titulo="Identificar los peligros de cada fase")
            .col-12
              p.mb-0 En cada etapa del proceso pueden darse peligros, se debe conocer qué puede pasar, para poder evitarlo al máximo. 
          .row(numero="2" titulo="Medidas preventivas")
            .col-12
              p.mb-0 Se deben establecer medidas que evitarán la aparición de peligros, como por ejemplo en el almacenamiento de alimentos refrigerados: conservarlos siempre en refrigeración (0-5 °C), no dejar las puertas abiertas de cámaras por largo tiempo, no sobrepasar la capacidad del almacén.
          .row(numero="3" titulo="Límites")
            .col-12
              p.mb-0 Se debe conocer cuál es el límite que se considera como válido y a partir de cuándo ese proceso se ha convertido en un peligro. Por ejemplo, los alimentos refrigerados tendrán una temperatura de 0-5 °C (ese es el límite). Si se tiene alguna cámara a 6 °C, ya no será válido. 
          .row(numero="4" titulo="Sistema de vigilancia")
            .col-12
              p.mb-0 Controlar que las medidas preventivas se realicen correctamente.
          .row(numero="5" titulo="Medidas correctivas")
            .col-12
              p.mb-0 Pese a hacerlo todo bien, puede haber algo que no salga bien y el alimento se encuentre en peligro. Por ejemplo, al analizar un alimento refrigerado, se puede identificar que la temperatura está a -10 °C y no es la correcta; los alimentos se verán afectados. 
          .row(numero="6" titulo="Sistema de control o registro")
            .col-12
              p.mb-0 Todo lo que ocurra, o que se controle, deberá anotarse para tener un registro de lo que pasa y se tomará como prueba de que se han realizado los controles.
      .col-lg-4.order-first.order-lg-last
        figure.mb-4.mb-lg-0
          img.mx-auto(src="@/assets/curso/temas/75.svg",style="max-width: 401px;") 



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

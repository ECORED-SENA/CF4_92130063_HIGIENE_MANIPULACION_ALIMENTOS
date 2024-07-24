<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    #Actividad                
      <Actividad :cuestionario="cuestionario" />

</template>

<script>
import Actividad from '@/components/actividad/Actividad'
export default {
  name: 'ActividadDidactica',
  components: { Actividad },
  data: () => ({
    cuestionario: {
      tema: 'Seguridad e higiene en la manipulación de alimentos',
      titulo: 'Cuestionario',
      introduccion:
        'Lea cada enunciado y luego seleccione la respuesta correcta según corresponda.',
      barajarPreguntas: false,
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuál es el objetivo principal de la manipulación de alimentos?',
          imagen: require('@/assets/componentes/pregunta_1.svg'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Mejorar el sabor de los alimentos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Prolongar la vida útil y garantizar la seguridad de los alimentos.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Incrementar el peso de los alimentos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Reducir el costo de los alimentos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Felicitaciones, has acertado.',
          mensaje_incorrecto:
            'La respuesta es incorrecta. Te sugerimos revisar nuevamente el componente formativo.',
        },
        {
          id: 2,
          texto:
            '¿Qué debe incluir la higiene personal de un manipulador de alimentos?',
          imagen: require('@/assets/componentes/pregunta_2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Uso de perfume.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Ducha diaria con agua y jabón.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Aplicación de loción para manos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Uso de ropa de moda.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Felicitaciones, has acertado.',
          mensaje_incorrecto:
            'La respuesta es incorrecta. Te sugerimos revisar nuevamente el componente formativo.',
        },
        {
          id: 3,
          texto: 'Texto de la tercera pregunta 3',
          imagen: require('@/assets/curso/banner-princiapal.svg'),
          opciones: [
            { id: 'a', texto: 'Opción A', esCorrecta: false },
            { id: 'b', texto: 'Opción B', esCorrecta: false },
            { id: 'c', texto: 'Opción C', esCorrecta: false },
            { id: 'd', texto: 'Opción D', esCorrecta: true },
          ],
          mensaje_correcto: '¡Muy bien! Esa es la respuesta correcta.',
          mensaje_incorrecto: 'Respuesta incorrecta. ¡Inténtalo de nuevo!',
        },
        {
          id: 4,
          texto: 'Texto de la cuarta pregunta 4',
          imagen: require('@/assets/curso/banner-princiapal.svg'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Opción A', esCorrecta: true },
            { id: 'b', texto: 'Opción B', esCorrecta: false },
            { id: 'c', texto: 'Opción C', esCorrecta: false },
            { id: 'd', texto: 'Opción D', esCorrecta: false },
          ],
          mensaje_correcto: '¡Respuesta correcta! Felicidades.',
          mensaje_incorrecto: 'Respuesta incorrecta. Intenta nuevamente.',
        },
        {
          id: 5,
          texto: 'Texto de la quinta pregunta 5',
          imagen: require('@/assets/curso/banner-princiapal.svg'),
          opciones: [
            { id: 'a', texto: 'Opción A', esCorrecta: false },
            { id: 'b', texto: 'Opción B', esCorrecta: true },
            { id: 'c', texto: 'Opción C', esCorrecta: false },
            { id: 'd', texto: 'Opción D', esCorrecta: false },
          ],
          mensaje_correcto: '¡Respuesta correcta! Felicidades.',
          mensaje_incorrecto: 'Respuesta incorrecta. Intenta nuevamente.',
        },
      ],
      mensaje_final_aprobado:
        '¡Has completado el cuestionario exitosamente! Felicidades.',
      mensaje_final_reprobado:
        'No has alcanzado la puntuación mínima para aprobar. Te animamos a intentarlo de nuevo.',
    },
  }),
  computed: {},
  methods: {},
}
</script>

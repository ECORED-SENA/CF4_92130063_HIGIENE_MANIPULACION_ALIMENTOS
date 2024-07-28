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
        'Evaluar el conocimiento sobre las prácticas esenciales de manipulación de alimentos, para garantizar la seguridad alimentaria y prevenir la contaminación.',
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
          texto:
            '¿Qué documento debe tener el personal manipulador de alimentos para certificar su aptitud?',
          imagen: require('@/assets/componentes/pregunta_3.svg'),
          opciones: [
            { id: 'a', texto: 'Certificado de nacimiento.', esCorrecta: false },
            { id: 'b', texto: 'Licencia de conducir.', esCorrecta: false },
            {
              id: 'c',
              texto: 'Certificado médico de aptitud.',
              esCorrecta: true,
            },
            { id: 'd', texto: 'Pasaporte.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Felicitaciones, has acertado.',
          mensaje_incorrecto:
            'La respuesta es incorrecta. Te sugerimos revisar nuevamente el componente formativo.',
        },
        {
          id: 4,
          texto: '¿Cuál es una fuente común de transmisión de microorganismos?',
          imagen: require('@/assets/componentes/pregunta_4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Manos.', esCorrecta: true },
            { id: 'b', texto: 'Cabello.', esCorrecta: false },
            { id: 'c', texto: 'Ropa.', esCorrecta: false },
            { id: 'd', texto: 'Aire acondicionado.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Felicitaciones, has acertado.',
          mensaje_incorrecto:
            'La respuesta es incorrecta. Te sugerimos revisar nuevamente el componente formativo.',
        },
        {
          id: 5,
          texto:
            '¿Qué medida es crucial durante la recepción de productos refrigerados?',
          imagen: require('@/assets/componentes/pregunta_1.svg'),
          opciones: [
            {
              id: 'a',
              texto: 'Almacenarlos en cualquier lugar.',
              esCorrecta: false,
            },
            { id: 'b', texto: 'Mantener la cadena de frío.', esCorrecta: true },
            {
              id: 'c',
              texto: 'Mezclarlos con productos secos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'No verificar la temperatura.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Felicitaciones, has acertado.',
          mensaje_incorrecto:
            'La respuesta es incorrecta. Te sugerimos revisar nuevamente el componente formativo.',
        },
        {
          id: 6,
          texto: '¿Qué es el sistema HACCP?',
          imagen: require('@/assets/componentes/pregunta_2.png'),
          opciones: [
            {
              id: 'a',
              texto: 'Un método de cocción.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Un sistema de análisis de peligros y puntos de control crítico.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Un tipo de embalaje.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Una técnica de conservación.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Felicitaciones, has acertado.',
          mensaje_incorrecto:
            'La respuesta es incorrecta. Te sugerimos revisar nuevamente el componente formativo.',
        },
        {
          id: 7,
          texto:
            '¿Qué práctica es esencial para evitar la contaminación cruzada en el almacenamiento?',
          imagen: require('@/assets/componentes/pregunta_3.svg'),
          opciones: [
            {
              id: 'a',
              texto: 'Separar alimentos crudos y cocidos.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Mezclar todos los alimentos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Almacenar todos los productos juntos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'No etiquetar los productos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Felicitaciones, has acertado.',
          mensaje_incorrecto:
            'La respuesta es incorrecta. Te sugerimos revisar nuevamente el componente formativo.',
        },
        {
          id: 8,
          texto:
            '¿Cuál es una de las responsabilidades del manipulador de alimentos?',
          imagen: require('@/assets/componentes/pregunta_4.png'),
          opciones: [
            {
              id: 'a',
              texto: 'Ignorar las normas de higiene.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Participar en la formación continua en buenas prácticas.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Usar cualquier tipo de ropa.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Evitar los exámenes médicos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Felicitaciones, has acertado.',
          mensaje_incorrecto:
            'La respuesta es incorrecta. Te sugerimos revisar nuevamente el componente formativo.',
        },
        {
          id: 9,
          texto:
            '¿Qué debe hacer un manipulador de alimentos si tiene una infección en la piel?',
          imagen: require('@/assets/componentes/pregunta_1.svg'),
          opciones: [
            {
              id: 'a',
              texto: 'Continuar trabajando.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'No manipular alimentos.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Usar guantes sin lavar.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Aplicar maquillaje.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Felicitaciones, has acertado.',
          mensaje_incorrecto:
            'La respuesta es incorrecta. Te sugerimos revisar nuevamente el componente formativo.',
        },
        {
          id: 10,
          texto: '¿Qué se debe verificar durante el transporte de alimentos?',
          imagen: require('@/assets/componentes/pregunta_2.png'),
          opciones: [
            {
              id: 'a',
              texto: 'Cantidad de alimentos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Condiciones de temperatura y limpieza del vehículo.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Marca de los alimentos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Peso de los alimentos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Felicitaciones, has acertado.',
          mensaje_incorrecto:
            'La respuesta es incorrecta. Te sugerimos revisar nuevamente el componente formativo.',
        },
      ],
      mensaje_final_aprobado:
        '¡Excelente! Te felicito, has superado la actividad.',
      mensaje_final_reprobado:
        'Te recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
  computed: {},
  methods: {},
}
</script>

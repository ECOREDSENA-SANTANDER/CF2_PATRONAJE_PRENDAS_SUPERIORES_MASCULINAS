<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
import Actividad from 'ecored-pkg-fliz/plugin/components/actividad/Actividad.vue'
export default {
  name: 'ActividadDidactica',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema: 'Tipos de patronaje industrial masculino',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> identificar los principales tipos de patronaje industrial y su aplicabilidad en la línea masculina.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!.',
      titulo_reprobado: 'VUELVA A INTENTARLO.',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuál es la característica principal del patronaje industrial?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: '1',
              texto: 'Se desarrolla únicamente sobre maniquíes.',
              esCorrecta: false,
            },
            {
              id: '2',
              texto: 'Crea moldes personalizados para cada cliente.',
              esCorrecta: false,
            },
            {
              id: '3',
              texto:
                'Optimiza la producción masiva utilizando tablas estandarizadas.',
              esCorrecta: true,
            },
            {
              id: '4',
              texto: 'Solo aplica para prendas femeninas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente!  ha seleccionado la respuesta correcta, fruto de un buen proceso de comprensión en patronaje industrial masculino.',
          mensaje_incorrecto:
            'Recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica',
        },
        {
          id: 2,
          texto: '¿Qué identifica mejor al patronaje sobre medidas?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: '1',
              texto: 'Usa incrementos estandarizados para generar tallas.',
              esCorrecta: true,
            },
            {
              id: '2',
              texto:
                'Se enfoca en la personalización y ajuste exclusivo al cuerpo del cliente.',
              esCorrecta: true,
            },
            {
              id: '3',
              texto: 'Requiere siempre <i>software</i> especializado.',
              esCorrecta: false,
            },
            {
              id: '4',
              texto: 'Se limita solo a prendas infantiles.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente!  ha seleccionado la respuesta correcta, fruto de un buen proceso de comprensión en patronaje industrial masculino.',
          mensaje_incorrecto:
            'Recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica',
        },
        {
          id: 3,
          texto:
            '¿Cómo se caracteriza el moulage en el patronaje sobre medidas?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: '1',
              texto: 'Usa fórmulas matemáticas para el escalado de tallas.',
              esCorrecta: false,
            },
            {
              id: '2',
              texto: 'Trabaja sobre la tela definitiva sin prueba previa.',
              esCorrecta: false,
            },
            {
              id: '3',
              texto: 'Permite crear patrones directamente sobre el maniquí.',
              esCorrecta: true,
            },
            {
              id: '4',
              texto: 'Se usa exclusivamente para ropa deportiva.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente!  ha seleccionado la respuesta correcta, fruto de un buen proceso de comprensión en patronaje industrial masculino.',
          mensaje_incorrecto:
            'Recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica',
        },
        {
          id: 4,
          texto:
            '¿Cuál de las siguientes afirmaciones es correcta para ambos tipos de patronaje?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: '1',
              texto: 'Solo aplican a prendas masculinas.',
              esCorrecta: false,
            },
            {
              id: '2',
              texto: 'No contemplan la creación de cuellos y mangas.',
              esCorrecta: false,
            },
            {
              id: '3',
              texto:
                'Incluyen trazado de básicos y desarrollo de componentes como bolsillos.',
              esCorrecta: true,
            },
            {
              id: '4',
              texto: 'Solo se aplican en prendas de alta costura.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente!  ha seleccionado la respuesta correcta, fruto de un buen proceso de comprensión en patronaje industrial masculino.',
          mensaje_incorrecto:
            'Recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica',
        },
        {
          id: 5,
          texto:
            '¿Cuál es la diferencia entre el patronaje industrial y el sobre medidas?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: '1',
              texto:
                'El industrial usa maniquíes mientras el sobre medidas solo <i>software</i>.',
              esCorrecta: false,
            },
            {
              id: '2',
              texto:
                'El industrial busca eficiencia productiva y el sobre medidas exclusividad.',
              esCorrecta: true,
            },
            {
              id: '3',
              texto: 'Ambos son idénticos, pero cambian las herramientas.',
              esCorrecta: false,
            },
            {
              id: '4',
              texto: 'El sobre medidas está limitado a producción masiva.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente!  ha seleccionado la respuesta correcta, fruto de un buen proceso de comprensión en patronaje industrial masculino.',
          mensaje_incorrecto:
            'Recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica',
        },
        {
          id: 6,
          texto:
            '¿Cuál es el propósito principal del patrón base en el patronaje?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: '1',
              texto: 'Definir únicamente los acabados decorativos.',
              esCorrecta: false,
            },
            {
              id: '2',
              texto: 'Ajustar la prenda directamente sobre la tela final.',
              esCorrecta: false,
            },
            {
              id: '3',
              texto:
                'Establecer la estructura inicial desde la cual se derivan las transformaciones. ',
              esCorrecta: true,
            },
            {
              id: '4',
              texto: 'Reemplazar el proceso de diseño con moldes prehechos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente!  ha seleccionado la respuesta correcta, fruto de un buen proceso de comprensión en patronaje industrial masculino.',
          mensaje_incorrecto:
            'Recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica',
        },
        {
          id: 7,
          texto: '¿Qué permite la transformación del patrón base?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: '1',
              texto: 'Eliminar procesos de corte y confección.',
              esCorrecta: false,
            },
            {
              id: '2',
              texto: 'Aplicar la misma forma a todas las prendas.',
              esCorrecta: false,
            },
            {
              id: '3',
              texto:
                'Adaptar el diseño original para nuevas siluetas y estilos. ',
              esCorrecta: true,
            },
            {
              id: '4',
              texto: 'Diseñar exclusivamente prendas femeninas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente!  ha seleccionado la respuesta correcta, fruto de un buen proceso de comprensión en patronaje industrial masculino.',
          mensaje_incorrecto:
            'Recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica',
        },
        {
          id: 8,
          texto:
            '¿Para qué sirven las líneas auxiliares en el trazo del patrón?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: '1',
              texto: 'Representar únicamente elementos estéticos.',
              esCorrecta: false,
            },
            {
              id: '2',
              texto: 'Delimitar márgenes de costura sin función estructural.',
              esCorrecta: false,
            },
            {
              id: '3',
              texto:
                'Guiar con precisión el desarrollo del patrón y sus componentes. ',
              esCorrecta: true,
            },
            {
              id: '4',
              texto: 'Identificar los colores de la tela.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente!  ha seleccionado la respuesta correcta, fruto de un buen proceso de comprensión en patronaje industrial masculino.',
          mensaje_incorrecto:
            'Recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica',
        },
        {
          id: 9,
          texto:
            '¿Qué se debe considerar en el trazo de la manga para una camisa clásica?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: '1',
              texto: 'Que la manga siempre sea recta y sin forma.',
              esCorrecta: false,
            },
            {
              id: '2',
              texto: 'Que el largo supere la línea de cadera.',
              esCorrecta: false,
            },
            {
              id: '3',
              texto:
                'Que el diseño se adapte a la movilidad y al estilo definido. ',
              esCorrecta: true,
            },
            {
              id: '4',
              texto: 'Que no tenga ninguna relación con la sisa.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente!  ha seleccionado la respuesta correcta, fruto de un buen proceso de comprensión en patronaje industrial masculino.',
          mensaje_incorrecto:
            'Recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica',
        },
        {
          id: 10,
          texto:
            '¿Cuál es el objetivo principal de la prueba en tela en patronaje?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: '1',
              texto: 'Medir únicamente la resistencia de las costuras.',
              esCorrecta: false,
            },
            {
              id: '2',
              texto:
                'Asegurar la precisión de medidas, proporciones y comodidad. ',
              esCorrecta: true,
            },
            {
              id: '3',
              texto: 'Confirmar el color y la textura de la prenda.',
              esCorrecta: false,
            },
            {
              id: '4',
              texto: 'Sustituir el patrón definitivo por uno provisional.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Excelente!  ha seleccionado la respuesta correcta, fruto de un buen proceso de comprensión en patronaje industrial masculino.',
          mensaje_incorrecto:
            'Recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica',
        },
      ],
      mensaje_final_aprobado:
        '¡Excelente!  ha seleccionado la respuesta correcta, fruto de un buen proceso de comprensión en patronaje industrial masculino.',
      mensaje_final_reprobado:
        'Recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica',
    },
  }),
}
</script>

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
              texto: 'Requiere siempre software especializado.',
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
                'El industrial usa maniquíes mientras el sobre medidas solo software.',
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
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Felicitaciones! Ha captado con claridad los conceptos de estructura corporal masculina.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 7,
          texto:
            'En la silueta de triángulo, los hombros son más anchos que las caderas.',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Felicitaciones! Ha captado con claridad los conceptos de estructura corporal masculina.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 8,
          texto:
            'Los endomorfos requieren patronajes que favorezcan la amplitud de hombros para equilibrar su figura.',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Felicitaciones! Ha captado con claridad los conceptos de estructura corporal masculina.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 9,
          texto:
            'El ectomorfo necesita prendas superiores muy ajustadas para destacar su estructura corporal delgada.',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Felicitaciones! Ha captado con claridad los conceptos de estructura corporal masculina.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 10,
          texto:
            'La identificación del somatotipo es irrelevante para la selección de bases textiles en moda masculina casual.',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Felicitaciones! Ha captado con claridad los conceptos de estructura corporal masculina.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
      ],
      mensaje_final_aprobado:
        '¡Felicidades! Ha demostrado un gran conocimiento sobre La “Estructura Corporal Masculina”. ¡Continúe aprendiendo y explorando este apasionante tema!',
      mensaje_final_reprobado:
        'No ha superado la actividad. Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>

<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8
        p.p-4.bg1 En el ámbito de la confección de moda casual masculina, el patronaje de prendas superiores representa una competencia técnica esencial dentro del proceso de diseño y producción; la creación de un molde a partir de una idea no solo exige creatividad, sino también precisión, comprensión morfológica y manejo de metodologías especializadas. El desarrollo de patrones base (como los de camisa, manga y cuello) constituye el punto de partida para diseñar prendas funcionales, con equilibrio estético y adaptadas a distintos contextos de uso. A estos procesos se integran etapas clave como el prepatronaje y la validación de las bases, fundamentales para asegurar un ajuste anatómico adecuado antes de la confección final.
        p Este contenido tiene como propósito fortalecer en los aprendices las habilidades necesarias para interpretar, construir y comprobar patrones de camisas masculinas, utilizando técnicas de trazo, entalle y verificación orientadas al diseño de moda casual. Se parte de metodologías estructuradas, como las propuestas en el manual de patronaje del SENA, incorporando el uso de convenciones gráficas y herramientas de medición profesional.
      .col-lg-4.col-8.col-md-5
        img(src='@/assets/curso/portada/img01.png', alt='')
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.col-9.d-none.d-lg-block
        img(src='@/assets/curso/portada/img02.png', alt='')
      .col-lg-8.p-4.bg2
        br 
        p El curso, ofrecido por el Servicio Nacional de Aprendizaje (SENA), brinda a los participantes una formación integral, tanto conceptual como práctica, que les permite adquirir competencias sólidas en patronaje masculino y desenvolverse con solvencia técnica en el sector textil y de confección a nivel nacional.
        br
    .fondo1
      .row.justify-content-center.align-items-center(data-aos="fade")           
        .col-lg-11.col-11
          figure
            .video
              iframe(width="560" height="315" src="https://www.youtube.com/embed/vdPrCjWJSHo?si=X4NxENRo3LLXAua_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
          figcaption Video. 

</template>

<script>
export default {
  name: 'Introduccion',
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

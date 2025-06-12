<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.borde-recto-abajo
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 1
        h1 Patronaje
    
      .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/Tema1/img01.png')})`}"
        )
        .bloque-texto-g__texto.p-4
          p.mb-0 Es un proceso mediante el cual se traduce un volumen tridimensional del cuerpo humano en una representación bidimensional, a través de planos que definen la estructura de una prenda; esta técnica es fundamental para la elaboración de moldes o patrones que aseguren un ajuste adecuado, funcional y estético sobre la figura. Además, el patronaje permite controlar proporciones, simetría y estilo de cada diseño, adaptándose a diferentes tipos de prendas, siluetas y tallajes; su correcta aplicación es clave tanto en la industria de la moda como en la confección a medida, ya que constituye la base técnica para lograr prendas de calidad, comodidad y coherencia con la intención del diseño.
          
      .row.justify-content-center.align-items-center.mb-1
        .col-lg-6
          .titulo-sexto.color-acento-contenido(data-aos='fade-right')
            h5 Figura 1.
            span Plano en 3D
          figure
            img(src='@/assets/curso/Tema1/figura1.svg', alt='Cubo en dos enfoques. El primero indica su forma tridimensional usando líneas continuas y segmentadas. El segundo lo ubica dentro de un sistema de coordenadas con tres ejes: X (horizontal), Y (vertical) y Z (profundidad), facilitando su comprensión espacial.')
        .col-lg-6  
          .titulo-sexto.color-acento-contenido(data-aos='fade-right')
            h5 Figura 2.
            span Plano en 2D
          figure
            img(src='@/assets/curso/Tema1/figura2.svg', alt='Desarrollo del plano de un cubo. Se compone de seis cuadrados unidos entre sí formando una cruz, con pestañas en algunos bordes. Estas pestañas indican zonas de unión al armar la figura tridimensional.')

      .row.justify-content-start.mb-4(data-aos="zoom-in-left")
        .col-sm-12.col-lg-7
          .d-flex.align-items-center.mt-4
            img.w-card-icon(src="@/assets/curso/Tema1/ico1.svg")
            h3.bg2.py-2.w-card-text ¿Para qué sirve el patronaje?

      .row.justify-content-center.align-items-center.mb-5
        .col-lg-5
          img.w-card-icon(src="@/assets/curso/Tema1/img02.png")
        .col-lg-7.bg2.p-4
          br
          p El patronaje sirve como herramienta fundamental para transformar un diseño de prenda en una estructura técnica que permita su confección. A través del patronaje, se definen con precisión las formas, dimensiones y líneas de cada pieza que conformará la prenda, garantizando que encajen correctamente entre sí y se adapten al cuerpo humano. 
          p El proceso es esencial para lograr funcionalidad, comodidad, estética y coherencia en el producto final, ya sea en producciones industriales, colecciones de moda o confección personalizada. Además, facilita la reproducción sistemática del diseño en diferentes tallas y estilos.
      p.mb-5 De la estructura al molde: este proceso consiste en convertir el diseño de una prenda en moldes planos mediante trazos precisos que representan su forma y ajuste. A partir de líneas de referencia y proporciones del cuerpo, se construyen las piezas necesarias para el corte, garantizando funcionalidad, estilo y estructura en la confección final.

      .row.justify-content-center.align-items-center.mb-5
        .col-lg-12
          .titulo-sexto.color-acento-contenido(data-aos='fade-right')
            h5 Figura 3.
            span  Proceso técnico de la prenda
          figure
            img(src='@/assets/curso/Tema1/figura3.svg', alt='La secuencia ilustra el proceso técnico de confección de una prenda masculina, iniciando con la toma de medidas, pasando por el análisis estructural y la construcción del patrón, hasta llegar al montaje del prototipo en maniquí. Cada etapa refleja una acción clave en la transformación de un diseño conceptual en una prenda tangible.')
      
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-1
          img(src='@/assets/curso/Tema1/ico2.svg', alt='')
        .col-lg-11
          p La interpretación en plano y molde: implica comprender cómo las líneas, formas y referencias trazadas sobre papel representan las distintas partes de la prenda en su versión tridimensional; esta habilidad permite leer y construir correctamente los moldes, identificando elementos como pinzas, costuras, aplomes y márgenes, que orientan el montaje y aseguran un ajuste preciso. Es clave para traducir correctamente el diseño al lenguaje técnico del patronaje.

      .row.justify-content-center.align-items-center.mb-5
        .col-lg-12
          .titulo-sexto.color-acento-contenido(data-aos='fade-right')
            h5 Figura 4.
            span  Interpretación en plano y molde
          figure
            img(src='@/assets/curso/Tema1/figura4.svg', alt=' La figura representa la secuencia técnica del desarrollo de una prenda a partir del cuerpo humano. Inicia con la estructura corporal, seguida por la segmentación anatómica, el trazado del plano bidimensional, la elaboración del molde y finaliza con la prenda terminada. Este proceso traduce las proporciones del cuerpo en formas planas que sirven de base para la confección.')
            figcaption Fuente: https://seampedia.com/el-patron-un-juego-de-dimensiones/

      separador
      #t_1_1.titulo-segundo.mb-5
        h2 1.1  Tipos de patronaje y líneas de aplicación

      .row.justify-content-center.align-items-center.mb-5.bg3
        .col-lg-9
          p.p-4 El patronaje se clasifica en dos grandes categorías: industrial y sobre medidas, cada una responde a necesidades específicas del sector textil, desde la producción masiva hasta la personalización exclusiva.
        .col-lg-3.d-none.d-lg-block
          img.der(src='@/assets/curso/Tema1/img03.png', alt='')

      p.mb-4 A continuación, se describen sus principales características:

      .row.justify-content-start.mb-4(data-aos="zoom-in-left")
        .col-sm-12.col-lg-7
          .d-flex.align-items-center.mt-4
            img.w-card-icon(src="@/assets/curso/Tema1/ico1.svg")
            h3.bg2.py-2.w-card-text Patronaje industrial

      .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/Tema1/img01.png')})`}"
        )
        .bloque-texto-g__texto.p-4
          p.mb-0 Está orientado a la producción en serie de prendas, y se basa en la traducción de la figura humana tridimensional (3D) a planos bidimensionales (2D), utilizando papel o software especializado como Audaces 360, Optitex, Gerber o Lectra. La metodología estructurada permite la creación de patrones básicos y sus transformaciones con alta eficiencia y precisión.
          br
          br
          p Se fundamenta en tablas de medidas estandarizadas, definidas por región, tipo de prenda y público objetivo; a partir de una talla base, se aplican incrementos definidos para generar otras tallas mediante un proceso de escalado, sin necesidad de construir nuevos moldes, lo que optimiza tiempo y recursos en la producción masiva.

      .row.justify-content-center.align-items-center.mb-3
        .col-lg-12
          .bg4.mb-0
            .row.justify-content-center.align-items-center.mb-0
              .col-lg-6(data-aos="fade-left")
                .bg4.p-3.mb-3.px-4
                  .py-2
                  h5.mb-4 Incluye:
                  ul.lista-ul--color
                    li.d-flex
                      i.fas.fa-chevron-circle-right
                      p.mb-0 Trazado de moldes básicos (delanteros y posteriores).
                    li.d-flex
                      i.fas.fa-chevron-circle-right
                      p.mb-0 Desarrollo de prendas superiores e inferiores.
                    li.d-flex
                      i.fas.fa-chevron-circle-right
                      p.mb-0 Elaboración de componentes como cuellos, escotes, mangas, puños, ribetes, bolsillos y charreteras.
                    li.d-flex
                      i.fas.fa-chevron-circle-right
                      p.mb-0 Aplicación en líneas de vestuario infantil, femenina y masculina.
                    li.d-flex
                      i.fas.fa-chevron-circle-right
                      p.mb-0 Diseño de colecciones en función de universos de vestuario y ocasiones de uso.
              .col-lg-6.d-none.d-lg-block(data-aos="fade-right")
                img.img-a.img-t.der(src='@/assets/curso/Tema1/img04.png', alt='')
      
      .row.justify-content-start.mb-4(data-aos="zoom-in-left")
        .col-sm-12.col-lg-7
          .d-flex.align-items-center.mt-4
            img.w-card-icon(src="@/assets/curso/Tema1/ico1.svg")
            h3.bg2.py-2.w-card-text Patronaje sobre medidas

      .row.justify-content-center.align-items-center.mb-4
        .col-lg-5
          img(src='@/assets/curso/Tema1/img05.png', alt='')
        .col-lg-7
          .row.justify-content-center.align-items-center.mb-3
            .col-lg-2
              img(src='@/assets/curso/Tema1/ico3.svg', alt='')
            .col-lg-10
              p El patronaje sobre medidas se enfoca en la creación de prendas exclusivas y personalizadas, diseñadas para adaptarse con exactitud a las características morfológicas de cada cliente; este tipo de patronaje se utiliza especialmente en marcas de autor, alta costura y confección especializada.
          p.bg5.p-4 El proceso inicia con la toma detallada de medidas antropométricas, seguido de la confección de una prenda de prueba (muselina) para validar el ajuste y realizar correcciones antes de la elaboración definitiva.

      p.mb-4 Se emplean principalmente dos técnicas:
    



  </template>

<script>
export default {
  name: 'Tema1',
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

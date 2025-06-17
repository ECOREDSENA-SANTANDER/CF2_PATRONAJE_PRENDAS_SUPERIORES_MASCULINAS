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
          
      .row.justify-content-center.align-items-center.mb-2
        .col-lg-6.mb-4.col-md-8
          .titulo-sexto.color-acento-contenido(data-aos='fade-right')
            h5 Figura 1.
            span Plano en 3D
          figure
            img(src='@/assets/curso/Tema1/figura1.svg', alt='Cubo en dos enfoques. El primero indica su forma tridimensional usando líneas continuas y segmentadas. El segundo lo ubica dentro de un sistema de coordenadas con tres ejes: X (horizontal), Y (vertical) y Z (profundidad), facilitando su comprensión espacial.')
        .col-lg-6.col-md-8  
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
        .col-lg-5.col-md-6
          img.w-card-icon.mb-3(src="@/assets/curso/Tema1/img02.png")
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
        .col-lg-1.col-3.mb-3
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
        .col-lg-5.mb-4
          img(src='@/assets/curso/Tema1/img05.png', alt='')
        .col-lg-7
          .row.justify-content-center.align-items-center.mb-3
            .col-lg-2.col-3.mb-3
              img(src='@/assets/curso/Tema1/ico3.svg', alt='')
            .col-lg-10
              p El patronaje sobre medidas se enfoca en la creación de prendas exclusivas y personalizadas, diseñadas para adaptarse con exactitud a las características morfológicas de cada cliente; este tipo de patronaje se utiliza especialmente en marcas de autor, alta costura y confección especializada.
          p.bg5.p-4 El proceso inicia con la toma detallada de medidas antropométricas, seguido de la confección de una prenda de prueba (muselina) para validar el ajuste y realizar correcciones antes de la elaboración definitiva.

      p.mb-4 Se emplean principalmente dos técnicas:
      
      .tarjeta--container.row.mb-5
        .col-md.tarjeta.bgfondotar1.p-4.p-md-4.p-lg-5(data-aos="fade-right")
          .row.justify-content-center.mb-4
            .col-12
              .row.align-items-end
                .col-lg-3.mb-4
                  img.img-a.img-t(src='@/assets/curso/Tema1/img06.png', alt='Imagen decorativa.')
                .col-lg-6
                  h3.mb-4.bgverde.text-white.borde-redondo-der.p-2 Levantamiento en plano
                .col-lg-10 
                  p.mb-4 Similar al industrial, pero con mayor libertad para ajustes personalizados y aplicación de fórmulas específicas según el cuerpo del cliente.
        .col-md.tarjeta.bgfondotar2.p-4.p-md-4.p-lg-5(data-aos="fade-left")
          .row.justify-content-center.mb-1
            .col-12
              .row.align-items-end
                .col-lg-3.mb-4
                  img.img-a.img-t(src='@/assets/curso/Tema1/img07.png', alt='Imagen decorativa.')
                .col-lg-9
                  h3.mb-4.bgrojo.text-white.borde-redondo-der.p-2 Patronaje sobre maniquí #[em (moulage)]
                .col-lg-10
                  p.mb-0 Se trabaja directamente sobre el maniquí, ideal para prendas complejas como vestidos de gala, trajes nupciales, ropa infantil detallada o piezas de sastrería fina.

      .row.justify-content-center.align-items-center.mb-3
        .col-lg-12
          .bg3.mb-0
            .row.justify-content-center.align-items-center.mb-0
              .col-lg-6(data-aos="fade-left")
                .bg3.p-3.mb-3.px-4
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
                      p.mb-0 Creación de componentes específicos como cuellos, escotes, mangas, puños, ribetes, bolsillos y charreteras.

                    li.d-flex
                      i.fas.fa-chevron-circle-right
                      p.mb-0 Aplicación en todas las líneas: infantil, femenina y masculina.

                    li.d-flex
                      i.fas.fa-chevron-circle-right
                      p.mb-0 Diseño adaptado a universos de vestuario y ocasiones de uso específicas.
              .col-lg-6.d-none.d-lg-block(data-aos="fade-right")
                img.img-a.img-t.der(src='@/assets/curso/Tema1/img08.png', alt='')

      .row.justify-content-center.align-items-center.mb-3
        .col-lg-12
          .titulo-sexto.color-acento-contenido(data-aos='fade-right')
            h5 Figura 5.
            span Patronaje sobre maniquí
          figure
            img(src='@/assets/curso/Tema1/figura5.png', alt='La imagen representa una etapa del patronaje tridimensional, en la cual un profesional ajusta directamente la prenda sobre un maniquí para definir líneas de diseño, caídas de tela y proporciones. Este procedimiento permite modelar la prenda con precisión sobre una estructura corporal simulada antes de trasladarla al patrón definitivo.')
      p En los procesos productivos de la industria de la confección, las fichas técnicas son herramientas clave que guían el trabajo de cada integrante del equipo; estas fichas detallan de forma clara las especificaciones, materiales, secuencia de ensamblaje y requerimientos técnicos de cada prenda, garantizando uniformidad y precisión en la producción.

      separador
      #t_1_2.titulo-segundo.mb-5
        h2 1.2 Procedimiento y metodologías

      .row.justify-content-center.align-items-center.mb-5.bg5
        .col-lg-3.d-none.d-lg-block(data-aos="fade-right")
          img.img-a.img-t.izq(src='@/assets/curso/Tema1/img09.png', alt='')
        .col-lg-9
          .bg5.mb-0.p-4.izq
            p La confección de prendas a la medida requiere un procedimiento sistemático que garantice la calidad y la fidelidad al diseño solicitado por el cliente; El proceso debe seguir una secuencia estructurada de pasos que aseguren el cumplimiento de criterios técnicos, funcionales y estéticos, permitiendo que el producto final responda de manera efectiva a las expectativas del usuario.

      .tarjeta.color-primario.p-3(data-aos="fade").mb-4
        .row.justify-content-around.align-items-center.p-3
          .col-3.col-sm-2.col-lg-1
            img(src="@/assets/curso/Tema1/pdf.png")
          .col
            .row.justify-content-between.align-items-center
              .col.mb-3.mb-sm-0
                h4.mb-1 Pasos para definir el patronaje 
                p.mb-0 Para ampliar y profundizar en los contenidos abordados, se recomienda consultar el siguiente documento:
              .col-sm-auto
                a.boton.color-acento-botones.texto-blanco(href="https://sena4.sharepoint.com/sites/VirtualizacionRED/Documentos%20compartidos/Forms/AllItems.aspx?id=%2Fsites%2FVirtualizacionRED%2FDocumentos%20compartidos%2F2025%2FLP%2DSantander%2FCOMPLEMENTARIAS%2FAdaptación%20a%20partir%20de%20Tituladas%2FPatronaje%20de%20prendas%20superiores%20Masculinas%20de%20Moda%20casual%2F1%2E%20FinalxVirtualizar%2FContenidos%2FCF02%2FFormatos%20DI%2FANEXOS%20CF2%20PRENDAS%20MASCULINAS%2F1%2E%20Anexo%201%2E%20Pasos%20para%20definir%20el%20patronaje%2Epdf&parent=%2Fsites%2FVirtualizacionRED%2FDocumentos%20compartidos%2F2025%2FLP%2DSantander%2FCOMPLEMENTARIAS%2FAdaptación%20a%20partir%20de%20Tituladas%2FPatronaje%20de%20prendas%20superiores%20Masculinas%20de%20Moda%20casual%2F1%2E%20FinalxVirtualizar%2FContenidos%2FCF02%2FFormatos%20DI%2FANEXOS%20CF2%20PRENDAS%20MASCULINAS" target="_blank")
                  span Descargar
                    i.fas.fa-file-download.p-2

      AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--azul")
        .row.justify-content-center(titulo="Metodología – manual de patronaje SENA")
          .col-lg-2.col-10.mb-3.col-md-6
            figure
              img(src='@/assets/curso/Tema1/img10.png', alt='Texto que describa la imagen')
          .col-lg-10.mb-4.mb-md-0
            p El manual de patronaje del SENA constituye una guía técnica elaborada por expertos en diseño y confección, respaldada por profesionales con amplia experiencia en el sector textil. Su propósito es ofrecer una metodología clara, progresiva y didáctica que facilite la comprensión del patronaje desde el análisis morfológico del cuerpo humano. El manual está disponible en versión oficial para su consulta y aplicación tanto en contextos educativos como productivos.
          
        .row.justify-content-center(titulo="Metodología: convenciones técnicas del patronaje")
          .col-lg-2.col-10.mb-3.col-md-6
            figure
              img(src='@/assets/curso/Tema1/img11.png', alt='Texto que describa la imagen')
          .col-lg-10.mb-4.mb-md-0
            p En el desarrollo de patrones, el uso correcto de convenciones gráficas es esencial para la interpretación técnica, el trazado y el corte de piezas. Estos símbolos y signos permiten comprender los planos sin necesidad de explicaciones extensas, favoreciendo la comunicación visual entre diseñadores, patronistas y confeccionistas.
            p Cada pieza del patrón debe estar claramente rotulada con la siguiente información:
          ul.lista-ul--color.bg3.p-3.text-center
              li
                i.fas.fa-chevron-circle-right.px-4
                | Nombre de la pieza
                i.fas.fa-chevron-circle-right.px-4
                | Referencia o código
                i.fas.fa-chevron-circle-right.px-4
                | Talla
                i.fas.fa-chevron-circle-right.px-4
                | Nombre del patronista
                i.fas.fa-chevron-circle-right.px-4
                | Símbolos de corte (hilo, doblez, dirección)
              li
                i.fas.fa-chevron-circle-right.px-4
                | Cantidad de veces que se debe cortar
                i.fas.fa-chevron-circle-right.px-4
                | Piquetes de confección
                i.fas.fa-chevron-circle-right.px-4
                | Líneas de aplome o ajuste
          p.text-center Adicionalmente, pueden incluirse detalles como instrucciones de estampado, especificaciones de color o material, acabados especiales, y ubicación de componentes como bolsillos o cierres.

        .row.justify-content-center(titulo="Trazado y escalas")
          .col-lg-2.col-10.mb-3.col-md-6
            figure
              img(src='@/assets/curso/Tema1/img12.png', alt='Texto que describa la imagen')
          .col-lg-10.mb-4.mb-md-0
            p El trazado técnico parte del uso de formas geométricas básicas (horizontal, vertical, perpendicular, diagonal, curva, vértice, ángulo recto, etc.), iniciando siempre desde un rectángulo base que se construye según el contorno y largo del cuerpo. Esta estructura sirve como soporte para el desarrollo de las demás líneas del patrón.
            p Para representar los patrones, se emplean escalas gráficas que permiten trabajar en tamaño real o reducido. Las más utilizadas son:
          .row.justify-content-end
            .col-lg-11
              ul.lista-ul--color.text-center.bg3.p-3
                li
                  i.fas.fa-chevron-circle-right.px-4
                  | Escala 1:1. Tamaño real
                  i.fas.fa-chevron-circle-right.px-4
                  | Escala 1:2. Mitad del tamaño
                  i.fas.fa-chevron-circle-right.px-4
                  | Escala 1:4. Cuarta parte del tamaño        
              p.text-center El trabajo en escala reducida es especialmente útil para construir y analizar patrones base de forma más práctica y económica.


        .row.justify-content-center(titulo="Materiales recomendados para trabajar el manual") 
          .col-lg-6.mb-4.mb-md-0
            p Para garantizar precisión y calidad en el desarrollo del patronaje, se recomienda el uso de las siguientes herramientas:
            ul.lista-ul--color
              li
                i.fas.fa-chevron-circle-right
                | Regla mágica (60 x 5 cm con cuadrícula y ángulo de 45 °).
              li
                i.fas.fa-chevron-circle-right
                | Curvígrafo para el diseño de curvas.

              li
                i.fas.fa-chevron-circle-right
                | Cinta métrica (en centímetros).

              li
                i.fas.fa-chevron-circle-right
                | Esfero de tinta negra para marcar sobre papel o tela.

              li
                i.fas.fa-chevron-circle-right
                | Lápiz o portaminas (HB, 2H, 0.5 mm, 0.7 mm, 0.2 mm).


              li
                i.fas.fa-chevron-circle-right
                | Cinta adhesiva invisible para montaje sobre papel.

              li
                i.fas.fa-chevron-circle-right
                | Tijeras para papel, preferiblemente con filo de titanio.

              li
                i.fas.fa-chevron-circle-right
                | Papel blanco tipo #[em manifold], ideal para trazos limpios y visibles.
              li
                i.fas.fa-chevron-circle-right
                | Juego de reglas de patronaje: incluye sisómetro, curvas y escuadra.
          .col-lg-6.mb-4.col-md-6
            figure
              img(src='@/assets/curso/Tema1/img13.png', alt='Texto que describa la imagen')

          p Estas herramientas, junto con el dominio de las convenciones técnicas, son imprescindibles para lograr un patronaje profesional, estandarizado y técnicamente sólido.

      .tarjeta.color-primario.p-3(data-aos="fade").mb-4
        .row.justify-content-around.align-items-center.p-3
          .col-3.col-sm-2.col-lg-1
            img(src="@/assets/curso/Tema1/pdf.png")
          .col
            .row.justify-content-between.align-items-center
              .col.mb-3.mb-sm-0
                h4.mb-1 Manual de patronaje básico e interpretación de diseños
                p.mb-0 Conozca y maneje las diferentes simbologías, que facilitan los procesos técnicos de patronaje y corte en el siguiente documento:
              .col-sm-auto
                a.boton.color-acento-botones.texto-blanco(href="https://sena4.sharepoint.com/:b:/r/sites/VirtualizacionRED/Documentos%20compartidos/2025/LP-Santander/COMPLEMENTARIAS/Adaptaci%C3%B3n%20a%20partir%20de%20Tituladas/Patronaje%20de%20prendas%20superiores%20Masculinas%20de%20Moda%20casual/1.%20FinalxVirtualizar/Contenidos/CF02/Formatos%20DI/ANEXOS%20CF2%20PRENDAS%20MASCULINAS/Manual_patronaje_basico_interpretacion_disenos.PDF?csf=1&web=1&e=GHHGzG" target="_blank")
                  span Descargar
                    i.fas.fa-file-download.p-2

























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

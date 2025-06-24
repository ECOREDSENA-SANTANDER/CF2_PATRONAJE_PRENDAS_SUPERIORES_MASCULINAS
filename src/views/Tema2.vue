<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Prepatronaje masculino y construcción de bases
    
    .row.justify-content-center.align-items-center.mb-5.bg1
        .col-lg-3.d-none.d-lg-block(data-aos="fade-right")
          img.img-a.img-t.izq(src='@/assets/curso/Tema2/img01.png', alt='')
        .col-lg-9
          .bg1.mb-0.p-4.izq
            p Antes de iniciar la elaboración de moldes para prendas masculinas, es esencial considerar una serie de elementos previos que garantizan un desarrollo óptimo del diseño y confección. Esta fase inicial se denomina análisis de prepatronaje, y su adecuada comprensión permite establecer las bases correctas para la creación de patrones.
    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-sm-12.col-lg-7
        .d-flex.align-items-center.mt-4
          img.w-card-icon(src="@/assets/curso/Tema1/ico1.svg")
          h3.bg2.py-2.w-card-text Análisis de prepatronaje  
    p.mb-4 El proceso de patronaje masculino parte siempre de la construcción de patrones base, los cuales actúan como punto de partida para derivar moldes básicos. Este análisis incluye los siguientes aspectos fundamentales:

    .row.justify-content-center.mb-5
      .col-lg-5.col-8
        img.mb-3(src="@/assets/curso/Tema2/img02.png")
      .col-lg-7
        .tarjeta.fondoslyder.p-4
          SlyderA(tipo="b").fondoblanco.p-4
            .row
              .col-md-12.mb-4.mb-md-0
                h5 a)	Tipo de plano
                p Se debe identificar el tipo de plano con el que se trabajará: plano unido, separado o montado. Esta decisión influye en la manera en que se representarán las piezas en el papel.
            .row
              .col-md-12.mb-4.mb-md-0
                h5 b)	Rectángulo base
                p Todo trazo básico se construye a partir de un rectángulo inicial. Este se forma con:
                ul.lista-ul--color
                  li.d-flex
                    i.fas.fa-circle-play
                    |El contorno más sobresaliente de la parte del cuerpo a trabajar.
                  li.d-flex
                    i.fas.fa-circle-play
                    |El largo correspondiente a dicha parte corporal.
            .row
              .col-md-12.mb-4.mb-md-0
                h5 c)	Medida más prominente
                p Por convención, se utilizan letras para representar ciertas medidas. En patronaje masculino, la medida más protuberante del torso es el contorno de pecho, representado por la letra “P”.
                ul.lista-ul--color
                  li.d-flex
                    i.fas.fa-circle-play
                    |P = Contorno de pecho (talla de referencia).
               
            .row
              .col-md-12.mb-4.mb-md-0
                h5 d)	Medida de mayor longitud
                p El largo del rectángulo se basa en la medida más extensa de la prenda según la zona del cuerpo:
                ul.lista-ul--color
                  li.d-flex
                    i.fas.fa-circle-play
                    |Pantalón: largo total del pantalón.

                  li.d-flex
                    i.fas.fa-circle-play
                    |Falda: altura hasta la rodilla.
                  li.d-flex
                    i.fas.fa-circle-play
                    |Prenda superior: largo del talle posterior.

            .row
              .col-md-12.mb-4.mb-md-0
                h5 e)	Medidas empleadas en el trazo
                p La metodología emplea medidas deducidas. Usualmente, solo se toman del cuadro de tallas el contorno y el largo. Otras medidas, como hombros, cuello o anchos, se obtienen mediante fórmulas específicas.
                p Ejemplo:
                ul.lista-ul--color
                  li.d-flex
                    i.fas.fa-circle-play
                    |Cuello posterior masculino = P / 20 + 2.5
            .row
              .col-md-12.mb-4.mb-md-0
                h5 f)	Manejo del papel para trazado
                p Se recomienda utilizar papel trazo o papel #[em manifold], el cual posee dos caras:
                ul.lista-ul--color
                  li.d-flex
                    i.fas.fa-circle-play
                    |Cara lisa y brillante.
                  li.d-flex
                    i.fas.fa-circle-play
                    |Cara rugosa y opaca.
                p Para un mejor agarre del grafito y evitar reflejos molestos, se recomienda trabajar sobre la cara rugosa. Usar papel blanco también ayuda a reducir el cansancio visual.

            .row
              .col-md-12.mb-4.mb-md-0
                h5 g)	Tratamiento de siluetas
                p Las siluetas en patronaje masculino varían en cuanto a las fórmulas utilizadas, pero el procedimiento general, pasos y guías son los mismos.
    separador
    #t_2_1.titulo-segundo.mb-5
      h2 2.1  Patrón base para camisa       

    p.mb-4 El patrón base superior masculino representa la estructura inicial que se ajustará para convertirse en diferentes prendas como camisas, camisetas, chaquetas o chalecos; esta base cubre desde el cuello hasta un largo que se ubica entre la cintura y la cadera, dependiendo del diseño.

    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-sm-12.col-lg-7
        .d-flex.align-items-center.mt-4
          img.w-card-icon(src="@/assets/curso/Tema1/ico1.svg")
          h3.bg2.py-2.w-card-text Etapas para construir el patrón base superior
    
    .row.justify-content-center.align-items-center.mb-5
        .col-lg-12
          .bg6.mb-0
            .row.justify-content-center.align-items-center.mb-0
              .col-lg-6.d-none.d-lg-block(data-aos="fade-right")
                img.img-a.img-t.izq(src='@/assets/curso/Tema2/img03.png', alt='')
              .col-lg-6(data-aos="fade-left")
                .bg6.p-2.mb-3.px-4
                  .py-2
                
                  ul.lista-ul--color
                    li.d-flex
                      i.fas.fa-chevron-circle-right
                      p.mb-0 Trazado del patrón base.


                    li.d-flex
                      i.fas.fa-chevron-circle-right
                      p.mb-0 Interpretación de líneas estructurales.


                    li.d-flex
                      i.fas.fa-chevron-circle-right
                      p.mb-0 Aplicación de desahogos (ajustes en contorno, largos y anchos).


                    li.d-flex
                      i.fas.fa-chevron-circle-right
                      p.mb-0 Sistema de ajuste (según el tipo de prenda y cuerpo).


                    li.d-flex
                      i.fas.fa-chevron-circle-right
                      p.mb-0 Sistema de cierre (botonaduras, cremalleras, etc.).
                    li.d-flex
                      i.fas.fa-chevron-circle-right
                      p.mb-0 Diseño de piezas complementarias (cuellos, puños, vistas).
                    li.d-flex
                      i.fas.fa-chevron-circle-right
                      p.mb-0 Señalización técnica (marcas de guía y unión).
                    li.d-flex
                      i.fas.fa-chevron-circle-right
                      p.mb-0 Despiece del molde (separación de las piezas para corte).
              
    p.mb-4.text-center Este patrón actúa como plantilla esencial sobre la cual se realizarán las transformaciones necesarias para diseñar prendas específicas, asegurando ajuste, funcionalidad y estética.

    .row.justify-content-center.align-items-center.mb-2.bgazul.p-4
      .col-lg-12.mb-4
        .titulo-sexto.color-acento-contenido(data-aos='fade-right')
          h5 Figura 6. 
          span Base de superior masculina
      .col-lg-8.mb-4 
        figure
          img(src='@/assets/curso/Tema2/figura5_.svg', alt='Esquema técnico de un patrón base masculino para prenda superior, dividido en dos mitades: centro frente (CF) y centro atrás (CA). Se visualizan líneas de referencia, medidas proporcionales y curvas guía para hombros, sisa y cuello, acompañadas de símbolos geométricos (triángulos y flechas) que indican puntos de control y piquetes. El trazo incluye proporciones matemáticas y márgenes mínimos en milímetros, con líneas punteadas para la ubicación de pinzas.')

    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-sm-12.col-lg-7
        .d-flex.align-items-center.mt-4
          img.w-card-icon(src="@/assets/curso/Tema1/ico1.svg")
          h3.bg2.py-2.w-card-text Desarrollo de la base superior en silueta #[em slim fit]

    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/Tema2/img06.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        br
        p.mb-0 Para iniciar el trazo de la base superior, es fundamental tener un dominio previo de los patrones básicos, ya que estos constituyen el punto de partida del diseño; en este caso particular, se recomienda trabajar con el básico correspondiente a la silueta #[em slim fit], por ser una tipología ajustada que requiere precisión en la interpretación del cuerpo.
        br
        br
        p Durante este proceso formativo, se utilizará un plano de referencia que permitirá visualizar la estructura del molde. En dicho plano se identificarán elementos clave como los sistemas de cierre (por ejemplo: botones o cremalleras) y componentes complementarios que integran la prenda (cuellos, vistas, entre otros).
        br
        br
    
    p.mb-4 Para comenzar con el trazado, se debe dibujar una línea horizontal sobre el papel, la cual servirá como guía base, la cual se denominará línea de aplome o línea base de construcción, a su vez, se alinea a la profundidad de la sisa en prendas superiores y constituye el eje sobre el cual se construyen y equilibran las demás proporciones del patrón.

    .row.justify-content-center.align-items-center.mb-5.bgazul.p-4
      .col-lg-12.mb-4
        .titulo-sexto.color-acento-contenido(data-aos='fade-right')
          h5 Figura 7.
          span  Base masculino #[em slim fit]
      .col-lg-8.mb-4 
        figure
          img(src='@/assets/curso/Tema2/figura6.svg', alt='Trazo técnico de un patrón base masculino para prenda superior, dividido en centro frente (CF) y centro atrás (CA). Incluye curvas del escote, sisa y hombros, además de líneas rectas para costados y pinzas. Se exponen medidas proporcionadas con fórmulas, marcas de control y piquetes triangulares para el montaje. Las líneas punteadas y arcos sirven de guía para la construcción precisa del molde.')


    .tarjeta.color-primario.p-3(data-aos="fade").mb-4
        .row.justify-content-around.align-items-center.p-3
          .col-3.col-sm-2.col-lg-1
            img(src="@/assets/curso/Tema1/pdf.png")
          .col
            .row.justify-content-between.align-items-center
              .col.mb-3.mb-sm-0
                p.mb-1 Para ampliar y profundizar en los contenidos abordados, se recomienda consultar el siguiente documento:
                h5.mb-0 Manual de patronaje básico e interpretación de diseños. Esquema del patrón base masculino clásico y #[em slim fit], página 65 a 67.
              .col-sm-auto
                a.boton.color-acento-botones.texto-blanco(href="https://sena4.sharepoint.com/:b:/r/sites/VirtualizacionRED/Documentos%20compartidos/2025/LP-Santander/COMPLEMENTARIAS/Adaptaci%C3%B3n%20a%20partir%20de%20Tituladas/Patronaje%20de%20prendas%20superiores%20Masculinas%20de%20Moda%20casual/1.%20FinalxVirtualizar/Contenidos/CF02/Formatos%20DI/ANEXOS%20CF2%20PRENDAS%20MASCULINAS/Manual_patronaje_basico_interpretacion_disenos.PDF?csf=1&web=1&e=GHHGzG" target="_blank")
                  span Descargar
                    i.fas.fa-file-download.p-2
    .tarjeta.color-primario.p-3(data-aos="fade").mb-4
        .row.justify-content-around.align-items-center.p-3
          .col-3.col-sm-2.col-lg-1
            img(src="@/assets/curso/Tema2/video.svg")
          .col
            .row.justify-content-between.align-items-center
              .col.mb-3.mb-sm-0
                h4.mb-1 Base superior masculina #[em slim fit]
                p.mb-0 Como referencia complementaria, se sugiere visitar el siguiente video:
              .col-sm-auto
                a.boton.color-acento-botones.texto-blanco(href="https://www.youtube.com/watch?app=desktop&v=rximz1xBJM8&ab_channel=RedProducci%C3%B3ndeContenidosGrupoGesti%C3%B3nCurricularSENA" target="_blank")
                  span Ir al sitio
                    i.fas.fa-circle-play.p-2

    separador
    #t_2_2.titulo-segundo.mb-5
      h2 2.2  Patrones básicos superiores de camisa

    p.mb-4 A partir del patrón base superior masculino es posible realizar una serie de transformaciones como ampliaciones, cortes y ajustes en el largo, que permiten generar nuevas estructuras base. Dado que, estas modificaciones, aplicadas con criterios de diseño y análisis morfológico, dan origen a diversas tipologías de prendas superiores masculinas, como la camisa, la chaqueta o el chaleco.

    TabsC.color-primario.mb-5
      .relleno.py-3.py-md-4(titulo="La camisa y sus variaciones")
        .row.align-items-center.p-4
          .col-md-6.mb-4.mb-md-0
            p La confección de una camisa masculina puede iniciarse tomando las medidas directas del cliente o empleando tablas de medidas anatómicas estandarizadas. Dado que esta tipología no se caracteriza por una silueta ceñida, resulta funcional trabajar con el contorno más amplio del cuerpo como medida de referencia. Una vez construida la base, se incorporan desahogos (holguras funcionales y estéticas), el sistema de cierre como botonadura central y elementos complementarios de diseño como almillas, prenses o bolsillos de parche.
          .col-md-6
            figure
              img(src='@/assets/curso/Tema2/img07.png', alt='Texto que describa la imagen')

      
      .relleno.py-3.py-md-4(titulo="Trazo de camisa clásica")
        .row.align-items-center.p-4
          .col-md-6.mb-4.mb-md-0
            p El trazo de una camisa clásica parte de un plano esquemático de referencia en el cual se representan visualmente los desahogos, los sistemas de cierre y los componentes decorativos y funcionales (almillas, prenses, bolsillos, etc.). Este esquema debe ser interpretado como una guía orientativa sobre cómo estructurar la prenda a partir del patrón base.
          .col-md-6
            figure
              img(src='@/assets/curso/Tema2/img08.png', alt='Texto que describa la imagen')

    .row.mb-0
      .col-lg-5.d-none.d-lg-block
        img(src='@/assets/curso/Tema2/img09.png', alt='Texto que describa la imagen')
      .col-lg-7
        p.bg1.p-4 Es importante señalar que dicho plano no constituye un estándar normativo o definitivo para la construcción de camisas. Cada prenda responde a un diseño particular y debe construirse considerando variables específicas como:
        .row.justify-content-center.align-items-center.mb-3
          .col-lg-3.col-4
            img.mb-3(src='@/assets/curso/Tema2/img10.png', alt='Texto que describa la imagen')
          .col-lg-9
            ul.lista-ul--color
              li
                i.fas.fa-chevron-circle-right
                |El dibujo plano.
              li
                i.fas.fa-chevron-circle-right
                |La ficha técnica.
              li
                i.fas.fa-chevron-circle-right
                |La imagen de referencia. 
              li
                i.fas.fa-chevron-circle-right
                |Los requerimientos establecidos para producción. 

    p.mb-4 Por tanto, la correcta interpretación del diseño y su traducción al patrón dependerán de una lectura integral de todos los elementos técnicos y estéticos involucrados.

    .row.justify-content-center.align-items-center.mb-5.bgazul.p-4
      .col-lg-12.mb-4
        .titulo-sexto.color-acento-contenido(data-aos='fade-right')
          h5 Figura 8. 
          span  Camisa clásica
      .col-lg-8.mb-4 
        figure
          img(src='@/assets/curso/Tema2/figura8.svg', alt='Patrón base de una camisa masculina clásica, con las piezas de delantero, espalda, cuello y puño. Se observan líneas de costura, doblez y ubicación de botones, así como detalles del bolsillo delantero. Flechas indican la dirección del hilo y símbolos marcan los puntos clave para ensamblaje. Las medidas y anotaciones guían el trazo técnico para un armado preciso.')

    .row.justify-content-center.align-items-center.mb-4
        .col-lg-12
          .bg6.mb-0
            .row.justify-content-center.align-items-center.mb-0
              .col-lg-4.d-none.d-lg-block(data-aos="fade-right").bg7
                img.img-a.img-t.imgimportante(src='@/assets/curso/Tema2/atencion.png', alt='')
              .col-lg-8(data-aos="fade-left")
                .bg6.p-3.px-4
                  .py-2
                  h5.bg7.col-lg-2.text-center.mb-5 Nota
                  p.mb-4 para la implementación del trazo de patrones básicos superiores debe considerar lo siguiente:
                  ul.lista-ul--color
                    li.d-flex
                      i.fas.fa-chevron-circle-right
                      p.mb-0 Para una correcta referencia y contextualización en el desarrollo del trazo, es importante tener en cuenta que, si bien el manual técnico presenta un plano separado como esquema base, se recomienda trabajar directamente en plano unido. Esta modalidad facilita la verificación precisa de medidas clave como los largos y las proporciones, elementos fundamentales para garantizar coherencia con el diseño original.
                    li.d-flex
                      i.fas.fa-chevron-circle-right
                      p.mb-0 El proceso de trazo debe comenzar a partir de los patrones básicos. Para ello, se debe dibujar una línea horizontal sobre el papel, que funcionará como línea base de construcción o línea de aplome; en el caso de prendas superiores, esta línea se ubica a la altura de la profundidad de sisa, actuando como eje de alineación y equilibrio para el desarrollo del patrón.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-6
        .tarjeta.color-primario.p-3(data-aos="fade").mb-4
          .row.justify-content-around.align-items-center.p-3
            .col-3.col-sm-2.col-lg-2
              img(src="@/assets/curso/Tema1/pdf.png")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h4.mb-1 Manual de patronaje básico e interpretación de diseños
                  p.mb-0 Pasos detallados para realizar patrón camisa clásica, páginas 66 y 67.
                .col-sm-auto
                  a.boton.color-acento-botones.texto-blanco(href="https://sena4.sharepoint.com/:b:/r/sites/VirtualizacionRED/Documentos%20compartidos/2025/LP-Santander/COMPLEMENTARIAS/Adaptaci%C3%B3n%20a%20partir%20de%20Tituladas/Patronaje%20de%20prendas%20superiores%20Masculinas%20de%20Moda%20casual/1.%20FinalxVirtualizar/Contenidos/CF02/Formatos%20DI/ANEXOS%20CF2%20PRENDAS%20MASCULINAS/Manual_patronaje_basico_interpretacion_disenos.PDF?csf=1&web=1&e=GHHGzG" target="_blank")
                    span Descargar
                      i.fas.fa-file-download.p-2
      .col.lg-6
        .tarjeta.color-primario.p-3(data-aos="fade").mb-4
            .row.justify-content-around.align-items-center.p-3
              .col-3.col-sm-2.col-lg-2
                img(src="@/assets/curso/Tema2/video.svg")
              .col
                .row.justify-content-between.align-items-center
                  .col.mb-3.mb-sm-0
                    h4.mb-1 Trazo de camisa clásica
                    p.mb-0 Para ampliar y profundizar en los contenidos abordados, se recomienda consultar el siguiente enlace:
                  .col-sm-auto
                    a.boton.color-acento-botones.texto-blanco(href="https://www.youtube.com/watch?v=PKd_D-0U968&t=76s&ab_channel=RedProducci%C3%B3ndeContenidosGrupoGesti%C3%B3nCurricularSENA" target="_blank")
                      span Ir al sitio
                        i.fas.fa-circle-play.p-2

    separador
    #t_2_3.titulo-segundo.mb-5
      h2 2.3  Trazo manga camisa clásica

    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/Tema2/img11.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        br
        p.mb-0 El trazo de la manga para una camisa clásica parte de la sisa previamente construida en el cuerpo del patrón base; este proceso requiere trasladar con precisión las medidas de la curva de sisa para garantizar un ajuste funcional y estético. La manga se construye generalmente en una sola pieza, con una copa que respeta la curvatura anatómica del brazo y permite movilidad. 
        br
        br
        p En este tipo de prenda es fundamental definir adecuadamente el alto de copa, el largo total de la manga y el ancho en puño, considerando los desahogos necesarios según el tipo de tejido y el estilo de la camisa. A partir de este trazo base, pueden derivarse variaciones como la manga con pliegues, con puño recto o curvo, o con abertura de vista, según las exigencias del diseño.
        br
        br    

    .row.justify-content-center.align-items-center.mb-3.bgazul.p-4
      .col-lg-12.mb-4
        .titulo-sexto.color-acento-contenido(data-aos='fade-right')
          h5 Figura 9. 
          span  Trazo base manga clásica
      .col-lg-8.mb-4
        figure
          img(src='@/assets/curso/Tema2/figura9.svg', alt='Trazo técnico de la manga básica masculina para camisa, incluyendo detalles del puño y la tapeta. Se aprecian las curvas de sisa delantera y trasera, líneas guías verticales, flechas que indican la dirección del hilo, y símbolos de piquetes para un ensamblaje preciso. También se indican medidas de largo y contorno, junto con referencias para la colocación de aberturas y puño.')

    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-sm-12.col-lg-7
        .d-flex.align-items-center.mt-4
          img.w-card-icon(src="@/assets/curso/Tema1/ico1.svg")
          h3.bg2.py-2.w-card-text Comportamiento de las cabezas de manga


    .row.justify-content-center.align-items-center.mb-5.bg1
      .col-lg-3.d-none.d-lg-block(data-aos="fade-right")
        img.img-a.img-t.izq(src='@/assets/curso/Tema2/img12.png', alt='')
      .col-lg-9
        .bg1.mb-0.p-4.izq
          p La cabeza de la manga corresponde a la parte superior del trazo, ubicada entre los puntos extremos de la sisa delantera y posterior, con centro en la línea de aplome, su forma y altura determinan el ajuste, la movilidad y el estilo de la prenda. Existen diferentes tipos de cabezas de manga según la intención del diseño, por lo que comprender su comportamiento es esencial para evitar tensiones o restricciones en el movimiento del brazo.

    h4 Ejercicio 

    p.mb-4 En el presente ejercicio se trabajan cabezas de manga cortas, lo cual indica una orientación hacia prendas de silueta suelta o relajada.

     .row.justify-content-center.align-items-center.mb-5
        .col-lg-12
          .bg6.mb-0
            .row.justify-content-center.align-items-center.mb-0
              .col-lg-6(data-aos="fade-left")
                .bg6.p-3.mb-3.px-4
                  .py-2
                  h5.mb-4 Fórmulas generales para la deducción de la cabeza de manga
                  p A continuación, se presentan fórmulas referenciales utilizadas para calcular la altura de la copa en función del contorno total de sisa (sisa delantera + sisa posterior). Estas se adaptan según el estilo de la prenda:
                  ul.lista-ul--color
                    li.d-flex
                      i.fas.fa-chevron-circle-right
                      p.mb-0 Manga deportiva: (sisa delantera + sisa posterior) ÷ 5


                    li.d-flex
                      i.fas.fa-chevron-circle-right
                      p.mb-0 Manga casual: (sisa delantera + sisa posterior) ÷ 4


                    li.d-flex
                      i.fas.fa-chevron-circle-right
                      p.mb-0 Manga sastre / formal: (sisa delantera + sisa posterior) ÷ 3
                  p Sin embargo, para camisas clásicas y #[em slim fit], se aplican fórmulas ajustadas que priorizan la comodidad y la flexibilidad:
                  ul.lista-ul--color
                    li.d-flex
                      i.fas.fa-chevron-circle-right
                      p.mb-0 Camisa clásica: (sisa delantera + sisa posterior) ÷ 6 + 2

                    li.d-flex
                      i.fas.fa-chevron-circle-right
                      p.mb-0 Camisa #[em slim fit:] (sisa delantera + sisa posterior) ÷ 6 + 4
              .col-lg-6.d-none.d-lg-block(data-aos="fade-right")
                img.img-a.img-t.der(src='@/assets/curso/Tema2/img13.png', alt='')

    p.mb-4 Estas fórmulas reflejan un diseño con menor estructura en el primer caso y un ajuste más preciso en el segundo. La diferencia en las sumatorias finales revela que la manga de la camisa clásica ofrecerá mayor soltura y desestructuración comparada con la versión #[em slim fit].

    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-sm-12.col-lg-7
        .d-flex.align-items-center.mt-4
          img.w-card-icon(src="@/assets/curso/Tema1/ico1.svg")
          h3.bg2.py-2.w-card-text Cuellos, mangas y sus variaciones

    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/Tema2/img14.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        br
        p.mb-0 El desarrollo de mangas, cuellos y puños se fundamenta en los trazos base de las camisas clásicas y #[em slim fit], adaptándolos según los requerimientos del diseño. La manga incluye piezas complementarias como la portañuela, los prenses, pliegues y eventualmente los puños, y está directamente relacionada con la morfología de la sisa.

        br
        br
        p El trazo del cuello depende del estilo deseado y se construye con base en las medidas del escote delantero y posterior, así como el plano de la prenda de referencia. Su correcta adaptación garantiza un buen asentamiento de la prenda en la parte superior del torso.
        br
        br

    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-sm-12.col-lg-7
        .d-flex.align-items-center.mt-4
          img.w-card-icon(src="@/assets/curso/Tema1/ico1.svg")
          h3.bg2.py-2.w-card-text Recomendaciones adicionales para el largo de manga y detalles
    
    .row.justify-content-center.align-items-center.mb-5.bg3
        .col-lg-3.d-none.d-lg-block(data-aos="fade-right")
          img.img-a.img-t.izq(src='@/assets/curso/Tema2/img15.png', alt='')
        .col-lg-9
          .bg3.mb-0.p-2.izq
            p El largo de la manga y su ajuste final dependerán del tipo de puño utilizado y del comportamiento funcional deseado. Las medidas aquí presentadas son orientativas y deben ajustarse de acuerdo con los requerimientos técnicos y estéticos del diseño.
            p Para la elaboración de detalles como portañuelas, pliegues o prenses, es indispensable seguir las especificaciones del diseño original y la referencia de la prenda. 

    .tarjeta.color-primario.p-3(data-aos="fade").mb-4
        .row.justify-content-around.align-items-center.p-3
          .col-3.col-sm-2.col-lg-1
            img(src="@/assets/curso/Tema2/video.svg")
          .col
            .row.justify-content-between.align-items-center
              .col.mb-3.mb-sm-0
                h4.mb-1 Trazo de cuellos: generalidades y comportamientos
                p.mb-0 Para ampliar y profundizar en los contenidos abordados, se recomienda consultar el siguiente enlace:
              .col-sm-auto
                a.boton.color-acento-botones.texto-blanco(href="https://youtu.be/agDscYys1CY" target="_blank")
                  span Ir al sitio
                    i.fas.fa-circle-play.p-2

    separador
    #t_2_4.titulo-segundo.mb-5
      h2 2.4  Trazo camisa #[em slim fit]

    .row.mb-3
      .col-lg-5.bg66
        .row.justify-content-center.align-items-center
          .col-lg-10
            br
            p La camisa clásica #[em slim fit] para hombre es una prenda superior de confección entallada, diseñada para resaltar la silueta masculina y proyectar una estética refinada; su patronaje se distingue por líneas de costura que convergen sutilmente hacia el centro del torso, a través de entalles laterales y, en algunos casos, pinzas en el delantero o la espalda, las cuales reducen el volumen en la cintura y enfatizan el pecho y los hombros. 
      .col-lg-3.d-none.d-lg-block
        img(src="@/assets/curso/Tema2/img16.png")
      .col-lg-4
        .row.align-items-end.mt-4
          .col-lg-3.col-3
            img.mb-4(src="@/assets/curso/Tema2/img17.png")
          .col-lg-12
            p El largo del cuerpo se calcula para cubrir el tronco sin formar pliegues excesivos durante el movimiento, mientras que la sisa y las mangas se ajustan al brazo con precisión, garantizando movilidad sin sacrificar el ajuste.

    p.mb-4 Esta camisa suele incorporar tapeta frontal con botones visibles, cuello camisero con varillas internas, y puños franceses o simples, según el nivel de formalidad deseado; el diseño se completa con una espalda lisa o dividida por una basquiña, lo que favorece el calce anatómico.

    .row.justify-content-center.align-items-center.bg9.mb-5
      .col-lg-12
        .row.justify-content-center.align-items-center
          .col-lg-7.p-4
            p #[b Tapeta:] franja de tela que cubre o refuerza los botones en el frente de una prenda.

    .row.justify-content-center.align-items-center.mb-3.bgazul.p-4
      .col-lg-12.mb-4
        .titulo-sexto.color-acento-contenido(data-aos='fade-right')
          h5 Figura 10.
          span  Transformación de base a camisa #[em slim fit]
      .col-lg-6.mb-4
        figure
          img(src='@/assets/curso/Tema2/figura10.svg', alt='La figura corresponde a la transformación del patrón base hacia una camisa slim fit masculina. Se presentan las piezas delanteras y traseras con modificaciones en las líneas de entalle, pinzas en cintura, ajustes en la sisa y en los hombros, así como el desarrollo del cuello camisero y la tapeta frontal para botones. El trazo incluye referencias de medidas, ejes de simetría y puntos clave para la construcción de una prenda ajustada al cuerpo.')

    p.mb-4.text-center A continuación, se detallan los pasos para el trazo:

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-6.mb-4
        LineaTiempoD.color-acento-contenido
          .row(numero="1" titulo="Establecimiento de ejes y líneas de referencia")
            .col-md-12.mb-4.mb-md-0
              p.text-small -  Sobre el papel de patrón, marque primero el eje de simetría (línea central vertical) y, perpendicular a éste, la línea de hombro.
              p.text-small -  Desde la línea de hombro, proyecte hacia abajo la línea de talle natural a 25 cm. En ese tramo, distribuya de forma equidistante 9 cm (sisa–cintura), otros 9 cm (cintura–cadera) y, finalmente, deje 1.5 cm de margen para dobladillo.

          .row(numero="2" titulo="Delimitación del contorno del cuerpo (delantero y espalda)")
            .col-md-12.mb-4.mb-md-0
              p.text-small -  Sobre la línea de talle, dibuje la mitad del contorno de pecho más la holgura deseada, uniendo esa medida con el punto de hombro y el dobladillo para formar la línea lateral.
              p.text-small -  Aplique un margen uniforme de 1.5 cm para costura en costados y dobladillo.

          .row(numero="3" titulo="Trazado de hombro y curva de sisa")
            .col-md-12.mb-4.mb-md-0
              p.text-small -  En la línea de hombro, incline el hombro 2.5 cm hacia el cuello (tanto en delantero como en espalda) y conecte con un primer tramo de sisa que parte con un radio de 3 cm desde el hombro.
              p.text-small -  Continúe la curva de sisa hasta la línea lateral, asegurando una holgura de 1.5 cm en la unión con el costado. Esta curva se extrae en la sección superior derecha del plano para su dimensionamiento (marcas circulares y flecha de dirección de hilo).
      
          .row(numero="4" titulo="Definición de escote y vistas")
            .col-md-12.mb-4.mb-md-0
              p.text-small El orden sugerido (hombro, piquetes F/B y distribución del embebido) es el adecuado para un montaje sin frunces visibles.
          .row(numero="5" titulo="Planchar costuras abiertas y pinzas")
            .col-md-12.mb-4.mb-md-0
              p.text-small -  Marque la profundidad de escote: delantero a 9 cm bajo la línea de hombro; espalda a 3 cm.
              p.text-small -  Dibuje la curva de escote mediante radios de 8 cm (en centro) y 11 cm (en extremos), luego reserve una vista de 1.5 cm de ancho para la tapeta de cuello en el delantero.
      
      .col-lg-6.col-md-8.col-9
        img(src="@/assets/curso/Tema2/img18.png")
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-6.col-md-8.col-9
        img.mb-4(src="@/assets/curso/Tema2/img19.png")
      .col-lg-6.mb-4
        LineaTiempoD.color-acento-contenido
          .row(numero="5" titulo="Distribución de pinzas de molde")
            .col-md-12.mb-4.mb-md-0
              p.text-small -  Delantero: integre dos pinzas verticales (una central y otra lateral) con base de 2.5 cm y longitud de 11 cm, desplazadas 2.6 cm y 4 cm respectivamente desde el eje de simetría.
              p.text-small -  Espalda: trace una sola pinza central con base de 2.4 cm y 11 cm de largo, alineada al eje vertical. Las líneas de apertura de pinza se indican con ángulo de partida (flechas) y longitud según medida.

          .row(numero="6" titulo="Diseño del cuello (pie de cuello y faldón)")
            .col-md-12.mb-4.mb-md-0
              p.text-small -  Aísle la curva de escote en la sección superior izquierda para construir dos piezas:
              p.text-small 1. Pie de cuello: 7.5 cm de altura en el centro, 4.8 cm en extremos.
              p.text-small 2. Faldón de cuello: 4 cm en centro, 3.5 cm en extremos.
              p.text-small -  Separe ambas piezas con un radio de giro de 1.8 cm en el punto de pivotaje marcado.

          .row(numero="7" titulo="Pata de botones y ojales")
            .col-md-12.mb-4.mb-md-0
              p.text-small -  En el borde delantero, agregue una vista de 1.5 cm para los botones.
              p.text-small -  Represente cada ojal con un marcador circular y distáncielos uniformemente a 9 cm de separación, siguiendo la flecha que indica la dirección de montaje.
      
          .row(numero="8" titulo="Márgenes de costura, muescas y dirección de hilo")
            .col-md-12.mb-4.mb-md-0
              p.text-small -  Añada 1 cm de holgura para costura en todas las uniones (hombro, costados, sisa y dobladillo).
              p.text-small -  Señale con pequeñas muescas los puntos de encuentro de hombro, sisa y pinzas, así como las uniones de cuello y pata de botones.
              p.text-small -  Indique la dirección de hilo en cada pieza mediante flechas, para garantizar un correcto corte y ensamblaje.
          
    .row.justify-content-center.align-items-center.mb-4.bgazul.p-4
      .col-lg-12.mb-4
        .titulo-sexto.color-acento-contenido(data-aos='fade-right')
          h5 Figura 11.
          span  Trazo del plano de la manga #[em slim fit]
      .col-lg-6.mb-4
        figure
          img(src='@/assets/curso/Tema2/figura11.svg', alt='Patrón técnico de la manga básica masculina para camisa, incluyendo la pieza de tapeta. Se detallan las curvas de sisa delantera y trasera con medidas específicas, líneas de centro y flechas que indican la dirección del hilo. También se detallan marcas para la abertura del puño, piquetes de montaje y proporciones para asegurar un ensamblaje preciso y simétrico.')      
      
    .tarjeta.color-primario.p-3(data-aos="fade").mb-4
        .row.justify-content-around.align-items-center.p-3
          .col-3.col-sm-2.col-lg-1
            img(src="@/assets/curso/Tema2/video.svg")
          .col
            .row.justify-content-between.align-items-center
              .col.mb-3.mb-sm-0
                h4.mb-1 Trazo de manga, puño y cuello – camisa clásica y #[em slim fit]
                p.mb-0 Para ampliar y profundizar en los contenidos abordados, se recomienda consultar el siguiente enlace:
              .col-sm-auto
                a.boton.color-acento-botones.texto-blanco(href="https://youtu.be/ktU9DxgPvH8" target="_blank")
                  span Ir al sitio
                    i.fas.fa-circle-play.p-2


</template>

<script>
export default {
  name: 'Tema2',
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

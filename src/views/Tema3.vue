<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Proceso de comprobación del patrón para camisa
   
    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/Tema3/img01.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        br
        p.mb-0 Vale la pena señalar que la comprobación del patrón base tiene como finalidad garantizar que el corpiño y la manga básica masculina (talla 34) se ajusten con precisión a las medidas estándar, incluyendo las holguras y márgenes establecidos. Este procedimiento asegura que la prenda sea cómoda, estructuralmente equilibrada y apta tanto para la producción industrial como para confección en sastrería. Solo una vez verificada esta fidelidad se puede proceder al escalado o a modificaciones de diseño.
        br
        br

    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-sm-12.col-lg-7
        .d-flex.align-items-center.mt-4
          img.w-card-icon(src="@/assets/curso/Tema1/ico1.svg")
          h3.bg2.py-2.w-card-text Requerimientos previos
    
    .row.justify-content-center.align-items-center.mb-5
        .col-lg-12
          .bg6.mb-0
            .row.justify-content-center.align-items-center.mb-0
              .col-lg-6(data-aos="fade-left")
                .bg6.p-3.mb-3.px-4
                  .py-2
                  p.mb-4 Antes de iniciar la validación del patrón base, es imprescindible disponer de ciertos recursos y condiciones. Estos aseguran la precisión del proceso y la fiabilidad del prototipo elaborado:
                  ul.lista-ul--color
                    li.d-flex
                      i.fas.fa-chevron-circle-right
                      p.mb-0 Medidas anatómicas estandarizadas para talla 34 masculina.

                    li.d-flex
                      i.fas.fa-chevron-circle-right
                      p.mb-0 Patrón base completo (corpiño y manga), sin modificaciones.

                    li.d-flex
                      i.fas.fa-chevron-circle-right
                      p.mb-0 Tabla de holguras y márgenes de costura, según el tipo de confección.

                    li.d-flex
                      i.fas.fa-chevron-circle-right
                      p.mb-0 Superficie de trabajo plana y herramientas de trazado técnico.

                    li.d-flex
                      i.fas.fa-chevron-circle-right
                      p.mb-0 Ficha técnica de referencia con puntos críticos a verificar (largo de talle, ancho de espalda, profundidad de sisa, etc.).
              .col-lg-6.d-none.d-lg-block(data-aos="fade-right")
                img.img-a.img-t.der(src='@/assets/curso/Tema3/img02.png', alt='')


    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5.col-md-6.col-9
        img.mb-3(src='@/assets/curso/Tema3/img03.png', alt='')
      .col-lg-7
        .titulo-sexto.color-acento-contenido(data-aos='fade-right')
          h5 Tabla 1.
          span Medidas base con holguras aplicadas (Talla 34)
        .tabla-a.color-acento-botones(alt='Presenta una tabla con registro de evidencias, que organiza la información en tres columnas: Documento, Contenido y Formato. En ella se especifican tres tipos de evidencias: ficha técnica final, fotografías y patrones definitivos, junto con sus respectivos contenidos y los formatos requeridos para su entrega.') 
            table
              caption Nota: “in” = pulgadas. “≈” = aproximadamente
              thead
                tr
                  th Parámetro
                  th Medida
                  th Holgura inicial
              tbody
                tr
                  td Contorno cuello camisa.
                  td 34 cm.
                  td —
                tr
                  td Contorno pecho a saco.
                  td 86 cm (34 in).
                  td +6cm.
                tr
                  td Contorno cintura pantalón.
                  td 71 cm (28 in).
                  td +4 cm.
                tr
                  td Contorno cadera base.
                  td 86 cm (34 in).
                  td +4 cm.
                tr
                  td Ancho espalda.
                  td 40.6 cm.
                  td +0.5 cm.
                tr
                  td Ancho pecho.
                  td 36.2 cm.
                  td +0.5 cm.
                tr
                  td Largo talle.
                  td 43.7 cm.
                  td 0 cm.
                tr
                  td Altura cabeza manga camisa.
                  td 12 cm.
                  td —

    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-sm-12.col-lg-7
        .d-flex.align-items-center.mt-4
          img.w-card-icon(src="@/assets/curso/Tema1/ico1.svg")
          h3.bg2.py-2.w-card-text Márgenes de costura estándar


    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5.d-none.d-lg-block
        img(src="@/assets/curso/Tema3/img04.png")
      .col-lg-7.bg1.p-4
        .row.justify-content-center.align-items-center
          .col-lg-11.p-3
            p Para garantizar uniformidad durante el corte y la confección, se deben aplicar los siguientes márgenes:
          .row.justify-content-center.align-items-center
            .col-lg-4.d-flex
              ul.lista-ul--color
                li
                  i.fas.fa-circle-check
                  |Costados: 1 cm.
            .col-lg-5.d-flex
              ul.lista-ul--color
                li
                  i.fas.fa-circle-check
                  |Sisas y hombros: 1,5 cm.
            .col-lg-3.d-flex
              ul.lista-ul--color
                li
                  i.fas.fa-circle-check
                  |Escote: 1 cm.

            .col-lg-4.d-flex
              ul.lista-ul--color
                li
                  i.fas.fa-circle-check
                  |Cintura: 2 cm.
            .col-lg-5.d-flex
              ul.lista-ul--color
                li
                  i.fas.fa-circle-check
                  |Bajo de manga: 3 cm.


    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-sm-12.col-lg-7
        .d-flex.align-items-center.mt-4
          img.w-card-icon(src="@/assets/curso/Tema1/ico1.svg")
          h3.bg2.py-2.w-card-text Materiales y herramientas por área de trabajo
    p Esta sección detalla los materiales requeridos en cada etapa del proceso, desde el trazado hasta la documentación. Los insumos seleccionados garantizan precisión, calidad en el armado y facilidad para detectar ajustes necesarios.
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        .titulo-sexto.color-acento-contenido(data-aos='fade-right')
          h5 Tabla 2.
          span Fórmulas para deducción de medidas corporales
        .tabla-a.color-acento-botones(alt='La tabla presenta los elementos y materiales organizados por área para el proceso de comprobación. Se incluyen cinco áreas: Patronaje, Corte, Confección, Prueba y Documentación. Para cada una, se especifican los elementos necesarios y se añaden observaciones técnicas relevantes, como el etiquetado de piezas, el tipo de tela recomendado, los ajustes de tensión en la confección, los enfoques fotográficos requeridos y la necesidad de accesibilidad en los documentos digitales. ') 
            table
              thead
                tr
                  th.w-25 Área
                  th.w-50 Elementos
                  th Observaciones
              tbody
                tr
                  td #[b Patronaje]
                  td.justify-content-end Patrones impresos en cartulina; papel manilo; regla recta; curva francesa; curva sastre; escuadra; ruleta dentada; lápiz 2H; cinta adhesiva.
                  td Rotular cada pieza con nombre, talla y versión.
                tr
                  td #[b Corte]
                  td Muselina o popelina 100 % algodón sin elastano (≈ 2 m); tijeras de sastre; alfileres finos o pesos; marcador textil soluble; cinta métrica.
                  td Tela rígida facilita la lectura de ajustes.
                tr
                  td #[b Confección]
                  td Máquina recta; hilo contraste; plancha de vapor; almohadilla sastre; guía magnética de 1 cm; descosedor.
                  td Ajuste de tensión media para muselina.
                tr
                  td #[b Prueba]
                  td Maniquí regulable o modelo vivo; espejo de cuerpo entero; cámara / móvil.
                  td Fotografías frontales, laterales y posteriores.
                tr
                  td #[b Documentación]
                  td Fichas técnicas, listas de chequeo, archivador, PC con #[em software] PDF.
                  td Los PDF deben estar etiquetados para accesibilidad.
             
    .row.justify-content-center.align-items-center.mb-4
        .col-lg-12
          .bg6.mb-0
            .row.justify-content-center.align-items-center.mb-0
              .col-lg-4.d-none.d-lg-block(data-aos="fade-right").bg7
                img.img-a.img-t.imgimportante(src='@/assets/curso/Tema3/importante.png', alt='')
              .col-lg-8(data-aos="fade-left")
                .bg6.p-3.mb-3.px-4
                  .py-2
                  h5.bg7.col-lg-2.text-center Importante
                  p El #[em stay-stitch] es una costura de refuerzo que se realiza con puntada recta en los bordes curvos o inclinados de una prenda, como las sisas y escotes, para prevenir que se deformen o estiren durante el proceso de confección y manipulado. En el patronaje masculino, su aplicación es clave en prendas superiores como camisas o chaquetas, ayudando a mantener la forma del cuello, la sisa y otras áreas sesgadas. Esta costura se hace dentro del margen de costura, generalmente a unos milímetros del borde, siguiendo la dirección del hilo para asegurar que la pieza conserve su forma original.
              
    .row.justify-content-start.mb-5(data-aos="zoom-in-left")
      .col-sm-12.col-lg-7
        .d-flex.align-items-center.mt-4
          img.w-card-icon(src="@/assets/curso/Tema1/ico1.svg")
          h3.bg2.py-2.w-card-text Verificación técnica del patrón

    .row.justify-content-center.align-items-center.mb-5
        .col-lg-12
          .bg6.mb-0
            .row.justify-content-center.align-items-center.mb-0
              .col-lg-5.d-none.d-lg-block(data-aos="fade-right").bg1
                img.img-a.img-t.imgimportante(src='@/assets/curso/Tema3/boceto.png', alt='')
              .col-lg-7(data-aos="fade-left")
                .bg6.p-3.mb-3.px-4
                  .py-2
                  p Antes del corte y confección, se debe verificar que las piezas base cumplan con criterios de simetría, proporción y ajuste funcional.
                  p Puntos clave de revisión:
                  ul.lista-ul--color
                    li.d-flex
                      i.fas.fa-circle-check
                      p.mb-0 Perpendicularidad entre centro frente (CF), centro atrás (CA) y línea de cintura.
                    li.d-flex
                      i.fas.fa-circle-check
                      p.mb-0 Coincidencia de la longitud de sisa (frente + espalda) con la curva de la manga (tolerancia ≤ 0,3 cm).

                    li.d-flex
                      i.fas.fa-circle-check
                      p.mb-0 Verificación de piquetes: 1 delantero, 2 espalda, 1 hombro.


    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .titulo-sexto.color-acento-contenido(data-aos='fade-right')
          h5 Tabla 3.
          span Piezas y puntos de control clave
        .tabla-a.color-acento-botones(alt='La tabla organiza piezas clave del proceso de confección junto con sus respectivos detalles técnicos. Incluye el corpiño, que debe contar con escote limpio, costado recto, línea de sisa suave y pinza con vértice a 2 cm del busto; y la manga, que debe presentar una cabeza de 12 cm, bajo de 23,5 cm, línea de aplome centrada y piquetes correctamente ubicados.') 
            table
              thead
                tr
                  th.w-25 Pieza
                  th.w-75 Detalles técnicos
              tbody
                tr
                  td Patronaje
                  td Escote limpio, costado recto, línea de sisa suave, pinza con vértice a 2 cm del busto.
                tr
                  td Corte
                  td Cabeza de 12 cm, bajo de manga 23,5 cm, línea de aplome centrada, piquetes bien ubicados (F/B/H).
   
      separador
      #t_3_1.titulo-segundo.mb-3
        h2 3.1  Corte del prototipo            
    
    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/Tema3/img05.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        br
        p.mb-0 Esta es una etapa crucial que garantiza la precisión en la confección de la prenda. Consiste en transferir fielmente el patrón a la tela, asegurando que las piezas se tracen alineadas al hilo, se marquen correctamente los contornos, piquetes y márgenes de costura, y se realicen los cortes de forma limpia y exacta. El procedimiento permite conservar las proporciones y facilita un ensamblaje preciso en las siguientes fases del proceso.
        br
        br

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-6
        p.mb-5 pasos para seguir:
        .col-sm.mb-5.mb-sm-0
        ol.lista-ol--cuadro.lista-ol--separador
          li.d-flex 
            .lista-ol--cuadro__vineta
              span 1
            | Planchar la muselina para eliminar arrugas.

          li.d-flex 
            .lista-ol--cuadro__vineta
              span 2
            | Alinear el patrón al hilo de tela, con CF y CA paralelos al orillo.

          li.d-flex 
            .lista-ol--cuadro__vineta
              span 3
            | Marcar contornos, líneas internas y flechas de aplome.

          li.d-flex 
            .lista-ol--cuadro__vineta
              span 4
            | Añadir márgenes estándar.
          li.d-flex
            .lista-ol--cuadro__vineta
              span 5
            | Cortar manteniendo la tela plana, incluyendo piquetes de 2–3 mm.

      .col-lg-6.col-md-8.col-9
        img(src='@/assets/curso/Tema3/img06.png', alt='')
    hr.hrnaranja

    .row.justify-content-start.mb-5(data-aos="zoom-in-left")
      .col-sm-12.col-lg-7
        .d-flex.align-items-center.mt-4
          img.w-card-icon(src="@/assets/curso/Tema1/ico1.svg")
          h3.bg2.py-2.w-card-text Ensamblaje del prototipo

    .subt3.mb-5(data-aos="fade")
      h3.mb-0 Ensamblaje manual (alta costura)

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-6.mb-4
        LineaTiempoD.color-acento-contenido
          .row(numero="1" titulo="Hilvanar pinzas y pliegues")
            .col-md-12.mb-4.mb-md-0
              p.text-small Paso preliminar clave para dar forma sin comprometer aún la tela con costura definitiva.

          .row(numero="2" titulo="Unir hombros y costados (dejando CA abierto hasta la cintura)")
            .col-md-12.mb-4.mb-md-0
              p.text-small Permite mayor control del ajuste durante pruebas intermedias.

          .row(numero="3" titulo="Cerrar costura bajo-manga")
            .col-md-12.mb-4.mb-md-0
              p.text-small Se asegura continuidad entre el cuerpo y la manga.
      
          .row(numero="4" titulo="Unir manga al cuerpo")
            .col-md-12.mb-4.mb-md-0
              p.text-small El orden sugerido (hombro, piquetes F/B y distribución del embebido) es el adecuado para un montaje sin frunces visibles.
          .row(numero="5" titulo="Planchar costuras abiertas y pinzas")
            .col-md-12.mb-4.mb-md-0
              p.text-small Paso esencial para definir estructura y eliminar volumen innecesario.
      
      .col-lg-6.col-md-8.col-9
        img(src="@/assets/curso/Tema3/img07.png")

    .subt4.mb-5(data-aos="fade")
      h3.mb-0 Ensamblaje en máquina (método industrial-docente)
   

    .row.justify-content-center.align-items-center.mb-5
        .col-lg-12
          .bg6.mb-0
            .row.justify-content-center.align-items-center.mb-0
              .col-lg-5.d-none.d-lg-block(data-aos="fade-right")
                img.img-a.img-t.izq(src='@/assets/curso/Tema3/img02.png', alt='')    
              .col-lg-7(data-aos="fade-left")
                .bg6.p-1.mb-3.px-4
                  .py-2
                  p.mb-4 Es correcto mencionarlo como una modalidad distinta, aunque no se detalla en tu texto. Este método requiere la descripción de operaciones específicas, como:
                  .col-sm.mb-5.mb-sm-0
                  ol.lista-ol--cuadro.lista-ol--separador
                    li.d-flex
                      .lista-ol--cuadro__vineta
                        span 1
                      | Costura de pinzas.


                    li.d-flex 
                      .lista-ol--cuadro__vineta
                        span 2
                      | Unión de hombros y costados con márgenes estandarizados.
                    li.d-flex 
                      .lista-ol--cuadro__vineta
                        span 3
                      | Frunces en la corona de la manga.
                    li.d-flex 
                      .lista-ol--cuadro__vineta
                        span 4
                      | Montaje alineado de la manga y planchado en prensa o almohadilla sastre.

              
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7
        .titulo-sexto.color-acento-contenido(data-aos='fade-right')
          h5 Tabla 4.
          span Orden operacional industrial
        .tabla-a.color-acento-botones(alt='Secuencia de operaciones de confección para una prenda superior. Incluye pasos como el stay-stitch en sisas, costura de pinzas, unión de hombros y costados, frunces en la corona de la manga, cierre del bajo-manga y montaje de la manga. Cada operación está acompañada de instrucciones sobre tipo de puntada y configuraciones, como medidas de 2,5 mm a 4 mm, y acciones adicionales como planchar o casar piquetes para un ensamblaje preciso.') 
            table
              thead
                tr
                  th.w-25 Orden
                  th.w-75 Operación
                  th.w-75 Puntada / configuración
              tbody
                tr
                  td.text-center 0
                  td.text-center #[em Stay-stitch] en sisas a 1 cm.
                  td.text-center 2,5 mm.
                tr
                  td.text-center 1
                  td.text-center Coser pinzas.
                  td.text-center 2,5–3 mm, remate.
                tr
                  td.text-center 2
                  td.text-center Hombros (1,5 cm).
                  td.text-center Abrir y planchar.
                tr
                  td.text-center 3
                  td.text-center Costados (1 cm).
                  td.text-center Abrir y planchar.
                tr
                  td.text-center 4
                  td.text-center Dos líneas de frunce en corona (0,7 cm y 1 cm).
                  td.text-center 4 mm, sin remate.
                tr
                  td.text-center 5
                  td.text-center Cerrar bajo-manga (1 cm).
                  td.text-center Planchar hacia atrás.
                tr
                  td.text-center 6
                  td.text-center Montar manga (casar piquetes).
                  td.text-center 2,5–3 mm.
                tr
                  td.text-center 7
                  td.text-center Planchar corona sobre almohadilla.
                  td.text-center Vapor medio.

               
      .col-lg-5.d-none.d-lg-block(data-aos="fade-right")
        img(src='@/assets/curso/Tema3/img09.png', alt='')  

    













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

<style lang="sass"></style>

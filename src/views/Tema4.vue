<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Moda y sistema moda
    
    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/Tema4/img01.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        br
        p.mb-0 Una vez ensamblado el prototipo, se realiza la prueba de ajuste utilizando un maniquí regulable o un modelo vivo correspondiente a la talla 34; el proceso consiste en abrochar el centro frente (CF) y observar cuidadosamente que las líneas horizontales (pecho, cintura) se mantengan paralelas al suelo, y que las líneas verticales (costados, centro espalda) conserven su perpendicularidad. Esta verificación permite identificar desajustes estructurales, exceso o falta de holgura, deformaciones por tensión o errores en la simetría del patrón.
        br
        br
        p La prueba se complementa con un registro fotográfico desde los ángulos frontal, lateral y posterior, lo cual facilita una evaluación más objetiva y permite conservar evidencia visual del comportamiento del prototipo sobre el cuerpo.
        br
        br
    
    .row.justify-content-start.mb-2(data-aos="zoom-in-left")
      .col-sm-12.col-lg-7
        .d-flex.align-items-center.mt-4
          img.w-card-icon(src="@/assets/curso/Tema1/ico1.svg")
          h3.bg2.py-2.w-card-text Evaluación técnica con listas de chequeo

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        p Para validar el ajuste y la calidad del prototipo, se utilizan listas de chequeo que permiten comparar los criterios técnicos establecidos con el comportamiento real de la prenda; estas listas consideran aspectos como la ubicación correcta de las pinzas, la caída del hombro, el despegue de la sisa, la holgura funcional y el aplome general del conjunto corpiño-manga. Las observaciones realizadas en este punto serán la base para definir si se requiere ajustar el patrón base y repetir la prueba.
      .col-lg-2.col-8.col-md-6
        img(src="@/assets/curso/Tema4/img02.svg")

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5.col-9.col-md-6
        img.mb-4(src="@/assets/curso/Tema4/img03.png")
      .col-lg-7
        .titulo-sexto.color-acento-contenido(data-aos='fade-right')
          h5 Tabla 5.
          span Lista de chequeo del corpiño
        .tabla-a.color-acento-botones(alt='Criterios de ajuste para la verificación de una prenda superior. Se evalúan ítems como línea de pecho horizontal (paralela al suelo), posición de la pinza (2 cm antes del punto prominente), holguras en pecho y cintura, caída del hombro (15° ± 1°), sisa (despegue de 1 cm sin pellizcar), escote (plano, sin aberturas) y costado (perpendicular al piso). Incluye una columna para marcar si está correcto o requiere ajuste.') 
            table
              thead
                tr
                  th.w-50 Ítem
                  th.w-75 Criterio
                  th.w-25 OK / Ajustar
              tbody
                tr
                  td.text-center Línea pecho horizontal.
                  td.text-center Paralela al suelo.
                  td.text-center —
                tr
                  td.text-center Pinza pecho.
                  td.text-center Vértice 2 cm antes del punto más prominente.
                  td.text-center —
                tr
                  td.text-center Holgura pecho.
                  td.text-center + 6 cm ± 0,5 cm.
                  td.text-center —
                tr
                  td.text-center Holgura cintura.
                  td.text-center + 4 cm ± 0,5 cm.
                  td.text-center —
                tr
                  td.text-center Caída hombro.
                  td.text-center 15° ± 1°.
                  td.text-center —
                tr
                  td.text-center Sisa.
                  td.text-center Despegue 1 cm, sin pellizcar.
                  td.text-center —
                tr
                  td.text-center Escote.
                  td.text-center Plano, sin gape.
                  td.text-center —
                tr
                  td.text-center Costado.
                  td.text-center Perpendicular al piso.
                  td.text-center —

    p.mb-4 Esta lista de verificación permite evaluar el comportamiento del conjunto corpiño-manga tras el ensamblaje del prototipo. A través de estos criterios, se determina si las piezas interactúan correctamente, respetan las proporciones funcionales y permiten movilidad sin generar tensiones ni deformaciones visibles. Su aplicación garantiza un ajuste técnico preciso antes de aprobar el patrón definitivo.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-6.mb-4
        .titulo-sexto.color-acento-contenido(data-aos='fade-right')
          h5 Tabla 6.
          span Lista de chequeo corpiño más manga
        .tabla-a.color-acento-botones(alt='Tabla con criterios de ajuste para la manga y sisa de una prenda. Se evalúan la longitud de la sisa frente a la curva de la manga (diferencia máxima 0,3 cm), el embebido de la corona (liso, sin frunces), la alineación de piquetes (delantero, trasero y hombro), la movilidad del brazo (90° sin tirantez) y la fluidez de la línea costado-bajo-manga.') 
            table
              thead
                tr
                  th.w-50 Ítem
                  th.w-50 Criterio
                  th.w-25 OK / Ajustar
              tbody
                tr
                  td.text-center Longitud sisa vs. curva manga.
                  td.text-center Diferencia ≤ 0,3 cm.
                  td.text-center —
                tr
                  td.text-center Embebido en corona.
                  td.text-center Liso, sin frunces visibles.
                  td.text-center —
                tr
                  td.text-center Piquetes F/B/H alineados.
                  td.text-center Coinciden perfectamente.
                  td.text-center —
                tr
                  td.text-center Movimiento brazo.
                  td.text-center 90° sin tirantez.
                  td.text-center —
                tr
                  td.text-center Línea costado-bajo-manga.
                  td.text-center Fluida, sin quiebres.
                  td.text-center —
      .col-lg-6.col-9
        img(src="@/assets/curso/Tema4/img04.png")

    .row.justify-content-center.align-items-center.mb-4
        .col-lg-12
          .bg6.mb-0
            .row.justify-content-center.align-items-center.mb-0
              .col-lg-4.d-none.d-lg-block(data-aos="fade-right").bg7
                img.img-a.img-t.imgimportante(src='@/assets/curso/Tema3/importante.png', alt='')
              .col-lg-8(data-aos="fade-left")
                .bg6.p-3.mb-3.px-4
                  .py-2
                  h5.bg7.col-lg-2.text-center Nota
                  p El símbolo ≤ significa “menor o igual que”. Se usa en matemáticas y medidas para indicar que un valor puede ser igual o menor que el número al que acompaña. 
                  p Por ejemplo: si se escribe: diferencia ≤ 0,3 cm, esto indica que la diferencia no debe superar los 0,3 cm; puede ser 0,3 cm o cualquier valor menor.

    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-sm-12.col-lg-7
        .d-flex.align-items-center.mt-4
          img.w-card-icon(src="@/assets/curso/Tema1/ico1.svg")
          h3.bg2.py-2.w-card-text Transferencia de ajustes y repetición de prueba

    p.mb-4 Cuando durante la prueba se detectan desajustes que afectan la estructura o el confort de la prenda, se deben aplicar correcciones sobre el patrón base; con este procedimiento se asegura que el patrón evolucione progresivamente hacia una versión final precisa y funcional.

    .row.justify-content-center.align-items-center.mb-1
      .col-lg-6
        p.mb-4 Pasos para la transferencia de ajustes:
        .col-sm.mb-5.mb-sm-0
        ol.lista-ol--cuadro.lista-ol--separador
          li.d-flex 
            .lista-ol--cuadro__vineta
              span 1
            | Descoser el prototipo con cuidado, preservando las piezas en buen estado.


          li.d-flex 
            .lista-ol--cuadro__vineta
              span 2
            | Calcar las nuevas líneas directamente sobre el patrón base utilizando ruleta dentada y papel manilo.


          li.d-flex 
            .lista-ol--cuadro__vineta
              span 3
            | Truequear curvas y costados, ajustando manualmente las formas para mejorar la continuidad de líneas y aplome.


          li.d-flex 
            .lista-ol--cuadro__vineta
              span 4
            | Etiquetar la versión corregida (v2, v3…) para mantener el control de cambios.

          li.d-flex
            .lista-ol--cuadro__vineta
              span 5
            | Repetir la prueba de ajuste únicamente si los cambios aplicados superan 1 cm en zonas críticas como la sisa, el escote o la corona de manga.

      .col-lg-6.col-md-8.col-9
        img(src='@/assets/curso/Tema4/img05.png', alt='')
      hr.hrnaranja

    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-sm-12.col-lg-7
        .d-flex.align-items-center.mt-4
          img.w-card-icon(src="@/assets/curso/Tema1/ico1.svg")
          h3.bg2.py-2.w-card-text Criterios de aprobación final

    p.mb-5 Una vez realizada la prueba con el prototipo corregido, se considera que el patrón está validado si cumple con los siguientes criterios:
    
    .row.mb-4
        .col-lg-3.col-lg.mb-5.mb-lg-0.col-md-6
          .tarjeta-avatar
            img.imgavatar(src='@/assets/curso/Tema4/1.png' alt='')
            .tarjeta.avatarfondo
              .p-4
                p.mb-0.text-center Todas las mediciones están dentro de un rango de tolerancia de ± 0,5 cm con respecto a la tabla base.
        .col-lg-3.col-lg.mb-5.mb-lg-0.col-md-6
          .tarjeta-avatar
            img.imgavatar(src='@/assets/curso/Tema4/2.png' alt='')
            .tarjeta.avatarfondo
              .p-4
                p.mb-0.text-center Ausencia de arrugas radiales en busto, sisa o espalda; la corona de la manga se muestra lisa y bien embebida.

        .col-lg-3.col-lg.mb-5.mb-lg-0.col-md-6
          .tarjeta-avatar
            img.imgavatar(src='@/assets/curso/Tema4/3.png' alt='')
            .tarjeta.avatarfondo
              .p-4
                p.mb-0.text-center Costuras equilibradas y líneas de aplome continuas, sin quiebres ni desviaciones.
        
        .col-lg-3.col-lg.mb-5.mb-lg-0.col-md-6
          .tarjeta-avatar
            img.imgavatar(src='@/assets/curso/Tema4/4.png' alt='')
            .tarjeta.avatarfondo
              .p-4
                p.mb-0.text-center Movilidad funcional completa, es decir, el usuario puede elevar los brazos, girar el torso y flexionar sin generar tensiones visibles o deformaciones en la estructura de la prenda.


    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-sm-12.col-lg-7
        .d-flex.align-items-center.mt-4
          img.w-card-icon(src="@/assets/curso/Tema1/ico1.svg")
          h3.bg2.py-2.w-card-text Registro y archivado de evidencias


    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/Tema4/img06.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        br
        p.mb-0 Es una fase fundamental del proceso de comprobación del patrón base, ya que permite conservar trazabilidad sobre los avances, versiones y resultados obtenidos. La documentación es clave tanto para la validación académica como para su aplicación en contextos de producción o desarrollo de colecciones.

        br
        br
        p Se deben conservar de forma ordenada los documentos técnicos, archivos digitales, fotografías y versiones físicas de los patrones, asegurando que cada uno esté debidamente rotulado y almacenado. La información debe ser clara, accesible y estar etiquetada con fecha, responsable del proceso y versión del patrón.
        br
        br


    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7.mb-4
        .titulo-sexto.color-acento-contenido(data-aos='fade-right')
          h5 Tabla 7.
          span Registro de evidencias
        .tabla-a.color-acento-botones(alt='Tabla sobre la entrega final de documentos técnicos. Incluye la ficha técnica con medidas y responsables en PDF accesible, fotografías del modelo desde varios ángulos con brazos en diferentes posiciones, y los patrones definitivos archivados en cartapacio. Cada formato está pensado para facilitar la consulta y garantizar accesibilidad documental.') 
            table
              thead
                tr
                  th.w-50 Documento
                  th.w-75 Contenido
                  th.w-75 Formato
              tbody
                tr
                  td.text-center Ficha técnica final.
                  td.text-center Versión aprobada, medidas, responsable.
                  td.text-center PDF etiquetado + impreso.
                tr
                  td.text-center Fotografías.
                  td.text-center Frente, perfil, espalda.
                  td.text-center JPG/PNG con texto alternativo.
                tr
                  td.text-center Patrones definitivos.
                  td.text-center Corpiño y manga T-34 final.
                  td.text-center Cartapacio rotulado.
      .col-lg-5.col-9.col-md-7
        img(src="@/assets/curso/Tema4/img07.svg")


    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-sm-12.col-lg-7
        .d-flex.align-items-center.mt-4
          img.w-card-icon(src="@/assets/curso/Tema1/ico1.svg")
          h3.bg2.py-2.w-card-text Tabla de errores frecuentes y correcciones
    
    .row.justify-content-center.align-items-center.mb-5.bg1
        .col-lg-3.d-none.d-lg-block(data-aos="fade-right")
          img.img-a.img-t.izq(src='@/assets/curso/Tema4/img08.png', alt='')
        .col-lg-9
          .bg1.mb-0.p-4.izq
            p Durante la comprobación del patrón base, es común identificar errores que afectan el ajuste, la comodidad o la apariencia de la prenda; reconocer estos errores y aplicar las correcciones adecuadas permite perfeccionar el molde antes de pasar a la etapa de escalado o producción.
    p.mb-4 La siguiente tabla relaciona los errores más frecuentes observados en el desarrollo del prototipo, su posible causa técnica y las acciones recomendadas para corregir directamente en el patrón:

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-9
        .titulo-sexto.color-acento-contenido(data-aos='fade-right')
          h5 Tabla 8.
          span Errores y correcciones del básico masculino
        .tabla-a.color-acento-botones(alt='Errores comunes en prendas masculinas y sus soluciones. Incluye zonas como pecho, cintura, sisa, corona de manga y bíceps, detallando causas como falta de holgura o coronas altas. Las correcciones propuestas son ajustes en el patrón, como añadir centímetros en costados, bajar la sisa o redistribuir frunces para mejorar el calce.') 
            table
              thead
                tr
                  th.w-25 Zona
                  th.w-25 Error típico
                  th.w-25 Causa
                  th.w-75 Corrección en el patrón
              tbody
                tr
                  td.text-center Pecho
                  td.text-center Arrugas horizontales.
                  td.text-center Falta de holgura.
                  td.text-center Añadir 0,5–1 cm en costado; profundizar pinza 0,5 cm.
                tr
                  td.text-center Cintura
                  td.text-center Exceso de tela.
                  td.text-center Pinza poco profunda.
                  td.text-center Aumentar pinza 0,5 cm.
                tr
                  td.text-center Sisa
                  td.text-center Pellizca.
                  td.text-center Sisa alta.
                  td.text-center Bajar sisa 0,5 cm; suavizar curva.
                  tr
                  td.text-center Corona manga
                  td.text-center “Orejas”.
                  td.text-center Corona muy alta.
                  td.text-center Bajar corona 0,5 cm; redistribuir frunce.
                  tr
                  td.text-center Bíceps
                  td.text-center Tirantez.
                  td.text-center Ancho insuficiente.
                  td.text-center Añadir 0,5 cm en cada lado bajo-manga.
      .col-lg-3.bg8.mt-5
        .row.justify-content-center.align-items-center
          .col-lg-8.mt-4.mb-2
            p Estas correcciones deben aplicarse directamente sobre el patrón, trazando nuevamente las curvas y ajustando las piezas involucradas. Si los cambios son significativos, se recomienda generar una nueva versión del patrón y repetir la prueba de ajuste.

    .row.justify-content-center.align-items-center.mb-5.bg1
        .col-lg-9
          .bg1.mb-0.p-4.izq
            p En los procesos de patronaje, corte y confección, se emplean abreviaturas y símbolos gráficos estandarizados que permiten simplificar la lectura e interpretación de los moldes. La simbología es fundamental para garantizar la comprensión técnica entre diseñadores, patronistas, confeccionistas y aprendices.
        .col-lg-3.d-none.d-lg-block(data-aos="fade-right")
          img.img-a.img-t.der(src='@/assets/curso/Tema4/img09.png', alt='')
    p.mb-4 A continuación, se presenta una tabla con las principales abreviaturas y símbolos utilizados durante la comprobación del patrón base masculino:

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-6.mb-4
        .titulo-sexto.color-acento-contenido(data-aos='fade-right')
          h5 Tabla 9.
          span Registro de evidencias
        .tabla-a.color-acento-botones(alt='Abreviaturas y símbolos usados en patronaje. Incluye códigos como CF (centro frente), CA (centro atrás), piquetes delanteros, espalda y hombro, así como símbolos gráficos para identificar piquetes, costuras de estabilización (stay-stitch), líneas de frunce y versiones del patrón. Cada símbolo está acompañado de su significado para guiar la interpretación técnica.') 
          table
            thead
              tr
                th.w-25 Abrev./símbolo
                th.w-50 Significado
            tbody
              tr
                td.text-center CF
                td.text-center #[em Centre Front]/Centro Frente.
              tr
                td.text-center CA
                td.text-center #[em Centre Back]/Centro Atrás.
              tr
                td.text-center F
                td.text-center Piquete delantero de manga.
              tr
                td.text-center B
                td.text-center Piquete espalda de manga.
              tr
                td.text-center H
                td.text-center Piquete hombro.
              tr
                td.text-center ▲
                td.text-center Piquete.
              tr
                td.text-center —¬¬──
                td.text-center #[em Stay-stitch] (costura de estabilizado).
              tr
                td.text-center ● ●
                td.text-center Líneas de frunce.
              tr
                td.text-center v1, v2…
                td.text-center Versión del patrón.
              tr
                td.text-center ≤
                td.text-center “menor o igual que”.
              tr
                td.text-center ≥
                td.text-center “mayor o igual que”.
      .col-lg-6.col-9.col-md-7
        img(src='@/assets/curso/Tema4/img10.png', alt='')


    .row.justify-content-center.align-items-center.mb-3
      .col-lg-5.col-9.mb-4.col-md-7
        img(src='@/assets/curso/Tema4/img11.png', alt='')
      .col-lg-7
        p.bg1.p-4 El estudio del patronaje de bases superiores masculinas representa un pilar fundamental en la formación técnica para el diseño y confección de prendas de moda casual; a lo largo de este componente, se consolidaron conocimientos esenciales sobre el análisis morfológico, la estructuración de moldes base, la interpretación de planos y la aplicación precisa de técnicas de trazo, entalle y verificación.
        p Este proceso riguroso, es reforzado con prácticas de comprobación, garantizando que las prendas no solo respondan a criterios estéticos, sino que logren un ajuste anatómico funcional, favoreciendo su inserción en contextos de producción artesanal o industrial.

    .row.justify-content-center.align-items-center.mb-4
        .col-lg-12
          .bg6.mb-0
            .row.justify-content-center.align-items-center.mb-0
              .col-lg-8(data-aos="fade-left")
                .bg6.p-3.mb-3.px-4
                  .py-2
                  p La apropiación de estos saberes, acompañada por el dominio de herramientas gráficas, simbologías y procedimientos técnicos, fortalece la autonomía del aprendiz y lo capacita para desempeñarse con solvencia en el sector textil confección, con enfoque en calidad, precisión y diseño adaptado a las necesidades del mercado masculino contemporáneo.
              .col-lg-4.d-none.d-lg-block(data-aos="fade-right").bg7
                img.img-a.img-t.imgimportante(src='@/assets/curso/Tema4/importante2.png', alt='')







</template>

<script>
export default {
  name: 'Tema4',
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

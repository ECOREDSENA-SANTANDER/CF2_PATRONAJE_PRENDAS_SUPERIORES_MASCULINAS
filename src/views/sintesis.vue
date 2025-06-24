<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p El presente esquema sintetiza los componentes fundamentales del proceso de patronaje para prendas superiores masculinas, estructurado en cuatro bloques temáticos. Inicia con los principios del patronaje, sus tipos, líneas, y la metodología aplicada según el manual del SENA. Continúa con el prepatronaje y las bases para camisas, abordando tanto el trazo clásico como el estilo slim fit, así como el diseño básico de mangas. Se incluyen también las piezas complementarias como cuellos y bolsillos, esenciales para completar la prenda. Y como ultimo recuadro se detalla la comprobación del patrón base, con énfasis en los materiales necesarios, el ensamblaje técnico y los criterios de validación; esta organización permite comprender integralmente el proceso técnico y formativo en el desarrollo de moldes para camisería masculina.
    
    .row.justify-content-center
      .col-lg-12.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg", alt="Esquema sobre patronaje de bases superiores masculinas, dividido en cuatro bloques: patronaje general, bases masculinas, piezas complementarias y comprobación del patrón. Incluye subtemas como tipos de patronaje, trazo de camisas clásicas y slim fit, cuellos, bolsillos y verificación con materiales. ")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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

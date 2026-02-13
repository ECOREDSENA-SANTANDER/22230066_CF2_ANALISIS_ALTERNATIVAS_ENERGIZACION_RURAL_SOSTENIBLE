<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p El componente aborda de manera integral el análisis de las alternativas energéticas en Zonas No Interconectadas (ZNI), partiendo de la comprensión del contexto nacional y la problemática asociada a la falta de acceso al sistema interconectado nacional. Se analizan las implicaciones sociales, económicas y ambientales que enfrenta la población en estos territorios, así como la necesidad urgente de implementar soluciones energéticas sostenibles que mejoren la calidad de vida y promuevan el desarrollo local.
    p Asimismo, se introduce el marco normativo e institucional que orienta la planeación y ejecución de proyectos energéticos en Colombia, permitiendo identificar el rol de las entidades responsables, comprender la política pública vigente y alinear las iniciativas locales con la estrategia nacional de electrificación rural. Finalmente, el programa proporciona los conceptos técnicos fundamentales para la clasificación y evaluación del potencial de las diferentes fuentes energéticas, con énfasis en las fuentes no convencionales de energía renovable, facilitando que el aprendiz cuente con criterios claros para seleccionar alternativas viables y acordes con las condiciones específicas de cada ZNI.

    

    .row.justify-content-center
      .col-lg-10.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg", alt="Se presentan dos ejes principales. El primero aborda los tipos de soluciones y sus componentes esenciales, destacando el análisis multicriterio como herramienta para evaluar alternativas de generación de energía con criterios técnicos, económicos, ambientales y sociales. El segundo eje corresponde al marco normativo e institucional y al desarrollo del saber procedimental asociado a la evaluación, mediante instrumentos de planeación y criterios prácticos para la toma de decisiones informadas.")
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

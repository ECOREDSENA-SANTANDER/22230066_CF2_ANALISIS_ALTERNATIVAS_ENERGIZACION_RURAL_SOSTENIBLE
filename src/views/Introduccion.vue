<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row.justify-content-center.mb-5
      .col-sm-12.col-lg-4.d-none.d-lg-block
        img(src='@/assets/curso/temas/intro/1.png', alt='')
      .col-sm-12.col-lg-8
        p.mb-4 Este material da inicio a la fase de análisis y evaluación del programa. Una vez establecido el contexto de las Zonas No Interconectadas (ZNI), la problemática asociada al uso del diésel y el marco normativo colombiano (RA1), el proceso formativo avanza hacia la aplicación práctica de los conocimientos y la toma de decisiones fundamentadas.
        .bg-color-1.p-4.mb-4
          .row.justify-content-center.mb-0
            .col-sm-12.col-lg-2.d-none.d-lg-block
              img(src='@/assets/curso/temas/intro/2.svg', alt='')
            .col-sm-12.col-lg-10
                p.mb-0 El objetivo principal de esta unidad es proporcionar al aprendiz las herramientas conceptuales necesarias para realizar una evaluación preliminar de las diferentes alternativas tecnológicas de energización. A lo largo del contenido, se abordará la identificación de los componentes esenciales de los sistemas de generación aislada (como paneles solares, inversores y sistemas de almacenamiento en baterías), así como el funcionamiento general de las microrredes y los sistemas aislados (off - grid).
        p.mb-0 Adicionalmente, el material desarrolla los criterios de viabilidad preliminar, entre ellos la disponibilidad del recurso energético, los costos de inversión (CAPEX), los costos de operación y mantenimiento (OPEX), y la relevancia del Plan Indicativo de Cobertura (PIC) como instrumento clave de planeación. Al finalizar esta unidad, el aprendiz estará en capacidad de analizar, valorar y justificar la alternativa tecnológica más adecuada para un contexto rural específico, consolidando el proceso de análisis y evaluación. 
   
    .row.justify-content-center.align-items-center           
      .col-lg-12
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

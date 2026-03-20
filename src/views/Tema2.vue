<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Marco normativo e institucional
    
    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-12
        .bloque-texto-g.color-secundario.p-4.p-lg-5.p-md-4.mb-0
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema2/1.png')})`}"
          )
          .bloque-texto-g__texto.p-4.p-lg-5
            p.mb-0 Este componente aborda el saber de proceso de valorar (evaluar), proporcionando instrumentos de planeación y criterios prácticos para que el aprendiz tome decisiones informadas.
          
    .titulo.mb-5(data-aos="fade-left")
      img(:src="require('@/assets/curso/tema1/sub.svg')" alt='Imagen decorativa')
      h3.mb-0 Herramienta de planeación: Plan Indicativo de Cobertura (PIC)

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-8.mb-lg-0.mb-4
        .bg1.p-4
          p.mb-4.mx-lg-5 El PIC, elaborado por la Unidad de Planeación Minero Energética (UPME), es clave para planificar la electrificación:
          h5.mb-2.mx-lg-5 • Propósito
          p.mb-4.mx-lg-5 Identificar áreas sin servicio eléctrico, establecer metas de expansión y priorizar tecnologías y recursos.
          h5.mb-2.mx-lg-5 • Utilidad
          p.mb-0.mx-lg-5 – Alinea proyectos locales con la estrategia nacional.
          p.mb-0.mx-lg-5 – Facilita la obtención de apoyo institucional y financiación.
      .col-lg-4.col-md-7.col-10
        img(src='@/assets/curso/tema2/2.png', alt='')
  
    .titulo.mb-5(data-aos="fade-left")
      img(:src="require('@/assets/curso/tema1/sub.svg')" alt='Imagen decorativa')
      h3.mb-0 Criterios de viabilidad preliminar
    
    p.mb-5(data-aos="fade-right") La valoración preliminar permite decidir la alternativa más adecuada según el contexto local. Los principales criterios son:

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-10
        PasosA.color-primario.mb-0(tipo="l")
          .row.justify-content-center.align-items-center.mb-0
            .col-lg-7
              h4 Recurso energético disponible
              ul.lista-ul.mb-0
                li.d-flex.mb-1
                  i.fas.fa-check
                  p.mb-0 Determina la elección de la tecnología.
                li.d-flex.mb-1
                  i.fas.fa-check
                  p.mb-0 Ejemplos: horas de sol pico, velocidad promedio del viento, caudal de agua.
                li.d-flex.mb-0
                  i.fas.fa-check
                  p.mb-0 Se prioriza el recurso más estable y abundante. 
            .col-lg-5.cel
              figure
                img(src='@/assets/curso/tema2/3.png', alt='Texto que describa la imagen')
          .row.justify-content-center.align-items-center.mb-0
            .col-lg-5.cel
              figure
                img(src='@/assets/curso/tema2/4.png', alt='Texto que describa la imagen')
            .col-lg-7.text-start
              h4 Costo inicial versus costo operacional
              ul.lista-ul.mb-0
                li.d-flex.mb-1
                  i.fas.fa-check
                  p.mb-0 Energías Renovables No Convencionales (ERNC) solar / eólica: alto CAPEX, bajo OPEX.
                li.d-flex.mb-1
                  i.fas.fa-check
                  p.mb-0 Diésel: bajo CAPEX, alto OPEX por combustible.
                li.d-flex.mb-0
                  i.fas.fa-check
                  p.mb-0 Para sostenibilidad a largo plazo, se prefieren soluciones con bajo OPEX.
          .row.justify-content-center.align-items-center.mb-0
            .col-lg-7
              h4 Factor social y demanda
              ul.lista-ul.mb-0
                li.d-flex.mb-1
                  i.fas.fa-check
                  p.mb-0 Analiza densidad poblacional y tipo de necesidad.
                li.d-flex.mb-1
                  i.fas.fa-check
                  p.mb-0 Alta demanda concentrada: microrred.
                li.d-flex.mb-0
                  i.fas.fa-check
                  p.mb-0 Baja demanda dispersa: sistema individual.
            .col-lg-5.cel
              figure
                img(src='@/assets/curso/tema2/5.png', alt='Texto que describa la imagen')
          .row.justify-content-center.align-items-center.mb-0
            .col-lg-5.cel
              figure
                img(src='@/assets/curso/tema2/6.png', alt='Texto que describa la imagen')
            .col-lg-7.text-start
              h4 Capacidad de mantenimiento local
              ul.lista-ul.mb-0
                li.d-flex.mb-1
                  i.fas.fa-check
                  p.mb-0 Evalúa si la comunidad puede realizar mantenimiento básico.
                li.d-flex.mb-0
                  i.fas.fa-check
                  p.mb-0 Reduce dependencia de técnicos externos y mejora sostenibilidad.

    .titulo.mb-5(data-aos="fade-right")
      img(:src="require('@/assets/curso/tema1/sub.svg')" alt='Imagen decorativa')
      h3.mb-0 El proceso de selección final

    p.mb-5(data-aos="fade-left") La #[b evaluación preliminar] culmina con la justificación técnica y económica de la alternativa elegida:

    .bg3.p-lg-5.p-4.mb-5(data-aos="fade-right")
      .row.justify-content-center.align-items-center.mb-0
        .col-lg-12
          .titulo-sexto
            h5 Figura 2. 
            | Matriz de selección multiatributos general
          img.img-a.img-t(src='@/assets/curso/tema2/7.png', alt='Indica que la alternativa óptima se define como una función del recurso más abundante, un bajo costo operativo (OPEX) y la alineación con la demanda.')

    p.mb-0(data-aos="fade-left") El fin del proceso es seleccionar la tecnología que, bajo los criterios de sostenibilidad, garantice la mayor calidad de servicio con el menor costo recurrente.


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

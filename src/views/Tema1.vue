<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Tipos de soluciones y sus componentes esenciales
    
    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-12
        .bloque-texto-g.color-primario.p-4.p-lg-5.p-md-4.mb-0
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema1/1.png')})`}"
          )
          .bloque-texto-g__texto.p-4.p-lg-5
            p.mb-0 El análisis multicriterio se constituye como una herramienta fundamental para evaluar y comparar diferentes alternativas de generación de energía eléctrica, al permitir la consideración simultánea de una amplia gama de factores relevantes para el desarrollo de proyectos de energización rural. Esta metodología facilita la identificación, determinación y selección de tecnologías adecuadas para su implementación en zonas apartadas del sistema interconectado nacional.
  
    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-5
        .bg2.p-4.mb-lg-0.mb-4
          p.mb-0 De acuerdo con Baker et al. (2001), la valoración de alternativas implica la identificación y evaluación de distintos criterios, entre los que se pueden incluir el costo, la disponibilidad de recursos, el impacto ambiental, la sostenibilidad y el impacto social, entre otros. No obstante, se advierte que un número excesivo de criterios puede dificultar la realización de un análisis riguroso y eficaz. Por ello, se recomienda que los criterios seleccionados cumplan con las siguientes características:
      .col-lg-7
        ul.lista-ul.mb-0
          li.d-flex.mb-2
            i.fas.fa-lightbulb
            p.mb-0 Sean capaces de discriminar entre alternativas y permitir la comparación de su eficacia.
          li.d-flex.mb-2
            i.fas.fa-lightbulb
            p.mb-0 Sean completos, de modo que abarquen todos los objetivos del análisis.
          li.d-flex.mb-2
            i.fas.fa-lightbulb
            p.mb-0 Sean operativos y significativos para la toma de decisiones.
          li.d-flex.mb-2
            i.fas.fa-lightbulb
            p.mb-0 No presenten redundancia entre sí.
          li.d-flex.mb-2
            i.fas.fa-lightbulb
            p.mb-0 Sean pocos en número, para facilitar su aplicación.
          li.d-flex.mb-0
            i.fas.fa-lightbulb
            p.mb-0 Sean medibles, permitiendo una evaluación objetiva.

    .row.justify-content-center.mb-5(data-aos="fade-right")
      .col-lg-12
        img(src='@/assets/curso/tema1/2.png', alt='')

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-4.d-none.d-lg-block
        img(src='@/assets/curso/tema1/3.png', alt='')
      .col-lg-8
        p.mb-4 A nivel mundial se han desarrollado estudios relevantes que sirven como soporte para la toma de decisiones en la estructuración de proyectos de electrificación rural sostenible. Entre las metodologías más destacadas se encuentra la presentada en el artículo “Rural electrification options in the Brazilian amazon: a multi-criteria analysis” (2014), en el cual se propone un enfoque de análisis multicriterio para evaluar distintas alternativas de electrificación.
        .bg1.p-4.mb-0
          .row.justify-content-center.align-items.mb-lg-2.mt-lg-3
            .col-lg-2.col-md-2.col-5.mb-lg-0.mb-4
              img.img-t.img-a(src='@/assets/curso/tema1/4.svg', alt='')
            .col-lg-10.col-md-10
              p.mb-0 Este estudio define un conjunto de dieciséis (16) criterios, agrupados en dimensiones técnicas, ambientales, sociales y económicas, aplicados a la evaluación de cinco (5) opciones de electrificación en zonas de la Amazonía brasileña (presentado en la tabla 1). Dicho enfoque constituye una referencia metodológica valiosa para el análisis comparativo de alternativas energéticas en contextos rurales y aislados.

    .row.justify-content-center.align-items-center.mb-0(data-aos="fade-right")
      .col-lg-12
        .titulo-sexto
          h5 Tabla 1. 
          | Criterios seleccionados en artículo “Rural electrification options in the Brazilian amazon: a multi-criteria analysis”
    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-8
        .table-responsive
          table.tabla-a.tab1
            thead
              tr
                th Dimensión
                th Criterios considerados
            tbody
              tr
                td #[b Técnico]
                td
                  .row
                    p.mb-0 • Fiabilidad del sistema.
                    p.mb-0 • Disponibilidad del recurso energético.
                    p.mb-0 • Escalabilidad.
                    p.mb-0 • Requerimientos de operación y mantenimiento (O&M).
              tr
                td #[b Económico]
                td
                  .row
                    p.mb-0 • Costos de inversión (CAPEX).
                    p.mb-0 • Costos de operación y mantenimiento (OPEX).
                    p.mb-0 • Beneficios económicos.
                    p.mb-0 • Accesibilidad a financiación.
              tr
                td #[b Ambiental]
                td
                  .row
                    p.mb-0 • Emisiones de Gases de Efecto Invernadero (GEI).
                    p.mb-0 • Requerimientos de terreno.
                    p.mb-0 • Estrés o afectación sobre el ecosistema.
              tr
                td #[b Social]
                td
                  .row
                    p.mb-0 • Presencia de emisiones peligrosas para la salud.
                    p.mb-0 • Generación de empleo local.
                    p.mb-0 • Servicios a proveer a la población.
              tr
                td #[b Institucional / político]
                td
                  .row
                    p.mb-0 • Barreras institucionales.
                    p.mb-0 • Beneficios e incentivos.
      .col-lg-4.d-none.d-lg-block
        img(src='@/assets/curso/tema1/5.png', alt='')

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-6
        .bg2.p-4.mb-lg-0.mb-4
          p.mb-0.mx-lg-4.mt-lg-3.mb-lg-2 El estudio desarrollado por Juan C. Rojas Zerpa y José M. Yusta, titulado “Application of multicriteria decision methods for electric supply planning in rural and remote areas” (2015), presenta una revisión comparativa de diversas metodologías de análisis multicriterio aplicadas a la planificación del suministro eléctrico en zonas rurales y remotas. Entre los principales aportes, los autores analizan las ventajas y desventajas de métodos como el Proceso Analítico Jerárquico (AHP) y el método VIKOR acrónimo de #[em VIseKriterijumska Optimizacija i Kompromisno Resenje] (Optimización Multicriterio y Solución de Compromiso, en serbio), el cual resulta especialmente útil en escenarios de selección complejos.
      .col-lg-3.d-none.d-lg-block
        img(src='@/assets/curso/tema1/6.svg', alt='')
      .col-lg-3
        img.img-t.mb-2.d-none.d-lg-block(src='@/assets/curso/tema1/7.svg', alt='')
        p.mb-0 Si bien el análisis estructurado propuesto en este estudio puede resultar complejo para su implementación en contextos con disponibilidad limitada de información, el trabajo destaca la importancia de contar con herramientas que permitan apoyar la toma de decisiones de manera más objetiva y acertada en proyectos de electrificación rural.

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-4.col-md-7.col-10.mb-lg-0.mb-4
        img(src='@/assets/curso/tema1/8.png', alt='')
      .col-lg-8
        p.mb-4 Por su parte, investigadores de la Universidad Nacional de Colombia presentaron en 2016 el artículo “Matriz de selección de energías alternativas basada en análisis multiatributo para la conservación de pescado”, en el que proponen una metodología para seleccionar alternativas de generación de energía a partir de Fuentes No Convencionales de Energía Renovable (FNCER). Aunque esta propuesta no está orientada específicamente a las Zonas No Interconectadas (ZNI), resulta pertinente para el presente análisis, ya que emplea teorías de utilidad multiatributo para evaluar diferentes criterios y ofrecer una visión integral de cada alternativa energética.
        p.mb-0 Los fundamentos metodológicos de este trabajo guardan similitud con la investigación desarrollada por F. Fuso Nerini, M. Howells, M. Bazilian y M. F. Gómez, en la medida en que ambos enfoques buscan integrar múltiples dimensiones de análisis para fortalecer la toma de decisiones en proyectos energéticos, como se ilustra a continuación:

    .row.justify-content-center.align-items-center.mb-0(data-aos="fade-right")
      .col-lg-12
        .titulo-sexto
          h5 Tabla 2. 
          | Criterios seleccionados en articulo “Matriz de selección de energías alternativas basada en análisis multiatributo para la conservación de pescado”
    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-8
        .table-responsive
          table.tabla-a.tab1
            thead
              tr
                th Dimensión
                th Criterios considerados
            tbody
              tr
                td #[b Económicos]
                td
                  .row
                    p.mb-0 • Inversión inicial.
                    p.mb-0 • Insumos.
                    p.mb-0 • Mantenimiento.
                    p.mb-0 • Operación.
              tr
                td #[b Tecnológicos]
                td
                  .row
                    p.mb-0 • Tiempo de instalación.
                    p.mb-0 • Replicabilidad.
                    p.mb-0 • Proveedores.
                    p.mb-0 • Capacitación.
                    p.mb-0 • Afectación ambiental.
              tr
                td #[b Social]
                td
                  .row
                    p.mb-0 • Tipo de organización.
                    p.mb-0 • Apropiación de la tecnología.
                    p.mb-0 • Riesgo por orden público.
              tr
                td #[b Ambiental]
                td
                  .row
                    p.mb-0 • Uso del terreno.
                    p.mb-0 • Emisiones.
                    p.mb-0 • Manejo de residuos generados.
                    p.mb-0 • Afectación a vertientes de agua.
      .col-lg-4.d-none.d-lg-block
        img(src='@/assets/curso/tema1/9.png', alt='')

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-4.d-none.d-lg-block
        img(src='@/assets/curso/tema1/10.png', alt='')
      .col-lg-8
        p.mb-lg-3.mb-4 Estos métodos permiten identificar y evaluar criterios clave como la disponibilidad del recurso energético, los costos económicos, el impacto ambiental, la confiabilidad del suministro y la viabilidad técnica de las alternativas. No obstante, resulta fundamental adaptar la metodología seleccionada a las características particulares de cada contexto rural, así como considerar, cuando sea pertinente, la combinación de varias metodologías con el fin de lograr una evaluación más completa y equilibrada de las opciones energéticas. Asimismo, debe tenerse en cuenta la disponibilidad de información y de recursos técnicos necesarios para desarrollar el análisis de manera adecuada.
        .row.justify-content-center.mb-0
          .col-lg-1.col-md-2.mb-lg-0.mb-4
            img.img-a.img-t(src='@/assets/curso/tema1/11.svg', alt='')
          .col-lg-11.col-md-10
            p.mb-0 Es importante resaltar que, en los estudios revisados, los criterios suelen ser calificados mediante puntuaciones o valoraciones de carácter subjetivo, definidas a partir de la experiencia y el juicio de los autores. Estas valoraciones se integran en una matriz de análisis de alternativas. Si bien la mayoría de los criterios pueden cuantificarse con relativa facilidad, algunos requieren la participación de múltiples actores para la definición de su importancia y la asignación de ponderaciones, lo que incrementa la complejidad en la estructuración del análisis.

    p.mb-4(data-aos="fade-left") Con el fin de brindar un contexto general y sintetizar de manera gráfica las propuestas metodológicas desarrolladas por distintos autores en el análisis de alternativas energéticas, a modo de referencia se presenta un cuadro similar:

    .bg3.p-lg-5.p-4.mb-5(data-aos="fade-right")
      .row.justify-content-center.align-items-center.mb-0
        .col-lg-12
          .titulo-sexto
            h5 Figura 1. 
            | Matriz de selección multiatributos general
          .row.justify-content-center.align-items-center.mb-0
            .col-lg-7.mb-lg-0.mb-4
              img.img-a.img-t(src='@/assets/curso/tema1/12.svg', alt='Presenta un esquema general de una matriz de selección multiatributo, en la cual se comparan distintas alternativas a partir de criterios definidos. Cada alternativa es evaluada mediante una valoración asociada a cada criterio, lo que permite calcular un puntaje total y facilitar la comparación objetiva entre opciones para apoyar la toma de decisiones.')
            .col-lg-5
              p.mb-3 #[b • Alternativas:] cada fila representa una opción o alternativa a considerar.
              p.mb-3 #[b • Criterios:] estos criterios deben ser relevantes para la decisión que se quiere tomar y deben ser lo más específicos posible.
              p.mb-3 #[b • Valoración:] en cada celda, se asigna una valoración numérica a cada alternativa respecto a cada criterio. Esta valoración puede ser en una escala de 1 a 10, de 0 a 1, o cualquier otra escala que sea adecuada para el problema en cuestión.
              p.mb-0 #[b • Puntaje total:] en esta columna se calculará el puntaje total de cada alternativa, que será la suma ponderada de las valoraciones en cada criterio.

    p.mb-4(data-aos="fade-left") Asímismo, diferentes autores recomiendan realizar primero una aproximación a los recursos energéticos disponibles en la zona, tal como se evidencia en la tabla a continuación, con la intención de simplificar la selección de criterios y que el análisis de alternativas sea más sencillo.

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-12
        .titulo-sexto
          h5 Tabla 3. 
          | Aproximación a los recursos energéticos
        .table-responsive
          table.tabla-a.tab2
            thead
              tr
                th Puntuación
                th Solar
                th Eólica
                th Hidráulica
                th Biomasa
                th Interconexión al Sistema Interconectado Nacional (SIN)
            tbody
              tr.gr
                td 0
                td Radiación solar global inferior a 3 kWh/m#[sup 2]/día.
                td Velocidad del viento entre 0 y 1.9 m/s.
                td Sin información de caudal para evaluación del potencial hidroeléctrico.
                td No hay posibilidad de adquirir el recurso.
                td No hay posibilidad para ampliación de redes.
              tr.bl
                td 1
                td Radiación solar global igual a 3 kWh/m#[sup 2]/día y menor a 4 kWh/m#[sup 2]/día.
                td Velocidad del viento entre 2 y 3.9 m/s.
                td Baja disponibilidad del recurso hídrico, conocimiento de caudal y de desnivel.
                td Baja disponibilidad de recursos agrícolas, forestales, residuos urbanos
                td Redes de interconexión a menos de 2 km de distancia.
              tr.gr
                td 2
                td Radiación solar global igual a 4 kWh/m#[sup 2]/día y menor a 4.5 kWh/m#[sup 2]/día.
                td Velocidad del viento entre 4 y 7.9 m/s.
                td -
                td -
                td Redes de interconexión a menos de 1 km de distancia.
              tr.bl
                td 3
                td Radiación solar global igual o mayor a 4.5 kWh/m#[sup 2]/día.
                td Velocidad del viento igual o mayor a 8 m/s.
                td Alta disponibilidad del recurso hídrico, conocimiento de caudal y de desnivel.
                td Alta disponibilidad de recursos agrícolas, forestales, residuos urbanos.
                td Redes de interconexión a menos de 500 m de distancia.
    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-8.mb-lg-0.mb-4
        .bg3.p-lg-5.p-4
          p.mb-3 La complejidad de los estudios analizados evidencia el interés de los autores por profundizar en la selección de tecnologías de aprovechamiento energético para zonas rurales. Sin embargo, en muchos casos estas metodologías no son plenamente aplicadas debido a la dificultad para acceder a la información requerida, lo que puede retrasar la formulación y estructuración de proyectos de electrificación.
          p.mb-0 En este contexto, el presente componente desarrolla el #[b saber conceptual] sobre los #[b componentes esenciales] y los #[b tipos de soluciones de energización], permitiendo al aprendiz comprender cómo se estructuran los sistemas de generación aislada e identificar sus principales elementos. De esta manera, se busca facilitar el análisis y la aplicación práctica de alternativas tecnológicas en entornos rurales.
      .col-lg-4.col-md-7.col-10
        img(src='@/assets/curso/tema1/13.png', alt='')

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-12
        .titulo-sexto
          h5 Tabla 4. 
          | Tipos de soluciones descentralizadas para Zonas No Interconectadas (ZNI)
        .table-responsive
          table.tabla-a.tab3
            thead
              tr
                th Tipo de solución
                th Definición
                th Número de usuarios atendidos
                th Escenario de uso
                th Aplicabilidad en ZNI
            tbody
              tr
                td #[b Sistemas aislados (#[em off-grid]) / sistemas solares domésticos (SHS)]
                td Sistemas de generación totalmente independientes que abastecen una carga individual, sin conexión al SIN.
                td Un solo usuario (vivienda, puesto de salud, escuela rural).
                td Usuarios ubicados en zonas muy remotas, con demandas energéticas básicas como iluminación, radio, televisión y carga de dispositivos móviles.
                td Alta. Son una de las soluciones más comunes en ZNI dispersas y de baja demanda.
              tr
                td #[b Microrredes (#[i mini - grids])]
                td Pequeñas redes eléctricas que operan de manera autónoma, desconectadas del SIN, y distribuyen energía a varios usuarios.
                td Grupo limitado de usuarios (poblado, comunidad, centro productivo o barrio).
                td Zonas con densidad poblacional media o con cargas productivas concentradas, donde se requiere mayor potencia y continuidad del servicio.
                td Muy alta. Son una solución eficiente y escalable para comunidades rurales organizadas.
              tr
                td #[b Generación distribuida (#[em on - grid])]
                td Sistemas de generación que se conectan directamente a la red del Sistema Interconectado Nacional (SIN).
                td Usuarios conectados a la red eléctrica nacional.
                td Contextos urbanos o rurales con acceso a la infraestructura del SIN.
                td Baja o nula. No es relevante para ZNI, ya que estas zonas carecen de conexión al SIN por definición.

    .titulo.mb-5(data-aos="fade-left")
      img(:src="require('@/assets/curso/tema1/sub.svg')" alt='Imagen decorativa')
      h3.mb-0 Componentes esenciales de la generación fotovoltaica

    p.mb-5(data-aos="fade-right") La solución solar es la más común en ZNI. Conocer sus componentes es fundamental para el diagnóstico técnico.

    .row.justify-content-center.align-items-center.mb-0(data-aos="fade-left")
      .col-lg-12
        .titulo-sexto
          h5 Tabla 5. 
          | Componentes para la generación fotovoltaica
        .table-responsive
          table.tabla-a.tab4
            thead
              tr
                th Componente
                th Función primaria
                th Implicación en el sistema aislado
            tbody
              tr
                td #[b Panel fotovoltaico (módulo)]
                td Generación: convierte la luz solar en electricidad de Corriente Directa (DC).
                td Determina la potencia máxima que puede generar el sistema.
              tr
                td #[b Batería o banco de Almacenamiento]
                td Almacenamiento: acumula la energía generada para ser utilizada durante la noche o en días nublados.
                td Determina la autonomía y la cantidad de horas de servicio que se pueden ofrecer.
              tr
                td #[b Controlador de carga]
                td Protección y gestión: regula el flujo de energía del panel a la batería para evitar sobrecargas o descargas profundas.
                td Esencial para prolongar la vida útil de las costosas baterías.
              tr
                td #[b Inversor]
                td Conversión: transforma la Corriente Directa (DC) almacenada en la batería en Corriente Alterna (AC), utilizable por electrodomésticos estándar.
                td Se requiere solo si los aparatos a usar necesitan energía AC (ejemplo: nevera, ventilador).
        

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

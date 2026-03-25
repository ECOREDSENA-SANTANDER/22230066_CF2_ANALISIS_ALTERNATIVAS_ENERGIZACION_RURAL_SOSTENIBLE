<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  

      #Actividad_Cuestionario
      <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
import Actividad from 'ecored-pkg-fliz/plugin/components/actividad/Actividad.vue'

export default {
  name: 'ActividadDidactica',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema: 'Nombre del CF',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> evaluar la comprensión de los conceptos fundamentales del componente formativo.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO',
      preguntas: [
        {
          id: 1,
          texto:
            'Un sistema aislado (<em>off-grid</em>) se caracteriza porque:',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Está conectado permanentemente al Sistema Interconectado Nacional (SIN).',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Puede inyectar excedentes de energía a la red nacional.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Funciona de manera independiente sin conexión a la red eléctrica.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Depende exclusivamente de plantas diésel centrales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Ha captado con claridad los conceptos de Alternativas de energización rural.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo Alternativas de energización rural.',
        },
        {
          id: 2,
          texto:
            'La función principal del inversor en un sistema fotovoltaico es:',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Almacenar la energía en baterías.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Convertir corriente continua (DC) en corriente alterna (AC).',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Regular la carga de las baterías.',
              esCorrecta: false,
            },
            { id: 'd', texto: 'Medir la radiación solar.', esCorrecta: false },
          ],
          mensaje_correcto:
            'Ha captado con claridad los conceptos de Alternativas de energización rural.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo Alternativas de energización rural.',
        },
        {
          id: 3,
          texto:
            'El Plan Indicativo de Cobertura (PIC) es importante porque este:',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Define los costos exactos de inversión de cada tecnología.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Sustituye los estudios técnicos de viabilidad.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Presenta lineamientos y proyecciones para ampliar cobertura energética.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Garantiza la aprobación automática de proyectos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Ha captado con claridad los conceptos de Alternativas de energización rural.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo Alternativas de energización rural.',
        },
        {
          id: 4,
          texto:
            'En comparación con sistemas diésel, una microrred solar fotovoltaica generalmente presenta:',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Mayor costo de operación y mantenimiento.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Igual costo operativo en todos los casos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Menor costo de operación y mantenimiento a largo plazo.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Dependencia total del combustible fósil.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Ha captado con claridad los conceptos de Alternativas de energización rural.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo Alternativas de energización rural.',
        },
        {
          id: 5,
          texto:
            'Las baterías en sistemas de generación distribuida conectados a red:',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Son obligatorias en todos los casos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Son necesarias para convertir la energía.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'No siempre son necesarias, depende del diseño del sistema.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Reemplazan la función del inversor.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Ha captado con claridad los conceptos de Alternativas de energización rural.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo Alternativas de energización rural.',
        },
        {
          id: 6,
          texto: 'Un criterio social clave para implementar una microrred es:',
          imagen: require('@/assets/actividad/imagen6.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La distancia a la capital del departamento.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'La densidad poblacional y concentración de demanda.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'El color de las viviendas del poblado.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'El número de postes instalados.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Ha captado con claridad los conceptos de Alternativas de energización rural.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo Alternativas de energización rural.',
        },
        {
          id: 7,
          texto: 'La principal función del controlador de carga es:',
          imagen: require('@/assets/actividad/imagen7.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Convertir corriente continua en alterna.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Almacenar energía en la red pública.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Regular el flujo de energía hacia las baterías para protegerlas.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Medir la velocidad del viento.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Ha captado con claridad los conceptos de Alternativas de energización rural.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo Alternativas de energización rural.',
        },
        {
          id: 8,
          texto:
            'En la evaluación preliminar de un proyecto eólico, es fundamental analizar primero:',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El costo del transporte del personal.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'La velocidad promedio y calidad del recurso eólico.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'El número de viviendas del municipio.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'El precio del diésel en la región.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Ha captado con claridad los conceptos de Alternativas de energización rural.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo Alternativas de energización rural.',
        },
        {
          id: 9,
          texto: 'Una microrred es recomendable cuando:',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Las cargas están dispersas en grandes distancias.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'No existe ningún tipo de demanda energética.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Hay concentración de usuarios en una zona rural.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Se busca inyectar energía directamente al SIN desde una gran hidroeléctrica.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Ha captado con claridad los conceptos de Alternativas de energización rural.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo Alternativas de energización rural.',
        },
        {
          id: 10,
          texto: 'El propósito principal de una evaluación preliminar es:',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Diseñar el plano eléctrico definitivo.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Comparar alternativas técnicas, económicas y sociales para determinar viabilidad.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Ejecutar la instalación inmediata del sistema.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Sustituir el estudio financiero detallado.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Ha captado con claridad los conceptos de Alternativas de energización rural.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo Alternativas de energización rural.',
        },
        {
          id: 11,
          texto:
            'La principal ventaja de utilizar energías renovables en Zonas No Interconectadas (ZNI) es que:',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Eliminan totalmente la necesidad de mantenimiento.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Permiten generar energía limpia y reducir la dependencia del diésel.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Funcionan únicamente durante la noche.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Sustituyen completamente las redes eléctricas urbanas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Ha captado con claridad los conceptos de Alternativas de energización rural.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo Alternativas de energización rural.',
        },
        {
          id: 12,
          texto:
            'El Sistema Interconectado Nacional (SIN) en Colombia se refiere a:',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Un conjunto de sistemas aislados que funcionan independientemente.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'La red eléctrica que interconecta gran parte del territorio nacional.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Un sistema exclusivo para energías renovables.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Una red utilizada únicamente por las industrias.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Ha captado con claridad los conceptos de Alternativas de energización rural.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo Alternativas de energización rural.',
        },
        {
          id: 13,
          texto:
            'Una característica de los sistemas híbridos de generación energética es que:',
          imagen: require('@/assets/actividad/imagen6.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Utilizan una sola fuente de energía.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Combinan dos o más fuentes de generación, como solar y diésel.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Funcionan únicamente con energía hidráulica.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'No requieren sistemas de control.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Ha captado con claridad los conceptos de Alternativas de energización rural.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo Alternativas de energización rural.',
        },
        {
          id: 14,
          texto:
            'En un sistema fotovoltaico, los paneles solares tienen como función:',
          imagen: require('@/assets/actividad/imagen7.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Convertir la energía solar en energía eléctrica.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Transformar corriente alterna en continua.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Almacenar energía en baterías.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Distribuir la energía a la red nacional.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Ha captado con claridad los conceptos de Alternativas de energización rural.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo Alternativas de energización rural.',
        },
        {
          id: 15,
          texto:
            'Uno de los criterios técnicos más importantes para instalar un sistema solar fotovoltaico es:',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La cercanía a centros comerciales.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'La disponibilidad y nivel de radiación solar del lugar.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'El número de carreteras cercanas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La cantidad de postes eléctricos existentes.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Ha captado con claridad los conceptos de Alternativas de energización rural.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo Alternativas de energización rural.',
        },
        {
          id: 16,
          texto: 'El recurso eólico se refiere a:',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La cantidad de radiación solar disponible.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'La disponibilidad y comportamiento del viento en una zona.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'La cantidad de agua disponible para generación eléctrica.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'El consumo energético de una comunidad.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Ha captado con claridad los conceptos de Alternativas de energización rural.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo Alternativas de energización rural.',
        },
        {
          id: 17,
          texto:
            'Una ventaja de las microrredes en comunidades rurales es que:',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Permiten suministrar energía de forma local y autónoma.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Eliminan la necesidad de generación eléctrica.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Funcionan únicamente con combustibles fósiles.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Solo pueden instalarse en ciudades.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Ha captado con claridad los conceptos de Alternativas de energización rural.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo Alternativas de energización rural.',
        },
        {
          id: 18,
          texto: 'El análisis de demanda energética en una comunidad permite:',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Determinar cuántos paneles solares se deben instalar sin estudios adicionales.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Identificar el consumo de energía y dimensionar el sistema adecuado.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Sustituir la evaluación técnica del proyecto.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Eliminar la necesidad de baterías.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Ha captado con claridad los conceptos de Alternativas de energización rural.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo Alternativas de energización rural.',
        },
        {
          id: 19,
          texto:
            'En un proyecto de energización rural, el análisis económico permite:',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Definir el color de los paneles solares.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Estimar costos, beneficios y viabilidad financiera del proyecto.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Sustituir el análisis técnico del sistema.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Determinar la velocidad del viento.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Ha captado con claridad los conceptos de Alternativas de energización rural.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo Alternativas de energización rural.',
        },
        {
          id: 20,
          texto:
            'Las energías renovables no convencionales (ERNC) se caracterizan por:',
          imagen: require('@/assets/actividad/imagen6.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Ser fuentes de energía que se regeneran naturalmente y tienen menor impacto ambiental.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Depender exclusivamente del carbón.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Ser utilizadas únicamente en ciudades.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'No requerir estudios técnicos para su implementación.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Ha captado con claridad los conceptos de Alternativas de energización rural.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo Alternativas de energización rural.',
        },
      ],
      mensaje_final_aprobado:
        '¡Excelente trabajo! Posee una buena comprensión sobre los conceptos fundamentales para el desarrollo del componente.',
      mensaje_final_reprobado:
        'Mensaje cuando el porcentaje de respuestas correctas es inferior al 70 %	No ha superado la actividad. Se recomienda volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>

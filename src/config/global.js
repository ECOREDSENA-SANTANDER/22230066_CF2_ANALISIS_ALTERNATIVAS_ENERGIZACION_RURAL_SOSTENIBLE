export default {
  global: {
    Name: 'Alternativas de energización rural.',
    Description:
      'Este componente formativo introduce al aprendiz en el panorama de la energización en Colombia, con el propósito de establecer la base conceptual necesaria para el análisis de alternativas energéticas. El material aborda la problemática central de las Zonas No Interconectadas (ZNI), describiendo sus principales desafíos sociales, económicos y ambientales. Asimismo, presenta el marco institucional y normativo relevante, incluyendo el Ministerio de Minas y Energía (MME), el Instituto de Planificación y Promoción de Soluciones Energéticas (IPSE) y la Comisión de Regulación de Energía y Gas (CREG), junto con la clasificación de las fuentes de energía en convencionales y no convencionales. De esta manera, el aprendiz podrá describir e interpretar el escenario energético actual del país y comprender la justificación para la búsqueda de soluciones sostenibles y descentralizadas.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Tipos de soluciones y sus componentes esenciales',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Marco normativo e institucional',
        desarrolloContenidos: true,
        subMenu: [],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Tipos de soluciones y sus componentes esenciales',
      referencia:
        'Suministros del Sol. (2018). Cómo funciona una instalación solar aislada',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=BgUuwP1x9Hg',
    },
    {
      tema: 'Marco normativo e institucional',
      referencia: 'IPSE EnergiaZNI. (2023). Qué son las zonas interconectadas',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=4BBWlQXeBX0',
    },
    {
      tema: 'Marco normativo e institucional',
      referencia:
        'EcologíaVerde. (2018). ENERGÍAS RENOVABLES y NO RENOVABLES - Tipos de energía',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=Og6C1HyeaBs',
    },
  ],
  glosario: [
    {
      termino: 'Biomasa',
      significado:
        'recurso energético proveniente de residuos orgánicos de origen vegetal o animal, como restos agrícolas, forestales o estiércol. puede transformarse en energía térmica, eléctrica o biogás, aprovechando materiales disponibles localmente y reduciendo residuos.',
    },
    {
      termino: 'Carbón mineral',
      significado:
        'recurso energético fósil formado a partir de materia orgánica durante millones de años. es una fuente no renovable ampliamente utilizada en la generación de energía, pero con elevados niveles de contaminación y emisiones de gases de efecto invernadero.',
    },
    {
      termino: 'Diésel',
      significado:
        'combustible fósil líquido derivado del petróleo, utilizado comúnmente para alimentar plantas eléctricas en zonas aisladas. aunque permite una generación rápida de energía, implica altos costos de operación, transporte complejo y fuerte impacto ambiental.',
    },
    {
      termino: 'Fuente de energía convencional',
      significado:
        'conjunto de fuentes energéticas tradicionales que han sustentado históricamente la producción eléctrica, principalmente basadas en combustibles fósiles. su uso intensivo genera dependencia económica y efectos negativos sobre el medio ambiente.',
    },
    {
      termino: 'Fuente de energía no convencional (FNC)',
      significado:
        'fuentes energéticas alternativas que presentan menor impacto ambiental y mayor sostenibilidad. incluyen tecnologías renovables como la solar, eólica y biomasa, especialmente relevantes para contextos rurales y ZNI.',
    },
    {
      termino: 'Generación intermitente',
      significado:
        'forma de prestación del servicio eléctrico en la cual el suministro no está disponible de manera continua durante el día. es característica de sistemas que dependen de combustibles fósiles o de recursos limitados.',
    },
    {
      termino: 'IPSE',
      significado:
        'entidad estatal encargada de promover, estructurar y acompañar proyectos energéticos en zonas no interconectadas, con enfoque en soluciones sostenibles y adaptadas a las condiciones locales.',
    },
    {
      termino: 'PNER',
      significado:
        'programa gubernamental que define las líneas estratégicas para ampliar la cobertura eléctrica rural, priorizando comunidades dispersas y fomentando el uso de energías limpias y eficientes.',
    },
    {
      termino: 'Sostenibilidad energética',
      significado:
        'enfoque integral que busca garantizar el acceso permanente a la energía, equilibrando viabilidad económica, bienestar social y protección ambiental para las generaciones presentes y futuras.',
    },
    {
      termino: 'Sistema interconectado nacional (SIN)',
      significado:
        'infraestructura eléctrica centralizada que integra generación, transmisión y distribución de energía en gran parte del país, permitiendo un suministro continuo y estable a las zonas conectadas.',
    },
  ],
  referencias: [
    {
      referencia:
        'Congreso de la República de Colombia. (2021). Ley 2099 de 2021: Por medio de la cual se dictan disposiciones para la transición energética, la dinamización del mercado energético, la reactivación económica del país y se dictan otras disposiciones. Diario Oficial No. 51.738.',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=166326',
    },
    {
      referencia:
        'Departamento Nacional de Planeación (DNP). (2022). Plan Nacional de Desarrollo 2022–2026: Colombia potencia mundial de la vida (Capítulo de transición energética).',
      link: 'https://www.dnp.gov.co/plan-nacional-desarrollo/pnd-2022-2026',
    },
    {
      referencia:
        'Ellen MacArthur Foundation. (2017). Towards a circular economy: A business case for energy efficiency.',
      link:
        'https://content.ellenmacarthurfoundation.org/m/4384c08da576329c/original/Towards-a-circular-economy-Business-rationale-for-an-accelerated-transition.pdf',
    },
    {
      referencia:
        'Oikonomou, V. A., Gielen, D. J., & Rübbelke, D. (2020). Energy efficiency and the three pillars of sustainable development: A concise review. Energy Policy, 137, 111100. ',
    },
    {
      referencia:
        'Rincón, J. M., & Rincón, A. E. (2021). Análisis de ciclo de vida como herramienta de sostenibilidad en los proyectos de tratamientos de aguas. Revista de la Escuela Colombiana de Ingeniería, 120(2), 54–67.',
      link:
        'https://www.raco.cat/index.php/afinidad/article/download/276501/364433',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Edison Eduardo Mantilla Cuadros',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Gianmarco Serrano Cabarcas',
          cargo: 'Experto temático',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Erika Fernanda Mejía Pinzón',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Julian Fernando Vanegas Vega',
          cargo: 'Diseñador de contenidos',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Lizeth Karina Manchego Suarez',
          cargo: 'Desarrolladora <em>full stack</em>',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Maria Alejandra Vera Briceño',
          cargo: 'Animadora y productora audiovisual',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Erika Daniela Manrique Rueda',
          cargo: 'Validadora y vinculadora de recursos educativos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: '-- ',
          cargo: 'Evaluadora para contenidos inclusivos y accesibles',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}

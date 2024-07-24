export default {
  global: {
    componenteFormativo: 'Principios y control en la manipulación de alimentos',
    descripcionCurso:
      'El componente detalla la manipulación de alimentos, incluyendo métodos para conservar sus propiedades y prolongar su vida útil. Describe las responsabilidades del personal manipulador, destacando la importancia de su salud y formación en prácticas higiénicas. Además, aborda la recepción, almacenamiento, transporte de alimentos y la implementación del sistema HACCP para garantizar la seguridad alimentaria mediante la identificación y control de peligros.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
    ],
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
        titulo: 'Manipulación de alimentos',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Prácticas higiénicas y medidas de protección',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Recepción, almacenamiento y transporte',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Almacenamiento',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Transporte',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Sistema HACCP',
            hash: 't_3_3',
          },
        ],
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
        download: 'downloads/prueba.pdf',
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
      tema: 'Manipulación de alimentos',
      referencia:
        'Organización Panamericana de la Salud. (2014). <em>Manual para manipuladores de alimentos</em>. Organización Panamericana de la Salud.',
      tipo: 'Documento',
      link:
        'https://www3.paho.org/hq/dmdocuments/manual-manipuladores-alimentos-2014.pdf',
    },
    {
      tema: 'Prácticas higiénicas y medidas de protección',
      referencia:
        'World Health Organization (WHO) (2015). OMS: Las cinco claves para la inocuidad de los alimentos. [Archivo de video] Youtube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=ULZSfFVpLtQ&ab_channel=INAVIRTUAL',
    },
    {
      tema: 'Recepción, almacenamiento y transporte',
      referencia:
        'Javier Vega (2021). Conservación, almacenamiento y transporte de alimentos. Manual del Manipulador de Alimentos.',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=tgf9tPOdl8A&ab_channel=NaylaRedondoNoches',
    },
    {
      tema: 'Almacenamiento',
      referencia:
        'DesOrdenados-Podcast (2023). Tips para almacenar los alimentos correctamente. DesOrdenPodcasts (5) [Audio podcast]. YouTube Music.',
      tipo: 'Podcast',
      link: 'https://music.youtube.com/watch?v=BJkRcGBwxzo',
    },
    {
      tema: 'Almacenamiento',
      referencia:
        'MinSalud. (2017). Guía de inocuidad de  alimentos y bebidas para la actividad de transporte.',
      tipo: 'Documento',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/VS/PP/SNA/Guia-inocuidad-alimentos-transporte.pdf',
    },
    {
      tema: 'Sistema HACCP',
      referencia:
        'Alimentos Tech (2021). Sistema HACCP y PRINCIPIOS en 9 minutos',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=P_5CYCGyOCg&ab_channel=AlimentosTech',
    },
  ],
  glosario: [
    {
      termino: 'Embalaje',
      significado:
        'materiales o procedimientos que acondicionan, presentan y transportan la mercancía.',
    },
    {
      termino: 'Empaque',
      significado: 'es el encargado de cubrir promocionalmente al producto.',
    },
    {
      termino: 'Envase',
      significado:
        'es un objeto o recipiente que guarda un producto, lo protege y facilita su transporte.',
    },
    {
      termino: 'Estiba',
      significado: 'distribución y colocación adecuada de la carga.',
    },
    {
      termino: 'Etiquetado',
      significado:
        'acción que consiste en etiquetar algo o en colocar la etiqueta a una cosa.',
    },
    {
      termino: 'Formato',
      significado:
        'forma, tamaño y modo de presentación de una cosa, especialmente de un libro o publicación semejante.',
    },
    {
      termino: 'Lote',
      significado:
        'serie de números que especifican fecha de fabricación, cantidad de producción, fecha de vencimiento.',
    },
    {
      termino: 'Registro',
      significado: 'controla producción diaria, tiempo, distribución.',
    },
  ],
  referencias: [
    {
      referencia:
        'Alfaro Wisaquillo, Y. M. (2022). Conservación y manipulación de alimentos, una tarea de tod@s.',
      link:
        'https://repository.unab.edu.co/bitstream/handle/20.500.12749/16462/2022%20Alfaro%20Wisaquillo%2c%20Yudy%20Mariana.pdf?sequence=3&isAllowed=y',
    },
    {
      referencia:
        'Álvarez Rodríguez, J. C. (2023). Apoyo a la planta de carnes y embutidos de Colombia SAS.',
      link:
        'https://repositorioinstitucional.ufpso.edu.co/handle/20.500.14167/4022',
    },
    {
      referencia:
        'Apolinar, A. M. N., & Ibáñez, A. M. A. (2022). FACTORES CRÍTICOS ASOCIADOS A LA IMPLEMENTACIÓN DE UN SISTEMA HACCP EN LA INDUSTRIA DE ALIMENTOS Y BEBIDAS EN COLOMBIA. @ limentech, Ciencia y Tecnología Alimentaria, 20(1).',
      link: 'https://ojs.unipamplona.edu.co/index.php/alimen/article/view/1470',
    },
    {
      referencia:
        'Organización Mundial de la Salud. (2019). Inocuidad de los alimentos. Recuperado de',
      link: 'https://www.who.int/es/news-room/fact-sheets/detail/food-safety',
    },
    {
      referencia:
        'Sanguino Moreno, M. (2023). Estudio de caso: Impacto del sistema HACCP en la cadena de suministros en una empresa de la industria harinera.',
      link: 'https://repository.usta.edu.co/handle/11634/52634',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del Ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Olga Constanza Bermúdez Jaimes',
          cargo: 'Responsable de Línea de Producción',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Beatriz Elena Marín Rodríguez',
          cargo: 'Experta Temática',
          centro: 'Centro de Industria - Regional Tolima',
        },
        {
          nombre: 'Paola Alexandra Moya',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Blanca Flor Tinoco Torres',
          cargo: 'Diseñador de Contenidos Digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Edwin Sneider Velandia Suarez',
          cargo: 'Desarrollador Fullstack',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Jaime Hernán Tejada Llano',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para Contenidos Inclusivos y Accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Margarita Marcela Medrano Gómez',
          cargo: 'Evaluador para Contenidos Inclusivos y Accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
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
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}

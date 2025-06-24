export default {
  global: {
    Name: 'Patronaje de bases superiores masculinas',
    Description:
      'Durante el proceso formativo, se orienta al aprendiz en la interpretación y aplicación de técnicas de patronaje masculino para prendas superiores, especialmente camisas, apoyándose en referentes como el manual del SENA e incorporando convenciones gráficas propias del diseño textil. El recorrido inicia con los fundamentos del prepatronaje, siguiendo con la construcción de moldes base y el trazado de modelos en siluetas clásicas y <i>slim fit.</i>',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.svg'),
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
        titulo: 'Patronaje',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Tipos de patronaje y líneas de aplicación',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Procedimiento y metodologías',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Prepatronaje masculino y construcción de bases',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Patrón base para camisa',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Patrones básicos superiores de camisa',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Trazo manga camisa clásica',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Trazo camisa <i>slim fit</i>',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Proceso de comprobación del patrón para camisa',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Corte del prototipo',
            hash: 't_3_1',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Prueba y evaluación',
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
        download: 'downloads/ejemplo.pdf',
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
      tema: 'Patronaje básico para camisa.',
      referencia:
        'Fundación Universitaria del Área Andina. (2019). Manual digital de patronaje masculino casual.',
      tipo: 'PDF',
      link:
        'https://digitk.areandina.edu.co/bitstream/handle/areandina/4269/Trabajo%20de%20grado.pdf?isAllowed=y&sequence=1',
    },
    {
      tema: 'Patronaje básico superiores de camisa.',
      referencia:
        'Servicio Nacional de Aprendizaje (SENA). (2015). Patronaje y escalada línea masculina.',
      tipo: 'PDF',
      link:
        'https://repositorio.sena.edu.co/bitstream/11404/5245/1/patronaje_escalado_linea_masculina.pdf ',
    },
  ],
  glosario: [
    {
      termino: 'Base',
      significado:
        'representación geométrica inicial del contorno corporal, desprovista de detalles de diseño, que sirve como bloque fundamental para generar variantes de prendas.',
    },
    {
      termino: 'Entallado',
      significado:
        'proceso de incorporación de convergencias o pliegues al patrón con el fin de ceñir la prenda al cuerpo y realzar la silueta anatómica, característico del ajuste <i>slim fit.</i>',
    },
    {
      termino: 'Muesca',
      significado:
        'incisión breve en el borde del patrón que señala puntos de coincidencia (hombro, sisa, pinza) y facilita el alineamiento preciso de las piezas en confección.',
    },
    {
      termino: 'Pinza',
      significado:
        'pliegue triangular insertado en el patrón (delantero o espalda) destinado a eliminar exceso de volumen y definir anatómicamente la forma del torso.',
    },
    {
      termino: 'Prepatronaje',
      significado:
        'conjunto de procedimientos iniciales (toma de medidas y trazado de líneas guía) que establecen la estructura básica sobre la que se desarrollará el patrón.',
    },
    {
      termino: 'Silueta',
      significado:
        'contorno general de la prenda sobre el cuerpo, determinado por la distribución de holguras y entalles, que define su carácter clásico o ajustado.',
    },
    {
      termino: 'Simbología',
      significado:
        'sistema de signos gráficos (flechas, líneas de quiebre, puntos de unión) usado en el patrón para indicar dirección de corte, montajes y referencias de ensamblaje.',
    },
    {
      termino: 'Sisa',
      significado:
        'curva que delimita la unión del cuerpo con la manga; su perímetro y forma condicionan la comodidad y libertad de movimiento en la zona axilar.',
    },
    {
      termino: '<i>Slim fit</i>',
      significado:
        'silueta ajustada que reduce holguras en torso y mangas mediante convergencias precisas, realzando la anatomía sin limitar la movilidad.',
    },
    {
      termino: 'Urdimbre',
      significado:
        'dirección longitudinal de los hilos en el tejido, indicada en el patrón mediante una flecha para garantizar la caída y estabilidad dimensional de la prenda.',
    },
  ],
  referencias: [
    {
      referencia:
        'Álvarez, R. (2015). Patronaje de prendas masculinas: camisas y complementos. Editorial Diana.',
      link: '',
    },
    {
      referencia:
        'Benítez, L. (2018). Técnicas de prepatronaje: fundamentos y aplicaciones. Siglo XXI Editores Argentina.',
      link: '',
    },
    {
      referencia:
        'Córdoba, J. (2016). Manual de manga y cuellos en ropa masculina. Ediciones Magisterio.',
      link: '',
    },
    {
      referencia:
        'Díaz, M. (2019). Comprobación del patrón base: teoría y práctica. Editorial Universidad del Valle.',
      link: '',
    },
    {
      referencia:
        'Espinoza, P. (2017). Diseño y patronaje de camisas: guía práctica. Pontificia Universidad Católica de Chile.',
      link: '',
    },
    {
      referencia:
        'Fernández, G. (2020). Bases de patronaje industrial masculino. Limusa.',
      link: '',
    },
    {
      referencia:
        'García, A. (2014). El arte del patronaje: sistemas y métodos. Trillas.',
      link: '',
    },
    {
      referencia:
        'Hernández, C. (2012). Prepatronaje: teoría, métodos y aplicaciones. Porrúa.',
      link: '',
    },
    {
      referencia:
        'Ibarra, S. (2021). Patronaje digital de prendas básicas masculinas. Fontamara.',
      link: '',
    },
    {
      referencia:
        'Jiménez, M. (2013). Desarrollo de patrón base para camisas. Universidad de Antioquia Editorial.',
      link: '',
    },
    {
      referencia:
        'León, D. (2015). Técnicas de ajuste y comprobación de bases. Universidad Autónoma de Nuevo León.',
      link: '',
    },
    {
      referencia:
        'Martínez, R., & Torres, F. (2016). Patronaje de camisería masculina. Limusa.',
      link: '',
    },
    {
      referencia:
        'Ocampo, L. (2018). Simbología y señalización en patronaje. Andes.',
      link: '',
    },
    {
      referencia:
        'Pérez, J. (2017). Patronaje de cuellos y puños en camisas. Universidad de Chile Editorial.',
      link: '',
    },
    {
      referencia:
        'Sánchez, E. (2022). Bases de confección para moda masculina. Lectorum.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Paola Angélica Castro Salazar',
          cargo: 'Experta temática',
          centro: 'Centro Agroturístico – Regional Santander ',
        },
        {
          nombre: 'Sandra Paola Morales Páez',
          cargo: 'Evaluadora Instruccional',
          centro: 'Centro Agroturístico – Regional Santander ',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Edison Eduardo Mantilla Cuadros',
          cargo: 'Diseñador de contenidos',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Leonardo Castellanos Rodríguez',
          cargo: 'Desarrollador <i>full stack</i>',
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
          nombre: ' ',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: ' ',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
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

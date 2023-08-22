const admin = require('firebase-admin');
const serviceAccount = require('./s4nt14g0-m4r1n0-61b12613c214.json');

const seedData = {
    "subjects": [
      {
        "code": "4701121",
        "subject": "LENGUAJE Y COMUNICACIÓN",
        "ht": 1,
        "hp": 2,
        "hl": "-",
        "th": 3,
        "uc": 2,
        "prelation": ["[S/P]"]
      },
      {
        "code": "4703121",
        "subject": "METODOLO. DE LA INVESTIG. I",
        "ht": 1,
        "hp": 2,
        "hl": "-",
        "th": 3,
        "uc": 2,
        "prelation": ["[S/P]"]
      },
      {
        "code": "4701141",
        "subject": "MATEMÁTICA I",
        "ht": 3,
        "hp": 2,
        "hl": "-",
        "th": 5,
        "uc": 4,
        "prelation": ["[S/P]"]
      },
      {
        "code": "4702121",
        "subject": "ACTIVIDAD DE ORIENTACION",
        "ht": "-",
        "hp": 4,
        "hl": "-",
        "th": 4,
        "uc": 2,
        "prelation": ["[S/P]"]
      },
      {
        "code": "4702111",
        "subject": "EDUCACION FISICA Y DEPORTES I",
        "ht": "-",
        "hp": 2,
        "hl": "-",
        "th": 2,
        "uc": 1,
        "prelation": ["[S/P]"]
      },
      {
        "code": "4701111",
        "subject": "ACT. DE FORMACION CULTURAL I",
        "ht": "-",
        "hp": 2,
        "hl": "-",
        "th": 2,
        "uc": 1,
        "prelation": ["[S/P]"]
      },
      {
        "code": "4704121",
        "subject": "INTRO. A LA ING. DE SISTEMAS",
        "ht": 1,
        "hp": 2,
        "hl": "-",
        "th": 3,
        "uc": 2,
        "prelation": ["[S/P]"]
      },
      {
        "code": "4701131",
        "subject": "ALGEBRA I",
        "ht": 2,
        "hp": 2,
        "hl": "-",
        "th": 4,
        "uc": 3,
        "prelation": ["[S/P]"]
      },
      {
        "code": "4705121",
        "subject": "INTRODUCCION A LA COMPUTACION",
        "ht": 1,
        "hp": 2,
        "hl": "-",
        "th": 3,
        "uc": 2,
        "prelation": ["[S/P]"]
      },
      {
        "code": "4703222",
        "subject": "INTROD. A LA ADMINISTRACION",
        "ht": 1,
        "hp": 2,
        "hl": "-",
        "th": 3,
        "uc": 2,
        "prelation": ["[S/P]"]
      },
      {
        "code": "4702222",
        "subject": "ECONOMIA GENERAL",
        "ht": 2,
        "hp": "-",
        "hl": "-",
        "th": 2,
        "uc": 2,
        "prelation": ["[S/P]"]
      },
      {
        "code": "4701242",
        "subject": "MATEMÁTICA II",
        "ht": 3,
        "hp": 2,
        "hl": "-",
        "th": 5,
        "uc": 4,
        "prelation": ["4701141"]
      },
      {
        "code": "4702112",
        "subject": "EDUC., SALUD FISICA Y DEPORTES II",
        "ht": "-",
        "hp": 2,
        "hl": "-",
        "th": 2,
        "uc": 1,
        "prelation": ["[S/P]"]
      },
      {
        "code": "4701112",
        "subject": "ACT. DE FORMACION CULTURAL II",
        "ht": "-",
        "hp": 2,
        "hl": "-",
        "th": 2,
        "uc": 1,
        "prelation": ["[S/P]"]
      },
      {
        "code": "4701122",
        "subject": "INGLES I",
        "ht": 1,
        "hp": 2,
        "hl": "-",
        "th": 3,
        "uc": 2,
        "prelation": ["[S/P]"]
      },
      {
        "code": "4701232",
        "subject": "ALGEBRA LINEAL",
        "ht": 2,
        "hp": 2,
        "hl": "-",
        "th": 4,
        "uc": 3,
        "prelation": ["4701131", "4701141"]
      },
      {
        "code": "4701222",
        "subject": "LENGUAJE DE PROGRAMACION I",
        "ht": 1,
        "hp": 3,
        "hl": "-",
        "th": 4,
        "uc": 2,
        "prelation": ["4704121", "4705121"]
      },
      {
        "code": "4702232",
        "subject": "FISICA I",
        "ht": 2,
        "hp": 3,
        "hl": "-",
        "th": 5,
        "uc": 3,
        "prelation": ["4701141"]
      },
      {
        "code": "4701243",
        "subject": "MATEMÁTICA III",
        "ht": 3,
        "hp": 2,
        "hl": "-",
        "th": 5,
        "uc": 4,
        "prelation": ["4701242"]
      },
      {
        "code": "4701233",
        "subject": "CONTABILIDAD I",
        "ht": 2,
        "hp": 3,
        "hl": "-",
        "th": 5,
        "uc": 3,
        "prelation": ["[S/P]"]
      },
      {
        "code": "4701323",
        "subject": "LENGUAJE DE PROGRAMACION II",
        "ht": 1,
        "hp": 3,
        "hl": "-",
        "th": 4,
        "uc": 2,
        "prelation": ["4701222"]
      },
      {
        "code": "4701223",
        "subject": "INGLES II",
        "ht": 1,
        "hp": 2,
        "hl": "-",
        "th": 3,
        "uc": 2,
        "prelation": ["4701122"]
      },
      {
        "code": "4701333",
        "subject": "TEORIA DE SISTEMAS",
        "ht": 2,
        "hp": 2,
        "hl": "-",
        "th": 4,
        "uc": 3,
        "prelation": ["4704121"]
      },
      {
        "code": "4702243",
        "subject": "FISICA II",
        "ht": 3,
        "hp": 2,
        "hl": "-",
        "th": 5,
        "uc": 4,
        "prelation": ["4702232", "4701242"]
      },
      {
        "code": "4701324",
        "subject": "LENGUAJE DE PROGRAMACION III",
        "ht": 1,
        "hp": 3,
        "hl": "-",
        "th": 4,
        "uc": 2,
        "prelation": ["4701323"]
      },
      {
        "code": "4701244",
        "subject": "MATEMÁTICA IV",
        "ht": 3,
        "hp": 2,
        "hl": "-",
        "th": 5,
        "uc": 4,
        "prelation": ["4701243"]
      },
      {
        "code": "4701234",
        "subject": "CONTABILIDAD II",
        "ht": 2,
        "hp": 2,
        "hl": "-",
        "th": 4,
        "uc": 3,
        "prelation": ["4701233"]
      },
      {
        "code": "4702334",
        "subject": "ESTADISTICA I",
        "ht": 2,
        "hp": 3,
        "hl": "-",
        "th": 5,
        "uc": 3,
        "prelation": ["4701242"]
      },
      {
        "code": "4703334",
        "subject": "ESTRUCTURAS DISCRETAS Y GRAFOS",
        "ht": 2,
        "hp": 2,
        "hl": "-",
        "th": 4,
        "uc": 3,
        "prelation": ["4701242", "4701323"]
      },
      {
        "code": "4701224",
        "subject": "LABORATORIO DE FISICA",
        "ht": 1,
        "hp": "-",
        "hl": 3,
        "th": 4,
        "uc": 2,
        "prelation": ["4702243"]
      },
      {
        "code": "4701334",
        "subject": "ELECTIVA I",
        "ht": 3,
        "hp": "-",
        "hl": "-",
        "th": 3,
        "uc": 3,
        "prelation": ["*"]
      },
      {
        "code": "4706335",
        "subject": "PROGRAMACION NUMERICA",
        "ht": 2,
        "hp": 2,
        "hl": "-",
        "th": 4,
        "uc": 3,
        "prelation": ["4701324", "4701244"]
      },
      {
        "code": "4702335",
        "subject": "ESTADISTICA II",
        "ht": 2,
        "hp": 3,
        "hl": "-",
        "th": 5,
        "uc": 3,
        "prelation": ["4702334"]
      },
      {
        "code": "4701325",
        "subject": "TEORIA DE LA ORGANIZACION",
        "ht": 2,
        "hp": "-",
        "hl": "-",
        "th": 2,
        "uc": 2,
        "prelation": ["470-3222", "4701333"]
      },
      {
        "code": "4703335",
        "subject": "ANALISIS Y DISEÑO DE SISTEMAS",
        "ht": 2,
        "hp": 2,
        "hl": "-",
        "th": 4,
        "uc": 3,
        "prelation": ["4701333"]
      },
      {
        "code": "4704335",
        "subject": "BASE DE DATOS",
        "ht": 2,
        "hp": 2,
        "hl": "-",
        "th": 4,
        "uc": 3,
        "prelation": ["4701324", "4703334"]
      },
      {
        "code": "4701335",
        "subject": "ELECTIVA II",
        "ht": 3,
        "hp": "-",
        "hl": "-",
        "th": 3,
        "uc": 3,
        "prelation": ["*"]
      },
      {
        "code": "4705335",
        "subject": "ESTRUCTURA DE DATOS",
        "ht": 2,
        "hp": 3,
        "hl": "-",
        "th": 5,
        "uc": 3,
        "prelation": ["4701324"]
      },
      {
        "code": "4703336",
        "subject": "PROGRAMACION NO NUMERICA I",
        "ht": 2,
        "hp": 2,
        "hl": "-",
        "th": 4,
        "uc": 3,
        "prelation": ["4706335"]
      },
      {
        "code": "4701326",
        "subject": "TEORIA DE LA INFORMACION",
        "ht": 2,
        "hp": 1,
        "hl": "-",
        "th": 3,
        "uc": 2,
        "prelation": ["4703335", "4704335"]
      },
      {
        "code": "4702326",
        "subject": "INGENIERIA ECONOMICA",
        "ht": 1,
        "hp": 2,
        "hl": "-",
        "th": 3,
        "uc": 2,
        "prelation": ["4701244", "4702222"]
      },
      {
        "code": "4701236",
        "subject": "METODOLOGIA DE LA INVESTIGACION II",
        "ht": 2,
        "hp": 2,
        "hl": "-",
        "th": 4,
        "uc": 3,
        "prelation": ["4703121", "97 UCA"]
      },
      {
        "code": "4702236",
        "subject": "SISTEMAS ELECTRICOS",
        "ht": 1,
        "hp": 2,
        "hl": 3,
        "th": 6,
        "uc": 3,
        "prelation": ["4701224"]
      },
      {
        "code": "4702336",
        "subject": "SISTEMAS OPERATIVOS I",
        "ht": 2,
        "hp": 2,
        "hl": "-",
        "th": 4,
        "uc": 3,
        "prelation": ["4703335"]
      },
      {
        "code": "4701226",
        "subject": "ORGANIZACIÓN DEL COMPUTADOR",
        "ht": 1,
        "hp": 2,
        "hl": "-",
        "th": 3,
        "uc": 2,
        "prelation": ["4701324"]
      },
      {
        "code": "4701336",
        "subject": "ELECTIVA III",
        "ht": 3,
        "hp": "-",
        "hl": "-",
        "th": 3,
        "uc": 3,
        "prelation": ["*"]
      },
      {
        "code": "4700006",
        "subject": "TALLER DE INDUCCIÓN AL SERVICIO COMUNITARIO **",
        "ht": "-",
        "hp": "-",
        "hl": "-",
        "th": "-",
        "uc": "-"
      },
      {
        "code": "4703347",
        "subject": "ELECTRONICA DIGITAL",
        "ht": 2,
        "hp": 2,
        "hl": 3,
        "th": 7,
        "uc": 4,
        "prelation": ["4701226", "4702236"]
      },
      {
        "code": "4703337",
        "subject": "PROGRAMACION NO NUMERICA II",
        "ht": 2,
        "hp": 2,
        "hl": "-",
        "th": 4,
        "uc": 3,
        "prelation": ["4703336"]
      },
      {
        "code": "4702337",
        "subject": "PLANIFICACION DE SISTEMAS",
        "ht": 2,
        "hp": 2,
        "hl": "-",
        "th": 4,
        "uc": 3,
        "prelation": ["4703335", "4704335"]
      },
      {
        "code": "4701327",
        "subject": "SISTEMAS I",
        "ht": 1,
        "hp": 2,
        "hl": "-",
        "th": 3,
        "uc": 2,
        "prelation": ["4703335", "4703336"]
      },
      {
        "code": "4704337",
        "subject": "INVESTIGACION DE OPERACIONES I",
        "ht": 2,
        "hp": 2,
        "hl": "-",
        "th": 4,
        "uc": 3,
        "prelation": ["4701244", "4702335"]
      },
      {
        "code": "4701337",
        "subject": "ELECTIVA IV",
        "ht": 3,
        "hp": "-",
        "hl": "-",
        "th": 3,
        "uc": 3,
        "prelation": ["*"]
      },
      {
        "code": "4705337",
        "subject": "SISTEMAS OPERATIVOS II",
        "ht": 2,
        "hp": 2,
        "hl": "-",
        "th": 4,
        "uc": 3,
        "prelation": ["4702336"]
      },
      {
        "code": "4700007",
        "subject": "PROYECTO DE SERVICIO COMUNITARIO ***",
        "ht": "-",
        "hp": "-",
        "hl": "-",
        "th": "-",
        "uc": "-"
      },
      {
        "code": "4702338",
        "subject": "SISTEMAS II",
        "ht": 2,
        "hp": 3,
        "hl": "-",
        "th": 5,
        "uc": 3,
        "prelation": ["4701327"]
      },
      {
        "code": "4703338",
        "subject": "SISTEMA DE INFORMACION",
        "ht": 2,
        "hp": 2,
        "hl": "-",
        "th": 4,
        "uc": 3,
        "prelation": ["4701326"]
      },
      {
        "code": "4704338",
        "subject": "INVESTIGACION DE OPERACIONES II",
        "ht": 2,
        "hp": 2,
        "hl": "-",
        "th": 4,
        "uc": 3,
        "prelation": ["4704337"]
      },
      {
        "code": "4702328",
        "subject": "SIST. Y PROC. ADMINISTRATIVOS",
        "ht": 2,
        "hp": "-",
        "hl": "-",
        "th": 2,
        "uc": 2,
        "prelation": ["4701325"]
      },
      {
        "code": "4701338",
        "subject": "ELECTIVA V",
        "ht": 3,
        "hp": "-",
        "hl": "-",
        "th": 3,
        "uc": 3,
        "prelation": ["*"]
      },
      {
        "code": "4701328",
        "subject": "SIMULACION DIGITAL",
        "ht": 1,
        "hp": 2,
        "hl": "-",
        "th": 3,
        "uc": 2,
        "prelation": ["4703347"]
      },
      {
        "code": "4700008",
        "subject": "PROYECTO DE SERVICIO COMUNITARIO ****",
        "ht": "-",
        "hp": "-",
        "hl": "-",
        "th": "-",
        "uc": "-"
      },
      {
        "code": "4703339",
        "subject": "OPTIMIZACION DE SIST. Y FUNCIONES",
        "ht": 2,
        "hp": 2,
        "hl": "-",
        "th": 4,
        "uc": 3,
        "prelation": ["4704338"]
      },
      {
        "code": "4704339",
        "subject": "AUDITORIA Y EVALUACION DE SIST.",
        "ht": 2,
        "hp": 2,
        "hl": "-",
        "th": 4,
        "uc": 3,
        "prelation": ["4702338"]
      },
      {
        "code": "4702329",
        "subject": "ADMINISTRACION DE SIST. DE INFOR.",
        "ht": 2,
        "hp": "-",
        "hl": "-",
        "th": 2,
        "uc": 2,
        "prelation": ["4703338"]
      },
      {
        "code": "4702339",
        "subject": "DISEÑO EVALUACION DE PROYECTOS",
        "ht": 2,
        "hp": 2,
        "hl": "-",
        "th": 4,
        "uc": 3,
        "prelation": ["4704338"]
      },
      {
        "code": "4701449",
        "subject": "PROYECTO DE INVESTIGACION",
        "ht": 2,
        "hp": 6,
        "hl": "-",
        "th": 8,
        "uc": 4,
        "prelation": ["VIII SEM APROB"]
      },
      {
        "code": "4701339",
        "subject": "ELECTIVA VI",
        "ht": 3,
        "hp": "-",
        "hl": "-",
        "th": 3,
        "uc": 3,
        "prelation": ["*"]
      },
      {
        "code": "4701329",
        "subject": "ETICA Y DEONTOLOGIA PROFESIONAL",
        "ht": 2,
        "hp": "-",
        "hl": "-",
        "th": 2,
        "uc": 2,
        "prelation": ["155 UCA"]
      },
      {
        "code": "4714810",
        "subject": "PASANTIA",
        "ht": "-",
        "hp": 20,
        "hl": "-",
        "th": 20,
        "uc": 8,
        "prelation": ["IX APROBADO"]
      },
      {
        "code": "4714610",
        "subject": "TRABAJO DE GRADO",
        "ht": 2,
        "hp": 12,
        "hl": "-",
        "th": 14,
        "uc": 6,
        "prelation": ["4701449"]
      }
    ]
  };
  
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://s4nt14g0-m4r1n0.firebaseio.com' // Replace with your database URL
  });
  
  const db = admin.firestore();

  async function seedFirestore() {
    for (const subject of seedData.subjects) { // Use seedData.subjects instead of seedData[subject]
      const collectionRef = db.collection('subjects'); // Use 'subjects' as the collection name
      await collectionRef.add(subject);
    }
  }
  
  seedFirestore()
    .then(() => {
      console.log('Seeding completed.');
    })
    .catch(error => {
      console.error('Seeding error:', error);
    });
  
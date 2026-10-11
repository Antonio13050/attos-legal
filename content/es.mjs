import legal from './legal.es.mjs';

export default {
  meta: { name: 'Español' },
  nav: { home: 'Inicio', guide: 'Guía de la app', legal: 'Términos y privacidad', download: 'Descargar en Google Play', soon: 'Próximamente en Google Play', menu: 'Menú', theme: 'Cambiar entre tema claro y oscuro', language: 'Idioma' },
  foot: {
    disclaimer: 'Attos es una herramienta para organizar tus entrenamientos. No reemplaza a un médico, a un profesional del ejercicio ni a un nutricionista.',
    rights: 'Todos los derechos reservados.',
    links: 'Enlaces del pie de página',
    contact: 'Contacto',
  },

  home: {
    title: 'Attos — entrenamiento, dieta y progreso en una sola app',
    desc: 'Registra tus entrenamientos de pesas, sigue tus cargas y récords, cuida tu dieta y tu hidratación y resuelve dudas con el Coach IA. En español, portugués e inglés.',
    eyebrow: 'App de entrenamiento para Android',
    h1: 'Tu entrenamiento en la mano, del calentamiento al récord.',
    lead: 'Attos arma tus entrenamientos a partir de seis preguntas, registra cada serie en el gimnasio y te muestra tu progreso. Registrar entrenamientos es gratis, para siempre.',
    ctaGuide: 'Ver cómo funciona',
    facts: [['101', 'ejercicios con instrucciones'], ['3', 'idiomas: español, portugués e inglés'], ['Gratis', 'para registrar entrenamientos']],
    featuresTitle: 'Pensada para lo que pasa dentro del gimnasio',
    featuresLead: 'Pocos toques por serie, números grandes y nada que estorbe entre un ejercicio y otro.',
    features: [
      {
        chapter: 'workouts', shot: 'workouts', more: 'Cómo crear y editar entrenamientos',
        title: 'Entrenamientos listos desde el primer día',
        text: 'Respondes seis preguntas y Attos te entrega una división de entrenamientos ajustada a tu objetivo, a tu nivel y al lugar donde entrenas.',
        ticks: ['Rutinas para gimnasio, gimnasio del edificio o casa', 'Crea las tuyas desde cero o edita las sugeridas', '101 ejercicios con video y paso a paso de ejecución', 'Los ejercicios de riesgo quedan fuera si indicas un dolor'],
      },
      {
        chapter: 'active', shot: 'active', more: 'Cómo registrar un entrenamiento',
        title: 'Registra cada serie con un toque',
        text: 'La pantalla del entrenamiento muestra lo que hiciste la última vez junto a cada serie. Solo ajusta el peso, marca y sigue.',
        ticks: ['Peso y repeticiones de la sesión anterior siempre a la vista', 'Agrega series y cambia el orden de los ejercicios a mitad del entrenamiento', 'Resumen con duración, volumen y récords al finalizar', 'Tarjetas listas para compartir'],
      },
      {
        chapter: 'coach', shot: 'coach-workout', more: 'Cómo usar el Coach IA',
        title: 'Un coach que conoce tu perfil',
        text: 'El Coach IA responde dudas de entrenamiento y alimentación tomando en cuenta tu objetivo, tu nivel y tus limitaciones. Y arma entrenamientos que entran a la app con un toque.',
        ticks: ['Pide un entrenamiento por escrito y guárdalo en Mis entrenamientos', 'Toma una foto de la rutina en papel del gimnasio y deja que la IA la digitalice', '5 mensajes al día en el plan gratis'],
      },
      {
        chapter: 'nutrition', shot: 'diet', more: 'Cómo usar Nutrición',
        title: 'Dieta, agua y suplementos en un solo lugar',
        text: 'Metas diarias de calorías y macros, comidas para marcar durante el día, meta de agua calculada según tu peso y la lista de tus suplementos.',
        ticks: ['Meta de agua recomendada según tu peso o definida por ti', 'Recordatorios de agua y de cada suplemento, a la hora que elijas', 'Avisos de ánimo cuando el día va atrasado', 'Horario de silencio para que nada te moleste de noche'],
      },
      {
        chapter: 'profile', shot: 'profile', more: 'Cómo seguir tu progreso',
        title: 'Mira tu progreso real',
        text: 'El Perfil reúne todo lo que ya entrenaste: constancia, récords, distribución por grupo muscular, peso corporal y logros.',
        ticks: ['Récords personales y 1RM estimado por ejercicio', 'Mapa del cuerpo con los músculos más entrenados', 'Tendencia del peso corporal e IMC', 'Historial completo, serie por serie'],
      },
    ],
    cardsTitle: 'Los detalles que marcan la diferencia',
    cardsLead: 'La app se adapta a tu teléfono y a tus hábitos.',
    cards: [
      { icon: 'moon', title: 'Tema claro y oscuro', text: 'Attos sigue el tema de tu teléfono. Si prefieres, fija el claro o el oscuro en Configuración.' },
      { icon: 'globe', title: 'Tres idiomas', text: 'Español, portugués e inglés. La app abre en el idioma del dispositivo y lo cambias cuando quieras.' },
      { icon: 'bell', title: 'Recordatorios a tu ritmo', text: 'Avisos de agua y de suplementos a las horas que tú definas, con horario de silencio.' },
      { icon: 'cloud', title: 'Copia en la nube', text: 'Inicia sesión con Google para no perder tus entrenamientos al cambiar de teléfono. Sin cuenta, todo queda en el dispositivo.' },
      { icon: 'share', title: 'Comparte tu entrenamiento', text: 'Tarjetas del entrenamiento y del mes en varios estilos, listas para tus historias.' },
      { icon: 'shield', title: 'Tus datos son tuyos', text: 'No vendemos datos. Eliminas tu cuenta y todo lo guardado desde la app, cuando quieras.' },
    ],
    plans: {
      title: 'Gratis y Attos PRO',
      lead: 'Registrar entrenamientos sigue siendo gratis para siempre. PRO desbloquea el Coach IA sin límite y la dieta ajustada por la IA.',
      cols: ['Función', 'Gratis', 'PRO'], yes: 'incluido', no: 'no incluido',
      rows: [
        ['Registrar entrenamientos', true, true],
        ['Récords, 1RM y progreso', true, true],
        ['Copia en la nube', true, true],
        ['Coach IA', '5 al día', 'ilimitado'],
        ['Dieta ajustada por la IA', false, true],
      ],
      note: 'El precio del plan mensual y del anual aparece en la app y viene de Google Play. La suscripción se renueva automáticamente y puedes cancelarla cuando quieras en Google Play.',
    },
    faqTitle: 'Preguntas frecuentes',
    faq: [
      ['¿Attos es gratis?', 'Sí. Crear entrenamientos, registrar series, ver el historial, los récords y los logros y usar la copia en la nube es gratis. El plan Attos PRO es opcional y desbloquea el Coach IA sin límite de mensajes y la dieta ajustada por la IA.'],
      ['¿Necesito crear una cuenta?', 'No. Puedes empezar sin cuenta y tus datos quedan guardados en el dispositivo. Iniciar sesión con Google sirve para tener copia en la nube y recuperar todo al cambiar de teléfono.'],
      ['¿Funciona sin internet?', 'Registrar entrenamientos, agua, dieta y suplementos funciona sin internet. El Coach IA, la copia en la nube y la suscripción necesitan conexión.'],
      ['¿El Coach IA reemplaza a un entrenador o a un nutricionista?', 'No. El Coach IA es un apoyo: resuelve dudas y sugiere entrenamientos según tu perfil, pero puede equivocarse. Revisa siempre las sugerencias y busca a un profesional calificado, sobre todo si tienes lesiones o condiciones de salud.'],
      ['¿Puedo usar libras en vez de kilos?', 'Sí. En Configuración, en el grupo Entrenamiento, cambia las unidades entre kg y lb.'],
      ['¿Cómo elimino mi cuenta y mis datos?', 'En la app, ve a Perfil, toca el engranaje, baja hasta el final y toca “Eliminar cuenta y datos”. Si ya desinstalaste la app, pide la eliminación por correo. El paso a paso está en la página Términos y privacidad.'],
      ['¿En qué dispositivos funciona Attos?', 'Attos es una app para Android y está en fase de pruebas. Pronto estará disponible en Google Play.'],
    ],
    band: { title: 'Empieza tu próximo entrenamiento con Attos', text: 'Seis preguntas y tus entrenamientos están listos.' },
  },

  guide: {
    title: 'Guía de la app — Attos',
    desc: 'Paso a paso de todas las pantallas de Attos: primer acceso, entrenamientos, entrenamiento en curso, Coach IA, nutrición, perfil, configuración y Attos PRO.',
    h1: 'Guía de la app',
    lead: 'Todas las pantallas de Attos, una por una, con lo que hace cada botón. Las imágenes siguen el tema y el idioma que elijas arriba en esta página. Toca una imagen para ampliarla.',
    tocLabel: 'Capítulos', chapterLabel: 'Capítulo', tipLabel: 'Consejo:', zoom: 'Ampliar',
    chapters: {
      start: { title: 'Primeros pasos', lead: 'Del primer toque a tus entrenamientos armados: toma cerca de un minuto.' },
      home: { title: 'Inicio', lead: 'La pantalla que abre con la app: el entrenamiento del día y lo que falta por hacer hoy.' },
      workouts: { title: 'Entrenamientos y ejercicios', lead: 'Donde están tus entrenamientos y la biblioteca con los 101 ejercicios del catálogo.' },
      active: { title: 'Entrenamiento en curso', lead: 'La pantalla que usas en el gimnasio, serie por serie.' },
      coach: { title: 'Coach IA', lead: 'Un asistente que conoce tu perfil: resuelve dudas y arma entrenamientos.' },
      nutrition: { title: 'Nutrición', lead: 'Tres pestañas: Dieta, Agua y Suplementos.' },
      profile: { title: 'Perfil y progreso', lead: 'Todo lo que ya entrenaste, en números, gráficos y logros.' },
      settings: { title: 'Configuración', lead: 'Cuenta, copia en la nube, perfil de atleta, recordatorios, tema e idioma. Ábrela con el engranaje, arriba en el Perfil.' },
      pro: { title: 'Attos PRO', lead: 'El plan opcional que desbloquea el Coach IA sin límite y la dieta ajustada por la IA.' },
    },
    steps: {
      'start.welcome': {
        title: 'Abre la app y elige cómo entrar',
        text: 'La primera pantalla presenta Attos y te pregunta si quieres usar una cuenta. Tú decides: las dos opciones dan acceso a todas las funciones gratuitas.',
        how: [
          'Si la app no abre en tu idioma, toca el botón del idioma, arriba a la derecha, y elige entre <b>Español</b>, <b>Português</b> y <b>English</b>.',
          'Toca <b>Continuar con Google</b> para entrar con tu cuenta de Google. Tus entrenamientos tendrán copia en la nube.',
          'O toca <b>Empezar sin cuenta</b>. Todo queda guardado solo en este dispositivo, y puedes iniciar sesión con Google después, en Configuración.',
        ],
        tip: 'Al continuar aceptas los Términos de uso y la Política de privacidad. Los dos enlaces, en la parte de abajo de la pantalla, abren el texto completo.',
      },
      'start.about': {
        title: 'Cuéntanos sobre ti y tus medidas',
        text: 'Son las dos primeras de seis preguntas. Sirven para calcular tu gasto de calorías, tu IMC y los pesos iniciales.',
        how: [
          'En <b>Sobre ti</b>, elige el sexo biológico y escribe tu edad.',
          'Toca <b>Continuar</b>.',
          'En <b>Tus medidas</b>, indica tu peso y tu altura. La app muestra el IMC estimado justo debajo.',
          'Toca <b>Continuar</b>. La flecha de arriba vuelve a la pregunta anterior sin perder lo que ya llenaste.',
        ],
      },
      'start.goal': {
        title: 'Elige tu objetivo y tu rutina',
        text: 'El objetivo define repeticiones, volumen y calorías. La rutina ajusta la intensidad a tu nivel y a los días que tienes.',
        how: [
          'Elige un objetivo: <b>Ganar masa muscular</b>, <b>Bajar de peso</b>, <b>Definir</b>, <b>Ganar fuerza</b> o <b>Salud y energía</b>.',
          'En la pantalla siguiente, marca tu experiencia con las pesas: principiante, intermedio o avanzado.',
          'Elige cuántos días por semana entrenas, de 2 a 7.',
        ],
        tip: 'El número de días decide la división: de cuerpo completo para pocos días hasta cinco entrenamientos distintos para quien entrena casi a diario.',
      },
      'start.place': {
        title: 'Indica dónde entrenas y qué debes cuidar',
        text: 'Las dos últimas preguntas aseguran que solo entren ejercicios que puedes hacer.',
        how: [
          'Elige el lugar: <b>Gimnasio</b>, <b>Gimnasio del edificio</b> o <b>En casa</b>.',
          'Si quieres, elige una prioridad muscular. <b>Equilibrado</b> reparte el entrenamiento por igual.',
          'En <b>Cuidados</b>, marca las zonas donde sientes dolor: rodilla, zona lumbar, hombro, muñeca o codo. Puedes marcar varias o ninguna.',
          'Elige tu alimentación: sin restricciones, sin lactosa, sin gluten o vegetariana.',
          'Toca <b>Finalizar</b>.',
        ],
        tip: 'El paso de cuidados es opcional, pero conviene llenarlo: los ejercicios de riesgo para la zona marcada se cambian por alternativas.',
      },
      'start.ready': {
        title: 'Listo: tus entrenamientos están armados',
        text: 'Attos arma los entrenamientos y abre la pantalla Inicio. Ya puedes empezar el primero.',
        how: [
          'Espera el mensaje <b>Todo listo</b>. La app pasa sola a Inicio.',
          'El primer entrenamiento aparece en la tarjeta <b>Entrenamiento de hoy</b>, con la marca de que fue ajustado para ti.',
        ],
        tip: '¿Cambiaste de objetivo o de gimnasio? Edita tus respuestas cuando quieras en Configuración → Perfil de atleta.',
      },

      'home.today': {
        title: 'Mira el entrenamiento de hoy y tu semana',
        text: 'La parte de arriba de Inicio responde a “¿qué entreno hoy?” y muestra cómo va tu semana.',
        how: [
          'La tarjeta <b>Entrenamiento de hoy</b> sugiere el siguiente entrenamiento de tu lista, después del último que hiciste.',
          'Toca <b>Comenzar entrenamiento</b> para abrir la pantalla del entrenamiento en curso.',
          'En <b>Últimos 7 días</b>, los días con entrenamiento quedan marcados. Debajo del título aparecen los días entrenados y las semanas seguidas.',
        ],
        tip: 'El orden de los entrenamientos en la pestaña Entrenos define la rotación. Para cambiar la sugerencia del día, cambia el orden de la lista.',
      },
      'home.day': {
        title: 'Sigue el agua, la dieta y los suplementos del día',
        text: 'Al bajar en la pantalla, la sección Hoy resume lo que ya hiciste y lo que falta.',
        how: [
          '<b>Agua</b> muestra cuánto tomaste y la meta del día. Toca para abrir la pestaña Agua.',
          '<b>Dieta</b> muestra cuántos alimentos de tus comidas ya marcaste. Toca para abrir la pestaña Dieta.',
          'En <b>Suplementos</b>, toca el círculo para marcar lo que ya tomaste. La hora de cada uno aparece a la derecha.',
          'Toca <b>Administrar</b> para agregar o editar suplementos.',
        ],
      },

      'workouts.list': {
        title: 'Empieza un entrenamiento desde la lista',
        text: 'La pestaña Entrenos tiene dos partes: <b>Mis entrenamientos</b>, con tus rutinas, y <b>Ejercicios</b>, con la biblioteca.',
        how: [
          'En la barra inferior, toca <b>Entrenos</b>.',
          'Cada entrenamiento muestra cuántos ejercicios tiene, la duración estimada y los primeros ejercicios.',
          'Toca el entrenamiento, o el botón azul de la derecha, para empezar.',
        ],
      },
      'workouts.create': {
        title: 'Crea un entrenamiento desde cero',
        text: 'Arma una rutina tuya, con los ejercicios que quieras.',
        how: [
          'Toca <b>Nuevo entrenamiento</b>.',
          'Ponle un nombre (por ejemplo, “Entrenamiento A”) y, si quieres, una descripción.',
          'Toca <b>Agregar ejercicios</b>.',
          'En la pantalla <b>Seleccionar</b>, busca por nombre o filtra por grupo muscular, y toca los ejercicios que quieres incluir.',
          'Toca <b>Confirmar</b> y, de vuelta en el entrenamiento, <b>Crear entrenamiento</b>.',
        ],
        tip: '¿No encontraste un ejercicio? El botón Nuevo, junto a la búsqueda, crea un ejercicio tuyo sin salir de la selección.',
      },
      'workouts.editor': {
        title: 'Edita un entrenamiento',
        text: 'Cambia el nombre, la descripción y la lista de ejercicios de cualquier entrenamiento, incluso de los sugeridos por la app.',
        how: [
          'En Mis entrenamientos, toca <b>Editar</b> y luego el lápiz del entrenamiento.',
          'Cambia el nombre y la descripción.',
          'Arrastra un ejercicio desde el control de la izquierda o usa las flechas para cambiar el orden.',
          'Toca la papelera para quitar un ejercicio del entrenamiento.',
          'Toca <b>Guardar cambios</b>.',
        ],
      },
      'workouts.manage': {
        title: 'Reordena o elimina entrenamientos',
        text: 'El modo de edición de la lista sirve para organizar tus rutinas.',
        how: [
          'Toca <b>Editar</b>, junto a “Tus entrenamientos”.',
          'Arrastra desde el control de la izquierda o usa las flechas para cambiar el orden.',
          'Toca la papelera para eliminar un entrenamiento. La app pide confirmación.',
          'Toca <b>Listo</b> para salir del modo de edición.',
        ],
        tip: 'El orden define la rotación: Inicio sugiere como entrenamiento de hoy el siguiente de la lista después del último que hiciste.',
      },
      'workouts.library': {
        title: 'Consulta la biblioteca de ejercicios',
        text: 'Son 101 ejercicios, cada uno con video e instrucciones de ejecución.',
        how: [
          'En la pestaña Entrenos, toca <b>Ejercicios</b>.',
          'Usa la búsqueda o los filtros: Pecho, Espalda, Piernas, Hombros, Brazos y Core.',
          'Toca un ejercicio para ver el video y el paso a paso.',
          'Toca <b>Cerrar</b> para volver a la lista.',
        ],
        tip: 'La búsqueda encuentra el ejercicio por su nombre en español, portugués o inglés.',
      },
      'workouts.custom': {
        title: 'Registra un ejercicio tuyo',
        text: 'Úsalo cuando tu gimnasio tiene una máquina o una variante que no está en el catálogo.',
        how: [
          'En la parte Ejercicios, toca <b>Nuevo ejercicio</b>.',
          'Escribe el nombre y elige el grupo muscular principal.',
          'Si quieres, escribe las instrucciones de ejecución y pega el enlace de un video de YouTube.',
          'Toca <b>Guardar ejercicio</b>. Aparecerá en la biblioteca y en la selección de ejercicios.',
        ],
      },

      'active.sets': {
        title: 'Registra cada serie',
        text: 'Arriba están el cronómetro del entrenamiento y el total de series hechas. Cada ejercicio tiene una tabla con una fila por serie.',
        how: [
          'La columna <b>Anterior</b> muestra el peso y las repeticiones de la última vez. Tócala para copiar esos valores a la serie.',
          'Ajusta <b>kg</b> y <b>Reps</b> tocando los campos.',
          'Toca el botón de la palomita para completar la serie. La fila se pone verde.',
          'Toca <b>Agregar serie</b> para incluir una más.',
          'Toca <b>Editar</b>, en el ejercicio, para quitar series.',
        ],
        tip: 'Puedes salir de la pantalla o cerrar la app: el entrenamiento en curso queda guardado y sigue donde lo dejaste.',
      },
      'active.reorder': {
        title: 'Cambia el orden de los ejercicios',
        text: '¿La máquina que querías está ocupada? Cambia el orden sin perder lo que ya registraste.',
        how: [
          'Toca <b>Reordenar</b>, arriba de la lista.',
          'Arrastra desde el control de la izquierda o usa las flechas para subir y bajar cada ejercicio.',
          'Toca <b>Listo</b>.',
        ],
        tip: 'El orden que elijas aquí vale solo para este entrenamiento. Para cambiarlo de forma permanente, edita el entrenamiento en la pestaña Entrenos.',
      },
      'active.finish': {
        title: 'Finaliza y mira el resumen',
        text: 'Al terminar, Attos guarda el entrenamiento en el historial y muestra el resultado.',
        how: [
          'Toca <b>Finalizar</b>, arriba a la derecha.',
          'El resumen muestra duración, volumen total, series y ejercicios hechos.',
          'Los récords y los logros que desbloqueaste en este entrenamiento aparecen justo debajo, con el XP ganado.',
          'Toca <b>Volver a entrenamientos</b> para salir.',
        ],
        tip: 'Para salir sin guardar, toca la flecha de regreso arriba en el entrenamiento y confirma que quieres descartarlo.',
      },
      'active.share': {
        title: 'Comparte tu entrenamiento',
        text: 'Desde el resumen generas una tarjeta con los números del entrenamiento.',
        how: [
          'En el resumen, toca <b>Compartir</b>.',
          'Desliza hacia un lado para ver los modelos de tarjeta.',
          'Elige el estilo: <b>Color</b>, <b>Oscuro</b>, <b>Claro</b>, <b>Transparente</b> o <b>Foto</b>, que usa una imagen tuya de fondo.',
          'Toca <b>Compartir</b> para enviarla a otra app, o el botón de al lado para guardar la imagen.',
        ],
      },

      'coach.ask': {
        title: 'Resuelve dudas con el Coach',
        text: 'El Coach IA responde sobre entrenamiento, alimentación y ejecución de los ejercicios tomando en cuenta tu perfil.',
        how: [
          'En la barra inferior, toca <b>Coach IA</b>.',
          'Toca una de las sugerencias sobre el campo de texto o escribe tu pregunta.',
          'Toca el botón de enviar.',
          'El contador bajo el título muestra cuántos mensajes te quedan hoy en el plan gratis: son 5 al día.',
        ],
        tip: 'El Coach IA puede equivocarse. Usa las respuestas como apoyo y toca Reportar si una respuesta parece incorrecta o inapropiada.',
      },
      'coach.plan': {
        title: 'Pide un entrenamiento y guárdalo en la app',
        text: 'Cuando pides un entrenamiento, la respuesta llega con una tarjeta de entrenamiento estructurado.',
        how: [
          'Escribe lo que quieres. Por ejemplo: “Arma un entrenamiento de pecho y tríceps de 45 minutos”.',
          'La tarjeta muestra los ejercicios con series, repeticiones y descanso.',
          'Toca <b>Guardar en Mis entrenamientos</b>. El entrenamiento aparecerá en la pestaña Entrenos.',
        ],
        tip: 'Los ejercicios que existen en el catálogo entran con video e instrucciones. Los que no existen se guardan como ejercicios tuyos.',
      },
      'coach.photo': {
        title: 'Digitaliza una rutina en papel',
        text: '¿Tienes una rutina impresa del gimnasio? El Coach lee la foto y arma el entrenamiento.',
        how: [
          'Toca el ícono de la cámara, a la izquierda del campo de texto.',
          'Elige <b>Tomar Foto</b> para abrir la cámara o <b>Galería de Fotos</b> para usar una imagen guardada.',
          'Envía la foto. El Coach devuelve los entrenamientos de la rutina en tarjetas.',
          'Revisa los ejercicios y toca <b>Guardar en Mis entrenamientos</b>.',
        ],
        tip: 'Toma la foto con buena luz y con la hoja completa en el cuadro. La letra a mano difícil de leer puede generar errores: revisa antes de guardar.',
      },

      'nutrition.diet': {
        title: 'Sigue tus metas y marca tus comidas',
        text: 'La pestaña Dieta muestra tus metas diarias de calorías y macronutrientes y las comidas del día.',
        how: [
          'En <b>Metas del día</b> están calorías, proteína, carbohidratos y grasa, calculados para tu peso y tu objetivo.',
          'Toca una comida para abrirla.',
          'Toca el círculo de cada alimento para marcarlo como consumido.',
          'Usa el campo <b>Agregar alimento</b> para incluir un alimento en la comida.',
          'Toca <b>Nueva comida</b> para crear otra, o <b>Reiniciar el día</b> para desmarcar todo.',
        ],
        tip: 'Con Attos PRO, el botón Ajustar con IA arma un menú para tu objetivo y te deja cambiar cada alimento por uno equivalente.',
      },
      'nutrition.water': {
        title: 'Registra el agua y ajusta tu meta',
        text: 'El anillo muestra cuánto tomaste respecto a la meta del día.',
        how: [
          'Toca uno de los botones para registrar: <b>+200 ml</b>, <b>+300 ml</b>, <b>+500 ml</b> o <b>+750 ml</b>.',
          'En <b>Hoy</b>, la papelera borra un registro que agregaste por error.',
          'Toca <b>Cambiar meta</b> para elegir entre la meta <b>Recomendada</b> y la <b>Personalizada</b>.',
          'Toca <b>Guardar meta</b>.',
        ],
        tip: 'La recomendada usa 35 ml por kilo de peso, entre 1,800 y 4,000 ml, y cambia sola cuando actualizas tu peso. La personalizada queda fija en el valor que elijas.',
      },
      'nutrition.waterrem': {
        title: 'Activa los recordatorios de agua',
        text: 'Al final de la pestaña Agua defines cuándo debe avisarte Attos.',
        how: [
          'Activa <b>Recordatorios de agua</b> para recibir un aviso si pasas mucho tiempo sin registrar.',
          'Activa <b>Avisos de ánimo</b> para recibir un aviso cuando el día vaya atrasado respecto a la meta.',
          'Toca <b>Ventana e intervalo</b>.',
          'Elige a qué hora empieza y termina tu día de agua, y el intervalo entre avisos: 1 h, 1h30, 2 h o 3 h.',
          'Toca <b>Guardar</b>.',
        ],
        tip: 'Cada registro de agua reinicia el conteo. Los avisos llegan por la app del teléfono; la primera vez, Android pide permiso para las notificaciones.',
      },
      'nutrition.supps': {
        title: 'Agrega suplementos y sus horas',
        text: 'La pestaña Suplementos es tu lista diaria de lo que tomas.',
        how: [
          'En <b>Agregar suplemento</b>, escribe el nombre y la dosis, o toca una de las sugerencias.',
          'Toca la hora, a la derecha del suplemento, para definir cuándo tomarlo.',
          'Elige la hora, o uno de los atajos, y toca <b>Guardar horario</b>.',
          'Durante el día, toca el círculo para marcar lo que ya tomaste.',
        ],
        tip: 'Si pasa una hora de la hora indicada sin marcarlo, el suplemento aparece como atrasado. Si tomas el mismo suplemento más de una vez al día, puedes agregarlo dos veces, una por cada hora.',
      },
      'nutrition.suppsedit': {
        title: 'Recordatorios de suplementos y edición de la lista',
        text: 'Los avisos de suplementos siguen las horas que definiste.',
        how: [
          'Activa <b>Recordar a la hora</b> para recibir un aviso a la hora de cada suplemento.',
          'Activa <b>Avisos de ánimo</b> para que te lo recuerde una hora después, si todavía no lo marcaste.',
          'Para quitar un suplemento de la lista, toca <b>Editar</b> y luego la papelera.',
          'Toca <b>Listo</b>.',
        ],
        tip: 'Quitar un suplemento no borra lo que ya marcaste en los días anteriores.',
      },

      'profile.overview': {
        title: 'Entiende la vista general',
        text: 'El Perfil resume toda tu historia en la app.',
        how: [
          'Arriba están tu nivel y el XP que falta para el siguiente. Toca el XP para ver cómo se calcula.',
          'Los contadores muestran entrenamientos hechos, volumen total levantado, tiempo entrenado y semanas seguidas.',
          '<b>Constancia</b> muestra las últimas 12 semanas. Toca un día para ver los detalles.',
          '<b>Récords personales</b> lista tus mejores ejercicios, con el 1RM estimado.',
          'Más abajo están los logros y los accesos a las pantallas de detalle.',
        ],
        tip: 'Ganas XP al completar entrenamientos, romper récords y desbloquear logros.',
      },
      'profile.muscles': {
        title: 'Mira qué músculos entrenas más',
        text: 'La pantalla Distribución muscular muestra si tu entrenamiento está equilibrado.',
        how: [
          'En el Perfil, toca <b>Distribución muscular</b>.',
          'Elige el periodo: 7, 30 o 90 días.',
          'El mapa del cuerpo colorea los grupos más trabajados. Alterna entre <b>Ambos</b>, <b>Frente</b> y <b>Espalda</b>.',
          'La lista de abajo muestra las series y el porcentaje de cada grupo.',
        ],
      },
      'profile.body': {
        title: 'Sigue tu peso corporal',
        text: 'La pantalla Peso y medidas muestra la tendencia del peso, sin las subidas y bajadas del día a día.',
        how: [
          'En el Perfil, toca <b>Peso y medidas</b>.',
          'Toca <b>Registrar</b>, elige la fecha y escribe el peso. Los botones de −1 a +1 ajustan el valor.',
          'Toca <b>Guardar peso</b>.',
          'Elige el periodo de la gráfica: 30, 90 o 180 días.',
          'Toca <b>Editar altura</b> para corregir la altura usada en el IMC.',
        ],
        tip: 'El último peso registrado actualiza la meta de agua recomendada y las metas de la dieta.',
      },
      'profile.history': {
        title: 'Consulta el historial de entrenamientos',
        text: 'Cada entrenamiento finalizado queda guardado con todas sus series.',
        how: [
          'En el Perfil, toca <b>Historial de entrenamientos</b>.',
          'Usa la búsqueda para encontrar un entrenamiento o un ejercicio.',
          'Cada sesión muestra duración, series y volumen. Toca <b>Ver series</b> para abrir el peso y las repeticiones de cada serie.',
          'El ícono de compartir genera la tarjeta de ese entrenamiento.',
          'La papelera elimina la sesión del historial, después de confirmar.',
        ],
      },
      'profile.medals': {
        title: 'Desbloquea logros',
        text: 'Son 16 logros, por entrenamientos hechos, volumen levantado, constancia, récords y hábitos.',
        how: [
          'En el Perfil, toca <b>Ver todos</b>, en la sección Logros.',
          'Filtra por categoría: Entrenamientos, Volumen, Racha, Récords o Especiales.',
          'Los logros a color ya son tuyos. Los demás muestran el avance en porcentaje.',
          'Toca un logro para ver qué falta, la fecha en que lo desbloqueaste y el XP que da.',
        ],
      },
      'profile.month': {
        title: 'Comparte el resumen del mes',
        text: 'Tarjetas con los números de tu mes: entrenamientos, volumen, racha y récord.',
        how: [
          'Arriba en el Perfil, toca el ícono de compartir.',
          'Desliza para elegir la tarjeta.',
          'Elige el estilo: Color, Oscuro, Claro, Transparente o Foto.',
          'Toca <b>Compartir</b> o guarda la imagen.',
        ],
      },

      'settings.account': {
        title: 'Cuenta y copia en la nube',
        text: 'Abre Configuración con el engranaje, arriba en el Perfil. El grupo Cuenta se encarga de tu copia de seguridad.',
        how: [
          'Toca <b>Iniciar sesión con Google</b> para activar la copia. Si ya entraste, verás el nombre de la cuenta y el botón para cerrar sesión.',
          'Toca <b>Hacer ahora</b> para guardar una copia en el momento.',
          'En un teléfono nuevo, entra con la misma cuenta y toca <b>Restaurar desde la nube</b>.',
        ],
        tip: 'La copia es automática: se hace al entrar y después de cada entrenamiento. Restaurar reemplaza los datos de este dispositivo por los de la nube.',
      },
      'settings.sheet': {
        title: 'Actualiza tu perfil de atleta',
        text: 'El perfil guarda las respuestas del primer acceso. Personaliza los entrenamientos, las metas de la dieta y las respuestas del Coach IA.',
        how: [
          'En Configuración, toca <b>Perfil de atleta</b>.',
          'Actualiza sexo, edad, peso y altura.',
          'Cambia objetivo, experiencia, días por semana, lugar de entrenamiento, dolores y alimentación.',
          'Toca <b>Guardar perfil</b>.',
        ],
        tip: 'En el mismo grupo, en Unidades, cambias entre kilos y libras.',
      },
      'settings.reminders': {
        title: 'Recordatorios y horario de silencio',
        text: 'El grupo Recordatorios controla todos los avisos de la app en un solo lugar.',
        how: [
          '<b>Recibir recordatorios</b> es el interruptor general. Apagado, Attos no envía ningún aviso.',
          '<b>Agua</b> y <b>Suplementos</b> abren los ajustes de cada tipo de recordatorio.',
          'Toca <b>Horario de silencio</b> y define cuándo la app no debe avisar. Por defecto es de 10:00 p.m. a 7:00 a.m.',
          'Toca <b>Guardar</b>.',
        ],
        tip: 'El silencio aplica a los recordatorios de agua y a los avisos de ánimo. La hora que marques en un suplemento siempre se respeta.',
      },
      'settings.look': {
        title: 'Tema e idioma',
        text: 'En el grupo Apariencia e idioma eliges cómo se ve la app.',
        how: [
          'En <b>Tema</b>, elige <b>Sistema</b> para seguir el teléfono, o fija <b>Claro</b> u <b>Oscuro</b>.',
          'Toca <b>Idioma</b>.',
          'Elige <b>Idioma del dispositivo</b>, <b>Português</b>, <b>Español</b> o <b>English</b>. El cambio es inmediato.',
        ],
        tip: 'Los entrenamientos, alimentos y otros textos que tú escribiste quedan como están. Los ejercicios del catálogo y los entrenamientos sugeridos aparecen en el idioma elegido.',
      },
      'settings.delete': {
        title: 'Elimina tu cuenta y tus datos',
        text: 'Puedes borrar todo lo que Attos guarda sobre ti, cuando quieras.',
        how: [
          'En Configuración, baja hasta el final y toca <b>Eliminar cuenta y datos</b>.',
          'Lee el aviso: entrenamientos, historial de pesos, medidas y la copia en la nube se borran para siempre.',
          'Toca <b>Eliminar definitivamente</b> para confirmar, o <b>Cancelar</b>.',
        ],
        tip: 'No se puede deshacer. Si tienes Attos PRO, cancela la suscripción en Google Play: eliminar la cuenta no cancela el cobro.',
      },

      'pro.plans': {
        title: 'Conoce Attos PRO y suscríbete',
        text: 'Registrar entrenamientos sigue siendo gratis para siempre. PRO desbloquea el Coach IA sin límite de mensajes y la dieta ajustada por la IA.',
        how: [
          'En Configuración, toca <b>Conocer PRO</b>. La misma pantalla abre cuando tocas una función PRO.',
          'Compara las columnas <b>Gratis</b> y <b>PRO</b>.',
          'Elige el plan <b>Anual</b> o <b>Mensual</b>. El precio viene de Google Play.',
          'Toca <b>Suscribirme a PRO</b> y completa la compra en Google Play.',
          '¿Ya te suscribiste y cambiaste de teléfono? Toca <b>Restaurar compras</b>.',
        ],
        tip: 'La suscripción se renueva automáticamente. Para cancelar, cambiar la forma de pago o pedir un reembolso, usa Administrar en Google Play.',
      },
    },
  },

  legal,
};

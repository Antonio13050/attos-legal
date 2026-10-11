export default {
  app: 'Aplicación: Attos',
  updated: 'Última actualización: 11 de octubre de 2026',
  contactTitle: 'Contacto',
  supportLabel: 'Soporte y dudas generales',
  privacyLabel: 'Privacidad y encargado de datos (LGPD)',
  translation: {
    title: 'Sobre esta traducción',
    text: 'Esta es una traducción del documento original en portugués. Si hay alguna diferencia, vale la <a href="{href}" hreflang="pt-BR">versión en portugués</a>.',
  },

  hub: {
    title: 'Términos y privacidad',
    lead: 'Los documentos oficiales de Attos y el camino para eliminar tu cuenta y tus datos.',
    read: 'Leer el documento',
    privacyText: 'Qué datos usa la app, para qué, con quién se comparten y cuáles son tus derechos.',
    termsText: 'Reglas de uso, avisos de salud, límites del Coach IA y cómo funciona la suscripción.',
    deleteShort: 'Eliminar cuenta y datos',
    deleteTitle: 'Cómo eliminar tu cuenta y tus datos',
    deleteBody: [
      'Puedes pedir la eliminación completa de tu cuenta y de todos tus datos en cualquier momento, de dos maneras.',
      [
        '<b>Desde la aplicación:</b> abre Attos, toca <b>Perfil</b>, luego el engranaje arriba en la pantalla, baja hasta el final y toca <b>Eliminar cuenta y datos</b>. Confirma en <b>Eliminar definitivamente</b>. La app borra tus entrenamientos, historial, medidas y la copia en la nube, y desconecta tu cuenta de Google.',
        '<b>Por correo:</b> si ya desinstalaste la app, escribe a {support} con el asunto “Eliminación de datos — Attos” e indica el correo de la cuenta de Google que usaste en la app. Respondemos en un máximo de 5 días hábiles y confirmamos por correo.',
      ],
      'La eliminación es definitiva: no es posible recuperar los datos después. Eliminar la cuenta no cancela una suscripción activa de Attos PRO; la cancelación se hace en Google Play.',
      'Si usas la app sin cuenta, tus datos están guardados solo en el dispositivo. En ese caso, “Eliminar cuenta y datos” borra todo del dispositivo, y desinstalar la app tiene el mismo efecto.',
    ],
  },

  privacy: {
    title: 'Política de privacidad',
    short: 'Privacidad',
    desc: 'Cómo Attos recopila, usa, guarda y protege tus datos, de conformidad con la LGPD de Brasil.',
    intro: {
      tone: 'ok',
      title: 'Resumen',
      text: 'Attos guarda tus datos primero en tu dispositivo. Solo hay copia en la nube si inicias sesión con Google. No vendemos ni alquilamos tus datos, y la app no tiene anuncios. Puedes borrar todo cuando quieras.',
    },
    sections: [
      {
        h: '1. Sobre esta política',
        body: [
          'Esta política explica cómo la aplicación Attos recopila, usa, guarda y protege la información de quienes la utilizan, de conformidad con la Ley General de Protección de Datos Personales de Brasil (LGPD — Ley n.º 13.709/2018) y con las reglas de Google Play.',
          'Al usar la aplicación, declaras que leíste esta política y que estás de acuerdo con ella.',
        ],
      },
      {
        h: '2. Datos que tratamos',
        body: [
          'Recopilamos solo lo necesario para que la app funcione:',
          [
            '<b>Datos de la cuenta:</b> nombre, correo y foto de perfil de tu cuenta de Google, solo si eliges iniciar sesión con Google.',
            '<b>Datos físicos y de entrenamiento (datos sensibles):</b> edad, peso, altura, sexo biológico, objetivo, nivel de experiencia, lugar de entrenamiento, entrenamientos, pesos, repeticiones e historial de sesiones.',
            '<b>Dolores y limitaciones:</b> las zonas del cuerpo que marques en tu perfil de atleta, para evitar ejercicios de riesgo.',
            '<b>Alimentación y hábitos:</b> metas de calorías y macronutrientes, comidas registradas, consumo de agua, suplementos y sus horas, y preferencias de alimentación.',
            '<b>Conversaciones con el Coach IA:</b> los mensajes que envías y las fotos de rutinas de entrenamiento que adjuntas.',
            '<b>Datos de la suscripción:</b> si te suscribes a Attos PRO, el estado de la suscripción y un identificador de la compra. No recibimos ni guardamos los datos de tu tarjeta.',
          ],
        ],
      },
      {
        h: '3. Para qué los usamos y con qué base legal',
        body: [
          'El tratamiento se apoya en las bases legales de la LGPD (arts. 7 y 11):',
          [
            '<b>Prestación del servicio (art. 7, V):</b> armar entrenamientos, calcular estimaciones (TMB, GET, IMC, meta de agua), registrar tu progreso y mantener el historial.',
            '<b>Consentimiento (art. 11, I):</b> usar tus datos físicos y tus limitaciones para personalizar las respuestas del Coach IA. Das tu consentimiento al llenar tu perfil y al usar el Coach, y puedes retirarlo borrando esos datos.',
            '<b>Interés legítimo y seguridad:</b> prevenir fraudes y mantener la integridad de los datos guardados.',
          ],
        ],
      },
      {
        h: '4. Con quién los compartimos',
        body: [
          'Attos <b>no vende, no alquila y no comparte</b> datos personales con anunciantes, redes de publicidad ni intermediarios de datos.',
          'Solo se comparten con los proveedores necesarios para que la app funcione:',
          [
            '<b>Google Firebase (Google):</b> inicio de sesión con la cuenta de Google y base de datos en la nube, usados solo si inicias sesión con Google.',
            '<b>Proveedores de inteligencia artificial (OpenRouter y Google Gemini):</b> cuando usas el Coach IA o el ajuste de dieta con IA, tu mensaje se envía al proveedor junto con el contexto de tu perfil: primer nombre, edad, peso, altura, objetivo, nivel, lugar de entrenamiento, dolores indicados, preferencias de alimentación, suplementos registrados, metas de la dieta, consumo de agua y un resumen de tus entrenamientos recientes. Las fotos de rutinas que adjuntes también se envían para su lectura. No enviamos correo, contraseña ni datos de pago.',
            '<b>Google Play y RevenueCat:</b> procesan la suscripción de Attos PRO e informan a la app si está activa.',
          ],
          'Estos proveedores pueden tratar datos en servidores fuera de Brasil, conforme a sus propias políticas de privacidad y a las salvaguardas que la LGPD prevé para la transferencia internacional.',
        ],
      },
      {
        h: '5. Dónde están los datos y cómo se protegen',
        body: [
          [
            '<b>En el dispositivo, por defecto:</b> tus datos se guardan en el almacenamiento de la aplicación en tu teléfono.',
            '<b>En la nube, si quieres:</b> al iniciar sesión con Google, se sincroniza una copia con Google Firebase.',
            '<b>Cifrado en tránsito:</b> toda comunicación con servidores usa HTTPS/TLS.',
            '<b>Acceso restringido:</b> solo la cuenta de Google autenticada accede a sus propios datos en la nube.',
          ],
          'Los recordatorios de agua y de suplementos se programan en el propio dispositivo. El contenido de esos avisos no se envía a servidores.',
        ],
      },
      {
        h: '6. Por cuánto tiempo los guardamos',
        body: [
          'Guardamos tus datos mientras uses la app. Al eliminar la cuenta, los datos del dispositivo y la copia en la nube se borran de forma definitiva. Los datos enviados a los proveedores de IA para responder un mensaje siguen los plazos de retención de esos proveedores.',
        ],
      },
      {
        h: '7. Tus derechos (art. 18 de la LGPD)',
        body: [
          'Eres el titular de tus datos y puedes, en cualquier momento:',
          [
            '<b>Confirmar y acceder:</b> saber si tratamos tus datos y consultarlos. Todo lo que la app guarda está visible en las pantallas de Perfil, Historial, Nutrición y Perfil de atleta.',
            '<b>Corregir:</b> cambiar datos incompletos o desactualizados en tu Perfil de atleta y en las propias pantallas de la app.',
            '<b>Pedir una copia (portabilidad):</b> solicitar por correo una copia de los datos asociados a tu cuenta.',
            '<b>Retirar el consentimiento y eliminar:</b> borrar todos los datos, del dispositivo y de la nube, de forma definitiva.',
          ],
          'Para ejercer cualquier derecho, escribe a {privacy}. También puedes presentar un reclamo ante la Autoridad Nacional de Protección de Datos de Brasil (ANPD) o ante la autoridad de protección de datos de tu país.',
        ],
      },
      {
        h: '8. Cómo eliminar tu cuenta y tus datos',
        id: 'delete',
        body: [
          [
            '<b>Desde la aplicación:</b> Perfil → engranaje de arriba → <b>Eliminar cuenta y datos</b> → <b>Eliminar definitivamente</b>. La app borra tus datos del dispositivo y de la nube y desconecta la cuenta de Google.',
            '<b>Por correo:</b> si desinstalaste la app, escribe a {support} con el asunto “Eliminación de datos — Attos” e indica el correo de la cuenta de Google usada. La solicitud se atiende en un máximo de 5 días hábiles, con confirmación por correo.',
          ],
          'Eliminar la cuenta no cancela una suscripción activa: la cancelación se hace en Google Play.',
        ],
      },
      {
        h: '9. Niños y adolescentes',
        body: [
          'La aplicación no está dirigida a menores de 16 años. Si identificamos el registro de alguien por debajo de esa edad sin el consentimiento comprobado de sus padres o tutores, los datos se borrarán.',
        ],
      },
      {
        h: '10. Cambios en esta política',
        body: [
          'Podemos actualizar esta política para reflejar nuevas funciones de la app o exigencias legales. La fecha de arriba indica la versión vigente. Los cambios relevantes se avisan en la aplicación.',
        ],
      },
    ],
  },

  terms: {
    title: 'Términos de uso y aviso de salud',
    short: 'Términos de uso',
    desc: 'Reglas de uso de Attos, avisos de salud, límites del Coach IA y condiciones de la suscripción Attos PRO.',
    intro: {
      tone: '',
      title: 'Aviso de salud y seguridad',
      text: 'Attos y el Coach IA son herramientas de organización y apoyo al entrenamiento. No son un servicio médico, de fisioterapia ni una prescripción nutricional individualizada. Antes de empezar una rutina de ejercicio o de cambiar mucho tu alimentación, consulta a un médico y a profesionales registrados en el CREF y el CFN (los consejos profesionales de educación física y de nutrición de Brasil), o en el organismo equivalente de tu país.',
    },
    sections: [
      {
        h: '1. Aceptación de los términos',
        body: ['Al descargar, instalar o usar la aplicación Attos, aceptas estos Términos de uso. Si no estás de acuerdo con alguna cláusula, no uses la aplicación.'],
      },
      {
        h: '2. Qué es el servicio y qué no es',
        body: [
          'Attos ofrece funciones para registrar entrenamientos, llevar el historial de pesos, seguir el agua, la dieta y los suplementos, y recibir sugerencias de rutinas generadas por reglas de la app y por modelos de inteligencia artificial.',
          [
            '<b>No es un dispositivo médico:</b> la aplicación no diagnostica enfermedades, no previene lesiones y no reemplaza la consulta presencial.',
            '<b>Educación física (CREF):</b> la supervisión de un profesional calificado es importante para corregir la postura y el rango de movimiento y para adecuar el volumen de entrenamiento a cada persona.',
            '<b>Nutrición (CFN):</b> las metas de calorías y las sustituciones de alimentos son estimaciones generales, basadas en literatura abierta, y no reemplazan el plan de alimentación de un nutricionista.',
          ],
        ],
      },
      {
        h: '3. Aptitud física y riesgos',
        body: [
          'El entrenamiento con pesas, el levantamiento de pesas y la actividad física intensa implican riesgos de lesión, como contracturas, desgarros, lesiones articulares, dolores lumbares y problemas cardiovasculares por esfuerzo o por condiciones de salud previas.',
          'Al usar Attos, declaras que:',
          [
            'tienes 16 años o más y estás clínicamente apto para hacer ejercicio;',
            'asumes la responsabilidad por la elección de los pesos, el ritmo, la postura y la ejecución de los movimientos;',
            'vas a interrumpir el entrenamiento si sientes dolor agudo, mareo, palpitaciones, falta de aire o náuseas, y a buscar atención médica.',
          ],
        ],
      },
      {
        h: '4. Inteligencia artificial (Coach IA)',
        body: [
          'El Coach IA usa modelos de lenguaje y de lectura de imágenes, incluso para leer fotos de rutinas de entrenamiento. Esos modelos son probabilísticos y pueden presentar imprecisiones, errores de interpretación o información inventada.',
          'Revisa con atención cualquier entrenamiento u orientación generados por la IA antes de ponerlos en práctica. La aplicación y sus desarrolladores no se hacen responsables por daños derivados de seguir, sin revisar, contenido generado por IA.',
          'Usa el botón Reportar, en cada respuesta del Coach, para avisar sobre contenido incorrecto o inapropiado.',
        ],
      },
      {
        h: '5. Suscripción Attos PRO',
        body: [
          'Attos tiene una versión gratuita, con las funciones esenciales, y una suscripción de pago, Attos PRO, que desbloquea mensajes ilimitados con el Coach IA y la dieta ajustada por la IA.',
          [
            '<b>Pago:</b> la compra se procesa con el sistema de cobro de Google Play. No recibimos los datos de tu tarjeta.',
            '<b>Precio:</b> el valor de los planes mensual y anual se muestra en la aplicación antes de la compra, según la tienda de tu país.',
            '<b>Renovación automática:</b> la suscripción se renueva al final de cada periodo, hasta que la canceles.',
            '<b>Cancelación y reembolso:</b> cancelas cuando quieras, en las suscripciones de tu cuenta de Google Play. Las solicitudes de reembolso y el derecho de desistimiento siguen las reglas de Google Play y la legislación aplicable.',
          ],
        ],
      },
      {
        h: '6. Propiedad intelectual',
        body: ['El nombre Attos, la marca, el código, la interfaz y las bases de datos de la aplicación pertenecen a sus creadores y están protegidos por la ley. No está permitido copiar, hacer ingeniería inversa ni distribuir la aplicación sin autorización. Los entrenamientos y registros que creas siguen siendo tuyos.'],
      },
      {
        h: '7. Cambios en los términos',
        body: ['Estos términos pueden actualizarse para reflejar nuevas funciones o exigencias legales. La fecha de arriba indica la versión vigente. Seguir usando la aplicación después de una actualización significa que aceptas los nuevos términos.'],
      },
      {
        h: '8. Ley aplicable',
        body: ['Estos términos se rigen por las leyes de Brasil, en especial el Código de Defensa del Consumidor (Ley n.º 8.078/1990) y el Marco Civil de Internet (Ley n.º 12.965/2014).'],
      },
    ],
  },
};

export default {
  app: 'App: Attos',
  updated: 'Last updated: October 11, 2026',
  contactTitle: 'Contact',
  supportLabel: 'Support and general questions',
  privacyLabel: 'Privacy and data protection officer (LGPD)',
  translation: {
    title: 'About this translation',
    text: 'This is a translation of the original document in Portuguese. If there is any difference, the <a href="{href}" hreflang="pt-BR">Portuguese version</a> prevails.',
  },

  hub: {
    title: 'Terms and privacy',
    lead: 'The official Attos documents and how to delete your account and your data.',
    read: 'Read the document',
    privacyText: 'Which data the app uses, what for, who it is shared with and what your rights are.',
    termsText: 'Rules of use, health notices, the limits of AI Coach and how the subscription works.',
    deleteShort: 'Delete account and data',
    deleteTitle: 'How to delete your account and your data',
    deleteBody: [
      'You can request the complete deletion of your account and all your data at any time, in two ways.',
      [
        '<b>In the app:</b> open Attos, tap <b>Profile</b>, then the gear at the top of the screen, scroll to the bottom and tap <b>Delete account and data</b>. Confirm with <b>Delete permanently</b>. The app erases your workouts, history, measurements and the cloud backup, and disconnects your Google account.',
        '<b>By email:</b> if you already uninstalled the app, write to {support} with the subject “Data deletion — Attos” and tell us the email of the Google account you used in the app. We handle it within 5 business days and confirm by email.',
      ],
      'Deletion is permanent: the data cannot be recovered afterwards. Deleting the account does not cancel an active Attos PRO subscription; cancellation is done in Google Play.',
      'If you use the app without an account, your data is stored on the device only. In that case, “Delete account and data” erases everything from the device, and uninstalling the app has the same effect.',
    ],
  },

  privacy: {
    title: 'Privacy policy',
    short: 'Privacy',
    desc: 'How Attos collects, uses, stores and protects your data, in compliance with Brazil’s LGPD.',
    intro: {
      tone: 'ok',
      title: 'Summary',
      text: 'Attos stores your data on your device first. There is a cloud copy only if you sign in with Google. We do not sell or rent your data, and there are no ads in the app. You can erase everything whenever you want.',
    },
    sections: [
      {
        h: '1. About this policy',
        body: [
          'This policy explains how the Attos app collects, uses, stores and protects the information of the people who use it, in compliance with Brazil’s General Data Protection Law (LGPD — Law No. 13,709/2018) and with Google Play’s rules.',
          'By using the app, you declare that you have read and agree with this policy.',
        ],
      },
      {
        h: '2. Data we process',
        body: [
          'We collect only what the app needs to work:',
          [
            '<b>Account data:</b> the name, email and profile picture of your Google account, only if you choose to sign in with Google.',
            '<b>Physical and training data (sensitive data):</b> age, weight, height, biological sex, goal, experience level, training place, workouts, weights, repetitions and session history.',
            '<b>Pain and limitations:</b> the body areas you mark in your athlete profile, so that risky exercises are avoided.',
            '<b>Nutrition and habits:</b> calorie and macronutrient targets, logged meals, water intake, supplements and their times, and dietary preferences.',
            '<b>Conversations with AI Coach:</b> the messages you send and the photos of workout sheets you attach.',
            '<b>Subscription data:</b> if you subscribe to Attos PRO, the subscription status and a purchase identifier. We do not receive or store your card details.',
          ],
        ],
      },
      {
        h: '3. What we use it for and on what legal basis',
        body: [
          'Processing relies on the legal bases of the LGPD (arts. 7 and 11):',
          [
            '<b>Providing the service (art. 7, V):</b> building workouts, calculating estimates (BMR, TDEE, BMI, water goal), recording your progress and keeping your history.',
            '<b>Consent (art. 11, I):</b> using your physical data and your limitations to personalize AI Coach’s answers. You consent by filling in your profile and by using the Coach, and you can withdraw consent by deleting that data.',
            '<b>Legitimate interest and security:</b> preventing fraud and keeping saved data intact.',
          ],
        ],
      },
      {
        h: '4. Who we share it with',
        body: [
          'Attos <b>does not sell, rent or share</b> personal data with advertisers, ad networks or data brokers.',
          'Data is shared only with the providers the app needs in order to work:',
          [
            '<b>Google Firebase (Google):</b> sign-in with your Google account and the cloud database, used only if you sign in with Google.',
            '<b>Artificial intelligence providers (OpenRouter and Google Gemini):</b> when you use AI Coach or the AI diet adjustment, your message is sent to the provider together with the context of your profile: first name, age, weight, height, goal, level, training place, pain areas you reported, dietary preferences, supplements you added, diet targets, water intake and a summary of your recent workouts. Photos of workout sheets you attach are also sent to be read. We do not send your email, password or payment data.',
            '<b>Cloudflare:</b> hosts the AI Coach server, which messages pass through before reaching the AI provider. It stores the daily message counter and the answers you report.',
            '<b>Google Play and RevenueCat:</b> they process the Attos PRO subscription and tell the app whether it is active.',
          ],
          'These providers may process data on servers outside Brazil, under their own privacy policies and the safeguards the LGPD sets for international transfers.',
        ],
      },
      {
        h: '5. Where the data is kept and how it is protected',
        body: [
          [
            '<b>On the device, by default:</b> your data is saved in the app’s storage on your phone.',
            '<b>In the cloud, if you choose:</b> when you sign in with Google, a copy is synced with Google Firebase.',
            '<b>Encryption in transit:</b> all communication with servers uses HTTPS/TLS.',
            '<b>Restricted access:</b> only the authenticated Google account can access its own data in the cloud.',
          ],
          'Water and supplement reminders are scheduled on the device itself. The content of those alerts is not sent to servers.',
        ],
      },
      {
        h: '6. How long we keep it',
        body: [
          'We keep your data for as long as you use the app. When you delete your account, the data on the device and the cloud copy are permanently erased. Data sent to AI providers to answer a message follows those providers’ retention periods.',
        ],
      },
      {
        h: '7. Your rights (art. 18 of the LGPD)',
        body: [
          'You are the owner of your data and may, at any time:',
          [
            '<b>Confirm and access:</b> know whether we process your data and look it up. Everything the app stores is visible on the Profile, History, Nutrition and Athlete profile screens.',
            '<b>Correct:</b> change incomplete or outdated data in your Athlete profile and on the app’s own screens.',
            '<b>Request a copy (portability):</b> ask by email for a copy of the data associated with your account.',
            '<b>Withdraw consent and delete:</b> permanently erase all data, from the device and from the cloud.',
          ],
          'To exercise any right, write to {privacy}. You may also file a complaint with Brazil’s National Data Protection Authority (ANPD) or with the data protection authority in your country.',
        ],
      },
      {
        h: '8. How to delete your account and your data',
        id: 'delete',
        body: [
          [
            '<b>In the app:</b> Profile → the gear at the top → <b>Delete account and data</b> → <b>Delete permanently</b>. The app erases your data from the device and the cloud and disconnects your Google account.',
            '<b>By email:</b> if you uninstalled the app, write to {support} with the subject “Data deletion — Attos” and tell us the email of the Google account you used. The request is handled within 5 business days, with confirmation by email.',
          ],
          'Deleting the account does not cancel an active subscription: cancellation is done in Google Play.',
        ],
      },
      {
        h: '9. Children and teenagers',
        body: [
          'The app is not directed at anyone under 16. If we identify that someone below that age signed up without proven consent from a parent or guardian, the data will be erased.',
        ],
      },
      {
        h: '10. Changes to this policy',
        body: [
          'We may update this policy to reflect new app features or legal requirements. The date at the top shows the version in force. Relevant changes are announced in the app.',
        ],
      },
    ],
  },

  terms: {
    title: 'Terms of use and health notice',
    short: 'Terms of use',
    desc: 'Rules for using Attos, health notices, the limits of AI Coach and the conditions of the Attos PRO subscription.',
    intro: {
      tone: '',
      title: 'Health and safety notice',
      text: 'Attos and AI Coach are tools for organizing and supporting your training. They are not a medical or physical therapy service, nor an individualized nutritional prescription. Before starting an exercise routine or making big changes to your diet, consult a physician and professionals registered with CREF and CFN (Brazil’s professional councils for physical education and nutrition), or the equivalent body in your country.',
    },
    sections: [
      {
        h: '1. Acceptance of the terms',
        body: ['By downloading, installing or using the Attos app, you agree to these Terms of use. If you do not agree with any clause, do not use the app.'],
      },
      {
        h: '2. What the service is and is not',
        body: [
          'Attos offers features for logging workouts, keeping a weight history, tracking water, diet and supplements, and receiving routine suggestions generated by the app’s rules and by artificial intelligence models.',
          [
            '<b>It is not a medical device:</b> the app does not diagnose diseases, does not prevent injuries and does not replace an in-person consultation.',
            '<b>Physical education (CREF):</b> supervision by a qualified professional is important to correct posture and range of motion and to match training volume to each person.',
            '<b>Nutrition (CFN):</b> calorie targets and food substitutions are general estimates, based on open literature, and do not replace a dietitian’s meal plan.',
          ],
        ],
      },
      {
        h: '3. Physical fitness and risks',
        body: [
          'Strength training, weightlifting and intense physical activity involve risks of injury, such as muscle strains, tears, joint injuries, lower back pain and cardiovascular problems caused by exertion or by pre-existing health conditions.',
          'By using Attos, you declare that:',
          [
            'you are 16 or older and clinically fit to exercise;',
            'you take responsibility for your choice of weights, pace, posture and execution of the movements;',
            'you will stop the workout if you feel sharp pain, dizziness, palpitations, shortness of breath or nausea, and seek medical care.',
          ],
        ],
      },
      {
        h: '4. Artificial intelligence (AI Coach)',
        body: [
          'AI Coach uses language and image-reading models, including to read photos of workout sheets. These models are probabilistic and may produce inaccuracies, misreadings or made-up information.',
          'Carefully review any workout or guidance generated by AI before putting it into practice. The app and its developers are not responsible for damage that results from following AI-generated content without checking it.',
          'Use the Report button on each Coach answer to flag wrong or inappropriate content.',
        ],
      },
      {
        h: '5. Attos PRO subscription',
        body: [
          'Attos has a free version, with the essential features, and a paid subscription, Attos PRO, which unlocks unlimited AI Coach messages and an AI-adjusted diet.',
          [
            '<b>Payment:</b> the purchase is processed by Google Play’s billing system. We do not receive your card details.',
            '<b>Price:</b> the price of the monthly and yearly plans is shown in the app before you buy, according to your country’s store.',
            '<b>Automatic renewal:</b> the subscription renews at the end of each period until it is cancelled.',
            '<b>Cancellation and refunds:</b> you can cancel any time in the subscriptions section of your Google Play account. Refund requests and withdrawal rights follow Google Play’s rules and the applicable law.',
          ],
        ],
      },
      {
        h: '6. Intellectual property',
        body: ['The Attos name, brand, code, interface and databases belong to their creators and are protected by law. Copying, reverse engineering or distributing the app without authorization is not allowed. The workouts and records you create remain yours.'],
      },
      {
        h: '7. Changes to the terms',
        body: ['These terms may be updated to reflect new features or legal requirements. The date at the top shows the version in force. Continuing to use the app after an update means you accept the new terms.'],
      },
      {
        h: '8. Governing law',
        body: ['These terms are governed by the laws of Brazil, in particular the Consumer Protection Code (Law No. 8,078/1990) and the Brazilian Civil Rights Framework for the Internet (Law No. 12,965/2014).'],
      },
    ],
  },
};

import legal from './legal.en.mjs';

export default {
  meta: { name: 'English' },
  nav: { home: 'Home', guide: 'App guide', legal: 'Terms and privacy', download: 'Get it on Google Play', soon: 'Coming soon to Google Play', menu: 'Menu', theme: 'Switch between light and dark theme', language: 'Language' },
  foot: {
    disclaimer: 'Attos is a tool for organizing your training. It does not replace a doctor, a fitness professional or a dietitian.',
    rights: 'All rights reserved.',
    links: 'Footer links',
    contact: 'Contact',
  },

  home: {
    title: 'Attos — workouts, diet and progress in one app',
    desc: 'Log your strength workouts, track weights and personal records, keep up with diet and water, and ask AI Coach your questions. In English, Portuguese and Spanish.',
    eyebrow: 'Workout app for Android',
    h1: 'Your workout in your hand, from warm-up to PR.',
    lead: 'Attos builds your workouts from six questions, logs every set at the gym and shows your progress. Logging workouts is free, forever.',
    ctaGuide: 'See how it works',
    facts: [['101', 'exercises with instructions'], ['3', 'languages: English, Portuguese, Spanish'], ['Free', 'to log workouts']],
    featuresTitle: 'Built for what happens inside the gym',
    featuresLead: 'A few taps per set, big numbers and nothing in your way between exercises.',
    features: [
      {
        chapter: 'workouts', shot: 'workouts', more: 'How to create and edit workouts',
        title: 'Workouts ready on day one',
        text: 'Answer six questions and Attos gives you a training split tuned to your goal, your level and the place where you train.',
        ticks: ['Routines for the gym, a building gym or home', 'Create your own from scratch or edit the suggested ones', '101 exercises with video and step-by-step form cues', 'Risky exercises are left out when you report pain'],
      },
      {
        chapter: 'active', shot: 'active', more: 'How to log a workout',
        title: 'Log every set with one tap',
        text: 'The workout screen shows what you did last time next to each set. Adjust the weight, check it off and move on.',
        ticks: ['Weight and reps from your last session always in view', 'Add sets and change the exercise order mid-workout', 'Summary with duration, volume and records when you finish', 'Cards ready to share'],
      },
      {
        chapter: 'coach', shot: 'coach-workout', more: 'How to use AI Coach',
        title: 'A coach that knows your profile',
        text: 'AI Coach answers training and nutrition questions with your goal, level and limitations in mind. It also builds workouts that land in the app with one tap.',
        ticks: ['Ask for a workout in plain words and save it to My workouts', 'Take a photo of your paper routine and let AI digitize it', '5 messages a day on the free plan'],
      },
      {
        chapter: 'nutrition', shot: 'diet', more: 'How to use Nutrition',
        title: 'Diet, water and supplements in one place',
        text: 'Daily calorie and macro targets, meals to check off through the day, a water goal based on your weight and your supplement list.',
        ticks: ['Water goal recommended for your weight or set by you', 'Reminders for water and for each supplement, at the times you choose', 'Nudges when your day is falling behind', 'Quiet hours so nothing bothers you at night'],
      },
      {
        chapter: 'profile', shot: 'profile', more: 'How to track your progress',
        title: 'See your real progress',
        text: 'Profile brings together everything you have trained: consistency, records, muscle distribution, body weight and achievements.',
        ticks: ['Personal records and estimated 1RM per exercise', 'Body map of the muscles you train most', 'Body weight trend and BMI', 'Full history, set by set'],
      },
    ],
    cardsTitle: 'The details that make a difference',
    cardsLead: 'The app adapts to your phone and your habits.',
    cards: [
      { icon: 'moon', title: 'Light and dark theme', text: 'Attos follows your phone’s theme. If you prefer, lock it to light or dark in Settings.' },
      { icon: 'globe', title: 'Three languages', text: 'English, Portuguese and Spanish. The app opens in your device language and you can switch any time.' },
      { icon: 'bell', title: 'Reminders at your pace', text: 'Water and supplement alerts at the times you set, with quiet hours.' },
      { icon: 'cloud', title: 'Cloud backup', text: 'Sign in with Google so you don’t lose your workouts when you switch phones. Without an account, everything stays on the device.' },
      { icon: 'share', title: 'Share your workout', text: 'Cards for a workout or for your month in several styles, ready for your stories.' },
      { icon: 'shield', title: 'Your data is yours', text: 'We don’t sell data. You can delete your account and everything saved from inside the app, any time.' },
    ],
    plans: {
      title: 'Free and Attos PRO',
      lead: 'Logging workouts stays free forever. PRO unlocks unlimited AI Coach and an AI-adjusted diet.',
      cols: ['Feature', 'Free', 'PRO'], yes: 'included', no: 'not included',
      rows: [
        ['Log workouts', true, true],
        ['Records, 1RM and progress', true, true],
        ['Cloud backup', true, true],
        ['AI Coach', '5 per day', 'unlimited'],
        ['AI-adjusted diet', false, true],
      ],
      note: 'The monthly and yearly prices are shown in the app and come from Google Play. The subscription renews automatically and you can cancel it any time in Google Play.',
    },
    faqTitle: 'Frequently asked questions',
    faq: [
      ['Is Attos free?', 'Yes. Creating workouts, logging sets, viewing history, records and achievements, and using cloud backup are free. The Attos PRO plan is optional and unlocks unlimited AI Coach messages and an AI-adjusted diet.'],
      ['Do I need an account?', 'No. You can start without an account and your data stays on the device. Signing in with Google gives you cloud backup, so you can recover everything when you switch phones.'],
      ['Does it work offline?', 'Logging workouts, water, diet and supplements works offline. AI Coach, cloud backup and the subscription need a connection.'],
      ['Does AI Coach replace a trainer or a dietitian?', 'No. AI Coach is a support tool: it answers questions and suggests workouts based on your profile, but it can make mistakes. Always check its suggestions and see a qualified professional, especially if you have injuries or health conditions.'],
      ['Can I use pounds instead of kilograms?', 'Yes. In Settings, under Training, switch the units between kg and lb.'],
      ['How do I delete my account and my data?', 'In the app, go to Profile, tap the gear, scroll to the bottom and tap “Delete account and data”. If you already uninstalled the app, request deletion by email. The steps are on the Terms and privacy page.'],
      ['Which devices does Attos run on?', 'Attos is an Android app and is currently in testing. It will be available on Google Play soon.'],
    ],
    band: { title: 'Start your next workout with Attos', text: 'Six questions and your workouts are ready.' },
  },

  guide: {
    title: 'App guide — Attos',
    desc: 'Step by step through every Attos screen: first launch, workouts, active workout, AI Coach, nutrition, profile, settings and Attos PRO.',
    h1: 'App guide',
    lead: 'Every Attos screen, one by one, with what each button does. The images follow the theme and language you pick at the top of this page. Tap an image to enlarge it.',
    tocLabel: 'Chapters', chapterLabel: 'Chapter', tipLabel: 'Tip:', zoom: 'Enlarge',
    chapters: {
      start: { title: 'Getting started', lead: 'From the first tap to your workouts being ready: it takes about a minute.' },
      home: { title: 'Home', lead: 'The screen the app opens on: today’s workout and what is left to do today.' },
      workouts: { title: 'Workouts and exercises', lead: 'Where your workouts live, plus the library with the 101 catalog exercises.' },
      active: { title: 'Active workout', lead: 'The screen you use at the gym, set by set.' },
      coach: { title: 'AI Coach', lead: 'An assistant that knows your profile: it answers questions and builds workouts.' },
      nutrition: { title: 'Nutrition', lead: 'Three tabs: Diet, Water and Supplements.' },
      profile: { title: 'Profile and progress', lead: 'Everything you have trained, in numbers, charts and achievements.' },
      settings: { title: 'Settings', lead: 'Account, backup, athlete profile, reminders, theme and language. Open it with the gear at the top of Profile.' },
      pro: { title: 'Attos PRO', lead: 'The optional plan that unlocks unlimited AI Coach and an AI-adjusted diet.' },
    },
    steps: {
      'start.welcome': {
        title: 'Open the app and choose how to start',
        text: 'The first screen introduces Attos and asks whether you want to use an account. It is your call: both options give you every free feature.',
        how: [
          'If the app did not open in your language, tap the language button in the top right corner and choose <b>English</b>, <b>Português</b> or <b>Español</b>.',
          'Tap <b>Continue with Google</b> to sign in with your Google account. Your workouts get a cloud backup.',
          'Or tap <b>Start without an account</b>. Everything is saved on this device only, and you can sign in with Google later, in Settings.',
        ],
        tip: 'By continuing you agree to the Terms of use and the Privacy policy. The two links at the bottom of the screen open the full text.',
      },
      'start.about': {
        title: 'Tell us about you and your measurements',
        text: 'These are the first two of six questions. They are used to estimate your calorie needs, your BMI and your starting weights.',
        how: [
          'On <b>About you</b>, choose your biological sex and type your age.',
          'Tap <b>Continue</b>.',
          'On <b>Your measurements</b>, enter your weight and height. The app shows your estimated BMI right below.',
          'Tap <b>Continue</b>. The arrow at the top goes back to the previous question without losing what you filled in.',
        ],
      },
      'start.goal': {
        title: 'Pick your goal and your routine',
        text: 'The goal sets reps, volume and calories. The routine matches the intensity to your level and the days you have.',
        how: [
          'Pick a goal: <b>Build muscle</b>, <b>Lose fat</b>, <b>Get lean</b>, <b>Get stronger</b> or <b>Health and energy</b>.',
          'On the next screen, mark your strength training experience: beginner, intermediate or advanced.',
          'Choose how many days a week you train, from 2 to 7.',
        ],
        tip: 'The number of days decides the split: from full body for a few days up to five different workouts if you train almost every day.',
      },
      'start.place': {
        title: 'Say where you train and what to watch out for',
        text: 'The last two questions make sure only exercises you can do make it into your workouts.',
        how: [
          'Choose the place: <b>Gym</b>, <b>Building gym</b> or <b>At home</b>.',
          'If you like, choose a muscle priority. <b>Balanced</b> spreads the work evenly.',
          'On <b>Safety</b>, mark the areas where you feel pain: knee, lower back, shoulder, wrist or elbow. Mark several or none.',
          'Choose how you eat: no restrictions, lactose-free, gluten-free or vegetarian.',
          'Tap <b>Finish</b>.',
        ],
        tip: 'The safety step is optional, but worth filling in: exercises that are risky for a marked area are swapped for alternatives.',
      },
      'start.ready': {
        title: 'All set: your workouts are ready',
        text: 'Attos builds your workouts and opens Home. You can start the first one right away.',
        how: [
          'Wait for the <b>All set</b> message. The app moves on to Home by itself.',
          'Your first workout shows up in the <b>Today’s workout</b> card, marked as tuned for you.',
        ],
        tip: 'Changed your goal or your gym? Edit your answers any time in Settings → Athlete profile.',
      },

      'home.today': {
        title: 'See today’s workout and your week',
        text: 'The top of Home answers “what do I train today?” and shows how your week is going.',
        how: [
          'The <b>Today’s workout</b> card suggests the next workout on your list, after the last one you did.',
          'Tap <b>Start workout</b> to open the active workout screen.',
          'In <b>Last 7 days</b>, the days you trained are checked. Below the title you see the days trained and your streak in weeks.',
        ],
        tip: 'The order of your workouts on the Workouts tab sets the rotation. To change today’s suggestion, change the order of the list.',
      },
      'home.day': {
        title: 'Keep up with water, diet and supplements',
        text: 'Scroll down and the Today section sums up what is done and what is left.',
        how: [
          '<b>Water</b> shows how much you drank and the day’s goal. Tap it to open the Water tab.',
          '<b>Diet</b> shows how many meal items you have checked off. Tap it to open the Diet tab.',
          'Under <b>Supplements</b>, tap the circle to mark what you have taken. Each one’s time is on the right.',
          'Tap <b>Manage</b> to add or edit supplements.',
        ],
      },

      'workouts.list': {
        title: 'Start a workout from the list',
        text: 'The Workouts tab has two parts: <b>My workouts</b>, with your routines, and <b>Exercises</b>, with the library.',
        how: [
          'On the bottom bar, tap <b>Workouts</b>.',
          'Each workout shows how many exercises it has, the estimated duration and the first exercises.',
          'Tap the workout, or the blue button on the right, to start.',
        ],
      },
      'workouts.create': {
        title: 'Create a workout from scratch',
        text: 'Build your own routine with the exercises you want.',
        how: [
          'Tap <b>New workout</b>.',
          'Give it a name (for example, “Workout A”) and, if you like, a description.',
          'Tap <b>Add exercises</b>.',
          'On the <b>Select</b> screen, search by name or filter by muscle group, and tap the exercises you want to include.',
          'Tap <b>Confirm</b> and, back in the workout, <b>Create workout</b>.',
        ],
        tip: 'Can’t find an exercise? The New button next to the search creates your own exercise without leaving the selection.',
      },
      'workouts.editor': {
        title: 'Edit a workout',
        text: 'Change the name, the description and the exercise list of any workout, including the ones the app suggested.',
        how: [
          'In My workouts, tap <b>Edit</b> and then the pencil on the workout.',
          'Change the name and the description.',
          'Drag an exercise by the handle on the left, or use the arrows, to change the order.',
          'Tap the trash can to remove an exercise from the workout.',
          'Tap <b>Save changes</b>.',
        ],
      },
      'workouts.manage': {
        title: 'Reorder or delete workouts',
        text: 'The list’s edit mode is for organizing your routines.',
        how: [
          'Tap <b>Edit</b>, next to “Your workouts”.',
          'Drag by the handle or use the arrows to change the order.',
          'Tap the trash can to delete a workout. The app asks you to confirm.',
          'Tap <b>Done</b> to leave edit mode.',
        ],
        tip: 'The order sets the rotation: Home suggests as today’s workout the next one on the list after the last one you did.',
      },
      'workouts.library': {
        title: 'Browse the exercise library',
        text: 'There are 101 exercises, each with a video and form instructions.',
        how: [
          'On the Workouts tab, tap <b>Exercises</b>.',
          'Use the search or the filters: Chest, Back, Legs, Shoulders, Arms and Core.',
          'Tap an exercise to see the video and the step-by-step.',
          'Tap <b>Close</b> to go back to the list.',
        ],
        tip: 'The search finds an exercise by its name in English, Portuguese or Spanish.',
      },
      'workouts.custom': {
        title: 'Add your own exercise',
        text: 'Use it when your gym has a machine or a variation that is not in the catalog.',
        how: [
          'In the Exercises part, tap <b>New exercise</b>.',
          'Type the name and choose the main muscle group.',
          'If you like, write the form instructions and paste a YouTube video link.',
          'Tap <b>Save exercise</b>. It now shows up in the library and when you pick exercises.',
        ],
      },

      'active.sets': {
        title: 'Log every set',
        text: 'At the top you have the workout timer and the number of sets done. Each exercise has a table with one row per set.',
        how: [
          'The <b>Previous</b> column shows the weight and reps from last time. Tap it to copy those values into the set.',
          'Adjust <b>kg</b> and <b>Reps</b> by tapping the fields.',
          'Tap the check button to complete the set. The row turns green.',
          'Tap <b>Add set</b> to add one more.',
          'Tap <b>Edit</b> on the exercise to remove sets.',
        ],
        tip: 'You can leave the screen or close the app: the active workout is saved and picks up where you left off.',
      },
      'active.reorder': {
        title: 'Change the exercise order',
        text: 'Is the machine you wanted taken? Change the order without losing what you have logged.',
        how: [
          'Tap <b>Reorder</b>, at the top of the list.',
          'Drag by the handle or use the arrows to move each exercise up or down.',
          'Tap <b>Done</b>.',
        ],
        tip: 'The order you choose here applies to this workout only. To change it for good, edit the workout on the Workouts tab.',
      },
      'active.finish': {
        title: 'Finish and see the summary',
        text: 'When you are done, Attos saves the workout to your history and shows the result.',
        how: [
          'Tap <b>Finish</b>, in the top right corner.',
          'The summary shows duration, total volume, sets and exercises done.',
          'Records you broke and achievements you unlocked in this workout appear right below, with the XP you earned.',
          'Tap <b>Back to workouts</b> to leave.',
        ],
        tip: 'To leave without saving, tap the back arrow at the top of the workout and confirm that you want to discard it.',
      },
      'active.share': {
        title: 'Share your workout',
        text: 'From the summary you can create a card with the workout’s numbers.',
        how: [
          'On the summary, tap <b>Share</b>.',
          'Swipe sideways to see the card layouts.',
          'Pick a style: <b>Color</b>, <b>Dark</b>, <b>Light</b>, <b>Transparent</b> or <b>Photo</b>, which uses one of your pictures as the background.',
          'Tap <b>Share</b> to send it to another app, or the button next to it to save the image.',
        ],
      },

      'coach.ask': {
        title: 'Ask the Coach',
        text: 'AI Coach answers questions about training, nutrition and exercise form with your profile in mind.',
        how: [
          'On the bottom bar, tap <b>AI Coach</b>.',
          'Tap one of the suggestions above the text field, or type your question.',
          'Tap the send button.',
          'The counter under the title shows how many messages you have left today on the free plan: 5 a day.',
        ],
        tip: 'AI Coach can make mistakes. Use its answers as support and tap Report if an answer looks wrong or inappropriate.',
      },
      'coach.plan': {
        title: 'Ask for a workout and save it to the app',
        text: 'When you ask for a workout, the answer comes with a structured workout card.',
        how: [
          'Type what you want. For example: “Build a 45-minute chest and triceps workout”.',
          'The card shows the exercises with sets, reps and rest.',
          'Tap <b>Save to My workouts</b>. The workout now shows up on the Workouts tab.',
        ],
        tip: 'Exercises that exist in the catalog come with video and instructions. The ones that don’t are saved as your own exercises.',
      },
      'coach.photo': {
        title: 'Digitize a paper routine',
        text: 'Have a printed routine from your gym? The Coach reads the photo and builds the workout.',
        how: [
          'Tap the camera icon, to the left of the text field.',
          'Choose <b>Take Photo</b> to open the camera or <b>Photo Gallery</b> to use a saved image.',
          'Send the photo. The Coach returns the workouts from the sheet as cards.',
          'Check the exercises and tap <b>Save to My workouts</b>.',
        ],
        tip: 'Take the photo in good light with the whole sheet in frame. Handwriting that is hard to read can cause errors: check before you save.',
      },

      'nutrition.diet': {
        title: 'Follow your targets and check off meals',
        text: 'The Diet tab shows your daily calorie and macronutrient targets and the day’s meals.',
        how: [
          '<b>Daily targets</b> has calories, protein, carbs and fat, calculated for your weight and goal.',
          'Tap a meal to open it.',
          'Tap the circle on each food to mark it as eaten.',
          'Use the <b>Add a food</b> field to add an item to the meal.',
          'Tap <b>New meal</b> to create another one, or <b>Restart the day</b> to uncheck everything.',
        ],
        tip: 'With Attos PRO, the Adjust with AI button builds a menu for your goal and lets you swap each food for an equivalent one.',
      },
      'nutrition.water': {
        title: 'Log water and adjust your goal',
        text: 'The ring shows how much you drank compared with the day’s goal.',
        how: [
          'Tap one of the buttons to log: <b>+200 ml</b>, <b>+300 ml</b>, <b>+500 ml</b> or <b>+750 ml</b>.',
          'Under <b>Today</b>, the trash can deletes an entry you added by mistake.',
          'Tap <b>Change goal</b> to choose between the <b>Recommended</b> goal and a <b>Custom</b> one.',
          'Tap <b>Save goal</b>.',
        ],
        tip: 'The recommended goal uses 35 ml per kg of body weight, between 1,800 and 4,000 ml, and updates by itself when you update your weight. A custom goal stays fixed at the value you choose.',
      },
      'nutrition.waterrem': {
        title: 'Turn on water reminders',
        text: 'At the bottom of the Water tab you set when Attos should alert you.',
        how: [
          'Turn on <b>Water reminders</b> to be alerted if you go too long without logging.',
          'Turn on <b>Nudges</b> to get an alert when your day is behind the goal.',
          'Tap <b>Window and interval</b>.',
          'Choose when your water day starts and ends, and the interval between alerts: 1 h, 1h30, 2 h or 3 h.',
          'Tap <b>Save</b>.',
        ],
        tip: 'Every water entry restarts the count. Alerts arrive through the phone app; the first time, Android asks for permission to send notifications.',
      },
      'nutrition.supps': {
        title: 'Add supplements and their times',
        text: 'The Supplements tab is your daily list of what to take.',
        how: [
          'Under <b>Add supplement</b>, type the name and the dose, or tap one of the suggestions.',
          'Tap the time, to the right of the supplement, to set when to take it.',
          'Pick the time, or one of the shortcuts, and tap <b>Save time</b>.',
          'During the day, tap the circle to mark what you have taken.',
        ],
        tip: 'An hour after its time without being checked, a supplement shows as late. If you take the same supplement more than once a day, you can add it twice, once for each time.',
      },
      'nutrition.suppsedit': {
        title: 'Supplement reminders and editing the list',
        text: 'Supplement alerts follow the times you set.',
        how: [
          'Turn on <b>Remind at the set time</b> to get an alert at each supplement’s time.',
          'Turn on <b>Nudges</b> to be reminded an hour later, if you still haven’t checked it.',
          'To remove a supplement from the list, tap <b>Edit</b> and then the trash can.',
          'Tap <b>Done</b>.',
        ],
        tip: 'Removing a supplement does not erase what you checked off on previous days.',
      },

      'profile.overview': {
        title: 'Understand the overview',
        text: 'Profile sums up your whole history in the app.',
        how: [
          'At the top are your level and the XP left to the next one. Tap the XP to see how it is calculated.',
          'The counters show workouts done, total volume lifted, time trained and your streak in weeks.',
          '<b>Consistency</b> shows the last 12 weeks. Tap a day to see the details.',
          '<b>Personal records</b> lists your best exercises, with the estimated 1RM.',
          'Further down are your achievements and shortcuts to the detail screens.',
        ],
        tip: 'You earn XP by completing workouts, breaking records and unlocking achievements.',
      },
      'profile.muscles': {
        title: 'See which muscles you train most',
        text: 'The Muscle distribution screen shows whether your training is balanced.',
        how: [
          'On Profile, tap <b>Muscle distribution</b>.',
          'Choose the period: 7, 30 or 90 days.',
          'The body map colors the groups you worked most. Switch between <b>Both</b>, <b>Front</b> and <b>Back</b>.',
          'The list below shows the sets and the share of each group.',
        ],
      },
      'profile.body': {
        title: 'Track your body weight',
        text: 'The Weight and body screen shows your weight trend, without the day-to-day ups and downs.',
        how: [
          'On Profile, tap <b>Weight and body</b>.',
          'Tap <b>Log</b>, choose the date and type your weight. The −1 to +1 buttons adjust the value.',
          'Tap <b>Save weight</b>.',
          'Choose the chart period: 30, 90 or 180 days.',
          'Tap <b>Edit height</b> to fix the height used for BMI.',
        ],
        tip: 'Your latest logged weight updates the recommended water goal and your diet targets.',
      },
      'profile.history': {
        title: 'Check your workout history',
        text: 'Every finished workout is stored with all its sets.',
        how: [
          'On Profile, tap <b>Workout history</b>.',
          'Use the search to find a workout or an exercise.',
          'Each session shows duration, sets and volume. Tap <b>View sets</b> to open the weight and reps of each set.',
          'The share icon creates the card for that workout.',
          'The trash can deletes the session from your history, after you confirm.',
        ],
      },
      'profile.medals': {
        title: 'Unlock achievements',
        text: 'There are 16 achievements, for workouts done, volume lifted, consistency, records and habits.',
        how: [
          'On Profile, tap <b>View all</b>, in the Achievements section.',
          'Filter by category: Workouts, Volume, Streak, Records or Special.',
          'Achievements in color are already yours. The others show your progress as a percentage.',
          'Tap an achievement to see what is left, the date you unlocked it and the XP it gives.',
        ],
      },
      'profile.month': {
        title: 'Share your month in review',
        text: 'Cards with your month’s numbers: workouts, volume, streak and record.',
        how: [
          'At the top of Profile, tap the share icon.',
          'Swipe to choose the card.',
          'Pick a style: Color, Dark, Light, Transparent or Photo.',
          'Tap <b>Share</b> or save the image.',
        ],
      },

      'settings.account': {
        title: 'Account and cloud backup',
        text: 'Open Settings with the gear at the top of Profile. The Account group takes care of your backup.',
        how: [
          'Tap <b>Sign in with Google</b> to turn on backup. If you are already signed in, you see the account name and the <b>Sign out</b> button.',
          'Tap <b>Back up now</b> to save a backup right away.',
          'On a new phone, sign in with the same account and tap <b>Restore from cloud</b>.',
        ],
        tip: 'Backup is automatic: it runs when you sign in and after each workout. Restoring replaces the data on this device with the data from the cloud.',
      },
      'settings.sheet': {
        title: 'Update your athlete profile',
        text: 'The profile keeps your answers from the first launch. It personalizes your workouts, your diet targets and AI Coach’s answers.',
        how: [
          'In Settings, tap <b>Athlete profile</b>.',
          'Update sex, age, weight and height.',
          'Change your goal, experience, days per week, training place, pain areas and diet.',
          'Tap <b>Save profile</b>.',
        ],
        tip: 'In the same group, under Units, you switch between kilograms and pounds.',
      },
      'settings.reminders': {
        title: 'Reminders and quiet hours',
        text: 'The Reminders group controls every alert from the app in one place.',
        how: [
          '<b>Get reminders</b> is the master switch. When it is off, Attos sends no alerts.',
          '<b>Water</b> and <b>Supplements</b> open the settings for each kind of reminder.',
          'Tap <b>Quiet hours</b> and set when the app should stay silent. The default is 10:00 PM to 7:00 AM.',
          'Tap <b>Save</b>.',
        ],
        tip: 'Quiet hours apply to water reminders and to nudges. The time you set on a supplement is always respected.',
      },
      'settings.look': {
        title: 'Theme and language',
        text: 'In the Appearance and language group you choose how the app looks.',
        how: [
          'Under <b>Theme</b>, choose <b>System</b> to follow your phone, or lock it to <b>Light</b> or <b>Dark</b>.',
          'Tap <b>Language</b>.',
          'Choose <b>Device language</b>, <b>Português</b>, <b>Español</b> or <b>English</b>. The change is instant.',
        ],
        tip: 'Workouts, foods and other text you wrote yourself stay as they are. Catalog exercises and suggested workouts appear in the language you choose.',
      },
      'settings.delete': {
        title: 'Delete your account and your data',
        text: 'You can erase everything Attos stores about you, whenever you want.',
        how: [
          'In Settings, scroll to the bottom and tap <b>Delete account and data</b>.',
          'Read the warning: workouts, weight history, measurements and the cloud backup are deleted forever.',
          'Tap <b>Delete permanently</b> to confirm, or <b>Cancel</b>.',
        ],
        tip: 'This can’t be undone. If you subscribe to Attos PRO, cancel the subscription in Google Play: deleting the account does not stop the billing.',
      },

      'pro.plans': {
        title: 'Explore and subscribe to Attos PRO',
        text: 'Logging workouts stays free forever. PRO unlocks unlimited AI Coach messages and an AI-adjusted diet.',
        how: [
          'In Settings, tap <b>Explore PRO</b>. The same screen opens when you tap a PRO feature.',
          'Compare the <b>Free</b> and <b>PRO</b> columns.',
          'Choose the <b>Yearly</b> or <b>Monthly</b> plan. The price comes from Google Play.',
          'Tap <b>Subscribe to PRO</b> and complete the purchase in Google Play.',
          'Already subscribed and switched phones? Tap <b>Restore purchases</b>.',
        ],
        tip: 'The subscription renews automatically. To cancel, change your payment method or ask for a refund, use Manage on Google Play.',
      },
    },
  },

  legal,
};

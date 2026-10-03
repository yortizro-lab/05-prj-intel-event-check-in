const attendanceGoal = 50;
const storageKey = "intelSummitCheckIn";
const languageStorageKey = "intelSummitLanguage";
const defaultLanguage = "en";
const translations = {
  en: {
    pageTitle: "Intel Summit Check-In",
    translate: "Translate",
    english: "English",
    spanish: "Spanish (Español)",
    french: "French (Français)",
    portuguese: "Portuguese (Português)",
    summitName: "Intel Sustainability Summit",
    heroTitle: "Welcome to the room where progress gets practical.",
    heroSubtitle: "Check in, find your team, and make your presence count.",
    livePulse: "Live summit pulse",
    totalAttendance: "Total attendance",
    checkedIn: "checked in",
    progressToGoal: "Progress to goal",
    attendanceProgress: "Attendance progress",
    goalReached: "Attendance goal reached!",
    stepOne: "Step 01",
    stepTwo: "Step 02",
    stepThree: "Step 03",
    stepFour: "Step 04",
    checkInHeading: "Check in for the summit",
    checkInInstructions: "Add your name and choose the team you are joining today.",
    attendeeName: "Attendee name",
    namePlaceholder: "e.g. Yashira Rivera",
    summitTeam: "Summit team",
    selectTeam: "Select a team",
    checkIn: "Check in",
    teamAttendance: "Team attendance",
    checkedInAttendees: "Checked-in attendees",
    noAttendees: "No attendees yet. Be the first to check in.",
    reflectionHeading: "Reflect on your build",
    reflectionUnderstand: "What do you understand better after completing this project?",
    reflectionInterview: "What could you explain about this project in an interview?",
    reflectionDemo: "How could you demonstrate this project in a real-world scenario?",
    reflectionPlaceholder: "Write your reflection...",
    saveResponse: "Save response",
    responseSaved: "Response saved.",
    sustainabilityGoals: "Sustainability Goals",
    alreadyCheckedIn: "{name} is already checked in.",
    welcome: "Welcome, {name}! We're glad you're here with {team}.",
    congratulations: "Congratulations! {team} currently has the highest attendance with {count} attendee{plural}.",
    team: {
      water: "Team Water Wise",
      zero: "Team Net Zero",
      power: "Team Renewables",
      circular: "Team Circularity",
    },
  },
  es: {
    pageTitle: "Registro de Intel Summit",
    translate: "Traducir",
    english: "Inglés",
    spanish: "Español",
    french: "Francés (Français)",
    portuguese: "Portugués (Português)",
    summitName: "Cumbre de Sostenibilidad de Intel",
    heroTitle: "Te damos la bienvenida al espacio donde el progreso se vuelve práctico.",
    heroSubtitle: "Regístrate, encuentra tu equipo y haz que tu presencia cuente.",
    livePulse: "Pulso de la cumbre en vivo",
    totalAttendance: "Asistencia total",
    checkedIn: "registrados",
    progressToGoal: "Progreso hacia la meta",
    attendanceProgress: "Progreso de asistencia",
    goalReached: "¡Meta de asistencia alcanzada!",
    stepOne: "Paso 01",
    stepTwo: "Paso 02",
    stepThree: "Paso 03",
    stepFour: "Paso 04",
    checkInHeading: "Regístrate en la cumbre",
    checkInInstructions: "Añade tu nombre y elige el equipo al que te unes hoy.",
    attendeeName: "Nombre del asistente",
    namePlaceholder: "p. ej., Yashira Rivera",
    summitTeam: "Equipo de la cumbre",
    selectTeam: "Selecciona un equipo",
    checkIn: "Registrarse",
    teamAttendance: "Asistencia por equipo",
    checkedInAttendees: "Asistentes registrados",
    noAttendees: "Aún no hay asistentes. Sé la primera persona en registrarte.",
    reflectionHeading: "Reflexiona sobre tu proyecto",
    reflectionUnderstand: "¿Qué entiendes mejor después de completar este proyecto?",
    reflectionInterview: "¿Qué podrías explicar sobre este proyecto en una entrevista?",
    reflectionDemo: "¿Cómo podrías demostrar este proyecto en una situación real?",
    reflectionPlaceholder: "Escribe tu reflexión...",
    saveResponse: "Guardar respuesta",
    responseSaved: "Respuesta guardada.",
    sustainabilityGoals: "Objetivos de sostenibilidad",
    alreadyCheckedIn: "{name} ya está registrado.",
    welcome: "¡Bienvenido, {name}! Nos alegra tenerte aquí con {team}.",
    congratulations: "¡Felicidades! {team} tiene actualmente la mayor asistencia con {count} asistente{plural}.",
    team: {
      water: "Equipo Agua Inteligente",
      zero: "Equipo Cero Neto",
      power: "Equipo Renovables",
      circular: "Equipo Circularidad",
    },
  },
  fr: {
    pageTitle: "Inscription au sommet Intel",
    translate: "Traduire",
    english: "Anglais",
    spanish: "Espagnol (Español)",
    french: "Français",
    portuguese: "Portugais (Português)",
    summitName: "Sommet du développement durable Intel",
    heroTitle: "Bienvenue dans l'espace où le progrès devient concret.",
    heroSubtitle: "Inscrivez-vous, trouvez votre équipe et faites compter votre présence.",
    livePulse: "Dynamique du sommet en direct",
    totalAttendance: "Participation totale",
    checkedIn: "inscrits",
    progressToGoal: "Progression vers l'objectif",
    attendanceProgress: "Progression de la participation",
    goalReached: "Objectif de participation atteint !",
    stepOne: "Étape 01",
    stepTwo: "Étape 02",
    stepThree: "Étape 03",
    stepFour: "Étape 04",
    checkInHeading: "Inscrivez-vous au sommet",
    checkInInstructions: "Ajoutez votre nom et choisissez l'équipe que vous rejoignez aujourd'hui.",
    attendeeName: "Nom du participant",
    namePlaceholder: "ex. Yashira Rivera",
    summitTeam: "Équipe du sommet",
    selectTeam: "Sélectionnez une équipe",
    checkIn: "S'inscrire",
    teamAttendance: "Participation par équipe",
    checkedInAttendees: "Participants inscrits",
    noAttendees: "Aucun participant pour l'instant. Soyez la première personne à vous inscrire.",
    reflectionHeading: "Réfléchissez à votre projet",
    reflectionUnderstand: "Qu'avez-vous mieux compris après avoir terminé ce projet ?",
    reflectionInterview: "Que pourriez-vous expliquer sur ce projet lors d'un entretien ?",
    reflectionDemo: "Comment pourriez-vous présenter ce projet dans une situation réelle ?",
    reflectionPlaceholder: "Écrivez votre réflexion...",
    saveResponse: "Enregistrer la réponse",
    responseSaved: "Réponse enregistrée.",
    sustainabilityGoals: "Objectifs de développement durable",
    alreadyCheckedIn: "{name} est déjà inscrit.",
    welcome: "Bienvenue, {name} ! Nous sommes heureux de vous accueillir avec {team}.",
    congratulations: "Félicitations ! {team} a actuellement la plus forte participation avec {count} participant{plural}.",
    team: {
      water: "Équipe Eau responsable",
      zero: "Équipe Zéro émission",
      power: "Équipe Renouvelables",
      circular: "Équipe Circularité",
    },
  },
  pt: {
    pageTitle: "Check-in do Intel Summit",
    translate: "Traduzir",
    english: "Inglês",
    spanish: "Espanhol (Español)",
    french: "Francês (Français)",
    portuguese: "Português",
    summitName: "Cúpula de Sustentabilidade da Intel",
    heroTitle: "Boas-vindas ao espaço onde o progresso se torna prático.",
    heroSubtitle: "Faça check-in, encontre sua equipe e faça sua presença valer.",
    livePulse: "Movimento ao vivo da cúpula",
    totalAttendance: "Presença total",
    checkedIn: "confirmados",
    progressToGoal: "Progresso até a meta",
    attendanceProgress: "Progresso da presença",
    goalReached: "Meta de presença alcançada!",
    stepOne: "Etapa 01",
    stepTwo: "Etapa 02",
    stepThree: "Etapa 03",
    stepFour: "Etapa 04",
    checkInHeading: "Faça check-in na cúpula",
    checkInInstructions: "Adicione seu nome e escolha a equipe da qual participará hoje.",
    attendeeName: "Nome do participante",
    namePlaceholder: "ex.: Yashira Rivera",
    summitTeam: "Equipe da cúpula",
    selectTeam: "Selecione uma equipe",
    checkIn: "Fazer check-in",
    teamAttendance: "Presença por equipe",
    checkedInAttendees: "Participantes confirmados",
    noAttendees: "Ainda não há participantes. Seja a primeira pessoa a fazer check-in.",
    reflectionHeading: "Reflita sobre seu projeto",
    reflectionUnderstand: "O que você entende melhor depois de concluir este projeto?",
    reflectionInterview: "O que você poderia explicar sobre este projeto em uma entrevista?",
    reflectionDemo: "Como você poderia demonstrar este projeto em uma situação real?",
    reflectionPlaceholder: "Escreva sua reflexão...",
    saveResponse: "Salvar resposta",
    responseSaved: "Resposta salva.",
    sustainabilityGoals: "Metas de sustentabilidade",
    alreadyCheckedIn: "{name} já está confirmado.",
    welcome: "Boas-vindas, {name}! Estamos felizes por ter você aqui com {team}.",
    congratulations: "Parabéns! {team} tem a maior presença no momento, com {count} participante{plural}.",
    team: {
      water: "Equipe Água Inteligente",
      zero: "Equipe Zero Líquido",
      power: "Equipe Renováveis",
      circular: "Equipe Circularidade",
    },
  },
};

let currentLanguage = localStorage.getItem(languageStorageKey) || defaultLanguage;
if (!translations[currentLanguage]) currentLanguage = defaultLanguage;
let appState = loadState();

function createEmptyState() {
  return {
    attendanceGoal: attendanceGoal,
    attendees: [],
    reflections: { understand: "", interview: "", demo: "" },
  };
}
function loadState() {
  const savedState = localStorage.getItem(storageKey);
  if (!savedState) return createEmptyState();
  try {
    const parsedState = JSON.parse(savedState);
    const state = createEmptyState();
    state.attendees = Array.isArray(parsedState.attendees) ? parsedState.attendees : [];
    state.reflections = parsedState.reflections || state.reflections;
    return state;
  } catch (error) {
    return createEmptyState();
  }
}
function saveState() {
  localStorage.setItem(storageKey, JSON.stringify(appState));
}
function getTranslation(key) {
  const parts = key.split(".");
  let value = translations[currentLanguage];
  parts.forEach(function (part) {
    value = value && value[part];
  });
  return value || translations[defaultLanguage][key] || key;
}
function translate(key, values) {
  let text = getTranslation(key);
  if (values) {
    Object.keys(values).forEach(function (name) {
      text = text.replace(`{${name}}`, values[name]);
    });
  }
  return text;
}
function applyTranslations() {
  document.documentElement.lang = currentLanguage;
  document.title = translate("pageTitle");
  document.querySelectorAll("[data-i18n]").forEach(function (element) {
    element.textContent = translate(element.dataset.i18n);
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach(function (element) {
    element.placeholder = translate(element.dataset.i18nPlaceholder);
  });
  document.querySelectorAll("[data-i18n-aria-label]").forEach(function (element) {
    element.setAttribute("aria-label", translate(element.dataset.i18nAriaLabel));
  });
  updateGreeting();
  render();
}
function setLanguage(language) {
  if (!translations[language]) return;
  currentLanguage = language;
  localStorage.setItem(languageStorageKey, currentLanguage);
  applyTranslations();
  closeLanguageMenu();
}
function getTeamCounts() {
  const counts = { water: 0, zero: 0, power: 0, circular: 0 };
  appState.attendees.forEach(function (attendee) {
    if (counts[attendee.team] !== undefined) counts[attendee.team] += 1;
  });
  return counts;
}
function render() {
  const totalAttendance = appState.attendees.length;
  const progress = Math.min((totalAttendance / attendanceGoal) * 100, 100);
  const teamCounts = getTeamCounts();
  document.getElementById("attendeeCount").textContent = totalAttendance;
  document.getElementById("goalCount").textContent = attendanceGoal;
  document.getElementById("progressText").textContent = `${Math.round(progress)}%`;
  document.getElementById("progressBar").style.width = `${progress}%`;
  document.querySelector(".progress-container").setAttribute("aria-valuenow", progress);
  Object.keys(teamCounts).forEach(function (team) {
    document.getElementById(`${team}Count`).textContent = teamCounts[team];
  });
  renderAttendees();
  renderReflections();
  renderCelebration(totalAttendance, teamCounts);
}
function renderAttendees() {
  const attendeeList = document.getElementById("attendeeList");
  document.getElementById("attendeeListCount").textContent = appState.attendees.length;
  attendeeList.innerHTML = "";
  if (appState.attendees.length === 0) {
    attendeeList.innerHTML = `<li class="empty-state">${translate("noAttendees")}</li>`;
    return;
  }
  appState.attendees.forEach(function (attendee) {
    const listItem = document.createElement("li");
    listItem.innerHTML = `<span class="attendee-initial">${attendee.name.charAt(0).toUpperCase()}</span><span><strong>${attendee.name}</strong><small>${translate(`team.${attendee.team}`)}</small></span>`;
    attendeeList.appendChild(listItem);
  });
}
function renderReflections() {
  Object.keys(appState.reflections).forEach(function (reflectionName) {
    document.getElementById(`${reflectionName}Response`).value = appState.reflections[reflectionName];
  });
}
function renderCelebration(totalAttendance, teamCounts) {
  const celebration = document.getElementById("celebration");
  if (totalAttendance < attendanceGoal) {
    celebration.hidden = true;
    return;
  }
  const highestTeam = Object.keys(teamCounts).reduce(function (currentTeam, team) {
    return teamCounts[team] > teamCounts[currentTeam] ? team : currentTeam;
  }, Object.keys(teamCounts)[0]);
  document.getElementById("celebrationMessage").textContent = translate("congratulations", {
    team: translate(`team.${highestTeam}`),
    count: teamCounts[highestTeam],
    plural: teamCounts[highestTeam] === 1 ? "" : "s",
  });
  celebration.hidden = false;
}
function updateGreeting() {
  const greeting = document.getElementById("greeting");
  if (!greeting.dataset.messageType) return;
  const values = { name: greeting.dataset.name };
  if (greeting.dataset.team) values.team = translate(`team.${greeting.dataset.team}`);
  greeting.textContent = translate(greeting.dataset.messageType, values);
}
function closeLanguageMenu() {
  document.getElementById("languageOptions").hidden = true;
  document.getElementById("translateButton").setAttribute("aria-expanded", "false");
}

document.getElementById("translateButton").addEventListener("click", function () {
  const options = document.getElementById("languageOptions");
  options.hidden = !options.hidden;
  this.setAttribute("aria-expanded", String(!options.hidden));
});
document.querySelectorAll("[data-language]").forEach(function (button) {
  button.addEventListener("click", function () {
    setLanguage(this.dataset.language);
  });
});
document.getElementById("checkInForm").addEventListener("submit", function (event) {
  event.preventDefault();
  const nameInput = document.getElementById("attendeeName");
  const teamInput = document.getElementById("teamSelect");
  const attendeeName = nameInput.value.trim();
  const normalizedName = attendeeName.toLowerCase();
  const greeting = document.getElementById("greeting");
  const alreadyCheckedIn = appState.attendees.some(function (attendee) {
    return attendee.name.toLowerCase() === normalizedName;
  });
  if (alreadyCheckedIn) {
    greeting.dataset.messageType = "alreadyCheckedIn";
    greeting.dataset.name = attendeeName;
    delete greeting.dataset.team;
    greeting.className = "message warning-message";
    greeting.hidden = false;
    updateGreeting();
    return;
  }
  appState.attendees.push({ name: attendeeName, team: teamInput.value });
  saveState();
  render();
  greeting.dataset.messageType = "welcome";
  greeting.dataset.name = attendeeName;
  greeting.dataset.team = teamInput.value;
  greeting.className = "message success-message";
  greeting.hidden = false;
  updateGreeting();
  event.target.reset();
  nameInput.focus();
});
document.querySelectorAll(".reflection-card").forEach(function (form) {
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    const reflectionName = form.dataset.reflection;
    appState.reflections[reflectionName] = form.querySelector("textarea").value.trim();
    saveState();
    const status = form.querySelector(".save-status");
    status.dataset.i18n = "responseSaved";
    status.textContent = translate("responseSaved");
  });
});

applyTranslations();

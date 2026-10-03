const attendanceGoal = 50;
const storageKey = "intelSummitCheckIn";
const teamNames = {
  water: "Team Water Wise",
  zero: "Team Net Zero",
  power: "Team Renewables",
  circular: "Team Circularity",
};
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
    state.attendees = Array.isArray(parsedState.attendees)
      ? parsedState.attendees
      : [];
    state.reflections = parsedState.reflections || state.reflections;
    return state;
  } catch (error) {
    return createEmptyState();
  }
}
function saveState() {
  localStorage.setItem(storageKey, JSON.stringify(appState));
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
  const progressBar = document.getElementById("progressBar");
  const progressContainer = document.querySelector(".progress-container");
  document.getElementById("attendeeCount").textContent = totalAttendance;
  document.getElementById("goalCount").textContent = attendanceGoal;
  document.getElementById("progressText").textContent =
    `${Math.round(progress)}%`;
  progressBar.style.width = `${progress}%`;
  progressContainer.setAttribute("aria-valuenow", progress);
  Object.keys(teamCounts).forEach(function (team) {
    document.getElementById(`${team}Count`).textContent = teamCounts[team];
  });
  renderAttendees();
  renderReflections();
  renderCelebration(totalAttendance, teamCounts);
}
function renderAttendees() {
  const attendeeList = document.getElementById("attendeeList");
  document.getElementById("attendeeListCount").textContent =
    appState.attendees.length;
  attendeeList.innerHTML = "";
  if (appState.attendees.length === 0) {
    attendeeList.innerHTML =
      '<li class="empty-state">No attendees yet. Be the first to check in.</li>';
    return;
  }
  appState.attendees.forEach(function (attendee) {
    const listItem = document.createElement("li");
    listItem.innerHTML = `<span class="attendee-initial">${attendee.name.charAt(0).toUpperCase()}</span><span><strong>${attendee.name}</strong><small>${teamNames[attendee.team]}</small></span>`;
    attendeeList.appendChild(listItem);
  });
}
function renderReflections() {
  Object.keys(appState.reflections).forEach(function (reflectionName) {
    document.getElementById(`${reflectionName}Response`).value =
      appState.reflections[reflectionName];
  });
}
function renderCelebration(totalAttendance, teamCounts) {
  const celebration = document.getElementById("celebration");
  if (totalAttendance < attendanceGoal) {
    celebration.hidden = true;
    return;
  }
  const highestTeam = Object.keys(teamCounts).reduce(function (
    currentTeam,
    team,
  ) {
    return teamCounts[team] > teamCounts[currentTeam] ? team : currentTeam;
  }, Object.keys(teamCounts)[0]);
  document.getElementById("celebrationMessage").textContent =
    `Congratulations! ${teamNames[highestTeam]} currently has the highest attendance with ${teamCounts[highestTeam]} attendee${teamCounts[highestTeam] === 1 ? "" : "s"}.`;
  celebration.hidden = false;
}
document
  .getElementById("checkInForm")
  .addEventListener("submit", function (event) {
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
      greeting.textContent = `${attendeeName} is already checked in.`;
      greeting.className = "message warning-message";
      greeting.hidden = false;
      return;
    }
    appState.attendees.push({ name: attendeeName, team: teamInput.value });
    saveState();
    render();
    greeting.textContent = `Welcome, ${attendeeName}! We're glad you're here with ${teamNames[teamInput.value]}.`;
    greeting.className = "message success-message";
    greeting.hidden = false;
    event.target.reset();
    nameInput.focus();
  });
document.querySelectorAll(".reflection-card").forEach(function (form) {
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    const reflectionName = form.dataset.reflection;
    appState.reflections[reflectionName] = form
      .querySelector("textarea")
      .value.trim();
    saveState();
    form.querySelector(".save-status").textContent = "Response saved.";
  });
});
render();

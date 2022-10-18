function renderPrograms() {
  document.location.replace("/programs");
}
function renderChallenges() {
  document.location.replace("/challenges");
}
function renderNutrition() {
  document.location.replace("/nutrition");
}
function renderWorkouts() {
  document.location.replace("/workouts");
}
function renderSignup() {
  document.location.replace("signup");
}

document
  .getElementById("renderProgram")
  .addEventListener("click", renderPrograms);

// document
// .getElementById('render-signup')
// .addEventListener("click", renderSignup)

document
  .getElementById("renderNutrition")
  .addEventListener("click", renderNutrition);

document
  .getElementById("renderWorkouts")
  .addEventListener("click", renderWorkouts);

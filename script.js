let current = 0;
const steps = document.querySelectorAll("section");
const backBtn = document.getElementById("backBtn");

function showStep(index) {
  steps.forEach((step, i) => {
    step.classList.toggle("active", i === index);
  });
  backBtn.style.display = index > 0 ? "block" : "none";
}

function nextStep() {
  if (current < steps.length - 1) {
    current++;
    showStep(current);
  }
}

function prevStep() {
  if (current > 0) {
    current--;
    showStep(current);
  }
}

function restart() {
  current = 0;
  showStep(current);
}

window.addEventListener("load", () => {
  setTimeout(() => {
    document.getElementById("loader").style.display = "none";
  }, 2500);
});

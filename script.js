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
.qr-section {
  background: linear-gradient(145deg, #f7f7f7, #e6e6e6);
  text-align: center;
  padding: 60px 20px;
  border-top: 3px solid #ff2d2d;
}

.qr-title {
  font-family: 'Orbitron', sans-serif;
  color: #2b2b2b;
  letter-spacing: 1px;
  font-size: 1.6rem;
  margin-bottom: 40px;
}

.qr-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 40px;
}

.qr-card {
  background: white;
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  padding: 20px;
  width: 200px;
  transition: transform 0.2s ease-in-out, box-shadow 0.2s;
}

.qr-card:hover {
  transform: scale(1.05);
  box-shadow: 0 6px 16px rgba(0,0,0,0.15);
}

.qr-card img {
  width: 150px;
  height: 150px;
  border: 3px solid #ff2d2d;
  border-radius: 12px;
}

.qr-card p {
  font-family: 'Rajdhani', sans-serif;
  font-weight: 500;
  color: #333;
  margin-top: 10px;
}

const commands = Array.from(document.querySelectorAll(".command"));
const timelineSteps = Array.from(document.querySelectorAll(".timeline-step"));
const statusLabel = document.getElementById("status-label");
const statusFill = document.getElementById("status-fill");

function setActiveStep(stepNumber) {
  commands.forEach((command) => {
    const active = Number(command.dataset.step) <= stepNumber;
    command.classList.toggle("completed", active);
  });

  timelineSteps.forEach((timelineStep, index) => {
    timelineStep.classList.toggle("active", index + 1 === stepNumber);
  });

  const labels = ["Ready", "Cloning", "Branching", "Committing", "Pushing"];
  const progress = [66, 75, 82, 90, 100];

  statusLabel.textContent = labels[stepNumber] ?? "Ready";
  statusFill.style.width = `${progress[stepNumber] ?? 66}%`;
}

commands.forEach((command) => {
  command.addEventListener("click", () => {
    setActiveStep(Number(command.dataset.step));
  });
});

document.querySelectorAll("[data-set-step]").forEach((button) => {
  button.addEventListener("click", () => {
    setActiveStep(Number(button.dataset.setStep));
  });
});

setActiveStep(1);
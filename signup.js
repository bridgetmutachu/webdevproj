const roleSelect = document.getElementById("role");
const skillGroup = document.getElementById("skill-group");
const skillSelect = document.getElementById("skill");
const form = document.getElementById("signup-form");
const errorBox = document.getElementById("form-error");


roleSelect.addEventListener("change", () => {
  const isArtisan = roleSelect.value === "artisan";
  skillGroup.hidden = !isArtisan;
  skillSelect.required = isArtisan;
  if (!isArtisan) {
    skillSelect.value = "";
  }
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  errorBox.textContent = "";

  if (!form.checkValidity()) {
    errorBox.textContent = "Please fill in all required fields correctly.";
    form.reportValidity();
    return;
  }

  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirm-password").value;

  if (password !== confirmPassword) {
    errorBox.textContent = "Passwords do not match.";
    return;
  }


  const name = document.getElementById("fullname").value;
  alert(
    `Welcome to Jua Kali, ${name}! (Front-end only for now — no account was actually saved.)`
  );

  form.reset();
  skillGroup.hidden = true;
});

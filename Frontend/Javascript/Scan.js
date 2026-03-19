document.addEventListener("DOMContentLoaded", function () {
  const domainInput = document.getElementById("domain");
  const scanBtn = document.getElementById("scanBtn");

  // Enter key support
  domainInput.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
      validate();
    }
  });

  // Button click
  scanBtn.addEventListener("click", validate);
});

function isValidDomain(domain) {
  const regex = /^(?!:\/\/)([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}$/;
  return regex.test(domain);
}

function validate() {
  const domain = document.getElementById("domain").value.trim();
  const error = document.getElementById("error");

  if (domain === "") {
    error.textContent = "⚠️ Domain cannot be empty";
    return false;
  }

  if (!isValidDomain(domain)) {
    error.textContent = "❌ Please enter a valid domain (example.com)";
    return false;
  }

  // Clear error
  error.textContent = "";

  console.log("Valid domain:", domain);

  return true;
}
const $eyeIcon = document.getElementById("eye-icon");
const $passwordInput = document.getElementById("password");
const $btn = document.getElementById("btn").disabled = true;


$eyeIcon.addEventListener("click", function () {
  const i = $eyeIcon.getAttribute("name");
  const j = $passwordInput.getAttribute("type");
  if (i === "eye-off-outline" || j === "password") {
    $eyeIcon.setAttribute("name", "eye-outline");
    $passwordInput.setAttribute("type", "text");
  } else {
    $eyeIcon.setAttribute("name", "eye-off-outline");
    $passwordInput.setAttribute("type", "password");
  }
});

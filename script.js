const $eyeIcon = document.getElementById("eye-icon");
const $passwordInput = document.getElementById("password");
const $btn = document.getElementById("btn");

const $uppercase = document.querySelector(".uppercase");
const $number = document.querySelector(".number");
const $special = document.querySelector(".special");
const $length = document.querySelector(".length");

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

$passwordInput.addEventListener("input", function () {
  const $passwordValue = $passwordInput.value;

  const $isUppercase = /[A-Z]/.test($passwordValue);
  const $isNumber = /\d/.test($passwordValue);
  const $isSpecial = /[@$!%*?&]/.test($passwordValue);
  const $isLengthValid = $passwordValue.length >= 8;

  if ($isUppercase) {
    $uppercase.classList.add("complete");
    document.querySelector(".uppercase ion-icon").setAttribute("name", "checkmark-outline");
  } else {
    $uppercase.classList.remove("complete");
    document.querySelector(".uppercase ion-icon").setAttribute("name", "close-outline");
  }

  if ($isNumber) {
    $number.classList.add("complete");
    document.querySelector(".number ion-icon").setAttribute("name", "checkmark-outline");
  } else {
    $number.classList.remove("complete");
    document.querySelector(".number ion-icon").setAttribute("name", "close-outline");
  }

  if ($isSpecial) {
    $special.classList.add("complete");
    document.querySelector(".special ion-icon").setAttribute("name", "checkmark-outline");
  } else {
    $special.classList.remove("complete");
    document.querySelector(".special ion-icon").setAttribute("name", "close-outline");
  }

  if ($isLengthValid) {
    $length.classList.add("complete");
    document.querySelector(".length ion-icon").setAttribute("name", "checkmark-outline");
  } else {
    $length.classList.remove("complete");
    document.querySelector(".length ion-icon").setAttribute("name", "close-outline");
  }
});


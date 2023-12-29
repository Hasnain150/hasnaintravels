const signUpForm = document.getElementsByClassName("signUpForm")[0];
const logInForm = document.getElementsByClassName("logInForm")[0];
const hSidepanel = document.querySelector(".sidePanel h1");
const logBtn = document.getElementById("logBtn");
const signBtn = document.getElementById("signBtn");
function signUpBtn() {
  if (signUpForm.hasAttribute("id")) {
  } else {
    signUpForm.setAttribute("id", "visible");
    logInForm.removeAttribute("id");
    hSidepanel.innerHTML = "SignUp";
    logBtn.classList.remove("active");
    signBtn.classList.add("active");
  }
}
function logInBtn() {
  if (logInForm.hasAttribute("id")) {
  } else {
    logInForm.setAttribute("id", "visible");
    signUpForm.removeAttribute("id");
    hSidepanel.innerHTML = "LogIn";
    signBtn.classList.remove("active");
    logBtn.classList.add("active");
  }
}
const logInEmail = document.getElementById("logInEmail");
const logInEmailErr1 = document.getElementsByClassName("logInEmailErr1")[0];
const logInEmailErr2 = document.getElementsByClassName("logInEmailErr2")[0];
const LogInpwd = document.getElementById("LogInpwd");
const logInpwdErr1 = document.getElementsByClassName("logInpwdErr1")[0];
const logInpwdErr2 = document.getElementsByClassName("logInpwdErr2")[0];

// just for testing
// hasnainshahzad1455@gmail.com is the email
function validateLogInForm(event) {
  const emailAddress = "hasnainshahzad1455@gmail.com";
  const pwd = "123456789";
  event.preventDefault();
  if (logInEmail.value == "") {
    logInEmailErr1.setAttribute("id", "visible");
    setTimeout(() => {
      logInEmailErr1.removeAttribute("id");
    }, 2000);
    return false;
  } else if (logInEmail.value != emailAddress) {
    logInEmailErr2.setAttribute("id", "visible");
    setTimeout(() => {
      logInEmailErr2.removeAttribute("id");
    }, 2000);
    return false;
  } else if (LogInpwd.value == "") {
    logInpwdErr1.setAttribute("id", "visible");
    setTimeout(() => {
      logInpwdErr1.removeAttribute("id");
    }, 2000);
    return false;
  } else if (LogInpwd.value != pwd) {
    logInpwdErr2.setAttribute("id", "visible");
    setTimeout(() => {
      logInpwdErr2.removeAttribute("id");
    }, 2000);
    return false;
  }
  window.location.href = "index.html";
  return true;
}

function validateSignUpForm(event) {
  event.preventDefault();
  console.log("hello wrold");
  const fullName = document.getElementById("name").value;
  const fullNameErr1 = document.getElementsByClassName("SignUpNameErr1")[0];
  const fullNameErr2 = document.getElementsByClassName("SignUpNameErr2")[0];
  const email = document.getElementById("email").value;
  const emailErr1 = document.getElementsByClassName("SignUpEmailErr1")[0];
  const emailErr2 = document.getElementsByClassName("SignUpEmailErr2")[0];
  const password = document.getElementById("pwd").value;
  const passwordErr1 = document.getElementsByClassName("SignUpPwdErr1")[0];
  const passwordErr2 = document.getElementsByClassName("SignUpPwdErr2")[0];
  const country = document.getElementById("country").value;
  const countryErr1 = document.getElementsByClassName("SignUpCountryErr1")[0];

  const phone = document.getElementById("pNo").value;
  const phoneErr1 = document.getElementsByClassName("SignUpPhErr1")[0];
  const phoneErr2 = document.getElementsByClassName("SignUpPhErr2")[0];

  const namePattern = /^[a-zA-Z]+\s[a-zA-Z]+$/;
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordPattern = /.{6,}/;
  const countryPattern = /^[a-zA-Z\s]+$/;
  //   const phonePattern = /^\d{10}$/;
  const phonePattern = /^[0-9]{11}$/;

  if (fullName == "") {
    fullNameErr1.setAttribute("id", "visible");
    setTimeout(() => {
      fullNameErr1.removeAttribute("id");
    }, 2000);
    document.getElementById("name").value = "";

    return false;
  }
  if (!namePattern.test(fullName)) {
    fullNameErr2.setAttribute("id", "visible");
    setTimeout(() => {
      fullNameErr2.removeAttribute("id");
    }, 2000);
    document.getElementById("name").value = "";

    return false;
  }
  if (email == "") {
    emailErr1.setAttribute("id", "visible");
    setTimeout(() => {
      emailErr1.removeAttribute("id");
    }, 2000);
    document.getElementById("email").value = "";

    return false;
  }
  if (!emailPattern.test(email)) {
    emailErr2.setAttribute("id", "visible");
    setTimeout(() => {
      emailErr2.removeAttribute("id");
    }, 2000);
    document.getElementById("email").value = "";

    return false;
  }
  if (password == "") {
    passwordErr1.setAttribute("id", "visible");
    setTimeout(() => {
      passwordErr1.removeAttribute("id");
    }, 2000);
    document.getElementById("pwd").value = "";

    return false;
  }
  if (!passwordPattern.test(password)) {
    passwordErr2.setAttribute("id", "visible");
    setTimeout(() => {
      passwordErr2.removeAttribute("id");
    }, 2000);
    document.getElementById("pwd").value = "";

    return false;
  }

  if (!countryPattern.test(country)) {
    countryErr1.setAttribute("id", "visible");
    setTimeout(() => {
      countryErr1.removeAttribute("id");
    }, 2000);
    document.getElementById("country").value = "";

    return false;
  }
  if (phone == "") {
    phoneErr1.setAttribute("id", "visible");
    setTimeout(() => {
      phoneErr1.removeAttribute("id");
    }, 2000);
    document.getElementById("pNo").value = "";

    return false;
  }
  if (!phonePattern.test(phone)) {
    phoneErr2.setAttribute("id", "visible");
    setTimeout(() => {
      phoneErr2.removeAttribute("id");
    }, 2000);
    document.getElementById("pNo").value = "";

    return false;
  }
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("pwd").value = "";
  document.getElementById("country").value = "";
  document.getElementById("pNo").value = "";
  let acc = document.getElementsByClassName("accountCreated")[0];
  acc.setAttribute("id", "visible");
  setTimeout(() => {
    acc.removeAttribute("id");
  }, 2000);
  return true;
}
function togglePasswordVisibility() {
  const passwordInput = document.getElementById("passwordInput");
  if (passwordInput.type === "text") {
    passwordInput.type = "password";
  } else {
    passwordInput.type = "text";
  }
}
function handleLogInBtnToggle() {
  const btn = document.getElementById("psdToggleLogIn");
  if (LogInpwd.type === "text") {
    LogInpwd.type = "password";
  } else {
    LogInpwd.type = "text";
  }
  if (btn.classList.contains("fa-eye-slash")) {
    btn.classList.remove("fa-eye-slash");
    btn.classList.add("fa-eye");
  } else {
    btn.classList.add("fa-eye-slash");
    btn.classList.remove("fa-eye");
  }
}
function handleSignUpBtnToggle() {
  const singUpPwd = document.getElementById("pwd");
  const btn = document.getElementById("psdToggleSignUp");
  console.log("btn workdin");
  if (singUpPwd.type === "text") {
    singUpPwd.type = "password";
  } else {
    singUpPwd.type = "text";
  }
  if (btn.classList.contains("fa-eye-slash")) {
    btn.classList.remove("fa-eye-slash");
    btn.classList.add("fa-eye");
  } else {
    btn.classList.add("fa-eye-slash");
    btn.classList.remove("fa-eye");
  }
}

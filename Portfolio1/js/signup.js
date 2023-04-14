// id 체크
const userNameInput = document.getElementById("memberUserId");
const result2 = document.getElementById("id_result");
const usernamePattern = /^[a-z0-9-_]{5,10}$/;

userNameInput.addEventListener("blur", () => {
  if (userNameInput.value.length == 0) {
    result2.style.color = "red";
    result2.innerHTML = "필수 입력입니다 ";
  } else if (!usernamePattern.test(userNameInput.value)) {
    id_result.textContent = "조건에 맞는 아이디를 입력해주세요.";
    result2.style.color = "red";
  } else {
    id_result.textContent = "훌륭한 아이디네요^^";
    result2.style.color = "green";
  }
});
// 비밀번호 체크
const passwordInput = document.getElementById("psw");
const passwordError = document.getElementById("password-result");
const lock1 = document.getElementById("lock1");
const passwordPattern =
  /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!#$-_])[A-Za-z\d!#$-_]{6,18}$/;

passwordInput.addEventListener("blur", () => {
  if (passwordInput.value.length == 0) {
    lock1.className = "bi bi-lock-fill";
    passwordError.style.color = "red";
    lock1.style.color = "red";
    passwordError.innerHTML = "필수 입력입니다";
  } else if (!passwordPattern.test(passwordInput.value)) {
    lock1.className = "bi bi-lock-fill";
    passwordError.style.color = "red";
    lock1.style.color = "red";
    passwordError.textContent = "조건에 맞는 비밀번호를 입력해주세요.";
  } else {
    passwordError.style.color = "green";
    lock1.className = "bi bi-unlock-fill";
    lock1.style.color = "green";
    passwordError.textContent = "좋은 비밀번호 입니다";
  }
});
// 비밀번호 확인 체크
const passwordConfirmInput = document.getElementById("psw-repeat");
const member_password1 = document.getElementById("psw-repeat").value;
const passwordConfirmError = document.getElementById("password-result1");
const lock2 = document.getElementById("lock2");
passwordConfirmInput.addEventListener("blur", () => {
  if (passwordConfirmInput.value.length == 0) {
    passwordConfirmError.style.color = "red";
    lock2.style.color = "red";
    passwordConfirmError.innerHTML = "필수입니다";
  } else if (passwordInput.value !== passwordConfirmInput.value) {
    passwordConfirmError.style.color = "red";
    passwordConfirmError.textContent = "비밀번호가 일치하지 않습니다.";
    lock2.className = "bi bi-lock-fill";
    lock2.style.color = "red";
  } else if (passwordInput.value == passwordConfirmInput.value) {
    passwordConfirmError.textContent = "비밀번호가 일치합니다";
    lock2.className = "bi bi-unlock-fill";
    lock2.style.color = "green";
    passwordConfirmError.style.color = "green";
  }
});
// 핸드폰번호 체크
const memberMobile = document.getElementById("memberMobile");
const mobileError = document.getElementById("mobileError");

memberMobile.addEventListener("blur", () => {
  if (!memberMobile.validity.valid) {
    mobileError.style.color = "red";
    mobileError.textContent = "휴대폰 번호를 정확하게 입력하세요.";
  } else {
    mobileError.style.color = "green";
    mobileError.textContent = "인증되었습니다!";
  }
});
// 이메일체크;
const domain_select = () => {
  const domain = document.getElementById("email-domain-select");
  const emailInput = document.getElementById("email-domain");

  emailInput.value = domain.value;
};

const findPostcode = document.getElementById("findPostcode");
const memberAddress = document.getElementById("memberAddress");
const signupForm = document.getElementById("signupForm");

findPostcode.addEventListener("click", () => {
  new daum.Postcode({
    oncomplete: function (data) {
      memberAddress.value = data.roadAddress;
    },
  }).open();
});

signupForm.addEventListener("submit", (event) => {
  if (
    !usernamePattern.test(userNameInput.value) ||
    !passwordPattern.test(passwordInput.value) ||
    passwordInput.value !== passwordConfirmInput.value ||
    !memberMobile.validity.valid
  ) {
    event.preventDefault();
    alert("입력한 정보를 확인해주세요.");
  }
});
const cancel = () => {
  history.back();
};

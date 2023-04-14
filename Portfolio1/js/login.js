document
  .getElementById("login-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username && password) {
      alert("로그인 성공!");
      // 로그인 처리를 수행하려면 여기에 추가 코드를 작성하세요.
    } else {
      alert("아이디와 비밀번호를 입력해 주세요.");
    }
  });

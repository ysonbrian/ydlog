import './Login.css';

const Login = () => {
  return (
    <div className="login">
      <span className="loginTitle">로그인</span>
      <form className="loginForm">
        <label>이메일</label>
        <input
          className="loginInput"
          type="text"
          placeholder="이메일을 입력하세요"
        />
        <label>비밀번호</label>
        <input
          className="loginInput"
          type="password"
          placeholder="비밀번호를 입력하세요"
        />
        <button className="loginButton">로그인</button>
      </form>
      <button className="loginRegisterButton">가입하기</button>
    </div>
  );
};

export default Login;

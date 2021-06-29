import './Register.css';

const Login = () => {
  return (
    <div className="register">
      <span className="registerTitle">가입하기</span>
      <form className="registerForm">
        <label>이름</label>
        <input
          className="registerInput"
          type="text"
          placeholder="이름을 입력하세요"
        />
        <label>이메일</label>
        <input
          className="registerInput"
          type="text"
          placeholder="이메일을 입력하세요"
        />
        <label>비밀번호</label>
        <input
          className="registerInput"
          type="password"
          placeholder="비밀번호를 입력하세요"
        />
        <button className="registerButton">가입하기</button>
      </form>
      <button className="registerLoginButton">로그인</button>
    </div>
  );
};

export default Login;

import { useRef, useContext } from 'react';
import { Context } from '../context/Context';
import './Login.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
const Login = () => {
  const userRef = useRef();
  const passwordRef = useRef();
  const { user, dispatch, isFetching } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: 'LOGIN_START' });
    try {
      const res = await axios.post('/auth/login', {
        username: userRef.current.value,
        password: passwordRef.current.value,
      });
      dispatch({ type: 'LOGIN_SUCCESS', payload: res.data });
    } catch (err) {
      dispatch({ type: 'LOGIN_FAILURE' });
    }
  };
  return (
    <div className="login">
      <span className="loginTitle">로그인</span>
      <form className="loginForm" onSubmit={handleSubmit}>
        <label>이메일</label>
        <input
          className="loginInput"
          type="text"
          placeholder="이메일을 입력하세요"
          ref={userRef}
        />
        <label>비밀번호</label>
        <input
          className="loginInput"
          type="password"
          placeholder="비밀번호를 입력하세요"
          ref={passwordRef}
        />
        <button className="loginButton" type="submit">
          로그인
        </button>
      </form>
      <button className="loginRegisterButton">
        <Link className="link" to="/register">
          가입하기
        </Link>
      </button>
    </div>
  );
};

export default Login;

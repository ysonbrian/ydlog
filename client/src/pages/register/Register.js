import { useState } from 'react';
import './Register.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    try {
      const res = await axios.post('/auth/register', {
        username,
        email,
        password,
      });
      res.data && window.location.replace('/login');
    } catch (err) {
      setError(true);
    }
  };
  return (
    <div className="register">
      <span className="registerTitle">가입하기</span>
      <form className="registerForm" onSubmit={handleSubmit}>
        <label>이름</label>
        <input
          className="registerInput"
          type="text"
          placeholder="이름을 입력하세요"
          onChange={(e) => setUsername(e.target.value)}
        />
        <label>이메일</label>
        <input
          className="registerInput"
          type="text"
          placeholder="이메일을 입력하세요"
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>비밀번호</label>
        <input
          className="registerInput"
          type="password"
          placeholder="비밀번호를 입력하세요"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="registerButton" type="submit">
          가입하기
        </button>
      </form>
      <button className="registerLoginButton">
        <Link className="link" to="/login">
          로그인
        </Link>
      </button>
      {error && (
        <span style={{ color: 'red', marginTop: '10px' }}>
          잘못된 접근 입니다
        </span>
      )}
    </div>
  );
};

export default Register;

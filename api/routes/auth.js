const router = require('express').Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');
// Register
router.post('/register', async (req, res) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
    });

    const user = await newUser.save();
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Login
router.post('/login', async (req, res) => {
  try {
    // 로그인한 유저의 아이디를 몽고DB에서 유일한 (findOne) 사용하여 이름을 찾고 찾는 유저가없으면 에러출력
    const user = await User.findOne({ username: req.body.username });
    !user && res.status(400).json('Wrong credentials!');
    // 유저가 입력한 비밀번호와 몽고DB에 있는 비밀번호를 비교함
    const validate = await bcrypt.compare(req.body.password, user.password);
    !validate && res.status(400).json('Wrong credentials!');

    const { password, ...others } = user._doc;
    // password를 유저에게 보내지 않기위해 위처럼 한다
    res.status(200).json(others);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;

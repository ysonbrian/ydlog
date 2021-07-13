import { useState, useEffect } from 'react';
import Main from '../../components/Main/Main';
import Posts from '../../components/posts/Posts';
import SideBar from '../../components/SideBar/SideBar';
import './Home.css';
import axios from 'axios';

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get('/posts');
      setPosts(res.data);
    };
    fetchPosts();
  }, []);
  return (
    <>
      <Main />
      <div className="home">
        <Posts posts={posts} />
        <SideBar />
      </div>
    </>
  );
};

export default Home;

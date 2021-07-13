import { useState, useEffect } from 'react';
import Main from '../../components/Main/Main';
import Posts from '../../components/posts/Posts';
import SideBar from '../../components/SideBar/SideBar';
import './Home.css';
import axios from 'axios';
import { useLocation } from 'react-router';
const Home = () => {
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();
  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get('/posts' + search);
      setPosts(res.data);
    };
    fetchPosts();
  }, [search]);
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

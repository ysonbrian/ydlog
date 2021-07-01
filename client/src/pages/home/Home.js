import Main from '../../components/Main/Main';
import Posts from '../../components/posts/Posts';
import SideBar from '../../components/SideBar/SideBar';
import './Home.css';

const Home = () => {
  return (
    <>
      <Main />
      <div className="home">
        <Posts />
        <SideBar />
      </div>
    </>
  );
};

export default Home;

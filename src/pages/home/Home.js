import Main from '../../Main/Main';
import Posts from '../../posts/Posts';
import SideBar from '../../SideBar/SideBar';
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

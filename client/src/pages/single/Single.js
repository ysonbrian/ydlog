import SideBar from '../../components/SideBar/SideBar';
import SinglePost from '../../components/SinglePost/SinglePost';
import './Single.css';

const Single = () => {
  return (
    <div className="single">
      {/* post */}
      <SinglePost />
      <SideBar />
    </div>
  );
};

export default Single;

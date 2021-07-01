import './Post.css';

const Post = () => {
  return (
    <div className="post">
      <img
        className="postImg"
        src="https://images.unsplash.com/photo-1571570261702-3d23956fa32e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fHJlYWN0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
        alt=""
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
        </div>
        <span className="postTitle">Lorem ipsum dolor sit amet</span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt nobis
        possimus voluptate sunt ad tempore, fugiat fugit vel sit et earum,
        aspernatur unde alias numquam, perspiciatis dignissimos nisi quibusdam!
        Facilis! Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Nesciunt nobis possimus voluptate sunt ad tempore, fugiat fugit vel sit
        et earum, aspernatur unde alias numquam, perspiciatis dignissimos nisi
        quibusdam! Facilis!Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Nesciunt nobis possimus voluptate sunt ad tempore, fugiat fugit
        vel sit et earum, aspernatur unde alias numquam, perspiciatis
        dignissimos nisi quibusdam! Facilis!
      </p>
    </div>
  );
};

export default Post;

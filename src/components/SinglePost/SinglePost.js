import './SinglePost.css';

const SinglePost = () => {
  return (
    <div class="singlePost">
      <div className="singlePostWrapper">
        <img
          src="https://images.unsplash.com/photo-1562494400-5b335a653209?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHdlYXRoZXJ8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
          alt=""
          className="singlePostImg"
        />
        <h1 className="singlePostTitle">
          Lorem ipsum dolor sit amet
          <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit"></i>
            <i className="singlePostIcon far fa-trash-alt"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author: <b>Brian</b>
          </span>
          <span className="singlePostDate">1 hour ago</span>
        </div>
        <p className="singlePostDesc">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea excepturi
          minus optio nulla voluptatem voluptate, totam ducimus maxime doloribus
          praesentium dolorum quibusdam nisi soluta, dolore ratione natus,
          repudiandae nesciunt fugiat. Iure architecto in dolores veritatis
          alias eaque aperiam nisi praesentium maiores. Voluptate, corporis ad
          perspiciatis blanditiis ullam non pariatur nobis sint sit nostrum
          illum, fugit ipsam quisquam magnam, laudantium suscipit? A, modi
          deleniti? Non nulla dolore optio numquam, minima, molestiae veritatis
          quos quas vero maiores facilis expedita eum adipisci eveniet neque
          dolorum inventore illo at natus vitae iusto! A, suscipit. Dolorum
          porro quibusdam reiciendis voluptas eius rerum eligendi natus nihil
          eum minus, atque dolorem, rem neque voluptatum? Eveniet laborum dicta
          optio unde consequuntur voluptatibus sed sapiente. Quos eius ipsa
          eaque. Aut non commodi esse ipsam illo, sit temporibus voluptatem
          laudantium ea ipsa animi, facilis dolores deleniti quos cupiditate
          eveniet dolor exercitationem eligendi minus autem, deserunt minima!
          Eaque obcaecati dignissimos est.
        </p>
      </div>
    </div>
  );
};

export default SinglePost;

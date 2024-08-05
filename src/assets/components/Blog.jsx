// import React from 'react';
import { useNavigate } from "react-router-dom";

const Blog = () => {
  const navigate = useNavigate();

  const handleReadMore = () => {
    navigate("/readmore");
    window.scrollTo(0, 0); // This will scroll the page to the top
  };

  return (
    <div className="blog">
      <div className="right_blog">
        <div className="blog_container">
          <img src="/public/10-Reasons-Why-to-Learn-Quran-2022.jpg" alt="" />
          <h1>10 Reasons Why to Learn Quran [2022]</h1>
          <p>
            The Holy Quran is the word of Allah Almighty. The construct it has,
            the meaning it carries are unmatchable and not to be found in any
            other book of the world. In addition to the depth of meaning that
            the verses of Quran carry, …
          </p>
          <br />
          <button className="btn5" onClick={handleReadMore}>
            Read More
          </button>
        </div>
      </div>
      <div className="left_blog">
        <div className="searchBox">
          <input type="search" placeholder="search..." />
          <img
            src="/public/—Pngtree—search icon_4699282.png"
            alt=""
            width={50}
            height={50}
          />
        </div>
        <div className="recentPost">
          <h3>Recent Posts</h3>
          <ul>
            <li>
              <a href="/readmore">10 Reasons Why to Learn Quran [2022]</a>
            </li>
          </ul>
          <h3>Recent Comments</h3>
          <br />
          <br />
          <h3>Archives</h3>
          <ul>
            <li>
              <a href="/archive/april-2025">April 2025</a>
            </li>
          </ul>
          <h3>Categories</h3>
          <ul>
            <li>
              <a href="/category/uncategorized">Uncategorized</a>
            </li>
          </ul>
          <h3>Meta</h3>
          <ul>
            <li>
              <a href="/login">Login</a>
              <a href="/feed">Entry Feed</a>
              <a href="/comments">Comment Feed</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Blog;

// import React from 'react'
import Packages from "./Packages";
import Courses from "./Courses";
import { useNavigate } from "react-router-dom";
import Free from "./Free";
const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="home">
        <div className="home_left">
          <img
            src="/src/assets/images/OQT-WebN4.webp"
            alt=""
            className="responsive-image"
          />
        </div>
        <div className="home_right">
          <h2>قال النبي صلى الله عليه وسلم</h2>
          <h1>طَلَبُ الْعِلْمِ فَرِيضَةٌ عَلَى كُلِّ مُسْلِمٍ</h1>
          <p>
            Seeking the religious knowledge is an <br /> obligation upon every
            Muslim.
          </p>
          <div className="buttons">
            <button onClick={() => navigate("/packages")} className="btn1">
              OUR PACKAGES
            </button>
            <button onClick={() => navigate("/free")} className="btn2">
              REQUEST DEMO
            </button>
          </div>
        </div>
      </div>

      <div className="homeWrap">
        <div className="homeSection">
          <div className="sectionLeft">
            <p>
              Start to learn in <br />
              three easy steps
            </p>
            <span>SHEDULE DEMO CLASS TODAY -&gt;</span>
          </div>
          <div className="sectionRight">
            <div className="box">
              <img src="/src/assets/images/google-forms.png" alt="" />
              <div className="text">
                <h1>One.</h1>
                <p>Fill Contact form or Call at our numbers.</p>
              </div>
            </div>
            <div className="box">
              <img src="/src/assets/images/presentation.png" alt="" />
              <div className="text">
                <h1>Two.</h1>
                <p>Get free trial classes at your desired time.</p>
              </div>
            </div>
            <div className="box">
              <img src="/src/assets/images/students-cap.png" alt="" />
              <div className="text">
                <h1>Three.</h1>
                <p>Sign Up if you like & start learning Quran.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="description">
        <h1>When should children begin learning the Quran?</h1>
        <p>
          We recommend that children begin studying the Quran at a very early
          age so that the holy words of Allah become etched into their minds and
          hearts <br /> forever. With a solid foundation based on Tajweed and
          Tarteel, our courses will enable you and your children to gain enough
          strength from Quran that <br /> they will never feel alone in lifes
          journey, no matter what adversity they face. <br />
          <br />
          <br />
          We provide the ability to read and understand the Quran with the best
          teachers from around the globe, who will instill in your children a
          great love for <br />
          Islam and the Quran leading to learning of manners of Islam. Parents
          that have learned the Quran can help their children gain a natural
          familiarity with <br /> the holy Quran by reading to them from birth.
          Age appropriate online Quran lessons can begin as soon as a child can
          write sentences in their native <br />
          language, setting the foundation for more intensive learning to begin
          at age four or five. Studying the Quran online is well suited to
          children because they <br />
          love technology, and the flexibility of studying the Quran means that
          its always possible to fit their religious study into their schedule.
        </p>
      </div>
      <Packages />
      <Free />
      <Courses />
    </>
  );
};

export default Home;

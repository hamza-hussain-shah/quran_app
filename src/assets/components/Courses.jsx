// import React from "react";

import Question from "./Questions";
const Courses = () => {
  return (
    <>
    

    <div className="courses">
      <h1>Popular Courses</h1>
      <div className="cards">
        <div className="card1">
          <img src="/src/assets/images/OQT-WebN4.webp" alt="" />
          <h1>نوراني القاعدة</h1>
          <h2>BASIC & ARABIC ALPHABET</h2>
          <p>
            “Al Qaida Al Nooraniya” is a book for beginners to learn Quranic
            Arabic. All beginners start with this and continue on to other
            courses.
          </p>
        </div>
        <div className="card2">
          <img src="/src/assets/images/OQT-WebN3.webp" alt="" />
          <h1>تجويد القرآن</h1>
          <h2>RULES OF PRONOUNCIATION</h2>
          <p>
            Tajweed or Tajwīd is the set of rules governing the correct
            pronunciation of Quranic Arabic. This course covers basic & advanced
            Tajweed.
          </p>
        </div>
        <div className="card3">
          <img src="/src/assets/images/OQT-WebN5.webp" alt="" />
          <h1>حفظ القرآن</h1>
          <h2>AND RECITATION</h2>
          <p>Our teachers guide and teach and their students from the beginning to “khatm-al-Quran” ayah by ayah during their one-on-one reading and recitation lessons.

</p>
        </div>
      </div>
<Question/>
   
    </div>
</>
  );
};

export default Courses;

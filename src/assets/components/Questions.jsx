import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import Contact from "./Contact";
import { useNavigate } from "react-router-dom";

const Question = () => {
  const navigate = useNavigate();
  const handleReadMore = () => {
    navigate("/readmore");
    window.scrollTo(0, 0); // This will scroll the page to the top
  };
  const handleContact = () => {
    navigate("/contact");
    window.scrollTo(0, 0); // This will scroll the page to the top
  };
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "Why Online Quran Tutors?",
      answer:
        "Learning Arabic & attuning the vocal senses to the Arabic phonetics are the very core components of our online teaching program. The learning process at ONLINE QURAN TUTORS is very dynamic & adaptive. We regularly make adjustments to adapt learning material or teaching methodologies to cater for our students' progress & needs.",
    },
    {
      question: "Is Tajwid complicated?",
      answer:
        "It is absolutely normal for a student at the start of the course not being able to recognize some key words or sounds & may find the vocals of the tutor challenging. This is addressed by the tutor providing swift guidance & training to the student to overcome the challenges.",
    },
    {
      question:
        "What is the suitable age to start learning with Online Quran Tutors?",
      answer:
        "We understand that every child is unique & different and some may have difficulty interacting with a tutor online. There have been success stories with younger students but generally from the age of seven & above there are seldom issues with teaching online. Students below this age, it is therefore highly recommend that a parent/guardian needs to accompany the student during the beginning to provide support until the student becomes familiar to the setup and process of learning online.",
    },
    {
      question: "How does a partnership with Foodpand work?",
      answer:
        "You simply cook while we do all the rest! Give us your delivery-optimized menu, and food images (if you have) and we create your online profile. Receive orders via a Sunmi device with data SIM card provided and prepare your food within 15 mins. Our reliable and friendly rider will pick up the order from your shop and deliver it to the customer. It’s that simple!",
    },
    {
      question: "Can I choose the gender of the tutor?",
      answer:
        "Teenagers & older students are automatically assigned tutors of the same gender. An exception to the rule is made when the student requires expertise then teacher’s academic training is taken into consideration to assign the best match. The answer is simply, YES!",
    },
    // Add more FAQ items as needed
  ];

  return (
    <>
      <div className="questions">
        <div className="questionCont">
          <h1>FAQs</h1>
          <div className="queCard">
            <div className="faq">
              {faqs.map((faq, index) => (
                <div className="faq-item" key={index}>
                  <button
                    className="question"
                    onClick={() => toggleAnswer(index)}
                  >
                    <FontAwesomeIcon
                      icon={activeIndex === index ? faChevronUp : faChevronDown}
                      className="icon"
                      style={{ marginRight: "10px" }}
                    />
                    {faq.question}
                  </button>
                  {activeIndex === index && (
                    <div className="answer">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="button-container">
          <button onClick={handleReadMore} className="btn3">
            Read More
          </button>
          <button onClick={handleContact} className="btn4">
            Contact Us
          </button>
        </div>
      </div>
      <Contact />
    </>
  );
};

export default Question;

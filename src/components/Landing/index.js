import React, { useState } from "react";
import Header from "./../Header";
import { useNavigate } from "react-router";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "./style.css";
import "@splidejs/splide/dist/css/splide.min.css";
// import Tilt from "react-vanilla-tilt";

const Landing = () => {
  const [navbar, setNavbar] = useState(false);
  const navigate = useNavigate();

  const changeColor = () => {
    // console.log(window.scrollY);
    if (window.scrollY > 15) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener("scroll", changeColor);

  return (
    <>
      <div className={navbar ? "navMainDivScroll" : "navMainDiv"}>
        <div className={navbar ? "signBtnDivScroll" : "signBtnDiv"}>
          <button className="signBtn" onClick={() => navigate("/login")}>
            تسجيل الدخول
          </button>
        </div>
        <div className="logoDiv">
          <img
            className={navbar ? "logoImgScroll" : "logoImg"}
            src="./mp-logo.png"
            alt="logo"
            onClick={() => navigate("/")}
          />
        </div>
        <div className={navbar ? "navUserDivScroll" : "navUserDiv"}>
          <div className="side">
            <img
              src="https://img.icons8.com/external-bearicons-glyph-bearicons/64/000000/external-User-essential-collection-bearicons-glyph-bearicons.png"
              className="userIcon"
              alt="sideicon"
            />
          </div>
        </div>
      </div>
      <div className="LandingMainDiv">
        <script src="vanilla-tilt.js"></script>
        <br />
        {/* <Tilt style={{ width: "100%", border: "none", shadow: "none" }}> */}
        <Header />
        <br />
        <div className="textDivLanding">
          <h1 className="titleH">لماذا قلنا تحدّث العربّيةَ؟</h1>
          <div className="headDiv">
            <h4 className="textH">
              إظهار الهوية العربية.. إحدى الركائز التي نقوم عليها، فهي عامل جذب
              اقتصادي وسياحي وتمكين أقوى للمملكة في محيطها.. وبذلك ستتوسع
              إمكانيات تعلم اللغة العربية والإطلاع عليها.
            </h4>
            <h4 className="textH">
              كما أن مشاكل وتحديات الهوية واللغة أكثر من أن تُعد أو تحصى، ولكننا
              نؤمن أن الحل لكل هذه العقبات.. يبدأ بممارسة اللغة واستحضارها
              وإحيائها في يوم كل مواطن و<b>مقيم</b>.
            </h4>
            <h4 className="textH">
              فبينما يصبح العالم مكررًا ويزداد تشابهًا كل يوم يحين الوقت لنبرز
              ثقافتنا ونعيد بعضًا من التباين إلى هذا العالم.. ونتحدث العربية،
              ونسمو بها لغةً وحضارة، وقوة.
            </h4>
          </div>
        </div>
        {/* </Tilt> */}
        <div className="podcastMainDiv">
          <br />
          <h2 className="podcastHead">
            <b>إذاعة تحدث العربية</b>
          </h2>
          <br />
          <Splide
            options={{
              type: "loop",
              width: "100%",
              // gap: "0.2rem",
              perPage: 5,
              perMove: 1,
            }}
          >
            <SplideSlide>
              <iframe
                title="1"
                width="100%"
                height="200"
                scrolling="no"
                frameBorder="no"
                allow="autoplay"
                src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1156873969&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
              ></iframe>
            </SplideSlide>
            <SplideSlide>
              <iframe
                title="2"
                width="100%"
                height="200"
                scrolling="no"
                frameBorder="no"
                allow="autoplay"
                src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1149053563&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
              ></iframe>
            </SplideSlide>
            <SplideSlide>
              <iframe
                title="3"
                width="100%"
                height="200"
                scrolling="no"
                frameBorder="no"
                allow="autoplay"
                src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1116320677&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
              ></iframe>
            </SplideSlide>
            <SplideSlide>
              <iframe
                title="4"
                width="100%"
                height="200"
                scrolling="no"
                frameBorder="no"
                allow="autoplay"
                src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/913935685&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
              ></iframe>
            </SplideSlide>
            <SplideSlide>
              <iframe
                title="5"
                width="100%"
                height="200"
                scrolling="no"
                frameBorder="no"
                allow="autoplay"
                src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1108262695&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
              ></iframe>
            </SplideSlide>

            <SplideSlide>
              <iframe
                title="6"
                width="100%"
                height="200"
                scrolling="no"
                frameBorder="no"
                allow="autoplay"
                src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1067190397&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
              ></iframe>
            </SplideSlide>
            <SplideSlide>
              <iframe
                title="7"
                width="100%"
                height="200"
                scrolling="no"
                frameBorder="no"
                allow="autoplay"
                src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1031650078&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
              ></iframe>
            </SplideSlide>
            <SplideSlide>
              <iframe
                title="8"
                width="100%"
                height="200"
                scrolling="no"
                frameBorder="no"
                allow="autoplay"
                src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/977526991&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
              ></iframe>
            </SplideSlide>
            <SplideSlide>
              <iframe
                title="9"
                width="100%"
                height="200"
                scrolling="no"
                frameBorder="no"
                allow="autoplay"
                src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/964332325&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
              ></iframe>
            </SplideSlide>
            <SplideSlide>
              <iframe
                title="10"
                width="100%"
                height="200"
                scrolling="no"
                frameBorder="no"
                allow="autoplay"
                src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/933367024&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
              ></iframe>
            </SplideSlide>
          </Splide>
        </div>
        <br />
        <div className="storeSectionDiv">
          <h1>Store Section</h1>
        </div>
        <div className="miniQuizSection">
          <h1>mini quiz section</h1>
        </div>
      </div>
    </>
  );
};

export default Landing;

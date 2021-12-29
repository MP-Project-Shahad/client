import React, { useState, useEffect } from "react";
import Header from "./../Header";
import { useNavigate } from "react-router";
import "./style.css";
import "@splidejs/splide/dist/css/splide.min.css";
import { useSelector } from "react-redux";
import Podcast from "../Podcast";
import Nav from "./../Nav";
import Quizes from "../Quizes";
import axios from "axios";
import { useSpring, animated, config } from "react-spring";

const Landing = () => {
  // eslint-disable-next-line
  const state = useSelector((state) => {
    return state;
  });

  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  const BASE_URL = process.env.REACT_APP_BASE_URL;

  //getting products
  const getProducts = async () => {
    let res = await axios.get(`${BASE_URL}/allContent`);
    setProducts(res.data);
    console.log(products);
  };

  useEffect(() => {
    getProducts();
    // eslint-disable-next-line
  }, []);

  const [flip, set] = useState(false);
  const props = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    reset: false,
    // reverse: flip,
    delay: 250,
    config: config.molasses,
    onRest: () => set(!flip),
  });

  return (
    <>
      <Nav />
      <div className="landingMainDiv">
        <script src="vanilla-tilt.js"></script>
        <br />
        <Header />
        <div className="aboutDiv">
          <div className="imgPart">
            {/* <marquee
              behavior="slide"
              // direction="right"
              scrollamount="50"
              style={{
                width: "450px",
                // marginRight: "25px",
                // border: "1px solid",
              }}
            > */}
            <img src="./sp.png" alt="sp" className="aboutImg" />
            {/* </marquee> */}
          </div>
          <div className="textPart">
            {/* <marquee
              behavior="slide"
              direction="left"
              scrollamount="60"
              style={{
                width: "500px",
                marginRight: "-310px",
              }}
            > */}
            <animated.h1 style={props}>ما المختلف؟ </animated.h1>
            {/* </marquee> */}
            <div className="h4Div" dir="rtl">
              <animated.h4 style={props} dir="rtl">
                دعماً لحملة تحدث العربية الشهيرة، قررنا انشاء هذا الموقع لكن . .
                <br />
                <i> ما المختلف؟ </i>
              </animated.h4>
              <animated.h4 style={props}>
                هنا نقدم خدمة تعلم اللغة العربية بشكل مبسط وسريع لمقدمين الخدمات
              </animated.h4>
            </div>
            <div className="stampDiv" dir="rtl">
              <animated.h4 style={props} className="textH4">
                حتى يستطيعون
              </animated.h4>

              <animated.img
                style={props}
                alt="logo"
                src="./mp-logo-Copy.png"
                className="stampImg"
                style={{ width: "60px", transform: "rotate(-15deg)" }}
              />
            </div>
          </div>
          {/* <div className="enPart"></div> */}
        </div>
        <br />
        <div className="shadow"></div>
        <div className="textDivLanding" id="textDivLanding">
          <br />
          <br />
          <h1 className="titleH">لماذا قلنا تحدّث العربّيةَ؟</h1>
          <div className="headDiv" dir="rtl">
            <h4 className="textH">
              إظهار الهوية العربية.. إحدى الركائز التي نقوم عليها، فهي عامل جذب
              اقتصادي وسياحي وتمكين أقوى للمملكة في محيطها.. وبذلك ستتوسع
              إمكانيات تعلم اللغة العربية والإطلاع عليها.
            </h4>
            <h4 className="textH">
              كما أن مشاكل وتحديات الهوية واللغة أكثر من أن تُعد أو تحصى، ولكننا
              نؤمن أن الحل لكل هذه العقبات.. يبدأ بممارسة اللغة واستحضارها
              وإحيائها في يوم كل
              <b style={{ color: "red" }}> مواطن ومقيم</b>.
            </h4>
            <h4 className="textH">
              فبينما يصبح العالم مكررًا ويزداد تشابهًا كل يوم يحين الوقت لنبرز
              ثقافتنا ونعيد بعضًا من التباين إلى هذا العالم.. ونتحدث العربية،
              ونسمو بها لغةً وحضارة، وقوة.
            </h4>
          </div>
        </div>

        {state.signIn.token.length < 1 ? (
          <>
            <div className="providersLessonsDiv">
              <div className="arSection">
                <h2 dir="rtl">مهتم تتعلم عربي؟</h2>
                <p dir="rtl">
                  هل انت مقدم خدمة او تعرف مقدم خدمة اجنبي في بلد عربي؟
                  <br />
                  ودك تتعلم او تعلمه اللغة العربية؟
                  <br />
                  هنا في تحدث العربية نقدر نساعدك تتعلم ببساطة وبلا اي مقابل!
                </p>
                <>
                  <p>سجل الان لأخذ اختبار تحديد المستوى </p>

                  <button
                    className="mainBtn"
                    onClick={() => navigate("./SignUp")}
                  >
                    تسجيل
                  </button>
                </>
              </div>
              <div className="imgSection">
                <img src="./splogo2.png" alt="sp" className="lessonImg" />
              </div>
              <div className="enSection">
                <h2>Intrested in learning Arabic?</h2>
                <p>
                  Are you a service provider in an Arabic country?
                  <br />
                  Intrested in learning Arabic? <br />
                  We can help you with that for FREE!
                  <br />
                </p>
                <>
                  <p> sign up now to take the placement test.</p>
                  <button
                    className="mainBtn"
                    onClick={() => navigate("./SignUp")}
                  >
                    Sign Up
                  </button>
                </>
              </div>
            </div>
          </>
        ) : (
          <>
            {state.signIn.user.level ===
            "didn't take the placement test yet" ? (
              <>
                {" "}
                {/* <div className="line"></div> */}
                <div className="providersLessonsDiv">
                  <div className="arSection">
                    <h2 dir="rtl">مهتم تتعلم عربي؟</h2>
                    <p dir="rtl">
                      هل انت مقدم خدمة او تعرف مقدم خدمة اجنبي في بلد عربي؟
                      <br />
                      ودك تتعلم او تعلمه اللغة العربية؟
                      <br />
                      هنا في تحدث العربية نقدر نساعدك تتعلم ببساطة وبلا اي
                      مقابل!
                    </p>
                    <>
                      <p> ابدأ الان بأخذ اختبار تحديد المستوى</p>
                      <button
                        className="placmentBtn"
                        onClick={() => navigate("/PlacementTest")}
                      >
                        بدء اختبار تحديد المستوى
                      </button>
                    </>
                  </div>
                  <div className="imgSection">
                    <img src="./splogo2.png" alt="sp" className="lessonImg" />
                  </div>
                  <div className="enSection">
                    <h2>Intrested in learning Arabic?</h2>
                    <p>
                      Are you a service provider in an Arabic country?
                      <br />
                      Intrested in learning Arabic? <br />
                      We can help you with that for FREE!
                      <br />
                    </p>
                    <>
                      <p> take the placement test.</p>
                      <button
                        className="placmentBtn"
                        onClick={() => navigate("/PlacementTest")}
                      >
                        Take The Placement Test
                      </button>
                    </>
                  </div>
                </div>
              </>
            ) : (
              <></>
            )}
          </>
        )}

        <div className="line"></div>

        <div className="miniQuizSection" id="miniQuizSection">
          <br />
          <br />
          <br />
          <h1 dir="rtl">اختبر فصاحتك</h1>
          <Quizes quizName={"اختبر فصاحتك"} />
        </div>
        <div className="line"></div>

        <div className="storeSectionDiv" id="storeSectionDiv">
          <br />
          <br />
          <br />
          <h1>منتجات تحدث العربية</h1>
          <div className="productsCards" dir="rtl">
            {products.length > 0 ? (
              <div className="cards">
                {products.map((ele) => {
                  return (
                    <div className="card" dir="rtl" key={ele._id + 1}>
                      <a
                        href={ele.link}
                        target="_blank"
                        key={ele._id + 2}
                        rel="noreferrer"
                      >
                        <div className="prdctImgDiv" key={ele._id + 3}>
                          <img
                            src={ele.img}
                            alt="product"
                            className="prdctImg"
                            key={ele._id + 4}
                          />
                        </div>
                        <h3 key={ele._id + 5}>{ele.name}</h3>
                        <h2 key={ele._id + 6}>{ele.price}</h2>
                        <p style={{ color: "gray" }} key={ele._id + 7}>
                          {ele.desc}
                        </p>
                      </a>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="loadingDiv">
                <div class="loader"></div>
                <h2 dir="rtl" className="loadHead">
                  يتم التحميل...
                </h2>
              </div>
            )}
          </div>
        </div>

        <div className="podcastMainDiv" id="podcastMainDiv">
          <br />
          <h2 className="podcastHead">
            <b>إذاعة تحدث العربية</b>
          </h2>
          <br />
          <Podcast />
        </div>
      </div>
    </>
  );
};

export default Landing;

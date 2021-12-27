<div className="providersLessonsDiv">
  {state.signIn.token.length < 1 ? (
    <>
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

          <button className="mainBtn" onClick={() => navigate("./SignUp")}>
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
          <button className="mainBtn" onClick={() => navigate("./SignUp")}>
            Sign Up
          </button>
        </>
      </div>
    </>
  ) : (
    <>
      {state.signIn.user.level === "didn't take the placement test yet" ? (
        <>
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
              <p> ابدأ الان بأخذ اختبار تحديد المستوى</p>
              <button className="placmentBtn">بدء اختبار تحديد المستوى</button>
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
              <button className="placmentBtn">Take The Placement Test</button>
            </>
          </div>
        </>
      ) : (
        <></>
      )}
    </>
  )}
</div>;

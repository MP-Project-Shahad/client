import React, { useEffect, useState } from "react";
import Nav from "../Nav";
import "./../PlacementTest/style.css";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

const RecoTest = () => {
  const [voiced, setVoiced] = useState([]);
  const [result, setResult] = useState("");
  // const [counter, setCounter] = useState(0);

  const compare = () => {
    let test = ["أول", "تجربة", "للاختبار."];
    setVoiced(transcript.split(" "));
    let count = 0;
    let precent;

    test.forEach((c) => {
      if (
        voiced.some((a) => {
          return a === c;
        })
      ) {
        count++;
      }
    });
    precent = (count * 100) / test.length;
    let result = `you scored ${precent.toFixed(2)} %`;
    setResult(result);
    console.log(count);
    console.log(precent);
    console.log(test, "test");
  };

  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

  // const func = () => {
  //   let res = transcript;
  //   setVoiced(res.split(" "));
  // };

  useEffect(() => {
    compare();
  }, [transcript]);

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  // let counnt = 0;

  // const startCounter = () => {
  //   console.log("counter", counnt);
  //   console.log(counnt, "counnt");
  //   if (counnt < 9) {
  //     setCounter(counter + 1);
  //     counnt++;
  //   }
  //   if (counnt === 9) {
  //     SpeechRecognition.stopListening();
  //   }

  // setCounter(counter + 1);

  // counnt++;

  // if (counnt === 9) {
  //   SpeechRecognition.stopListening();
  // }
  // };

  const listenInArabic = () => {
    SpeechRecognition.startListening({
      continuous: false,
      language: "ar-SA",
    });
  };

  console.log(voiced, "voiced");
  // console.log(transcript, "transcript");

  return (
    <div className="PlacementMainDiv">
      <Nav />
      <p>Microphone: {listening ? "on" : "off"}</p>
      <button
        onClick={() => {
          listenInArabic();
          // const myInterval = setInterval(startCounter, 500);
          // if (counter == 9) clearInterval(myInterval);
        }}
      >
        استمع
      </button>
      {/* <button onClick={SpeechRecognition.stopListening}>Stop</button> */}
      <button onClick={resetTranscript}>Reset</button>
      <p>{transcript}</p>
      <h1>{result}</h1>
    </div>
  );
};

export default RecoTest;

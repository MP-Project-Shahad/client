import React, { useEffect, useState } from "react";
import Nav from "../Nav";
import "./../PlacementTest/style.css";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

const RecoTest = () => {
  const [voiced, setVoiced] = useState([]);
  const [result, setResult] = useState("");

  const compare = () => {
    let test = ["أول", "تجربة", "للاختبار"];
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
    let result = `you scored ${precent.toFixed(1)} %`;
    setResult(result);
    // console.log(count);
    // console.log(precent);
    // console.log(test, "test");
  };

  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

  useEffect(() => {
    // console.log(voiced);
    compare();
  }, [transcript]);

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  const listenInArabic = () => {
    SpeechRecognition.startListening({
      continuous: false,
      language: "ar-SA",
    });
  };

  return (
    <div className="PlacementMainDiv">
      <Nav />
      <p>Microphone: {listening ? "on" : "off"}</p>
      <button
        onClick={() => {
          listenInArabic();
          setTimeout(() => SpeechRecognition.stopListening(), 5000);
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

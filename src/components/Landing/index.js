import React from "react";
import Header from "./../Header";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "./style.css";
import "@splidejs/splide/dist/css/splide.min.css";

const Landing = () => {
  return (
    <div className="LandingMainDiv">
      <br />
      <Header />
      <br />

      <div className="textDivLanding">{/* <h1>Text section</h1> */}</div>
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
            width="100%"
            height="200"
            scrolling="no"
            frameborder="no"
            allow="autoplay"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1156873969&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
          ></iframe>
        </SplideSlide>
        <SplideSlide>
          <iframe
            width="100%"
            height="200"
            scrolling="no"
            frameborder="no"
            allow="autoplay"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1149053563&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
          ></iframe>
        </SplideSlide>
        <SplideSlide>
          <iframe
            width="100%"
            height="200"
            scrolling="no"
            frameborder="no"
            allow="autoplay"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1116320677&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
          ></iframe>
        </SplideSlide>
        <SplideSlide>
          <iframe
            width="100%"
            height="200"
            scrolling="no"
            frameborder="no"
            allow="autoplay"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/913935685&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
          ></iframe>
        </SplideSlide>
        <SplideSlide>
          <iframe
            width="100%"
            height="200"
            scrolling="no"
            frameborder="no"
            allow="autoplay"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1108262695&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
          ></iframe>
        </SplideSlide>

        <SplideSlide>
          <iframe
            width="100%"
            height="200"
            scrolling="no"
            frameborder="no"
            allow="autoplay"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1067190397&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
          ></iframe>
        </SplideSlide>
        <SplideSlide>
          <iframe
            width="100%"
            height="200"
            scrolling="no"
            frameborder="no"
            allow="autoplay"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1031650078&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
          ></iframe>
        </SplideSlide>
        <SplideSlide>
          <iframe
            width="100%"
            height="200"
            scrolling="no"
            frameborder="no"
            allow="autoplay"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/977526991&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
          ></iframe>
        </SplideSlide>
        <SplideSlide>
          <iframe
            width="100%"
            height="200"
            scrolling="no"
            frameborder="no"
            allow="autoplay"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/964332325&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
          ></iframe>
        </SplideSlide>
        <SplideSlide>
          <iframe
            width="100%"
            height="200"
            scrolling="no"
            frameborder="no"
            allow="autoplay"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/933367024&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
          ></iframe>
        </SplideSlide>
      </Splide>
      <br />
      <h2>Landing</h2>
    </div>
  );
};

export default Landing;

import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";

const Podcast = () => {
  return (
    <div>
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
            // allow="autoplay"
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
            // allow="autoplay"
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
            // allow="autoplay"
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
            // allow="autoplay"
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
            // allow="autoplay"
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
            // allow="autoplay"/
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
            // allow="autoplay"
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
            // allow="autoplay"
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
            // allow="autoplay"
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
            // allow="autoplay"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/933367024&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
          ></iframe>
        </SplideSlide>
      </Splide>
    </div>
  );
};

export default Podcast;

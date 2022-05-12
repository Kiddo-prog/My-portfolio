import { Heading, Box } from "@chakra-ui/react";
import React from "react";
import Slider from "react-slick";

export default function Skill() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <Heading
        textAlign="center"
        fontSize={["20px", "25px", "30px", "36px"]}
        marginY="2em"
      >
        Skill
      </Heading>
      <Box marginY="2em">
        <Slider {...settings}>
          <div>
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
              height="25%"
              width="25%"
              alt="dev-icon"
            />
          </div>

          <div>
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg"
              height="25%"
              width="25%"
              alt="dev-icon"
            />
          </div>

          <div>
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg"
              height="25%"
              width="25%"
              alt="dev-icon"
            />
          </div>

          <div>
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain-wordmark.svg"
              height="25%"
              width="25%"
              alt="dev-icon"
            />
          </div>

          <div>
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg"
              height="25%"
              width="25%"
              alt="dev-icon"
            />
          </div>

          <div>
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg"
              height="25%"
              width="25%"
              alt="dev-icon"
            />
          </div>

          <div>
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg"
              height="25%"
              width="25%"
              alt="dev-icon"
            />
          </div>

          <div>
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg"
              height="25%"
              width="25%"
              alt="dev-icon"
            />
          </div>
          <div>
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg"
              height="25%"
              width="25%"
              alt="dev-icon"
            />
          </div>
          <div>
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
              height="25%"
              width="25%"
              alt="dev-icon"
            />
          </div>

          <div>
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg"
              height="25%"
              width="25%"
              alt="dev-icon"
            />
          </div>
          <div>
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg"
              height="25%"
              width="25%"
              alt="dev-icon"
            />
          </div>
        </Slider>
      </Box>
      {/* </SimpleGrid> */}
    </>
  );
}

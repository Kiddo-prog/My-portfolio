import { Heading, Box } from "@chakra-ui/react";
import React from "react";
import Slider from "react-slick";

export default function Skill() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 3,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 3000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };
  return (
    <>
      <Heading
        fontSize={["18px", "20px", "24px", "35px"]}
        mb="2em"
        fontStyle="italic"
        ml="2em"
      >
        Skills
      </Heading>
      <Box marginY="2em" overflow="hidden" ml="10px">
        <Slider {...settings}>
          <div>
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
              height="25%"
              width="25%"
              alt="html5"
            />
          </div>

          <div>
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg"
              height="25%"
              width="25%"
              alt="css3"
            />
          </div>

          <div>
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg"
              height="25%"
              width="25%"
              alt="javascript"
            />
          </div>

          <div>
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain-wordmark.svg"
              height="25%"
              width="25%"
              alt="django"
            />
          </div>

          <div>
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg"
              height="25%"
              width="25%"
              alt="python"
            />
          </div>

          <div>
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg"
              height="25%"
              width="25%"
              alt="react"
            />
          </div>

          <div>
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg"
              height="25%"
              width="25%"
              alt="redux"
            />
          </div>

          <div>
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg"
              height="25%"
              width="25%"
              alt="bootstrap"
            />
          </div>
          <div>
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg"
              height="25%"
              width="25%"
              alt="github"
            />
          </div>
          <div>
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
              height="25%"
              width="25%"
              alt="git"
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
              alt="nodejs"
            />
          </div>
          <div>
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-plain-wordmark.svg"
              height="25%"
              width="25%"
              alt="heroku"
            />
          </div>
          <div>
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg"
              height="25%"
              width="25%"
              alt="mongodb"
            />
          </div>
          <div>
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg"
              height="25%"
              width="25%"
              alt="mysql"
            />
          </div>
        </Slider>
      </Box>
    </>
  );
}

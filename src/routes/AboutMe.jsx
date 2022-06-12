import React from "react";
import { 
  Box, 
  Text, 
  Heading,
  Stack,
  HStack,
  useColorModeValue
} from "@chakra-ui/react";
import { useTypewriter } from 'react-simple-typewriter';
import { VideoScroll } from 'react-video-scroll'


export default function AboutMe() {

  const aboutAfterContentBg = useColorModeValue("#000", "#fff")
  const setStyles = (wrapperEl, videoEl, playbackRate) => {
    wrapperEl.style.marginTop = `calc(180% - ${Math.floor(videoEl.duration) *
      playbackRate +
      'px'})`
    wrapperEl.style.marginBottom = `calc(180% - ${Math.floor(videoEl.duration) *
      playbackRate +
      'px'})`
  }

  const {text} = useTypewriter({
    words: ['Richer', 'Smarter', 'Happier'],
    loop: 0,
    typeSpeed: 70,
    cursorStyle: '|'
  })

  return (
    <Box my={["3em", "4em"]} mx={["2em", "3em"]} id="about">
      <Heading
        fontSize={["18px", "20px", "24px", "35px"]}
        mb="0.5em"
        fontFamily={'"Public Sans", sans-serif'}
        _after={{content: '""', display: 'block', bgColor: aboutAfterContentBg, width: '6%', height: '5px', mt: 2}}
      >
        About me
      </Heading>
      <Stack mt={20}>
        <HStack 
          justifyContent={'space-between'} 
          flexWrap={{base: 'wrap', md: 'nowrap', lg: 'nowrap'}} 
          alignItems={'flex-start'} 
          spacing={10}
          my={{base: 5, md: 10, lg: 10}}
          >
          <Box data-aos="fade-right">
          <VideoScroll
            onLoad={props =>
              setStyles(props.wrapperEl, props.videoEl, props.playbackRate)
            }
            playbackRate={15}
            style={{ position: 'sticky' }}
          >
            <video
              tabIndex="0"
              autobuffer="autobuffer"
              preload="preload"
              style={{ width: '100%', objectFit: 'cover' }}
              playsInline
            >
              <source type="video/mp4" src="/about-me.mp4" />
            </video>
          </VideoScroll>
          </Box>
            <Text fontSize={["14", "16", "19", "20"]} fontWeight="400" fontFamily={'"Public Sans", sans-serif'} data-aos="zoom-in">
            I'm a Fullstack developer with a passion for developing scalable web
            applications. Growing my skillset, great
            collaboration with teams while contributing to the positive outcome of
            making people{" "}
            {/* <b>{text}</b> */}
          </Text>
        </HStack>
      </Stack>
    </Box>
  );
}

import React, { useState } from "react";
import { Box, Flex, Spacer, Text } from "@chakra-ui/react";
import { animated, useSpring } from "react-spring";

function Intro() {
  const [flip, set] = useState(false);
  //   const { x } = useSpring({
  //     reset: true,
  //     reverse: flip,
  //     from: { x: 0 },
  //     x: 1,
  //     delay: 200,
  //     config: config.molasses,
  //     onRest: () => set(!flip),
  //   });

  return (
    <Box>
      <Flex>
        {/* <animated.svg
          style={{ margin: 20, width: 80, height: 80 }}
          viewBox="0 0 45 44"
          strokeWidth="2"
          fill="white"
          stroke="rgb(45, 55, 71)"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray={156}
          strokeDashoffset={x.to((x) => (1 - x) * 156)}
        >
          <polygon points={POINTS} />
        </animated.svg> */}
        <Text></Text>
        <Spacer />
      </Flex>
    </Box>
  );
}

export default Intro;

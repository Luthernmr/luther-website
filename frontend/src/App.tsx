import { Box, Flex } from "@chakra-ui/react";
import Content from "./component/Landing/Content";
import Landing from "./component/Landing/Landing";
import FOG from "vanta/dist/vanta.fog.min";
import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from 'gsap-trial/ScrollSmoother';
import Footer from "./component/Footer/Footer";
import AnimatedCursor from "react-animated-cursor"

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
function App() {
  const [vantaEffect, setVantaEffect] = useState(null);
  const myRef = useRef(null);
  const otherRef = useRef(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        FOG({
          el: otherRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.00,
          minWidth: 200.00,
          highlightColor: 0xd9ff,
          midtoneColor: 0x278fbb,
          lowlightColor: 0x48bdd7,
          baseColor: 0x884a4,
          blurFactor: 0.84,
          speed: 3,
          zoom: 3,
        })
      );
    }
  });
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        FOG({
          el: myRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.00,
          minWidth: 200.00,
          highlightColor: 0x1b1b1b,
          midtoneColor: 0x373737,
          lowlightColor: 0x787878,
          baseColor: 0x111111,
          blurFactor: 0.84,
          speed: 2,
          zoom: 2,
        })
      );
    }
    gsap.to("#test", {
      scrollTrigger: {
        markers: true,
        trigger: "#test",
        start: "40% 70%",
        end: "70% 60%",
        scrub: 1,
      },
      duration: 1,
      opacity: 0,
      ease: "power4.inOut",
    });
  }, [vantaEffect]);

  
  return (
    <>
      <div id="smooth-wrapper">
        <div id="smooth-content" >
      <Box
        id="test"
        position={"absolute"}
        minH={"100%"}
        width={"100%"}
        zIndex={1}
        ref={otherRef}

        >
      </Box>
          <Flex flexDirection={"column"} id="landingr" ref={myRef}>
            <Landing />
            <Content />
            <Footer />
          </Flex>
        </div>
      </div>
    </>
  );
}

export default App;

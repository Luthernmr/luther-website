import { Box } from "@chakra-ui/react";
import Content from "./component/Landing/Content";
import Landing from "./component/Landing/Landing";
import * as THREE from "three";
import FOG from "vanta/dist/vanta.fog.min";
import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
function App() {
  const [vantaEffect, setVantaEffect] = useState(null);
  const myRef = useRef(null);
  const otherRef = useRef(null);
  const scrollBox = document.getElementById("scrollBox");
  const landing = document.getElementById("landing");

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        FOG({
          el: otherRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          highlightColor: 0xd9ff,
          midtoneColor: 0x278fbb,
          lowlightColor: 0x48bdd7,
          baseColor: 0x884a4,
          blurFactor: 0.84,
          speed: 2,
          zoom: 2,
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
          minHeight: 200.0,
          minWidth: 200.0,
          highlightColor: 0x1b1b1b,
          midtoneColor: 0x373737,
          lowlightColor: 0x787878,
          baseColor: 0x111111,
          blurFactor: 0.84,
          speed: 2.4,
          zoom: 0.5,
        })
      );
    }
    gsap.to("#test", {
      scrollTrigger: {
        markers: true, // Pour déboguer
        trigger: "#test",
        start: "40% 70%",
        end: "50% 60%",
        scrub: 1,
      },
      duration: 1,
      opacity: 0,
      ease: "power4.inOut",
    });
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <>
      <Box
        id="test"
        bg={"red"}
        position={"absolute"}
        width={"100%"}
        height={"100%"}
        zIndex={1}
        ref={otherRef}
      ></Box>
      <Box id="landing" ref={myRef}>
        <Landing />
        <Content />
      </Box>
    </>
  );
}

export default App;

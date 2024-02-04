import { Box } from "@chakra-ui/react";
import Content from "./component/Landing/Content";
import Landing from "./component/Landing/Landing";

function App() {
  return (
    <>
      <Box id="landing" backgroundColor={"#018aac"}>
        <Landing />
        <Content />
      </Box>
    </>
  );
}

export default App;

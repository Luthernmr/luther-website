
import Landing from "./component/Landing/Landing";
import { BrowserRouter, Routes, Route, Navigate  } from "react-router-dom";
import DocsLayout from "./component/Layout/DocsLayout"
import Content from "./component/Landing/Content";
import MarkdownViewer from "./component/Layout/MarkdownViewer"

function App() {
 

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing/>} />
          <Route path="/docs" element={<DocsLayout/>} >
            <Route path="/docs" element={<Navigate to="/docs/overview/context" replace />} />

           <Route path="/docs/:category/:docName" element={<MarkdownViewer/>} />

          </Route>
        </Routes>
      </BrowserRouter >
    </>
  );
}

export default App;

import Footer from "./footer";
import "../src/App.css";
import Header from "./header";
import Ch01 from "./Ch/ch-01";
import Ch02 from "./Ch/ch-02";
import Ch03 from "./Ch/ch-03";
import Ch04 from "./Ch/ch-04";
import Ch05 from "./Ch/ch-05";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Ch01 />}></Route>
          <Route path="/02" element={<Ch02 />}></Route>
          <Route path="/03" element={<Ch03 />}></Route>
          <Route path="/04" element={<Ch04 />}></Route>
          <Route path="/05" element={<Ch05 />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

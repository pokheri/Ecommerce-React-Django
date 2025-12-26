import { useState } from "react";
import "./App.css";
import Main from "./components/Detail/Main";
import Footer from "./components/Footer";
import Header from "./components/Header/Header";
function App() {
  const [count, setCount] = useState(0);
  console.log("hey this is hte magic");

  return (
    <>
      <Header />
      {/* <div
        className="body-container"
        style={{ marginLeft: "76px", marginRight: "70px" }}
      >
        <ItemContainer />
        <CatContainer />
      </div> */}
      <Main />
      <Footer />
    </>
  );
}

export default App;

// import IconButton from "./components/IconButton";

// const App = () => {
//   return (
//     <center>
//       <IconButton />;
//     </center>
//   );
// };

// export default App;

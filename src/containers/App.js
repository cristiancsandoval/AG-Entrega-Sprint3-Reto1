import Feautures from "../components/Feautures";
import FooterComp from "../components/FooterComp";
import HeaderComp from "../components/HeaderComp";
import Intro from "../components/Intro";
import Productive from "../components/Productive";
import Quotes from "../components/Quotes";
import SignUp from "../components/SignUp";

function App() {
  return (
    <div className="app">
      <HeaderComp/>
      <Intro/>
      <Feautures/>
      <Productive/>
      <Quotes/>
      <SignUp/>
      <FooterComp/>
    </div>
  );
}

export default App;

import Background from "./components/Background";
import Beat from "./components/Beat";
// import BeatMaker from './components/BeatMaker'
import Header from "./components/Header";

function App() {
  return (
    <>
      <Background></Background>
      <div className="h-screen flex items-center justify-center flex-col gap-2 p-2">
        <Header />
        <Beat />
      </div>
    </>
  );
}

export default App;

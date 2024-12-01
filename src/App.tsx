import Beat from './components/Beat'
// import BeatMaker from './components/BeatMaker'
import Header from './components/Header'

function App() {
  return (
    <div className="h-screen flex items-center justify-center flex-col gap-2 p-2">
      {/* <BeatMaker /> */}
      <Header/>
      <Beat/>
    </div>
  )
}

export default App
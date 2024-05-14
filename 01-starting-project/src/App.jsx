import Header from "./components/Header/Header.jsx";
import CoreConcepts from "./components/CoreConcept/coreConcepts.jsx";
import Examples from "./components/Examples/Examples.jsx";

function App() {
  return (
    <div>
      <Header></Header>
      <main>
        <CoreConcepts></CoreConcepts>
        <Examples></Examples>
      </main>
    </div>
  );
}

export default App;

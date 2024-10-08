import "./App.css";
import { Setting } from "./Setting/Setting";
import { Aside } from "./shared/components/Aside";
import { Header } from "./shared/components/Header";

function App() {
  return (
    <div className="wrapper">
      <Aside />

      <div className="content">
        <Header />

        <Setting />
      </div>
    </div>
  );
}

export default App;

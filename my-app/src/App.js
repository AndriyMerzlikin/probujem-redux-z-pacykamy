import { useSelector } from "react-redux";
import { Account } from "./Account";
import { LangSwitcher } from "./LangSwitcher";

function App() {
  const lang = useSelector((state) => state.locale.lang);

  return (
    <div className="App">
      <LangSwitcher />
      <Account />
      <p>
        <b>Selected lang {lang}</b>
      </p>
    </div>
  );
}

export default App;

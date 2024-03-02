import { useSelector } from "react-redux";
import { Account } from "./Account";
import { LangSwitcher } from "./LangSwitcher";
import BasicDateCalendar from "./ProductsPage/Products";

function App() {
  const lang = useSelector((state) => state.locale.lang);

  return (
    <div className="App">
      <BasicDateCalendar />
      <LangSwitcher />
      <Account />
      <p>
        <b>Selected lang {lang}</b>
      </p>
    </div>
  );
}

export default App;

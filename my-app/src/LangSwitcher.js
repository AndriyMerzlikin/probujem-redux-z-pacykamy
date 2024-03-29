import { useDispatch, useSelector } from "react-redux";
import { changeLang } from "./localeSlice";

export const LangSwitcher = () => {
  const dispatch = useDispatch();
  const lang = useSelector((state) => state.locale.lang);

  return (
    <div>
      <select
        value={lang}
        onChange={(evt) => dispatch(changeLang(evt.target.value))}
      >
        <option value="uk">UK</option>
        <option value="en">EN</option>
        <option value="pl">PL</option>
      </select>
    </div>
  );
};

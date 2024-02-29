import { useDispatch, useSelector } from "react-redux";
import { deposit, withdraw } from "./accountSlice";

export const Account = () => {
  const dispatch = useDispatch();

  const value = useSelector((state) => state.account.balance);

  //   const handleDeposit = () => {
  //     const action = deposit(10);
  //     dispatch(action);
  //   };

  return (
    <div>
      <p>
        <b>balance: {value} credits</b>
      </p>
      <button onClick={() => dispatch(deposit(10))}>deposit</button>
      <button onClick={() => dispatch(withdraw(5))}>withdraw</button>
    </div>
  );
};

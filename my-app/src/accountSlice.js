import { createAction, createReducer } from "@reduxjs/toolkit";

export const deposit = createAction("account/deposit");

export const withdraw = createAction("account/withdraw");

const initialState = {
  balance: 500,
  userName: "Jakob",
};

export const accountReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(deposit, (state, action) => {
      state.balance = state.balance + action.payload;
    })
    .addCase(withdraw, (state, action) => {
      state.balance = state.balance - action.payload;
    });
});

// export const accountReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case "account/deposit":
//       return {
//         ...state,
//         balance: state.balance + action.payload,
//       };
//     case "account/withdraw":
//       return {
//         ...state,
//         balance: state.balance - action.payload,
//       };
//     default:
//       return state;
//   }
// };

// export const deposit = (value) => {
//   return { type: "account/deposit", payload: value };
// };

// export const withdraw = (value) => {
//   return { type: "account/withdraw", payload: value };
// };

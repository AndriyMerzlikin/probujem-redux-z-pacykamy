import { createAction, createReducer } from "@reduxjs/toolkit";

export const changeLang = createAction("locale/changeLang");

const initialState = {
  lang: "en",
};

export const localeReducer = createReducer(initialState, (builder) => {
  builder.addCase(changeLang, (state, action) => {
    state.lang = action.payload;
  });
});

// export const localeReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case "locale/changeLang":
//       return {
//         ...state,
//         lang: action.payload,
//       };
//     default:
//       return state;
//   }
// };

// export const changeLang = (newLang) => {
//   return {
//     type: "locale/changeLang",
//     payload: newLang,
//   };
// };

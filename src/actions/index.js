// import { vendors } from '../hooks/useCard';

// export const addCard = () => ({
//   type: 'ADD_TODO',
//   cardNumber: '',
//   cardFirstName: '',
//   cardLastName: '',
//   validThrough: '',
//   cvc: '',
//   vendor: vendors[0],
// });

export const addCard = (card) => ({
  type: 'ADD_CARD',
  payload: card,
});

export const removeCard = (cardId) => ({
  type: 'REMOVE_CARD',
  payload: cardId,
});

export const setActive = (cardId) => ({
  type: 'SET_ACTIVE',
  payload: cardId,
});

//

// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// export const getUser = createAsyncThunk("card/getUser", async () => {
//   return fetch("https://randomuser.me/api/").then((response) =>
//     response.json()
//   );
// });

// const initialState = {
//   user: [],
//   cards: [
//     {
//       cardNumber: "8642356323526985",
//       cardHolder: "",
//       expireMonth: "12",
//       expireYear: "22",
//       ccv: "345",
//       vendor: "Visa",
//       isActive: false,
//     },
//     {
//       cardNumber: "1225223523426982",
//       cardHolder: "",
//       expireMonth: "12",
//       expireYear: "22",
//       ccv: "345",
//       vendor: "Mastercard",
//       isActive: false,
//     },
//     {
//       cardNumber: "2345672523426982",
//       cardHolder: "",
//       expireMonth: "12",
//       expireYear: "22",
//       ccv: "345",
//       vendor: "Discover",
//       isActive: true,
//     },
//   ],
// };

// const cardSlice = createSlice({
//   name: "card",
//   initialState,
//   reducers: {
//     changeActive: (state, action) => {
//       console.log(action.payload);
//       for (let i = 0; i < state.cards.length; i++) {
//         if (state.cards[i].isActive === true) {
//           state.cards[i].isActive = false;
//         }
//         if (state.cards[i].cardNumber === action.payload) {
//           state.cards[i].isActive = true;
//         }
//       }
//     },
//     addCard: (state, action) => {
//       if (state.cards.length < 4) {
//         let obj = action.payload;
//         obj.isActive = false;
//         state.cards.push(obj);
//       }
//     },
//     removeCard: (state, action) => {
//       console.log(action.payload);
//       for (let i = 0; i < state.cards.length; i++) {
//         if (state.cards[i].cardNumber === action.payload) {
//           state.cards.splice(i, 1);
//         }
//       }
//     },
//   },
//   extraReducers: {
//     [getUser.fulfilled]: (state, action) => {
//       const { first, last } = action.payload.results[0].name;
//       let fullName = first + " " + last;
//       for (let i = 0; i < state.cards.length; i++) {
//         state.cards[i].cardHolder = fullName.toUpperCase();
//       }
//     },
//   },
// });

// export const { changeActive, addCard, removeCard } = cardSlice.actions;
// export default cardSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [
    {
      id: '0',
      title: 'Pledge with no reward',
      desc: 'Choose to support us without a reward if you simply believe in our project. As a backer, you will be signed up to receive product updates via email.',
      quantity: 100000000000000000,
    },
    {
      id: '1',
      title: 'Bamboo Stand',
      desc: "You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you'll be added to a special Backer member list.",
      quantity: 101,
      minPledgeAmount: 25,
      status: 'available',
    },
    {
      id: '2',
      title: 'Black Edition Stand',
      desc: "You get a Black Special Edition computer stand and a personal thank you. You'll be added to our Backer member list. Shipping is included.",
      quantity: 64,
      minPledgeAmount: 75,
      status: 'available',
    },
    {
      id: '3',
      title: 'Mahogany Special Edition',
      desc: "You get two Special Edition Mahogany stands, a Backer T-shirt and a personal thank you. You'll be added to our Backer member list. Shipping is included.",
      quantity: 0,
      minPledgeAmount: 200,
      status: 'available',
    },
  ],
};

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addOrder: {
      reducer(state, action) {
        const selectedId = state.products[action.payload.id];
        if (selectedId.quantity > 0) {
          selectedId.quantity -= action.payload.quantity;
        }
      },
      prepare(id, quantity) {
        return {
          payload: {
            id,
            quantity,
          },
        };
      },
    },
  },
});

export const { addOrder } = productsSlice.actions;
export const selectProducts = (state) => state.products;
export default productsSlice.reducer;

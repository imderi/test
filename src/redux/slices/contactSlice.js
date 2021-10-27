import { createSlice } from "@reduxjs/toolkit";

const contactSlice = createSlice({
  name: "contact",
  initialState: {},
  reducers: {
    getContact() {},
    setContact(state, action) {
      const contactData = action.payload;
      console.log(contactData);
      return { ...state, contactData };
    },
  },
});

export const { getContact, setContact } = contactSlice.actions;
export default contactSlice.reducer;

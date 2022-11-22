import {
     USERNAME,
     FIRSTNAME,
     LASTNAME,
     PHONE_NUMBER,
     USER_ID,
     PROFILE_PICTURE,
     ALL_USER_CONTACTS,
} from "./userTypes";
import { createReducer } from "@reduxjs/toolkit";


const initialState = {
     username: "",
     firstname: "",
     lastname: "",
     phonenumber: "",
     userId: "",
     profile_picture: "",
     all_user_contacts: [],
}

export default userReducer = createReducer(initialState, (builder) => {

     builder.addCase(USERNAME, (state, action) => {
          state.username = action.data
     });

     builder.addCase(FIRSTNAME, (state, action) => {
          state.firstname = action.data
     });

     builder.addCase(LASTNAME, (state, action) => {
          state.lastname = action.data
     });

     builder.addCase(PHONE_NUMBER, (state, action) => {
          state.phonenumber = action.data
     });

     builder.addCase(USER_ID, (state, action) => {
          state.userId = action.data
     });

     builder.addCase(PROFILE_PICTURE, (state, action) => {
          state.profile_picture = action.data
     });

     builder.addCase(ALL_USER_CONTACTS, (state, action) => {
          state.all_user_contacts = action.data
     });
})
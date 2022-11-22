import {
     FIRSTNAME,
     LASTNAME,
     PHONE_NUMBER,
     PROFILE_PICTURE,
     USERNAME,
     USER_ID,
     ALL_USER_CONTACTS
}
     from "./userTypes";


export const _userName = (data) => {
     return ((dispatch) => {
          dispatch({
               type: USERNAME,
               data: data
          })
     })
}

export const _firstName = (data) => {
     return ((dispatch) => {
          dispatch({
               type: FIRSTNAME,
               data: data
          })
     })
}

export const _lastName = (data) => {
     return ((dispatch) => {
          dispatch({
               type: LASTNAME,
               data: data
          })
     })
}

export const _phoneNumber = (data) => {
     return ((dispatch) => {
          dispatch({
               type: PHONE_NUMBER,
               data: data
          })
     })
}

export const _userId = (Id) => {
     return ((dispatch) => {
          dispatch({
               type: USER_ID,
               data: Id
          })
     })
}

export const _profilePicture = (image) => {
     return ((dispatch) => {
          dispatch({
               type: PROFILE_PICTURE,
               data: image
          })
     })
}

export const _allUserContacts = (data) => {
     return ((dispatch) => {
          dispatch({
               type: ALL_USER_CONTACTS,
               data: data,
          })
     })
}
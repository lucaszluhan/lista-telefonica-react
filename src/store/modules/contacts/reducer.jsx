const initialState = [];

export const contactsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'contacts/ADD':
      return [...state, action.payload];
    default:
      return state;
  }
};

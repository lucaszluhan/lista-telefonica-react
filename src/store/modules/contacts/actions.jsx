export const addToContacts = (payload) => {
  return {
    type: 'contacts/ADD',
    payload,
  };
};

const initialState = {
  isReadOnly: true,
  cardInfo: {
    last4Digits: '1234',
    expirationDate: '12/23',
    cvc: '123',
  },
};

const paymentScreenReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_IS_READ_ONLY':
      return {
        ...state,
        isReadOnly: action.payload,
      };
    case 'SET_CARD_INFO':
      return {
        ...state,
        cardInfo: action.payload,
      };
    default:
      return state;
  }
};

export default paymentScreenReducer;

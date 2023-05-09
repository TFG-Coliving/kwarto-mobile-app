import axios from "axios";

export const setIsReadOnly = (isReadOnly) => ({
  type: 'SET_IS_READ_ONLY',
  payload: isReadOnly,
});

export const setCardInfo = (cardInfo) => ({
  type: 'SET_CARD_INFO',
  payload: cardInfo,
});


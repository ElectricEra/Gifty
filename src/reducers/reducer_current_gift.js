export default (state = null, action) => {
  switch(action.type) {
  case 'GIFT_SELECTED':
    return action.payload;
  }

  return state;
}

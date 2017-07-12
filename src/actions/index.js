export const logUser = (email) =>{
  return {
    type: 'SIGNED_IN',
    payload: {
        email
    }
  }
}

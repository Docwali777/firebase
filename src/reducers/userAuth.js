export const user = (state= {user: {}}, action) =>{
switch(action.type){
  case 'SIGNED_IN':
  let signin = {...state}
  return {user: {...signin, ...action.payload}}


}
return state
}

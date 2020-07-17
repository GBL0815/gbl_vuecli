export const add = () => ({type: "add"})
export const minus = () => ({type: "minus"})
export const asncAdd = () => dispatch => {
    setTimeout(() => {
        dispatch({type:"add"});
    },1000)
}
import axios from "axios";
export function fetchImages(){
    return function(dispatch){
        axios.get("https://demo0813639.mockable.io/getPanos")
        .then((response)=>{
                dispatch({type: "RECEIVE_IMAGES",payload: response.data})
        });
    }
}
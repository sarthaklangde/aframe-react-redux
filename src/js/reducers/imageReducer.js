export default function reducer(state={
    images: [],
    fetching: false,
    fetched: false,
    
}, action ){
    switch(action.type){
        case "FETCH_IMAGES_START":{
            return {...state,fetching: true}
            
        }
        case "RECEIVE_IMAGES":{
            return {...state,fetching:false,fetched:true, images: action.payload}
        }
    }
    return state
}
const initialState={
    displayStyle:"box",
    searchCountry:"",
    selectCountry:""
}


export const stateReducer=(state=initialState,action)=>{
console.log(action,"action load")
    switch(action.type){
        case "DISPLAYSTYLE":
            return{
                ...state,displayStyle:action.payload
            };
        case "SEARCHCOUNTRY":
            return{
                ...state,searchCountry:action.payload
            };
        case "SELECTCOUNTRY":
            return{
                ...state,selectCountry:action.payload
                };    

            default:return state;
            break;
    }


}
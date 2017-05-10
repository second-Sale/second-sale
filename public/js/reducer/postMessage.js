module.exports = ((state={isSaved:''},action)=>{
    switch(action.type){
        case 'POSTMESSAGE':{
            return({isSaved:action.isSaved});
        }
        default: return state;
    }
});
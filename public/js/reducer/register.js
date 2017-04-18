module.exports = ((state={},action)=>{
    switch(action.type){
        case 'REGISTER_COMMIT':return action.data;break;
        default: return state;
    }
})
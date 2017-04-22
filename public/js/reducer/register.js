module.exports = ((state={},action)=>{
    switch(action.type){
        case 'REGISTER_COMMIT':alert(action.data);break;
        default: return state;
    }
})
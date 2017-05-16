import request from "superagent";

export default store => next => action =>{
    if(action.type === "POSTMESSAGE"){
        request.post('/postMessage')
            .send({userName:action.data.user,goodName:action.data.name,description:action.data.description,
                   price:action.data.price,count:action.data.count,telephoneNumber:action.data.telephoneNumber,
                    image:action.data.image})
            .end((err,res)=>{
                next({type:"POSTMESSAGE",isSaved:res.body});
            })
    }else{
        next(action);
    }
}
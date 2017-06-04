const ImageUploaded=(state={},action)=>{
    switch(action.type){
        case 'uploadImage':
            console.log(' reducer image',action.file);
            return {imageUpload:action.file};
    }
    return state;
}
export default ImageUploaded;
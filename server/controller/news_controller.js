import news from "../model/newschema.js";

export const getNews=async(req,res)=>{
    try{
        let data=await news.find({});
        res.status(200).json(data);        
    }
    catch(e){
        res.status(500).json({message:data.message});
        console.log("error .......")
    }
}
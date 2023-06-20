import {data} from './constantdata/data.js';
import news from './model/newschema.js';
import mongoose from 'mongoose';
const Defdata= async() =>{
    try{
        await news.insertMany(data);
        console.log("data inserted hurray!!!!");
    }
    catch(e){
        console.log("error"+e.message);
    }
}
export default Defdata;
import mongoose from "mongoose";
const productSchema = mongoose.Schema({
    name : {type : String, required:true},
    desc:{type : String, required:true},
    price : {type : Number, required:true},
    imageUrl:{type:String}
});
const productModel = mongoose.model("products", productSchema)

// const productModel = [
//     {id : 1, name: "Product1", price:100},
//     {id : 2, name: "Product2", price:110},
//     {id : 3, name: "Product3", price:150}
// ];
export default productModel
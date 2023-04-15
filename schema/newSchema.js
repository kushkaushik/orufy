const mongoose = require('mongoose')
const mySchema = mongoose.Schema({
    name:
        {type:String,
        required:true},
    images: 
    { type: [String], 
      contentType: 'image/jpeg' },
  price: 
  { type: Number, 
    required: true },
  sellingPrice:
   { type: Number,
     required: true },
  sku: 
  { type: String, 
    required: true, unique: true },
  category:
   { type: String,
     required: true },
  barcode:
   { type: String, 
    required: true },
  id: 
  { type: String, required: true, unique: true },
})

mongoose.model("orufy",mySchema)
const mongoose = require('mongoose')
const ORUFY = mongoose.model('orufy')

const addProduct = (req,res)=>{
    const {name , images , price , sellingPrice , sku,category,barcode,id} = req.body;
    if(!name || !images || !price || !sellingPrice || !sku || !category || !barcode || !id){
      return  res.status(404).json({
            success:false,
            msg:"please fill all the fields"
        })
    }
    else{
        ORUFY.findOne({sku}).then(data=>{
            if(data){
                return res.status(401).json({
                    success:false,
                    msg:"Duplicate Entry"
                })
            }
            else{
                const dataSaver = new ORUFY({
                    name , images , price , sellingPrice , sku,category,barcode,id
                })
                dataSaver.save().then(mydata=>{
                    return res.status(200).json({
                        success:true,
                        msg:"Saved Successfully",
                        mydata
                    })
                })
            }
        })
    }
}


const updateProduct = (req,res) =>{
    ORUFY.findByIdAndUpdate(req.params._id,req.body).then(data=>{
        if(!data) return res.status(301).json({success:true,msg:"Something Wrong"})
        res.status(201).json({success:true,data});
    })
}


const findSku = (req,res) =>{
    ORUFY.findById(req.params._id).then(data =>{
        if(!data) return res.status(301).json({success:false,msg:"Something Wrong"})
        res.status(201).json({success:true,data});
    })
}

const getProduct = (req,res) =>{
    ORUFY.find().sort({id:1}).then(getData=>{
        if(!getData) return res.status(301).json({success:false,msg:"Something Wrong"})
        return res.status(201).json({
            success:true,
            data:getData
        })
    })
}

const findProduct = (req,res) => {
    const searchData = req.query.q
      ORUFY.find({
        $or: [
            { name: { $regex: searchData, $options: 'i' } }, 
            { category: { $regex: searchData, $options: 'i' } }, 
            { barcode: { $regex: searchData, $options: 'i' } },
          ]
      }).then(data =>{
        res.json(data);
      }).catch(err=>{
        console.error(err);
    res.status(500).json({ error: 'Server error' });
    })


}


module.exports = {addProduct,updateProduct,findSku,getProduct,findProduct}
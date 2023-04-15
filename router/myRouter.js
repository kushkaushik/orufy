const express = require('express')
const router = express.Router()
const {addProduct,updateProduct,findSku,getProduct, findProduct} = require('../controller/productController')



router.route('/addProduct').post(addProduct)
router.route('/updateProduct/:_id').put(updateProduct)
router.route('/findSku/:_id').get(findSku)
router.route('/getProduct').get(getProduct)
router.route('/searchData').get(findProduct)

module.exports = router
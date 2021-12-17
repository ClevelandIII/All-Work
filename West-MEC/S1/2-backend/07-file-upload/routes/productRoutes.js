const express = require('express')
const { uploadImage } = require('../controllers/imageUploadController')
const { getAllProducts, createProduct } = require('../controllers/productsController')
const router = express.Router()

router.route('/').get(getAllProducts).post(createProduct)
router.route('/uploads').post(uploadImage)

module.exports = router
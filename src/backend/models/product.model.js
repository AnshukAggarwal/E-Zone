  
const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;

const Schema = mongoose.Schema;

const productSchema = new Schema(
    {
      name: { type: String, required: true },
      description: { type: String, required: true },
      cost: { type: Number, required: true },
      vendor: { type: ObjectId, ref:"Vendor", required:true }

    },
    {
      timestamps: true,
    }
  );
  

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
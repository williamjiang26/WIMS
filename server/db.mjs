import mongoose from "mongoose";
import slug from 'mongoose-slug-updater'
mongoose.plugin(slug)


//my schema goes here
const StaffSchema = new mongoose.Schema({

  Team: String,
  Age: Number, 
  Name: String, 

})
const Staff = mongoose.model('Staff', StaffSchema);

const OrderSchema = new mongoose.Schema({

  Name: String,
  Address: String, 
  Item: String, 

})
const Order = mongoose.model('Order', OrderSchema);

const ItemSchema = new mongoose.Schema({

  Name: String,
  Color: String, 
  Size: String, 

})
const Item = mongoose.model('Item', ItemSchema);

const UserSchema = new mongoose.Schema({
  username: {type: String, required: true, minLength: 3, maxLength: 20},
  password: {type: String, required: true, minLength: 8},
  email: {type: String, required: true},
});

// module.exports = Staff;
// module.exports = Order;
// module.exports = Item;


mongoose.connect('mongodb://localhost/project');
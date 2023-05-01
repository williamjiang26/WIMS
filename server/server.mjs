import express from 'express';
import mongoose from 'mongoose';
import './db.mjs'
import cors from 'cors'

const Staff = mongoose.model('Staff')
const Order = mongoose.model('Order')
const Item = mongoose.model('Item')

const app = express();
app.use(cors())
app.use(express.json())



app.get("/staff", async (req,res) => {
  try {
    const allStaff = await Staff.find({})
    res.send(allStaff)
  }catch (error){
    console.log(error)
  }
});

app.post("/staff", async(req,res) => {
  const staff = new Staff({
    Team: req.body.Team,
    Age: req.body.Age, 
    Name: req.body.Name
  })
  try {
    await staff.save()
    res.redirect('/staff')
  } catch(error) {
    res.send({error})
}
});

app.get("/inventory", async (req,res) => {
  try {
    const items = await Item.find({})
    res.send(items)
  }catch (error){
    console.log(error)
  }
});

app.post("/inventory", async (req,res) => {
  const item = new Item(req.body)
  try {
    await item.save()
    res.redirect('/inventory')
  }catch (error){
    console.log(error)
  }
});



app.get("/order", async (req,res) => {
  try {
    const orders = await Order.find({})
    res.send(orders)
  }catch (error){
    console.log(error)
  }
});

app.post("/order", async (req,res) => {
    const order = new Order(req.body)
    try{
      await order.save()
      res.redirect('/order')
    }catch(error){
      console.log(error)
    }
});








app.listen(1234)






 
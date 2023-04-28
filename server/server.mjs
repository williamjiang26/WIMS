import express from 'express';
import mongoose from 'mongoose';
import './db.mjs'
import cors from 'cors'

const Staff = mongoose.model('Staff')
const Order = mongoose.model('Order')
const Item = mongoose.model('Item')

const app = express();
app.use(cors())


app.get("/staff", async (req,res) => {
  try {
    const allStaff = await Staff.find({})
    res.send(allStaff)
  }catch (error){
    console.log(error)
  }
});

app.post("/staff", async(req,res) => {
  res.send(req.body)
});

app.get("/order", async (req,res) => {
  try {
    const orders = await Order.find({})
    res.send(orders)
  }catch (error){
    console.log(error)
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






app.listen(1234)






 
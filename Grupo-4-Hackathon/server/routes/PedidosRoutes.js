const express = require('express');
const router = express.Router();
const Order = require('../data/Pedidos'); // Fixed import

// Create Order
router.post('/', async (req, res) => {
  try {
    const order = new Order(req.body);
    await order.save();
    res.status(201).json(order);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get All Orders
router.get('/', async (req, res) => {
  try {
    const orders = await Order.find();
    res.json(orders);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.patch('/:id', async (req, res) => {
  try {
      console.log("Updating order with ID:", req.params.id);
      console.log("Request body:", req.body);

      const order = await Order.findByIdAndUpdate(req.params.id, req.body, { new: true });

      if (!order) {
          return res.status(404).json({ error: "Order not found" });
      }

      res.json(order);
  } catch (error) {
      console.error("PATCH Error:", error);
      res.status(400).json({ error: error.message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
      console.log("Deleting order with ID:", req.params.id);

      const order = await Order.findByIdAndDelete(req.params.id);

      if (!order) {
          return res.status(404).json({ error: "Order not found" });
      }

      res.json({ message: "Order deleted successfully" });
  } catch (error) {
      console.error("DELETE Error:", error);
      res.status(500).json({ error: error.message });
  }
});

module.exports = router;

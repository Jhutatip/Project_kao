import { Request, Response } from 'express';
import Order from '../models/order.models';


// GET /orders - ดึงรายการสั่งซื้อทั้งหมด
export const getAllOrders = async (req: Request, res: Response) => {
  try {
    const orders = await Order.find();
    res.status(200).json({ orders });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

// GET /orders/:id - ดึงรายการสั่งซื้อตาม ID
export const getOrderById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const order = await Order.findById(id);
    if (!order) {
      res.status(404).json({ error: 'Order not found' });
      return;
    }
    res.status(200).json({ order });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

// POST /orders - สร้างรายการสั่งซื้อใหม่
export const createOrder = async (req: Request, res: Response) => {
  try {
    const { customerId, items } = req.body;
    const order = await Order.create({ customerId, items });
    res.status(201).json({ order });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

// PUT /orders/:id - อัปเดตรายการสั่งซื้อตาม ID
export const updateOrder = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { customerId, items } = req.body;
    const updatedOrder = await Order.findByIdAndUpdate(
      id,
      { customerId, items },
      { new: true }
    );
    res.status(200).json({ order: updatedOrder });
  } catch (error:any) {
    res.status(500).json({ error: error.message });
  }
};

// DELETE /orders/:id - ลบรายการสั่งซื้อตาม ID
export const deleteOrder = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await Order.findByIdAndDelete(id);
    res.status(204).json({});
  } catch (error:any) {
    res.status(500).json({ error: error.message });
  }
};
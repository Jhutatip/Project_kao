import { Request, Response } from 'express';
import Animal from '../models/admin.models';

// GET /admin/animals - ดึงข้อมูลสัตว์ทั้งหมดสำหรับ Admin
export const getAllAnimals = async (req: Request, res: Response) => {
  try {
    const animals = await Animal.find();
    res.status(200).json({ animals });
  } catch (err:{message:any;}) {
    res.status(500).json({ message: err.message });
  }
};

// POST /admin/animals - สร้างสัตว์ใหม่สำหรับ Admin
export const createAnimal = async (req: Request, res: Response) => {
  try {
    const { name, species, age } = req.body;
    const animal = await Animal.create({ name, species, age });
    res.status(201).json({ animal });
  } catch (error:{message:any;}) {
    res.status(500).json({ error: error.message });
  }
};

// PUT /admin/animals/:id - อัปเดตข้อมูลสัตว์สำหรับ Admin
export const updateAnimal = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { name, species, age } = req.body;
    const updatedAnimal = await Animal.findByIdAndUpdate(
      id,
      { name, species, age },
      { new: true }
    );
    res.status(200).json({ animal: updatedAnimal });
  } catch (error:{message:any;}) {
    res.status(500).json({ error: error.message });
  }
};

// DELETE /admin/animals/:id - ลบข้อมูลสัตว์สำหรับ Admin
export const deleteAnimal = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await Animal.findByIdAndDelete(id);
    res.status(204).json({});
  } catch (error:{message:any;}) {
    res.status(500).json({ error: error.message });
  }
};
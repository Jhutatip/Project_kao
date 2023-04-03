import { Request, Response } from 'express';
import AdminModels from '../models/admin.models';


// GET /admin/animals - ดึงข้อมูลสัตว์ทั้งหมดสำหรับ Admin
export const getAlladmin = async (req: Request, res: Response) => {
    try {
        const admin = await AdminModels.find();
        res.status(200).json({ admin});
    } catch (err: any) {
        res.status(500).json({ error: err.message });
    }
};

// POST /admin/animals - สร้างสัตว์ใหม่สำหรับ Admin
export const createadmin = async (req: Request, res: Response) => {
    try {
        const { name, species, age } = req.body;
        const admin = await AdminModels.create({ name, species, age });
        res.status(201).json({ admin });
    } catch (err: any) {
        res.status(500).json({ error: err.message });
    }
};

// PUT /admin/animals/:id - อัปเดตข้อมูลสัตว์สำหรับ Admin
export const updateadmin = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const { name, species, age } = req.body;
        const updatedadmin = await AdminModels.findByIdAndUpdate(
            id,
            { name, species, age },
            { new: true }
        );
        res.status(200).json({ animal: updatedadmin });
    } catch (err: any) {
        res.status(500).json({ error: err.message });
    }
};

// DELETE /admin/animals/:id - ลบข้อมูลสัตว์สำหรับ Admin
export const deleteadmin = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        await AdminModels.findByIdAndDelete(id);
        res.status(204).json({});
    } catch (err: any) {
        res.status(500).json({ error: err.message });
    }
};
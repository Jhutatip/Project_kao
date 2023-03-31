import { Request, Response } from 'express';
import NewsModel   from '../models/news.models';

// สร้าง controller สำหรับการสร้างข่าวใหม่
export const createNews = async (req: Request, res: Response) => {
  try {
    const { title, content } = req.body;
    const news =  await NewsModel.create({ title, content })
    res.json(news);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error creating news' });
  }
};

// สร้าง controller สำหรับการดึงข้อมูลข่าวทั้งหมด
export const getAllNews = async (req: Request, res: Response) => {
  try {
    const news = await NewsModel.find();
    res.json(news);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error retrieving news' });
  }
};

// สร้าง controller สำหรับการดึงข้อมูลข่าวตาม ID
export const getNewsById = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const news = await NewsModel.findById(id);
    if (news) {
      res.json(news);
    } else {
      res.status(404).json({ message: 'News not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error retrieving news' });
  }
};

// สร้าง controller สำหรับการอัปเดตข่าว
export const updateNews = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const { title, content } = req.body;
    const news = await NewsModel.findByIdAndUpdate(id, { title, content }, { new: true });
    if (news) {
      res.json(news);
    } else {
      res.status(404).json({ message: 'News not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error updating news' });
  }
};

// สร้าง controller สำหรับการลบข่าว
export const deleteNews = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const news = await NewsModel.findByIdAndDelete(id);
    if (news) {
      res.json({ message: 'News deleted successfully' });
    } else {
      res.status(404).json({ message: 'News not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error deleting news' });
  }
};
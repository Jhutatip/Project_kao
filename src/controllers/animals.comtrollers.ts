import { Request, Response } from 'express';
import  animalsModels from '../models/animals.models';

// GET /animals
export const getAnimals = async (req: Request, res: Response): Promise<void> => {
  try {
    const animals = await animalsModels.find();
    res.status(200).json({ animals });
  } catch (err) {
    res.status(500).send(err);
  }
};

// GET /animals/:id
export const getAnimalById = async (req: Request, res: Response): Promise<void> => {
  try {
    const animal = await animalsModels.findById(req.params.id);
    if (!animal) {
      res.status(404).json({ message: 'Animal not found' });
      return;
    }
    res.status(200).json({ animal });
  } catch (err) {
    res.status(500).send(err);
  }
};

// POST /animals
export const createAnimal = async (req: Request, res: Response): Promise<void> => {
  try {
    const animals = new animalsModels({
      name: req.body.name,
      species: req.body.species,
      age: req.body.age,
      kingdom :req.body.kingdom,
      phylum: req.body.phylum,
      class : req.body.class,
      order: req.body.order,
      family: req.body.family,
      genus:req.body.genus,
      from:req.body.from,
    });
    await animals.save();
    res.status(201).json({ animals });
  } catch (err) {
    res.status(500).send(err);
  }
};

// PUT /animals/:id
export const updateAnimal = async (req: Request, res: Response): Promise<void> => {
  try {
    const animal = await animalsModels.findByIdAndUpdate(
      req.params.id,
      {
        name: req.body.name,
        species: req.body.species,
        age: req.body.age,
        kingdom :req.body.kingdom,
        phylum: req.body.phylum,
        class : req.body.class,
        order: req.body.order,
        family: req.body.family,
        genus:req.body.genus,
        from:req.body.from,
      },
      { new: true }
    ).exec();
    if (!animal) {
      res.status(404).json({ message: 'Animal not found' });
      return;
    }
    res.status(200).json({ animal });
  } catch (err) {
    res.status(500).send(err);
  }
};

// DELETE /animals/:id
export const deleteAnimal = async (req: Request, res: Response): Promise<void> => {
  try {
    const animal= await animalsModels.findByIdAndDelete(req.params.id).exec();
    if (!animal) {
      res.status(404).json({ message: 'Animal not found' });
      return;
    }
    res.status(200).json({ message: 'Animal deleted' });
  } catch (err) {
    res.status(500).send(err);
  }
};
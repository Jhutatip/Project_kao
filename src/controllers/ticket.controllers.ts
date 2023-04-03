import { Request, Response } from 'express';
import TicketModels from '../models/ticket.models';

export const getTickets = async (req: Request, res: Response): Promise<void> => {
  try {
    const tickets = await TicketModels.find();
    res.status(200).json({ tickets });
  } catch (error:any) {
    res.status(500).json({ error: error.message });
  }
};

export const getTicketById = async (req: Request, res: Response): Promise<void> => {
  try {
    const ticketId: string = req.params.id;
    const ticket = await TicketModels.findById(ticketId);
    if (!ticket) throw new Error('Ticket not found');
    res.status(200).json({ ticket });
  } catch (error:any) {
    res.status(500).json({ error: error.message });
  }
};

export const createTicket = async (req: Request, res: Response): Promise<void> => {
  try {
    const { name, description, status } = req.body;
    const ticket = new TicketModels({ name, description, status });
    const newTicket= await ticket.save();
    res.status(201).json({ ticket: newTicket });
  } catch (error:any) {
    res.status(500).json({ error: error.message });
  }
};

export const updateTicket = async (req: Request, res: Response): Promise<void> => {
  try {
    const ticketId: string = req.params.id;
    const { name, description, status } = req.body;
    const ticket = await Ticket.findById(ticketId);
    if (!ticket) throw new Error('Ticket not found');
    ticket.name = name || ticket.name;
    ticket.description = description || ticket.description;
    ticket.status = status || ticket.status;
    const updatedTicket = await ticket.save();
    res.status(200).json({ ticket: updatedTicket });
  } catch (error:any) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteTicket = async (req: Request, res: Response): Promise<void> => {
  try {
    const ticketId: string = req.params.id;
    const deletedTicket = await TicketModels.findByIdAndDelete(ticketId);
    if (!deletedTicket) throw new Error('Ticket not found');
    res.status(200).json({ ticket: deletedTicket });
  } catch (error:any) {
    res.status(500).json({ error: error.message });
  }
};
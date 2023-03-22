import express, { Application, Request, Response } from 'express'


const app: Application = express()
//const port = 4000

app.get('/', (req, res) => {
    res.send('Ticket Booking System for Chiang Mai Zoo');

});
app.listen(4000)


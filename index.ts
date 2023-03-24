const express = require("express");
const cors = require("cors");
const app = express();
const port = 3009;

import { MongoClient } from "mongodb";
import { index } from "./src/page";

app.use(cors());
app.use(express.json());

app.get("/", (_req: any, res: { send: (arg0: string) => void }) => {
  res.send("Ticket Booking System for Chiang Mai Zoo");
});
app.listen(port, () => {
  console.log('Express app listening at  http://localhost:${port}');
});

const { MongoClient0 } = require("mongodb");
const uri = "mongodb://root:katsuLiminal@nas.suphakit.net:27017/?authSource=admin";

app.post(
  "/index/create",
  async (
    req: { body: any },
    res: {
      status: (arg0: number) => {
        (): any;
        new (): any;
        send: {
          (arg0: { status: string; message: string; user: any }): void;
          new (): any;
        };
      };
    }
  ) => {
    const user = req.body;
    const client = new MongoClient(uri);
    await client.connect();
    await client
      .db("cmZoo")
      .collection("index")
      .insertOne({
        id: user.id,
        indexname: user.indexname,
        description: user.description,
        image: user.image,
      });

    await client.close();
    res.status(200).send({
      status: "ok",
      message: "Create Finish",
      user: user,
    });
  }
);
app.get(
  "index",
  async (
    req: { params: { id: string } },
    res: {
      status: (arg0: number) => {
        (): any;
        new (): any;
        send: { (arg0: any): void; new (): any };
      };
    }
  ) => {
    const id = req.params.id;
    const client = new MongoClient(uri);
    await client.connect();
    const user = await client
      .db("cmZoo")
      .collection("index")
      .find({})
      .toArray();
    await client.close();
    res.status(200).send(user);
  }
);
app.put('/index/update', async(req: { body: any; }, res: { status: (arg0: number) => { (): any; new(): any; send: { (arg0: { status: string; message: string; user: any; }): void; new(): any; }; }; }) => {
  const user = req.body;
  const id = user.id;
  const client = new MongoClient(uri);
  await client.connect();
  await client.db("cmZoo")
  .collection("index").updateOne({'id': id}, {"$set": {
    id: user.id,
    indexname: user.indexname,
    description: user.description,
    image: user.image,
  }});
  await client.close();
  res.status(200).send({
    "status": "ok",
    "message": "Updated Finish",
    "user": user
  });
})
app.delete('/index/delete', async(req: { body: { id: string; }; }, res: { status: (arg0: number) => { (): any; new(): any; send: { (arg0: { status: string; message: string; }): void; new(): any; }; }; }) => {
  const id = req.body.id;
  const client = new MongoClient(uri);
  await client.connect();
  await client.db('cmZoo').collection('index').deleteOne({'id': id});
  await client.close();
  res.status(200).send({
    "status": "ok",
    "message": "Deleted Finish"
  });
})
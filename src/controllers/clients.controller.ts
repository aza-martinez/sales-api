import { Request, Response } from "express";
import { connect } from "../database";

export async function getClients(req: Request, res: Response): Promise<Response> {
  const conn = await connect();
  const clients = await conn.query("SELECT * from clients");
  return res.json(clients[0]);
}

export async function getClientById(req: Request, res: Response): Promise<Response> {
  const id = req.params.clientId;
  const conn = await connect();
  const client = await conn.query("SELECT * FROM clients WHERE id = ?", [id]);
  return res.json(client[0]);
}

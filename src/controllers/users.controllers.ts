import { Request, Response } from "express";
import { connect } from "../database";

export async function getUsers(req: Request, res: Response): Promise<Response> {
  const conn = await connect();
  const users = await conn.query("SELECT * from users");
  return res.json(users[0]);
}

export async function getUser(req: Request, res: Response): Promise<Response> {
  const id = req.params.userId;
  const conn = await connect();
  const post = await conn.query("SELECT * FROM users WHERE id = ?", [id]);
  return res.json(post[0]);
}

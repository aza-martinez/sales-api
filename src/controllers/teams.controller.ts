import { Request, Response } from "express";
import { connect } from "../database";

export async function getTeams(req: Request, res: Response): Promise<Response> {
  const conn = await connect();
  const teams = await conn.query("SELECT * from teams");
  return res.json(teams[0]);
}

export async function getTeam(req: Request, res: Response): Promise<Response> {
  const id = req.params.teamId;
  const conn = await connect();
  const team = await conn.query("SELECT * FROM teams WHERE id = ?", [id]);
  return res.json(team[0]);
}

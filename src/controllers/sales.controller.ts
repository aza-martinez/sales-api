import { Request, Response } from "express";
import { connect } from "../database";

export async function getSalesByTeam(req: Request, res: Response): Promise<Response> {
  const id = req.params.teamId;
  const conn = await connect();
  const sales = await conn.query("SELECT sales.id as 'SaleID', sales.createdAt as 'SaleDate', clients.name as 'ClientName', sales.amount 'AmountSale', teams.name as 'TeamName', users.name as 'UserName' FROM sales INNER JOIN ( users RIGHT JOIN teams ON users.teamId = teams.id ) ON sales.userId = users.id INNER JOIN clients ON sales.clientId = clients.id WHERE teams.id = ?", [id]);
  return res.json(sales[0]);
}

export async function getSalesByUser(req: Request, res: Response): Promise<Response> {
  const id = req.params.userId;
  const conn = await connect();
  const sales = await conn.query("SELECT sales.id as 'SaleID', sales.createdAt as 'SaleDate', clients.name as 'ClientName', sales.amount 'AmountSale', teams.name as 'TeamName', users.name as 'UserName' FROM sales INNER JOIN ( users RIGHT JOIN teams ON users.teamId = teams.id ) ON sales.userId = users.id INNER JOIN clients ON sales.clientId = clients.id WHERE users.id = ?;", [id]);
  return res.json(sales[0]);
}

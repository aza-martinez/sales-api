import express, { Application } from "express";
import morgan from "morgan";

//ROUTES
import IndexRoutes from "./routes/index.routes";
import UsersRoutes from "./routes/users.routes";
import ClientsRoutes from "./routes/clients.routes";
import SalesRoutes from "./routes/sales.routes";

export class App {
  private app: Application;
  private port: Number | string | undefined;

  constructor(port?: Number | string) {
    this.app = express();
    this.port = port;
    this.settings();
    this.middlewares();
    this.routes();
  }

  private settings() {
    this.app.set("port", this.port || process.env.PORT || 3000);
  }

  private middlewares() {
    this.app.use(morgan("dev"));
    this.app.use(express.json());
  }

  private routes() {
    this.app.use(IndexRoutes);
    this.app.use("/users", UsersRoutes);
    this.app.use("/clients", ClientsRoutes);
    this.app.use("/sales", SalesRoutes);
  }

  async listen() {
    await this.app.listen(this.app.get("port"));
    console.log(`Server on port`, this.app.get("port"));
  }
}

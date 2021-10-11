import { App } from './app'
import * as dotenv from 'dotenv';


async function main() {
   dotenv.config();
   const app = new App();
   await app.listen();
}

main();
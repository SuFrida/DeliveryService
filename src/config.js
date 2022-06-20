import { config } from "dotenv";
config();

export const MONGODB_URI = console.log(process.env.MONGODB_URI);
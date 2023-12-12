import { createDirectus, rest, staticToken } from "@directus/sdk";

const url = process.env.URL!;
const token = process.env.TOKEN;

export const client = createDirectus(url)
  .with(staticToken(token!))
  .with(rest());

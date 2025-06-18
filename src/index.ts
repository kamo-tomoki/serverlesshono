import { Hono } from "hono";

export const app = new Hono()
  .get("/", (c) => {
    return c.text("Hello, Vercel!");
  })
  .get("/hello/:name", (c) => {
    return c.text(`Hello, ${c.req.param("name")}!`);
  });

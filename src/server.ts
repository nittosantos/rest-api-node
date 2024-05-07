import fastify from "fastify";

const app = fastify();

app.get("/hello", () => {
  return "Hello World teste";
});

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log("Oba Server rodou");
  });

//import elysia
import { Elysia, t } from "elysia";
4;

//import controller
import { getPosts, createPost } from "../controllers/PostController";

const Routes = new Elysia({ prefix: "/posts" })

  //route get all posts
  .get("/", () => getPosts())

  //route create post
  .post("/", ({ body }) => createPost(body as { title: string; content: string }), {
    body: t.Object({
      title: t.String({
        minLength: 3,
        maxLength: 100,
      }),
      content: t.String({
        minLength: 3,
        maxLength: 1000,
      }),
    }),
  });

export default Routes;

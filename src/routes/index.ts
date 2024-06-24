//import elysia
import { Elysia, t } from "elysia";

//import controller
import { getPosts, createPost, getPostById, updatePost } from "../controllers/PostController";

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
  })

  //route get post by id
  .get("/:id", ({ params: { id } }) => getPostById(id))

  //route update post
  .patch("/:id", ({ params: { id }, body }) => updatePost(id, body as { title?: string; content?: string }), {
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

import { buildSchema } from "graphql";

import user from "./user.js";
import post from "./post.js";

const schema = buildSchema(user, post);

export default schema;

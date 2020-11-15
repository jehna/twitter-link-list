import dotenv from "dotenv"
import path from "path"
const envFileLocation = path.join(
  import.meta.url.slice("file:".length),
  "..",
  "..",
  ".env"
)
dotenv.config({ path: envFileLocation })

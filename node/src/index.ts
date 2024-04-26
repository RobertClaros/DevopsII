import app from "./app.ts";
import { config } from "./lib/config.ts";

const port = config.port;

app.listen(port, () => {
  console.log(`server running on: ${port}`);
});
app.get("/", (req, res) => {
  res.send("Storage service connection successful");
});
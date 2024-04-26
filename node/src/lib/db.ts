import db from "mongoose";

export async function connectDB() {
  await db
    .connect(
      "mongodb+srv://diagram-service:XPmwIlG3CS8KY1t7@clustersistemareservas.elmgw.mongodb.net/diagram-service"
    )
    .then(() => console.log("connected to mongo"))
    .catch((e) => console.log(e));
}

const dotenv = require("dotenv");
const connectDB = require("./config/db.js");
const app = require("./app.js");

dotenv.config();

const PORT = process.env.PORT || 4200;

async function bootstrap() {
    await connectDB();

    app.listen(PORT, () => console.log("Server on, PORT: ", PORT));
}

bootstrap().catch((error) => {
    console.error("Failed to connect");
    process.exit(1);
});
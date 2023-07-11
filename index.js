import  express  from "express";
import dotenv from "dotenv";
import conectarDB from "./config/config.js";
import categoriasRouter from "./routes/categorias.routes.js";
import clientesRouter from "./routes/clientes.routes.js";

const app = express();
app.use(express.json());
dotenv.config();

app.use("/", categoriasRouter);
app.use("/", clientesRouter);
const PORT = process.env.PORT;

conectarDB();


app.listen(PORT, () =>{

    console.log(`Super Server web listening on port ${PORT}`);
    
});



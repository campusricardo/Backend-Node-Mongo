import mongoose from "mongoose";

const clienteSchema = mongoose.Schema({

    nombre: {
        type: String,
        required: true,
        trim: true
    },

    edad: {
        type: Number,
        required: true,
        trim: true
    },
    genero: {
        type: String,
        required: true,
        trim: true
    },
    estrato: {
        type: Number,
        required: true,
        trim: true
    }

},
{
    timestamps: true,
}); 


const Cliente = mongoose.model("Cliente", clienteSchema);


export default Cliente;
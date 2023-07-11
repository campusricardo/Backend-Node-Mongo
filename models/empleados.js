import mongoose from "mongoose";

const empleadoSchema = mongoose.Schema({

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
    cargo: {
        type: String,
        required: true,
        trim: true
    }
},
{
    timestamps: true,
}); 


const Cliente = mongoose.model("Cliente", empleadoSchema);


export default Cliente;
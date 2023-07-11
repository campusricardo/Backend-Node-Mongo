import mongoose from "mongoose";

const categoriaSchema = mongoose.Schema({

    descripcion: {
        type: String,
        required: true,
        trim: true
    },

    imagen: {
        type: String,
        required: true,
        trim: true
    },
    nombre: {
        type: String,
        required: true,
        trim: true
    }

},
{
    timestamps: true,
}); 


const Categoria = mongoose.model("Categoria", categoriaSchema);


export default Categoria;
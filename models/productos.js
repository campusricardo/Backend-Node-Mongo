import mongoose from "mongoose";

const productoSchema = mongoose.Schema({

    nombre: {
        type: String,
        required: true,
        trim: true
    },

    precio: {
        type: Number,
        required: true,
        trim: true
    },
    peso: {
        type: Number,
        required: true,
        trim: true
    }

},
{
    timestamps: true,
}); 


const Producto = mongoose.model("Producto", productoSchema);


export default Producto;
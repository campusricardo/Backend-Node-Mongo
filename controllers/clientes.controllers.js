import Cliente from "../models/clientes.js";

const obtenerClientes = async (req, res) => {

    const Clientes = await Cliente.find();

    res.json(Clientes);

}

const agregarCliente = async (req, res) => {

    const Cliente = new Cliente(req.body);

    try {
        const nuevaCliente = await Cliente.save();

        res.json(nuevaCliente);
    } catch (error) {
        console.log(`${error.message}`);
    }
}

const borrarCliente = async (req, res) => {

    try {
        await Cliente.deleteOne({_id:req.params.id});
        res.status(204).send();
    } catch (error) {
        res.status(404);
        res.send({error: "Cliente no existe"});
    }
}

const actualizarCliente = async  (req, res) => {
    try {
        const Cliente = await Cliente.findOne({_id: req.params.id});

        if (req.body.imagen) {
            Cliente.imagen = req.body.imagen;
        }
        if (req.body.nombre){
            Cliente.nombre = req.body.nombre;
        }
        if (req.body.descripcion) {
            Cliente.descripcion = req.body.descripcion;
        }

        await Cliente.save();
        res.send(Cliente);
    } catch (error) {
        res.status(404);
        res.send({error: "Cliente no existe"})
    }
}

const getOneCliente = async (req, res) => {
    try {
        const Cliente = await Cliente.findOne({_id: req.params.id});
        await Cliente.save();
        res.send(Cliente);
    } catch (error) {
        res.status(404);
        res.send({error: "Cliente no encontrada"});
    }
}

export {obtenerClientes,agregarCliente, borrarCliente, actualizarCliente, getOneCliente};
export function errorHandler(err, req, res, next) {
    console.log("error global capturado:", err.message || err);
    const codigoEstado = err.statusCode || 500;
    const mensajeRespuesta = err.message || "ocurrio unn error interno en el servidor.";

    res.status(codigoEstado).json({
        exito: false,
        error: {
            codigo: codigoEstado,
            mensaje: mensajeREspuesta
        }
    });
}
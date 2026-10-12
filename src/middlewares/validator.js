export function validarCamper(req, res, next) {
    const { nombre, modulo, nivel } = req.body;
    if (!req.body || typeof req.body !== "object") {
        return res.status(400).json({
            error: "Se requiere un cuerpo JSON válido en la petición."
        });
    }
    if (!nombre || typeof nombre !== "string" || nombre.trim().length === 0)
    {
        return res.status(400).json({
            error: "El campo 'nombre' es obligatorio y debe ser una cadena de texto no vacía."
        });
    }

    if (!modulo || typeof modulo !== "string" || modulo.trim().length === 0)
    {
        return res.status(400).json({
            error: "El campo 'modulo' es obligatorio (ej: Node.js, Express, JavaScript)."
        });
    }

    if (!modulo || typeof modulo !== "string" || modulo.trim().length === 0)
    {
        return res.status(400).json({
            error: "El campo 'modulo' es obligatorio (ej: Node.js, Express, JavaScript)."
        });
    }

    if (!nivel || typeof nivel !== "string" || nivel.trim().length === 0) {
        return res.status(400).json({
            error: "El campo 'nivel' es obligatorio (ej: Básico, Intermedio, Avanzado)."
        });
    }
    next();
}


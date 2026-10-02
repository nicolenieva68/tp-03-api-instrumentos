const fs = require("node:fs/promises");

async function leerInstrumentos(ruta) {
    const texto = await fs.readFile(ruta, "utf-8");
    const instrumentos = JSON.parse(texto);
    return instrumentos;
}

module.exports = { leerInstrumentos };
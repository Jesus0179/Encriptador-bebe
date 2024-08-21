function encriptar(texto) {
    return texto
        .replace(/a/g, "ai")
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat")
}

function desencriptar(texto) {
    return texto
        .replace(/ufat/g, "u")
        .replace(/ober/g, "o")
        .replace(/imes/g, "i")
        .replace(/enter/g, "e")
        .replace(/ai/g, "a");
}

function encriptarTexto() {
    const inputTexto = document.getElementById('inputTexto').value;
    const textoEncriptado = encriptar(inputTexto);
    document.getElementById('outputTexto').value = textoEncriptado;
    if (textoEncriptado.trim() !== "") {
        document.getElementById('copiarTexto').style.display = 'block';
    } else {
        document.getElementById('copiarTexto').style.display = 'none';
    }
}

function desencriptarTexto() {
    const inputTexto = document.getElementById('inputTexto').value;
    const textoDesencriptado = desencriptar(inputTexto);
    document.getElementById('outputTexto').value = textoDesencriptado;
    if (textoDesencriptado.trim() !== "") {
        document.getElementById('copiarTexto').style.display = 'block';
    } else {
        document.getElementById('copiarTexto').style.display = 'none';
    }
}

function copiarAlPortapapeles() {
    const textoCopiar = document.getElementById('outputTexto');
    textoCopiar.select();
    textoCopiar.setSelectionRange(0, 99999); // Para móviles
    document.execCommand('copy');
}

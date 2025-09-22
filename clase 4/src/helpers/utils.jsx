export const actualizarLocalStorage = (key, valor) => {
    localStorage.setItem(key, JSON.stringify(valor))
}


export function validarEmail(text: string) {
    var regex = /\S+@\S+\.\S+/;
    return regex.test(text);
}

export function validaData(valor: any) {
    if (!valor || valor === 'Invalid Date' || Number(valor) < 9999) {
        return false;
    }

    const data = new Date(valor);

    // eslint-disable-next-line no-self-compare
    return data.getTime() === data.getTime(); // Se a data não for válida, retorna NaN, Nan sempre é diferente de NaN
}
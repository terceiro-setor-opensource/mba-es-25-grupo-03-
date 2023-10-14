export function validarEmail(text: string) {
    var regex = /\S+@\S+\.\S+/;
    return regex.test(text);
}
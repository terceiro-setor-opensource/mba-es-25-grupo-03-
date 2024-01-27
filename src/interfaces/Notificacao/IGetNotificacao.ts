export default interface IGetNotificacao {
    id: number;
    instrutor: string;
    titulo: string;
    notificacao: string;
    dataCriacao: Date;
    lida: boolean;
    icone: string;
    cor: string;
}
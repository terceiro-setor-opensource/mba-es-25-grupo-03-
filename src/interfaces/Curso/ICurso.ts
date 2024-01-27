import { ICategoria, IProfessorCurso } from "./index";

export default interface ICurso {
    id: number;
    descricao: string;
    informacoes: string;
    obrigatorio: boolean;
    duracaoMinutos: number;
    duracaoFormatada: string;
    classificacao: number;
    dataCriacao: Date;
    avatar: string;
    categoria: ICategoria;
    usuario: IProfessorCurso

}
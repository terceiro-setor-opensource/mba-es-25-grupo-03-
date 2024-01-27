import { format } from 'date-fns';
import { validaData } from './validacoes';

function formataDataHoraCore(data: any, comHora?: boolean, comSegundos?: boolean, formatoPersonalizado?: string) {
    if (!validaData(data)) {
        return '';
    }

    if (formatoPersonalizado) {
        return format(new Date(data), formatoPersonalizado);
    }

    return format(new Date(data), `dd/MM/yyyy${comHora === true ? ' HH:mm' : ''}${comSegundos ? ':ss' : ''}`);
}

export function formataDataHora(data?: Date | null, comSegundos?: boolean, formatoPersonalizado?: string) {
    return formataDataHoraCore(data, true, comSegundos, formatoPersonalizado);
}
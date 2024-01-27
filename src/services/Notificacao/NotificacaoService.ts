import { getAPI } from '~/services';
import { IGetNotificacao } from '~/interfaces';

class NotificacaoService {
    getNotificacoes(idUsuario: number): Promise<IGetNotificacao[]> {
        console.log('[IDUSUARIO]', idUsuario)
        return new Promise((resolve, reject) => {
            getAPI(`/api/Notificacao/idUsuario?idUsuario=${idUsuario}`)
                .then((response) => {
                    resolve(response.data as IGetNotificacao[]);
                })
                .catch(() => {
                    reject();
                });
        });
    }
}

export default new NotificacaoService();
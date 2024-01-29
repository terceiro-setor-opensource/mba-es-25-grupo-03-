import { getAPI } from '~/services';
import { IGetNotificacao } from '~/interfaces';

class NotificacaoService {
    getNotificacoes(idUsuario: number): Promise<IGetNotificacao[]> {

        return new Promise((resolve, reject) => {
            getAPI(`/api/Notificacao?idUsuario=${idUsuario}`)
                .then((response) => {
                    resolve(response.data as IGetNotificacao[]);
                })
                .catch((err) => {

                    reject();
                });
        });
    }
}

export default new NotificacaoService();
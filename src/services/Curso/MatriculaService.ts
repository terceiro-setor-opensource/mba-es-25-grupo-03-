import { getAPI, postAPI } from '~/services';
import { IMatriculaPorUsuario, IMatriculaPost } from '~/interfaces';

class MatriculaService {
    getMatriculasUsuario(idUsuario: number): Promise<IMatriculaPorUsuario[]> {
        return new Promise((resolve, reject) => {
            getAPI(`/api/Matricula?idUsuario=${idUsuario}`)
                .then((response) => {
                    resolve(response.data as IMatriculaPorUsuario[]);
                })
                .catch(() => {
                    reject();
                });
        });
    }

    postMatricula(matricula: IMatriculaPost): Promise<void> {
        return new Promise((resolve, reject) => {
            postAPI(`/api/Matricula`, matricula)
                .then(() => {
                    resolve();
                })
                .catch(() => {
                    reject();
                });
        });
    }

}

export default new MatriculaService();
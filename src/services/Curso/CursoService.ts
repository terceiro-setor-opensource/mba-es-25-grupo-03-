import { getAPI } from '~/services';
import { ICurso } from '~/interfaces';

class CursoService {
    getCursos(): Promise<ICurso[]> {
        return new Promise((resolve, reject) => {
            getAPI(`/api/Curso`)
                .then((response) => {
                    resolve(response.data as ICurso[]);
                })
                .catch(() => {
                    reject();
                });
        });
    }

    getCursosPorDescricao(descricao: string): Promise<ICurso[]> {
        return new Promise((resolve, reject) => {
            if (!descricao)
                reject();

            getAPI(`/api/Curso?descricao=${descricao}`)
                .then((response) => {
                    resolve(response.data as ICurso[]);
                })
                .catch(() => {
                    reject();
                });
        });
    }
}

export default new CursoService();

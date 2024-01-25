import { getAPI } from '~/services';
import { ICategoria } from '~/interfaces';

class CategoriaCursoService {
    getCategoriasCurso(): Promise<ICategoria[]> {
        return new Promise((resolve, reject) => {
            getAPI(`/api/CategoriaCurso`)
                .then((response) => {
                    resolve(response.data as ICategoria[]);
                })
                .catch(() => {
                    reject();
                });
        });
    }
}

export default new CategoriaCursoService();
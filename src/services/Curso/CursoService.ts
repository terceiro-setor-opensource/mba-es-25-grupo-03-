import { getAPI } from '~/services';
import { ICurso, ICursoFilter, IConteudoCurso } from '~/interfaces';

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

    getCursoPorFiltro(filtros: ICursoFilter): Promise<ICurso[]> {
        return new Promise((resolve, reject) => {
            if (!filtros)
                reject();

            getAPI(`/api/Curso${onCreateUrlFilter(filtros)}`)
                .then((response) => {

                    resolve(response.data as ICurso[]);
                })
                .catch(() => {
                    reject();
                });
        });
    }

    getConteudoCurso(idCurso: number): Promise<IConteudoCurso[]> {
        return new Promise((resolve, reject) => {
            if (!idCurso)
                reject();

            getAPI(`/api/ConteudoCurso?idCurso=${idCurso}`)
                .then((response) => {
                    resolve(response.data as IConteudoCurso[]);
                })
                .catch(() => {
                    reject();
                });
        });
    }

    getCursoPorId(idCurso: number): Promise<ICurso> {
        return new Promise((resolve, reject) => {
            if (!idCurso)
                reject();

            getAPI(`/api/Curso/${idCurso}`)
                .then((response) => {
                    resolve(response.data as ICurso);
                })
                .catch(() => {
                    reject();
                });
        });
    }


}

export default new CursoService();

function onCreateUrlFilter(filtros: ICursoFilter) {
    let filter = '?'

    if (filtros?.categorias && filtros?.categorias?.length > 0) {
        filter = filter + `categorias=${filtros.categorias.join(',')}${filtros.ratingMin ? '&' : ''}`
    }

    if (filtros.ratingMin) {
        filter = filter + `ratingMin=${filtros.ratingMin}&ratingMax=${filtros.ratingMax}`
    }

    return filter;
}

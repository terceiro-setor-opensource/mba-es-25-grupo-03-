import {useState, useEffect, useCallback} from 'react';
import {AreaView, Header, TextInputSearch} from '~/components';
import {CardCursos, ModalFilter} from './Components';
import {
  Container,
  ContainerScroll,
  ItemCurso,
  TextCurso,
  CursosOpcoes,
  ContainerCursosOpcoes,
  CursosOpcoesText,
  ContainerScrollBottom,
} from './styles';
import {FlatList} from 'react-native-gesture-handler';
import CursoService from '~/services/Curso/CursoService';
import {ICurso, ICursoFilter} from '~/interfaces';
import {Loading} from '~/components';
import {useFocusEffect} from '@react-navigation/native';
import MatriculaService from '~/services/Curso/MatriculaService';
import {useAuth} from '~/app/hooks';

export function Cursos() {
  const [arrayTextCursos, setArrayTextCursos] = useState<any[]>([]);
  const [cursos, setCursos] = useState<ICurso[]>([]);
  const [efetuaBusca, setEfetuaBusca] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(false);
  const [textoBusca, setTextoBusca] = useState<string>('');
  const [onOpenModalFilter, setOpenModalFilter] = useState<boolean>(false);
  const [filter, setFilter] = useState<ICursoFilter>({} as ICursoFilter);
  const {usuario} = useAuth();

  useFocusEffect(
    useCallback(() => {
      setLoading(true);

      CursoService.getCursos().then(response => {
        MatriculaService.getMatriculasUsuario(Number(usuario.unique_name))
          .then(responseMatriculas => {
            const idsExcluir = responseMatriculas.map(x => x.idCurso);

            setCursos(response.filter(x => !idsExcluir.includes(x.id)));
          })
          .finally(() => {
            setLoading(false);
          });
      });
    }, []),
  );

  useEffect(() => {
    if (efetuaBusca) {
      setEfetuaBusca(false);

      const arrayCursoText = [
        {
          id: 1,
          item: 'Todos',
          color: '#CEECFE',
          selected: true,
        },
        {
          id: 2,
          item: 'Popular',
          color: '#EFE0FF',
          selected: false,
        },
        {
          id: 3,
          item: 'Novos',
          color: '#CEECFE',
          selected: false,
        },
      ];

      setArrayTextCursos(arrayCursoText);
    }
  }, [efetuaBusca]);

  function onChangeFilter(id: number) {
    setArrayTextCursos((prevState: any) => {
      return [...(prevState || [])].map((item: any) => ({
        ...item,
        selected: item.id === id ? true : false,
      }));
    });

    //1 = todos
    if (id === 1) {
      setLoading(true);

      CursoService.getCursos().then(response => {
        MatriculaService.getMatriculasUsuario(Number(usuario.unique_name))
          .then(responseMatriculas => {
            const idsExcluir = responseMatriculas.map(x => x.idCurso);

            setCursos(response.filter(x => !idsExcluir.includes(x.id)));
          })
          .finally(() => {
            setLoading(false);
          });
      });
    }

    //2 = popular
    if (id === 2) {
      setLoading(true);

      const filter: ICursoFilter = {
        ratingMin: 4,
        ratingMax: 5,
      };

      CursoService.getCursoPorFiltro(filter)
        .then(response => {
          setCursos(response);
        })
        .finally(() => {
          setLoading(false);
        });
    }

    //3 = novos
    /*  if (id === 3) {
      setLoading(true);

      setTimeout(() => {
        setCursos(prevState =>
          prevState.filter(
            x =>
              isNaN(x.dataCriacao.getTime()) <= isNaN(new Date(-20).getTime()),
          ),
        );
        setLoading(false);
      }, 1000);
    } */
  }

  const array = [
    {
      id: 1,
      item: 'Orientação a objetos C#',
      color: '#CEECFE',
      totalHoras: 10,
      professor: 'João Lopes',
    },
    {
      id: 2,
      item: 'SQL Avançado',
      color: '#EFE0FF',
      totalHoras: 20,
      professor: 'Leticia Corvalan',
    },
    {
      id: 3,
      item: 'DBA Oracle',
      color: '#CEECFE',
      totalHoras: 30,
      professor: 'Leonardo Lima',
    },

    {
      id: 4,
      item: 'Reflection com C#',
      color: '#EFE0FF',
      totalHoras: 40,
      professor: 'Rafael Silva',
    },
  ];

  function onFilterListCursos() {
    setLoading(true);
    if (textoBusca) {
      CursoService.getCursosPorDescricao(textoBusca).then(response => {
        MatriculaService.getMatriculasUsuario(Number(usuario.unique_name))
          .then(responseMatriculas => {
            const idsExcluir = responseMatriculas.map(x => x.idCurso);

            setCursos(response.filter(x => !idsExcluir.includes(x.id)));
          })
          .finally(() => {
            setLoading(false);
            setTextoBusca('');
          });
      });
    } else {
      CursoService.getCursos().then(response => {
        MatriculaService.getMatriculasUsuario(Number(usuario.unique_name))
          .then(responseMatriculas => {
            const idsExcluir = responseMatriculas.map(x => x.idCurso);

            setCursos(response.filter(x => !idsExcluir.includes(x.id)));
          })
          .finally(() => {
            setLoading(false);
            setTextoBusca('');
          });
      });
    }
  }

  function onCloseModalFilter() {
    setOpenModalFilter(false);
  }

  function onSearchFilter(filters: ICursoFilter) {
    setLoading(true);
    CursoService.getCursoPorFiltro(filters).then(response => {
      MatriculaService.getMatriculasUsuario(Number(usuario.unique_name))
        .then(responseMatriculas => {
          const idsExcluir = responseMatriculas.map(x => x.idCurso);

          setCursos(response.filter(x => !idsExcluir.includes(x.id)));
        })
        .finally(() => {
          setLoading(false);
        });
    });
  }

  return (
    <>
      <AreaView>
        <Header title="Cursos"></Header>
        <Container>
          <TextInputSearch
            rightIcon={'tune'}
            onPressRightIcon={() => setOpenModalFilter(true)}
            value={textoBusca || ''}
            onChangeText={value => setTextoBusca(value)}
            onSubmitEditing={onFilterListCursos}
            placeholderText="Buscar cursos"
          />
          {/* <ContainerScroll>
            <FlatList
              data={array}
              keyExtractor={item => String(item.id)}
              renderItem={({item}) => (
                <>
                  <ItemCurso color={item.color}></ItemCurso>
                </>
              )}
              horizontal
            />
          </ContainerScroll> */}

          <TextCurso>Escolha seu curso</TextCurso>
          <ContainerCursosOpcoes>
            {arrayTextCursos &&
              arrayTextCursos.map(item => (
                <CursosOpcoes
                  key={item.id}
                  onPress={() => onChangeFilter(item.id)}
                  selected={item.selected}>
                  <CursosOpcoesText key={item.id} selected={item.selected}>
                    {item.item}
                  </CursosOpcoesText>
                </CursosOpcoes>
              ))}
          </ContainerCursosOpcoes>
          {loading ? (
            <Loading size="large" />
          ) : (
            <CardCursos listCursos={cursos} />
          )}
        </Container>
      </AreaView>
      {onOpenModalFilter && (
        <ModalFilter
          onCloseModal={onCloseModalFilter}
          onApplyFilter={(value: ICursoFilter) => onSearchFilter(value)}
        />
      )}
    </>
  );
}

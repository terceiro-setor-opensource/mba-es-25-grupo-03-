import {useState, useEffect, useCallback} from 'react';
import {AreaView, Header, TextInputSearch} from '~/components';
import {CardCursos} from './Components';
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
import {ICurso} from '~/interfaces';
import {Loading} from '~/components';
import {useFocusEffect} from '@react-navigation/native';

export function Cursos() {
  const [arrayTextCursos, setArrayTextCursos] = useState<any[]>([]);
  const [cursos, setCursos] = useState<ICurso[]>([]);
  const [efetuaBusca, setEfetuaBusca] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(false);

  useFocusEffect(
    useCallback(() => {
      setLoading(true);

      CursoService.getCursos()
        .then(response => {
          setCursos(response);
        })
        .finally(() => {
          setLoading(false);
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
  }

  console.log('[cursos]', cursos);

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

  return (
    <>
      <AreaView>
        <Header title="Cursos"></Header>
        <Container>
          <TextInputSearch
            rightIcon={''}
            onPressRightIcon={() => {}}
            value={''}
            onChangeText={value => {}}
            onSubmitEditing={() => {}}
            placeholderText="Buscar cursos"
          />
          <ContainerScroll>
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
          </ContainerScroll>

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
        </Container>
        <ContainerScrollBottom>
          {loading ? (
            <Loading size="large" />
          ) : (
            <CardCursos listCursos={cursos} />
          )}
        </ContainerScrollBottom>
      </AreaView>
    </>
  );
}

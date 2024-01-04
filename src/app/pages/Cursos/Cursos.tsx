import {useState, useEffect} from 'react';
import {AreaView, Header, TextInputSearch, Icon} from '~/components';
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

export function Cursos() {
  const [arrayTextCursos, setArrayTextCursos] = useState<any[]>([]);

  useEffect(() => {
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
  }, []);

  function onChangeFilter(id: number) {
    setArrayTextCursos((prevState: any) => {
      return [...(prevState || [])].map((item: any) => ({
        ...item,
        selected: item.id === id ? true : false,
      }));
    });
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
          <CardCursos listDados={array} />
        </ContainerScrollBottom>
      </AreaView>
    </>
  );
}

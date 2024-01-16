import {useState, useEffect} from 'react';
import {AreaView} from '~/components';
import {
  Container,
  ContainerHeader,
  TitleName,
  SubTitleName,
  ContainerTexto,
  CardCurso,
  ContainerCardCurso,
  ContainerCardCursoTexto,
  TextCardCurso,
  TextMeusCursos,
  TextHoras,
  ContainerTempo,
  TextTotalHoras,
  ProgressBarContainer,
  ProgressBar,
  StyledLinearGradient,
  ContainerScroll,
  ItemCurso,
  TextFind,
} from './styles';
import {FlatList} from 'react-native-gesture-handler';

export function Home() {
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
  ];

  return (
    <>
      <AreaView>
        <ContainerHeader>
          <ContainerTexto>
            <TitleName>Olá, Leonardo</TitleName>
            <SubTitleName>vamos começar a aprender</SubTitleName>
          </ContainerTexto>
        </ContainerHeader>

        <Container>
          <CardCurso disabled>
            <ContainerCardCurso>
              <ContainerCardCursoTexto>
                <TextCardCurso>Aprenda Hoje</TextCardCurso>
              </ContainerCardCursoTexto>
              <ContainerTempo>
                <TextHoras>46min</TextHoras>
                <TextTotalHoras> / 52min</TextTotalHoras>
              </ContainerTempo>
              <TextMeusCursos>Meus Cursos</TextMeusCursos>

              <ProgressBarContainer>
                <StyledLinearGradient
                  start={{x: 0, y: 0}}
                  end={{x: 1, y: 0}}
                  colors={['#FF6905', '#EAEAFF']}>
                  <ProgressBar></ProgressBar>
                </StyledLinearGradient>
              </ProgressBarContainer>
            </ContainerCardCurso>
          </CardCurso>
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
            <TextFind>Plano de Aprendizagem</TextFind>
          </ContainerScroll>
        </Container>
      </AreaView>
    </>
  );
}

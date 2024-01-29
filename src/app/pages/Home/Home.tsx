import {useState, useEffect, useCallback} from 'react';
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
  CardMatricula,
  TextMatriculaCurso,
  TextMatriculaCarga,
  ItemCursoVertical,
} from './styles';
import {FlatList} from 'react-native-gesture-handler';
import {useAuth} from '~/app/hooks';
import {useFocusEffect} from '@react-navigation/native';
import MatriculaService from '~/services/Curso/MatriculaService';
import {IMatriculaPorUsuario, ICurso} from '~/interfaces';
import {Loading} from '~/components';
import {ModalCurso} from '../Cursos/Components';
import CursoService from '~/services/Curso/CursoService';

export function Home() {
  const [arrayTextCursos, setArrayTextCursos] = useState<any[]>([]);
  const [matriculasUsuario, setMatriculasUsuario] = useState<
    IMatriculaPorUsuario[]
  >([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [curso, setCurso] = useState<ICurso>({} as ICurso);
  const [openModalCurso, setOpenModalCurso] = useState<boolean>(false);
  const {usuario} = useAuth();

  useFocusEffect(
    useCallback(() => {
      setLoading(true);

      MatriculaService.getMatriculasUsuario(Number(usuario.unique_name))
        .then(response => {
          setMatriculasUsuario(response);
        })
        .finally(() => {
          setLoading(false);
        });
    }, []),
  );

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

  function onOpenCurso(idCurso: number) {
    if (!idCurso) return;

    CursoService.getCursoPorId(idCurso)
      .then(response => {
        setCurso(response);
      })
      .finally(() => {
        setOpenModalCurso(true);
      });
  }

  function onCloseModalCurso() {
    setCurso({} as ICurso);
    setOpenModalCurso(false);
  }

  return (
    <>
      <AreaView>
        <ContainerHeader>
          <ContainerTexto>
            <TitleName>Olá, {usuario.name}</TitleName>
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
              {/*   <TextMeusCursos>Meus Cursos</TextMeusCursos> */}

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
          {/*   <ContainerScroll>
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

          {loading ? (
            <Loading size="large" />
          ) : (
            <>
              <TextFind>Plano de Aprendizagem</TextFind>
              <FlatList
                data={matriculasUsuario}
                keyExtractor={item => String(item.idCurso)}
                renderItem={({item}) => (
                  <ItemCursoVertical onPress={() => onOpenCurso(item.idCurso)}>
                    <CardMatricula>
                      <TextMatriculaCurso>{item.curso}</TextMatriculaCurso>
                      <TextMatriculaCarga>
                        {item.idCurso === 1 ? '2/6' : '0/6'}
                      </TextMatriculaCarga>
                    </CardMatricula>
                  </ItemCursoVertical>
                )}
              />
            </>
          )}
        </Container>
      </AreaView>
      {openModalCurso && (
        <ModalCurso
          onCloseModal={() => onCloseModalCurso()}
          curso={curso}
          inscrito={true}
        />
      )}
    </>
  );
}

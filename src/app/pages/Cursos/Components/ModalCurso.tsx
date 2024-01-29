import {useState, useCallback, useRef} from 'react';
import {useFocusEffect} from '@react-navigation/native';
import RNModal from 'react-native-modal';
import {
  Container,
  HeaderClose,
  Close,
  Content,
  TextoCurso,
  DetalhesDuracaoCursoContainer,
  DetalhesCursoTextoRight,
  DetalhesCursoTextoLeft,
  IconeProfessor,
  ContainerSobre,
  SobreTextTouchableOpacity,
  SobreText,
  TextProfessor,
  ContainerAula,
  TextoAulaLeft,
  ContainerScroll,
  ContainerAulaCentro,
  TextoAulaCenter,
  TextoAulaCenterTime,
  TextoAulaIconRight,
  ButtonApplyFilters,
  ContainerBotoes,
  TextoApplyFilter,
} from './styles';
import {Icon} from '~/components';
import CursoService from '~/services/Curso/CursoService';
import {Loading} from '~/components';
import {ICurso, IConteudoCurso, IMatriculaPost} from '~/interfaces';
import {FlatList} from 'react-native-gesture-handler';
import YoutubePlayer from 'react-native-youtube-iframe';
import {TouchableOpacity} from 'react-native';
import {Button, View, Alert, useWindowDimensions} from 'react-native';
import MatriculaService from '~/services/Curso/MatriculaService';
import {useAuth} from '~/app/hooks';
import {showMessage} from '~/utils';

interface ModalCursoProps {
  onCloseModal: () => void;
  curso: ICurso;
  inscrito?: boolean;
}

function ModalCurso({onCloseModal, curso, inscrito}: ModalCursoProps) {
  const [loading, setLoading] = useState<boolean>(false);
  const [conteudoCurso, setConteudoCurso] = useState<IConteudoCurso[]>([]);
  const [expanded, setExpanded] = useState<boolean>(false);
  const [onPlayVideo, setOnPlayVideo] = useState<boolean>(false);
  const [loadingMatricula, setLoadingMatricula] = useState<boolean>(false);
  const {width} = useWindowDimensions();
  const {usuario} = useAuth();
  const videoCurrent = useRef<string>('');

  useFocusEffect(
    useCallback(() => {
      setLoading(true);

      CursoService.getConteudoCurso(curso.id)
        .then(response => {
          setConteudoCurso(response);
        })
        .finally(() => {
          setLoading(false);
        });
    }, []),
  );

  const togglePlaying = useCallback(() => {
    setOnPlayVideo(prev => !prev);
  }, []);

  const toggleCard = () => {
    setExpanded(!expanded);
  };

  const onStateChange = useCallback((state: any) => {
    if (state === 'ended') {
      setOnPlayVideo(false);
      videoCurrent.current = '';
      Alert.alert('video has finished playing!');
    }
    videoCurrent.current = '';
  }, []);

  function onAddMatricula(idCurso: number) {
    if (!idCurso) return;

    setLoadingMatricula(true);

    const objMatricula: IMatriculaPost = {
      idCurso: idCurso,
      idUsuario: Number(usuario.unique_name),
    };

    MatriculaService.postMatricula(objMatricula).finally(() => {
      setLoadingMatricula(false);

      showMessage({
        type: 'success',
        description: 'Matricula efetuada com sucesso !',
      });

      onCloseModal();
    });
  }

  return (
    <>
      <RNModal
        swipeDirection={['down']}
        onBackButtonPress={() => onCloseModal()}
        onBackdropPress={onCloseModal}
        onSwipeComplete={onCloseModal}
        isVisible
        style={{justifyContent: 'flex-end', margin: 0}}>
        <>
          {onPlayVideo && (
            <View style={{flex: 1}}>
              <View
                style={{
                  width: '100%',
                  height: 430,
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginTop: 48,
                }}>
                <YoutubePlayer
                  height={500}
                  width={width}
                  play={onPlayVideo}
                  videoId={'KXJeXuDVPzQ'}
                  onChangeState={onStateChange}
                />
              </View>
            </View>
          )}
          <Container>
            <HeaderClose>
              <Close name="close" onPress={onCloseModal} />
            </HeaderClose>
            <Content>
              {loading ? (
                <Loading size="large" />
              ) : (
                <>
                  <TextoCurso>{curso.descricao}</TextoCurso>
                  <DetalhesDuracaoCursoContainer>
                    <DetalhesCursoTextoRight>
                      {`${curso.duracaoFormatada}h ° ${conteudoCurso.length} aulas`}
                    </DetalhesCursoTextoRight>

                    <DetalhesCursoTextoLeft>
                      {/*   <IconeProfessor name="person" size={20} /> */}
                      {curso.usuario?.nome}
                    </DetalhesCursoTextoLeft>
                  </DetalhesDuracaoCursoContainer>
                  <TextoCurso>Sobre o curso</TextoCurso>
                  {/*  <ContainerSobre>
                <SobreTextTouchableOpacity onPress={toggleCard}>
                  <Icon
                    name={expanded ? 'chevron-up' : 'chevron-down'}
                    size={20}
                  />
                </SobreTextTouchableOpacity>
                  <SobreText expanded={expanded}>
                  <TextProfessor>
                    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                  </TextProfessor>
                </SobreText>
              </ContainerSobre> */}
                  {/*   <ContainerScroll> */}
                  <FlatList
                    data={conteudoCurso}
                    keyExtractor={item => String(item.id)}
                    renderItem={({item}) => (
                      <ContainerAula>
                        <TextoAulaLeft>
                          {String(item.ordem).length === 1
                            ? `0${item.ordem}`
                            : item.ordem}
                        </TextoAulaLeft>
                        <ContainerAulaCentro>
                          <TextoAulaCenter>{item.descricao}</TextoAulaCenter>
                          <TextoAulaCenterTime>
                            {item.duracaoFormatada}
                          </TextoAulaCenterTime>
                        </ContainerAulaCentro>
                        {curso.id === 1 && (item.id === 1 || item.id === 2) ? (
                          <TouchableOpacity onPress={() => {}}>
                            <TextoAulaIconRight name="done" size={30} />
                          </TouchableOpacity>
                        ) : (
                          <TouchableOpacity
                            onPress={() => {
                              videoCurrent.current = item.urlVideo;
                              setOnPlayVideo(true);
                            }}>
                            <TextoAulaIconRight name="play" size={30} />
                          </TouchableOpacity>
                        )}
                      </ContainerAula>
                    )}
                  />
                  {!inscrito ? (
                    <ContainerBotoes>
                      <ButtonApplyFilters
                        onPress={() => onAddMatricula(curso.id)}
                        disabled={loadingMatricula}>
                        {loadingMatricula ? (
                          <Loading size="small" />
                        ) : (
                          <TextoApplyFilter>Inscrever-se</TextoApplyFilter>
                        )}
                      </ButtonApplyFilters>
                    </ContainerBotoes>
                  ) : (
                    <></>
                  )}

                  {/*  </ContainerScroll> */}
                </>
              )}
            </Content>
          </Container>
        </>
      </RNModal>
    </>
  );
}

export {ModalCurso};

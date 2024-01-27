import {useState, useRef} from 'react';
import {FlatList} from 'react-native-gesture-handler';
import {
  ItemCursoVertical,
  ItemCursoVerticalInside,
  TextCursoVerticalInside,
  RowFlatList,
  TextHorasVerticalInside,
  ContainerCard,
  IconeProfessor,
  ContainerProfessor,
  TextProfessor,
  ImageAvatar,
} from './styles';
import {ICurso} from '~/interfaces';
import {Image} from 'react-native';
import {ModalCurso} from './ModalCurso';

interface ICardCursosProps {
  listCursos: ICurso[];
}

function CardCursos({listCursos}: ICardCursosProps) {
  const [openModalCurso, setOpenModalCurso] = useState<boolean>(false);
  const [curso, setCurso] = useState<ICurso>({} as ICurso);

  function onOpenModalCurso(idCurso: number) {
    setCurso(listCursos.filter(x => x.id === idCurso)[0]);
    setOpenModalCurso(true);
  }

  function onCloseModalCurso() {
    setCurso({} as ICurso);
    setOpenModalCurso(false);
  }

  return (
    <>
      <FlatList
        data={listCursos}
        keyExtractor={item => String(item.id)}
        renderItem={({item}) => (
          <>
            <ItemCursoVertical onPress={() => onOpenModalCurso(item.id)}>
              <RowFlatList>
                <ItemCursoVerticalInside>
                  {/*    <ImageAvatar
                  source={{uri: `data:image/png:base64, ${item.avatar}`}}
                /> */}
                </ItemCursoVerticalInside>
                <ContainerCard>
                  <TextCursoVerticalInside>
                    {item.descricao}
                  </TextCursoVerticalInside>
                  <ContainerCard>
                    <ContainerProfessor>
                      <IconeProfessor name="person" size={20} />
                      <TextProfessor>{item.usuario.nome}</TextProfessor>
                    </ContainerProfessor>
                  </ContainerCard>
                </ContainerCard>
                <TextHorasVerticalInside>
                  {`${item.duracaoMinutos} horas`}
                </TextHorasVerticalInside>
              </RowFlatList>
            </ItemCursoVertical>
          </>
        )}
      />
      {openModalCurso && (
        <ModalCurso onCloseModal={() => onCloseModalCurso()} curso={curso} />
      )}
    </>
  );
}

export {CardCursos};

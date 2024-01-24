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

interface ICardCursosProps {
  listCursos: ICurso[];
}

function CardCursos({listCursos}: ICardCursosProps) {
  return (
    <FlatList
      data={listCursos}
      keyExtractor={item => String(item.id)}
      renderItem={({item}) => (
        <>
          <ItemCursoVertical>
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
                <TextHorasVerticalInside>
                  {`${item.duracaoMinutos} horas`}
                </TextHorasVerticalInside>
              </ContainerCard>
            </RowFlatList>
          </ItemCursoVertical>
        </>
      )}
    />
  );
}

export {CardCursos};

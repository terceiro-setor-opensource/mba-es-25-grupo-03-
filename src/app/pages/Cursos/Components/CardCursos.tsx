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
} from './styles';

function CardCursos({listDados}: any) {
  return (
    <FlatList
      data={listDados}
      keyExtractor={item => String(item.id)}
      renderItem={({item}) => (
        <>
          <ItemCursoVertical>
            <RowFlatList>
              <ItemCursoVerticalInside></ItemCursoVerticalInside>
              <ContainerCard>
                <TextCursoVerticalInside>{item.item}</TextCursoVerticalInside>
                <ContainerCard>
                  <ContainerProfessor>
                    <IconeProfessor name="person" size={20} />
                    <TextProfessor>{item.professor}</TextProfessor>
                  </ContainerProfessor>
                </ContainerCard>
                <TextHorasVerticalInside>
                  {`${item.totalHoras} horas`}
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

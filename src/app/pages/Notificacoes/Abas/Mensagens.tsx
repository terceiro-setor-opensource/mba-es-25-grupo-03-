import {useEffect, useState} from 'react';
import {FlatList} from 'react-native-gesture-handler';
import {
  ItemCursoVertical,
  RowFlatList,
  ItemCursoVerticalInside,
  MessageContainer,
  MessageText,
  ContainerCard,
  ContainerProfessor,
  TextProfessor,
  TextHorasVerticalInside,
  LoadingContainer,
} from './styles';
import {Loading} from '~/components';

export function Mensagens() {
  const [array, setArray] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 800);
    const arr = [
      {
        id: 1,
        hora: '02:30 pm',
        mensagem:
          'Parabéns por concluir a primeira lição, mantenha o bom trabalho',
        pessoa: 'Leticia Corvalan',
      },
      {
        id: 2,
        hora: '03:30 pm',
        mensagem:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
        pessoa: 'Leonardo Lima',
      },
      {
        id: 3,
        hora: '09:30 pm',
        mensagem:
          'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.',
        pessoa: 'Marcio Dias',
      },
      {
        id: 4,
        hora: '08:30 am',
        mensagem:
          'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.',
        pessoa: 'Eliana Corvalan',
      },
    ];

    setArray(arr);
  }, []);

  return (
    <>
      {loading ? (
        <LoadingContainer>
          <Loading size="large" />
        </LoadingContainer>
      ) : (
        <FlatList
          data={array}
          keyExtractor={item => String(item.id)}
          renderItem={({item}) => (
            <>
              <ItemCursoVertical disabled>
                <RowFlatList>
                  <ItemCursoVerticalInside></ItemCursoVerticalInside>

                  <ContainerCard>
                    <ContainerProfessor>
                      <TextProfessor>{item.pessoa}</TextProfessor>
                    </ContainerProfessor>
                    <TextHorasVerticalInside>
                      {item.hora}
                    </TextHorasVerticalInside>
                  </ContainerCard>
                </RowFlatList>
                <MessageContainer>
                  <MessageText>{item.mensagem}</MessageText>
                </MessageContainer>
              </ItemCursoVertical>
            </>
          )}
        />
      )}
    </>
  );
}

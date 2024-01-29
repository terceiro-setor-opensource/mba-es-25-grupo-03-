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
          'Até o final da semana estarei liberando novas aulas para o curso de C#',
        pessoa: 'Leonardo Lima',
      },
      {
        id: 3,
        hora: '09:30 pm',
        mensagem: 'Problema ao instalar o visual studio 2022',
        pessoa: 'Marcio Dias',
      },
      {
        id: 4,
        hora: '08:30 am',
        mensagem:
          'Favor finalizar a aula #7 do curso de C# até a próxima sexta-feira',
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

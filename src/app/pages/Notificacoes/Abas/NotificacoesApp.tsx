import {useEffect, useState} from 'react';
import {FlatList} from 'react-native-gesture-handler';
import {
  ItemCursoVertical,
  RowFlatList,
  ContainerCard,
  ContainerProfessor,
  TextNotificacao,
  ItemNotificacao,
  ItemNotificacaoIcon,
  LoadingContainer,
} from './styles';
import {Loading} from '~/components';

export function NotificacoesApp() {
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
        mensagem: 'Inscrição concluída no curso de C# Avançado',
        color: '#FD2F2F',
        icon: 'sell',
      },
      {
        id: 2,
        hora: '03:30 pm',
        mensagem: 'Curso de VB atualizado com novas aulas',
        color: '#FF6905',
        icon: 'group',
      },
      {
        id: 3,
        hora: '09:30 pm',
        mensagem: 'Parabéns por completa o curso Reflection com C#',
        color: '#3D5CFF',
        icon: 'chat',
      },
      {
        id: 4,
        hora: '08:30 am',
        mensagem: 'Curso de SQL Avaçado atualizado',
        color: '#FF6905',
        icon: 'chat',
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
                  <ItemNotificacao>
                    <ItemNotificacaoIcon
                      name={item.icon}
                      size={30}
                      color={item.color}
                    />
                  </ItemNotificacao>
                  <ContainerCard>
                    <ContainerProfessor>
                      <TextNotificacao>{item.mensagem}</TextNotificacao>
                    </ContainerProfessor>
                  </ContainerCard>
                </RowFlatList>
              </ItemCursoVertical>
            </>
          )}
        />
      )}
    </>
  );
}

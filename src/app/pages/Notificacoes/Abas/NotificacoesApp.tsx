import {useCallback, useEffect, useState} from 'react';
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
  IconeNotificacao,
  TextHoras,
} from './styles';
import {Loading} from '~/components';
import NotificacaoService from '~/services/Notificacao/NotificacaoService';
import {useAuth} from '~/app/hooks';
import {IGetNotificacao} from '~/interfaces';
import {formataDataHora} from '~/utils';

export function NotificacoesApp() {
  const [listNotificacoes, setListNotificacoes] = useState<IGetNotificacao[]>(
    [],
  );
  const [loading, setLoading] = useState<boolean>(true);
  const {usuario} = useAuth();

  useEffect(() => {
    setLoading(true);

    NotificacaoService.getNotificacoes(Number(usuario.unique_name))
      .then(response => {
        setListNotificacoes(response);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <>
      {loading ? (
        <LoadingContainer>
          <Loading size="large" />
        </LoadingContainer>
      ) : (
        <FlatList
          data={listNotificacoes}
          keyExtractor={item => String(item.id)}
          renderItem={({item}) => (
            <>
              <ItemCursoVertical disabled={item.lida}>
                <RowFlatList>
                  <ItemNotificacao>
                    <ItemNotificacaoIcon
                      name={item.icone}
                      size={30}
                      color={item.cor}
                    />
                  </ItemNotificacao>
                  <ContainerCard>
                    <ContainerProfessor>
                      <TextNotificacao>{item.notificacao}</TextNotificacao>
                    </ContainerProfessor>
                    <ContainerCard>
                      <ContainerProfessor>
                        <IconeNotificacao name="schedule" size={20} />

                        <TextHoras>
                          {formataDataHora(item.dataCriacao)}
                        </TextHoras>
                      </ContainerProfessor>
                    </ContainerCard>
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

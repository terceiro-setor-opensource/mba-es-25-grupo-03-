import {useFocusEffect} from '@react-navigation/native';
import RNModal from 'react-native-modal';
import {
  Container,
  HeaderClose,
  Close,
  Content,
  ContainerCategorias,
  TextCategorias,
  OptionCategorias,
  OptionCategoriasText,
  OptionCategoriasContainer,
  TextoFilter,
  ContainerClassificacao,
  TextClassificacao,
} from './styles';
import {useCallback, useState} from 'react';
import CategoriaCursoService from '~/services/Curso/CategoriaCursoService';
import {ICategoria} from '~/interfaces';
import {Loading} from '~/components';
import {Label} from '~/components/IconButton/styles';

interface ModalFilterProps {
  onCloseModal: () => void;
}

function ModalFilter({onCloseModal}: ModalFilterProps) {
  const [listCategoriasCurso, setListCategoriaCurso] = useState<ICategoria[]>(
    [],
  );
  const [loading, setLoading] = useState<boolean>(false);

  useFocusEffect(
    useCallback(() => {
      setLoading(true);

      CategoriaCursoService.getCategoriasCurso()
        .then(response => {
          setListCategoriaCurso(response);
        })
        .finally(() => {
          setLoading(false);
        });
    }, []),
  );

  function onChangeFilterCategoria(id: number) {
    setListCategoriaCurso(prevState =>
      prevState.map(item => {
        if (item.id === id) {
          return {...item, selected: !item.selected};
        } else {
          return item;
        }
      }),
    );
  }

  return (
    <RNModal
      swipeDirection={['down']}
      onBackButtonPress={() => onCloseModal()}
      onBackdropPress={onCloseModal}
      onSwipeComplete={onCloseModal}
      isVisible
      style={{justifyContent: 'flex-end', margin: 0}}>
      <Container>
        <HeaderClose>
          <Close name="close" onPress={onCloseModal} />
        </HeaderClose>

        <Content>
          {loading ? (
            <Loading size="large" />
          ) : (
            <>
              <TextoFilter>Filtros de busca</TextoFilter>
              <ContainerCategorias>
                <TextCategorias>Categorias</TextCategorias>
              </ContainerCategorias>
              <OptionCategoriasContainer>
                {listCategoriasCurso &&
                  listCategoriasCurso.map(item => (
                    <OptionCategorias
                      key={item.id}
                      onPress={() => onChangeFilterCategoria(item.id)}
                      selected={item.selected}
                      style={{width: item.descricao.length * 10 + 20}}>
                      <OptionCategoriasText>
                        {item.descricao}
                      </OptionCategoriasText>
                    </OptionCategorias>
                  ))}
              </OptionCategoriasContainer>
              <ContainerClassificacao>
                <TextClassificacao>Classificação</TextClassificacao>
              </ContainerClassificacao>
            </>
          )}
        </Content>
      </Container>
    </RNModal>
  );
}

export {ModalFilter};

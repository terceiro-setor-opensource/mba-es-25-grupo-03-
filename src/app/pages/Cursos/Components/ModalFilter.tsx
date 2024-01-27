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
  ContainerSlider,
  ContainerDuracao,
  TextDuracao,
  ContainerBotoes,
  ButtonApplyFilters,
  TextoApplyFilter,
  ButtonCleanFilters,
  TextCleanFilter,
  TextSlider,
} from './styles';
import {useCallback, useState} from 'react';
import CategoriaCursoService from '~/services/Curso/CategoriaCursoService';
import {ICategoria, ICursoFilter} from '~/interfaces';
import {Loading} from '~/components';
import Slider from '@react-native-community/slider';
import {Text} from '~/components/Typography/styles';

interface ModalFilterProps {
  onCloseModal: () => void;
  onApplyFilter: (filter: ICursoFilter) => void;
}

function ModalFilter({onCloseModal, onApplyFilter}: ModalFilterProps) {
  const [listCategoriasCurso, setListCategoriaCurso] = useState<ICategoria[]>(
    [],
  );
  const [loading, setLoading] = useState<boolean>(false);
  const [sliderValue, setSliderValue] = useState<number>(0);

  useFocusEffect(
    useCallback(() => {
      setSliderValue(0);
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

  function onCleanFilters() {
    setListCategoriaCurso(prevState =>
      prevState.map(item => ({
        ...item,
        selected: false,
      })),
    );

    setSliderValue(0);
  }

  function onApplyFilterFunc() {
    if (!listCategoriasCurso.some(item => item.selected) && sliderValue === 0)
      return;

    const filters: ICursoFilter = {
      categorias: listCategoriasCurso
        .filter(x => x.selected)
        .map(item => item.id),
      ratingMin: sliderValue === 0 ? undefined : sliderValue,
      ratingMax: sliderValue === 0 ? undefined : 5,
    };

    onApplyFilter(filters);
    onCloseModal();
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
              <TextSlider>{sliderValue && +sliderValue.toFixed(3)}</TextSlider>
              <ContainerSlider>
                <Slider
                  style={{width: 300, height: 60}}
                  value={sliderValue}
                  minimumValue={0}
                  maximumValue={5}
                  step={1}
                  onValueChange={value => setSliderValue(value)}
                  minimumTrackTintColor="#3D5CFF"
                  maximumTrackTintColor="#FFFFFF"
                />
              </ContainerSlider>
              {/* <ContainerDuracao>
                <TextDuracao>Duração</TextDuracao>
              </ContainerDuracao>
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
              </OptionCategoriasContainer> */}
              <ContainerBotoes>
                <ButtonCleanFilters onPress={() => onCleanFilters()}>
                  <TextCleanFilter>Limpar</TextCleanFilter>
                </ButtonCleanFilters>
                <ButtonApplyFilters onPress={() => onApplyFilterFunc()}>
                  <TextoApplyFilter>Aplicar filtros</TextoApplyFilter>
                </ButtonApplyFilters>
              </ContainerBotoes>
            </>
          )}
        </Content>
      </Container>
    </RNModal>
  );
}

export {ModalFilter};

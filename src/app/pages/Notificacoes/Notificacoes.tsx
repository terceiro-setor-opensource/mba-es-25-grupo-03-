import {useCallback, useState, useMemo} from 'react';
import {AreaView, Header, Tabs} from '~/components';
import {Container} from './styles';
import {Mensagens, NotificacoesApp} from './Abas';

export function Notificacoes() {
  const [tabValue, setTabValue] = useState<number>(0);

  const tabs = useMemo(() => {
    const abas: any = [
      {
        key: 1,
        title: 'mensagens',
        icone: 'group',
      },
      {
        key: 2,
        title: 'notificações',
        icone: 'group',
      },
    ];

    return abas;
  }, []);

  const renderScene = useCallback(
    ({route}: any) => {
      if (route.key === 1) {
        return <Mensagens />;
      }

      return <NotificacoesApp />;
    },
    [tabValue],
  );

  return (
    <AreaView>
      <Header title="Notificações"></Header>
      <Tabs
        tabValue={tabValue}
        onChange={index => setTabValue(index)}
        tabs={tabs}
        renderScene={renderScene}
        defaultIcon="class"
      />
    </AreaView>
  );
}

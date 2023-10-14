import {Platform} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useTheme} from 'styled-components';
import {Button, ItemIcon} from '~/routes/tabRoutesStyles/homeStyles';
import {Icon} from '~/components';
import {Home} from '~/app/pages/Home';
import {Conta} from '~/app/pages/Conta';
import {Notificacoes} from '~/app/pages/Notificacoes';
import {Cursos} from '~/app/pages/Cursos';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function TabRoutes() {
  const {colors} = useTheme();

  const {navigate} = useNavigation();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.button,
        tabBarInactiveTintColor: colors.cinza2,
        tabBarHideOnKeyboard: true,

        tabBarLabelPosition: 'beside-icon',
        tabBarStyle: {
          backgroundColor: colors.appBackground,
          height: Platform.OS === 'ios' ? 100 : 60,
          paddingVertical: 0,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          title: '',
          tabBarIcon: ({color, focused}) => (
            <Icon name="house" size={focused ? 30 : 20} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="Cursos"
        component={Cursos}
        options={{
          title: '',
          tabBarIcon: ({color, focused}) => (
            <Icon name="book" size={focused ? 30 : 20} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="Notificações"
        component={Notificacoes}
        options={{
          title: '',
          tabBarIcon: ({color, focused}) => (
            <Icon
              name="sms"
              size={focused ? 25 : 20}
              color={color}
              /*  onPress={() => navigate('Conta')} */
            />
          ),
        }}
      />
      <Tab.Screen
        name="Conta"
        component={Conta}
        options={{
          title: '',
          tabBarIcon: ({color, focused}) => (
            <Icon
              name="account-circle"
              size={focused ? 25 : 20}
              color={color}
              /*  onPress={() => navigate('Conta')} */
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export function HomeRoutes() {
  return (
    <Stack.Navigator
      initialRouteName="TabRoutes"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="TabRoutes" component={TabRoutes} />
      <Stack.Screen name="Conta" component={Conta} />
    </Stack.Navigator>
  );
}

import {useState, useRef} from 'react';
import {AreaView} from '~/components';
import {
  Container,
  ButtonSubmit,
  TextInputStyle,
  TextStyle,
  TextEntrarStyle,
  TextCadastroStyle,
} from './styles';
import {useAuth} from '~/app/hooks';
import {showMessage} from '~/utils/message';
import {validarEmail} from '~/utils';
import {useNetInfo} from '@react-native-community/netinfo';
import {setBaseAdress, postAPI} from '~/services';
import jwtDecode from 'jwt-decode';
import {IUsuario} from '~/interfaces/IUsuario';

interface ILogin {
  email: string;
  senha: string;
}

export function Login() {
  const [dadosLogin, setDadosLogin] = useState<ILogin>({} as ILogin);
  const [loading, setLoading] = useState<boolean>(false);
  const [hidePassword, setHidePassword] = useState<boolean>(true);
  const {onAddAuth} = useAuth();
  const netInfo = useNetInfo();

  const passwordRef = useRef(null);

  function onChangeForm(field: string, value: string) {
    setDadosLogin((prevState: any) => ({...(prevState || {}), [field]: value}));
  }

  function validaCamposObrigatorios() {
    if (
      !dadosLogin.email ||
      (dadosLogin.email && !validarEmail(dadosLogin.email)) ||
      !dadosLogin.senha
    ) {
      showMessage({
        type: 'warning',
        title: 'E-mail ou senha não informado !',
        description: 'Informe o e-mail e a senha nos campos corretos !',
      });
      return false;
    }

    return true;
  }

  function onSubmit() {
    if (!netInfo.isConnected) {
      showMessage({
        type: 'warning',
        title: 'Sem conexão com internet',
        description: 'Verifique sua conexão e tente novamente!',
      });
      return;
    }

    if (!validaCamposObrigatorios()) {
      setLoading(false);
      return;
    }

    const userFormated = dadosLogin.email.trim().toLocaleLowerCase();

    setBaseAdress();

    setLoading(true);

    postAPI('/api/Login', {
      login: userFormated,
      senha: dadosLogin.senha,
    })
      .then(async response => {
        const {authenticated, accessToken} = response.data;

        if (authenticated) {
          const jwtDecoded: any = jwtDecode(accessToken);

          const usuarioDecoded: IUsuario = {
            email: jwtDecoded.email,
            unique_name: jwtDecoded.unique_name,
            name: jwtDecoded.given_name,
            role: jwtDecoded.role,
          };
          await onAddAuth(usuarioDecoded, accessToken);

          setLoading(false);
        } else {
          showMessage({
            type: 'warning',
            description:
              'Login ou Senha inválidos verifique suas credenciais e tente novamente!',
          });

          setLoading(false);
        }
      })
      .catch(err => {
        console.log('error', err);
        showMessage({
          type: 'warning',
          description:
            'Login ou Senha inválidos verifique suas credenciais e tente novamente!',
        });

        setLoading(false);
      });

    /*   setTimeout(() => {
      onAddAuth();
      setLoading(false);
    }, 1000); */
  }

  function onBlurInput() {
    if (!dadosLogin.email || !dadosLogin.senha) return;

    onSubmit();
  }

  return (
    <AreaView>
      <Container>
        <>
          <TextEntrarStyle>Entrar</TextEntrarStyle>
          <TextInputStyle
            autoCorrect={false}
            autoCapitalize="none"
            label="Login"
            required
            leftIcon="person"
            returnKeyType="next"
            value={dadosLogin.email}
            onChangeText={text => onChangeForm('email', text)}
            onBlur={() => (dadosLogin ? onBlurInput() : {})}
          />
          <TextInputStyle
            ref={passwordRef}
            autoCorrect={false}
            secureTextEntry={hidePassword}
            autoCapitalize="none"
            label="Senha"
            required
            leftIcon="lock"
            returnKeyType="next"
            rightIcon={hidePassword ? 'visibility' : 'visibility-off'}
            onPressRightIcon={() => setHidePassword(!hidePassword)}
            value={dadosLogin.senha}
            onChangeText={text => onChangeForm('senha', text)}
            onBlur={() => onBlurInput()}
          />
          <TextStyle>Esqueceu sua senha?</TextStyle>
          <ButtonSubmit onPress={() => onSubmit()} loading={loading}>
            Entrar
          </ButtonSubmit>
          <TextCadastroStyle>Não tem uma conta? Cadastre-se</TextCadastroStyle>
        </>
      </Container>
    </AreaView>
  );
}

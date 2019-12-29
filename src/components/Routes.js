import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';


import Pagina1 from './pages/WizardPage/Pagina1';
import Pagina2 from './pages/WizardPage/Pagina2';
import Pagina3 from './pages/WizardPage/Pagina3';
import SelecionaCategoria from './pages/CadastroPage/SelecionaCategoria';
import CadastroCompanhia from './pages/CadastroPage/CompanhiaCadastro/CadastroCompanhia';
import CadastroEspectador from './pages/CadastroPage/EspectadorCadastro/CadastroEspectador';
import CadastroCompanhiaFoto from './pages/CadastroPage/CompanhiaCadastro/CadastroCompanhiaFoto';
import Login from './pages/LoginPage/Login';
import Home from './pages/HomePage/Home';
import Loading from './commons/Loading';
import CadastroEspectadorFoto from './pages/CadastroPage/EspectadorCadastro/CadastroEspectadorFoto';
import RecuperarSenha from './pages/RecuperarSenha/RecuperarSenha'
import PefilEspectador from './pages/PerfilEspectador/PerfilEspectador';
import EditPerfilEspectador from './pages/PerfilEspectador/EditPerfilEspectador';
import CadastroWorkshops from './pages/Workshops/CadastroWorkshops';
import CadastroWorkshopsBanner from './pages/Workshops/CadastroWorkShopsBanner';
import CadastroPecas from './pages/Pecas/CadastroPecas';


const MainStack = createStackNavigator(
    {
        Login: Login,
        Pagina1: Pagina1,
        Pagina2: Pagina2,
        Pagina3: Pagina3,
        SelecionaCategoria: SelecionaCategoria,
        CadastroCompanhia: CadastroCompanhia,
        CadastroEspectador: CadastroEspectador,
        CadastroCompanhiaFoto: CadastroCompanhiaFoto,
        CadastroEspectadorFoto: CadastroEspectadorFoto,
        RecuperarSenha: RecuperarSenha,
        Loading: Loading,
        PefilEspectador: PefilEspectador,
        EditPerfilEspectador : EditPerfilEspectador, 
        CadastroWorkshops: CadastroWorkshops,
        CadastroWorkshopsBanner: CadastroWorkshopsBanner,
        CadastroPecas: CadastroPecas,
        Home: Home,



    },
    {
        initialRouteName: 'Pagina1',
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#442980',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
            }
        }

    }
)






const Routes = createAppContainer(MainStack);

export default Routes;

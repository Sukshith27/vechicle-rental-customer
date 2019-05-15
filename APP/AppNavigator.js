import { createAppContainer, createStackNavigator, createSwitchNavigator } from "react-navigation";
import Login from './screens/Login';

const LoginStack = createStackNavigator({
    Login: { screen: Login }
}
);


const AppNavigator = createSwitchNavigator(
    {
        BeforeLogin: {
            screen: LoginStack,
        }
    }
);


export default createAppContainer(AppNavigator);


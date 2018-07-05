
import { StackNavigator } from 'react-navigation';
import lunchScreen from '../screens/lunchScreen';
import logInScreen from '../screens/loginScreen';


export const LaunchNavigate = StackNavigator({
    Luncher:{
        screen: lunchScreen,
    },
    LogInNavigate:{
        screen: logInScreen,
    }
},{
    initialRouteName: "Luncher", headerMode: 'none', navigationOptions: { gesturesEnabled: false }
})
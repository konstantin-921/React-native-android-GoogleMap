/**
 * @format
 */

import { Navigation } from "react-native-navigation"
import LandingScreen from './app/Screens/Landing'
import SignInScreen from './app/Screens/SignIn'
import MapScreen from './app/Screens/MapScreen'

Navigation.registerComponent(`LandingScreen`, () => LandingScreen)
Navigation.registerComponent(`SignInScreen`, () => SignInScreen)
Navigation.registerComponent(`MapScreen`, () => MapScreen)

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      stack: {
        id: 'AppStack',
        children: [
          {
            component: {
              name: 'LandingScreen',
              options: {
                topBar: {
                  visible: true,
                  height: 0,
                }
              }
            }
          }
        ]
      }
    }
  });
});
/**
 * @format
 */

import { Navigation } from "react-native-navigation"
import LandingScreen from './app/screens/Landing'
import SignInScreen from './app/screens/SignIn'
import MapScreen from './app/screens/MapScreen'

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
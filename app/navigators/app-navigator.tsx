/**
 * The app navigator (formerly "AppNavigator" and "MainNavigator") is used for the primary
 * navigation flows of your app.
 * Generally speaking, it will contain an auth flow (registration, login, forgot password)
 * and a "main" flow which the user will use once logged in.
 */
import React from "react"
// import { useColorScheme } from "react-native"
// import { NavigationContainer, DefaultTheme, DarkTheme } from "@react-navigation/native"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import {
  ListScreen,
  MasonScreen,
  DetailScreen,
  LoadingScreen
} from "../screens/main"
import {
  BlogListScreen,
  BlogDetailScreen,
} from "../screens/blog"
import {
  LandingScreen,
  ContactScreen,
  AboutScreen,
} from "../screens/funnel"
import {
  SignUpScreen,
  LogInScreen,
  ProfileScreen,
  EditProfileScreen,
  ResetPasswordScreen,
  ChangePasswordScreen
} from "../screens/account"
import {
  PaymentScreen,
  PricingScreen,
  ShippingScreen,
} from "../screens/payment"
import {
  TermsScreen,
  PrivacyScreen,
  CookiesScreen
} from "../screens/other"
import { navigationRef } from "./navigation-utilities"
import { useColorModeValue, useToken } from 'native-base';

/**
 * This type allows TypeScript to know what routes are defined in this navigator
 * as well as what properties (if any) they might take when navigating to them.
 *
 * If no params are allowed, pass through `undefined`. Generally speaking, we
 * recommend using your MobX-State-Tree store(s) to keep application state
 * rather than passing state through navigation params.
 *
 * For more information, see this documentation:
 *   https://reactnavigation.org/docs/params/
 *   https://reactnavigation.org/docs/typescript#type-checking-the-navigator
 */
export type NavigatorParamList = {
  // Funnel params
  landing: undefined
  about: undefined
  contact: undefined
  // Main params
  list: undefined
  mason: undefined
  detail: undefined
  // Blog params
  blogList: undefined
  blogDetail: undefined
  // Account params
  signUp: undefined
  logIn: undefined
  profile: undefined
  editProfile: undefined
  resetPassword: undefined
  changePassword: undefined
  // Payment params
  payment: undefined
  shipping: undefined
  pricing: undefined
  // Other params
  terms: undefined
  privacy: undefined
  cookies: undefined
  loading: undefined


}

// Documentation: https://reactnavigation.org/docs/stack-navigator/
const Stack = createNativeStackNavigator<NavigatorParamList>()

const AppStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="landing"
    >
      <Stack.Screen name="loading" component={LoadingScreen} />
      {/* Funnel screens */}
      <Stack.Screen name="landing" component={LandingScreen} />
      <Stack.Screen name="contact" component={ContactScreen} />
      <Stack.Screen name="about" component={AboutScreen} />
      {/* Blog screens */}
      <Stack.Screen name="blogList" component={BlogListScreen} />
      <Stack.Screen name="blogDetail" component={BlogDetailScreen} />
      {/* Main screens */}
      <Stack.Screen name="list" component={ListScreen} />
      <Stack.Screen name="mason" component={MasonScreen} />
      <Stack.Screen name="detail" component={DetailScreen} />
      {/* Account screens */}
      <Stack.Screen name="signUp" component={SignUpScreen} />
      <Stack.Screen name="logIn" component={LogInScreen} />
      <Stack.Screen name="profile" component={ProfileScreen} />
      <Stack.Screen name="editProfile" component={EditProfileScreen} />
      <Stack.Screen name="resetPassword" component={ResetPasswordScreen} />
      <Stack.Screen name="changePassword" component={ChangePasswordScreen} />
      {/* Payment screens */}
      <Stack.Screen name="pricing" component={PricingScreen} />
      <Stack.Screen name="payment" component={PaymentScreen} />
      <Stack.Screen name="shipping" component={ShippingScreen} />
      {/* Other screens */}
      <Stack.Screen name="terms" component={TermsScreen} />
      <Stack.Screen name="privacy" component={PrivacyScreen} />
      <Stack.Screen name="cookies" component={CookiesScreen} />

    </Stack.Navigator>
  )
}

interface NavigationProps extends Partial<React.ComponentProps<typeof NavigationContainer>> { }

export const AppNavigator = (props: NavigationProps) => {
  // const colorScheme = useColorScheme()
  const [lightBg, darkBg] = useToken(
    'colors',
    ['coolGray.50', 'blueGray.900'],
    'blueGray.900',
  );
  const bgColor = useColorModeValue(lightBg, darkBg);
  return (

    <NavigationContainer
      ref={navigationRef}
      // theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
      theme={{ colors: { background: bgColor }, }}
      {...props}
    >
      <AppStack />
    </NavigationContainer>
  )
}

AppNavigator.displayName = "AppNavigator"

/**
 * A list of routes from which we're allowed to leave the app when
 * the user presses the back button on Android.
 *
 * Anything not on this list will be a standard `back` action in
 * react-navigation.
 *
 * `canExit` is used in ./app/app.tsx in the `useBackButtonHandler` hook.
 */
const exitRoutes = ["landing"]
export const canExit = (routeName: string) => exitRoutes.includes(routeName)

import React, { FC } from "react"
import { StackScreenProps } from "@react-navigation/stack"
import { observer } from "mobx-react-lite"
import { NavigatorParamList } from "../../navigators"
import { Button, VStack, Box } from 'native-base';
import { LayoutMain, LayoutNavMenu } from '../../layouts'

export const LandingScreen: FC<StackScreenProps<NavigatorParamList, "landing">> = observer(
  ({ navigation }) => {

    const listScreen = () => navigation.navigate("list")
    const profileScreen = () => navigation.navigate("profile")
    const signUpScreen = () => navigation.navigate("signUp")
    const logInScreen = () => navigation.navigate("logIn")

    return (
      <LayoutMain
        headerTx="common.companyNameCaps"
        onCenterPress={listScreen}
        rightIcon='true'
        onRightPress={profileScreen}
        preset="scroll"
        navigation_={navigation}

      >

        <Box
          px={4}
          mx="auto"
          pt={navigation ? '70px' : 0}
          w={{ base: '100%', md: '768px', lg: '1000px', xl: '1080px' }}
        >
          <Button onPress={signUpScreen}>Sign Up</Button>
          <Button onPress={logInScreen}>Log In</Button>

        </Box>
      </LayoutMain >
    )
  },
)

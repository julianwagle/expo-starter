import React, { FC } from "react"
import { StackScreenProps } from "@react-navigation/stack"
import { observer } from "mobx-react-lite"
import { NavigatorParamList } from "../../navigators"
import { Button, VStack, Box } from 'native-base';
import { LayoutMain } from '../../layouts'

export const LandingScreen: FC<StackScreenProps<NavigatorParamList, "landing">> = observer(
  ({ navigation }) => {

    const loadingScreen = () => navigation.navigate("loading")
    const landingScreen = () => navigation.navigate("landing")
    const blogScreen = () => navigation.navigate("blogList")
    const listScreen = () => navigation.navigate("list")
    const masonScreen = () => navigation.navigate("mason")
    const detailScreen = () => navigation.navigate("detail")
    const signUpScreen = () => navigation.navigate("signUp")
    const logInScreen = () => navigation.navigate("logIn")
    const profileScreen = () => navigation.navigate("profile")
    const editProfileScreen = () => navigation.navigate("editProfile")
    const resetPasswordScreen = () => navigation.navigate("resetPassword")
    const changePasswordScreen = () => navigation.navigate("changePassword")
    const termsScreen = () => navigation.navigate("terms")
    const privacyScreen = () => navigation.navigate("privacy")
    const cookiesScreen = () => navigation.navigate("cookies")


    return (
      <LayoutMain
        headerTx="common.companyNameCaps"
        onCenterPress={masonScreen}
        rightIcon='true'
        onRightPress={profileScreen}
        preset="scroll"

      >

        <Box
          px={4}
          mx="auto"
          pt={navigation ? '70px' : 0}
          w={{ base: '100%', md: '768px', lg: '1000px', xl: '1080px' }}
        >

          <VStack space={2} alignItems="center">

            <Box><Button
              size="lg"
              variant="outline"
              onPress={loadingScreen}>
              Loading</Button></Box>

            <Box><Button
              size="lg"
              variant="outline"
              onPress={landingScreen}>
              Landing</Button></Box>

            <Box><Button
              size="lg"
              variant="outline"
              onPress={blogScreen}>
              Blog</Button></Box>

            <Box><Button
              size="lg"
              variant="outline"
              onPress={listScreen}>
              List</Button></Box>

            <Box><Button
              size="lg"
              variant="outline"
              onPress={masonScreen}>
              Mason</Button></Box>

            <Box><Button
              size="lg"
              variant="outline"
              onPress={detailScreen}>
              Detail</Button></Box>

            <Box><Button
              size="lg"
              variant="outline"
              onPress={signUpScreen}>
              Sign Up</Button></Box>

            <Box><Button
              size="lg"
              variant="outline"
              onPress={logInScreen}>
              Log In</Button></Box>

            <Box><Button
              size="lg"
              variant="outline"
              onPress={profileScreen}>
              Profile</Button></Box>

            <Box><Button
              size="lg"
              variant="outline"
              onPress={editProfileScreen}>
              Edit Profile</Button></Box>

            <Box><Button
              size="lg"
              variant="outline"
              onPress={resetPasswordScreen}>
              Reset Password</Button></Box>


            <Box><Button
              size="lg"
              variant="outline"
              onPress={changePasswordScreen}>
              Change Password</Button></Box>

            <Box><Button
              size="lg"
              variant="outline"
              onPress={termsScreen}>
              Terms</Button></Box>

            <Box><Button
              size="lg"
              variant="outline"
              onPress={privacyScreen}>
              Privacy</Button></Box>

            <Box><Button
              size="lg"
              variant="outline"
              onPress={cookiesScreen}>
              Cookies</Button></Box>

            {/* <Box><Button
              size="lg"
              variant="outline"
              onPress={Screen}>
              </Button>

              <Box><Button
              size="lg"
              variant="outline"
              onPress={Screen}>
              </Button> */}

          </VStack>

        </Box>
      </LayoutMain >
    )
  },
)

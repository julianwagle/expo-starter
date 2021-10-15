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
    const contactScreen = () => navigation.navigate("contact")
    const aboutScreen = () => navigation.navigate("about")
    const pricingScreen = () => navigation.navigate("pricing")
    const paymentScreen = () => navigation.navigate("payment")
    const shippingScreen = () => navigation.navigate("shipping")
    const ordersScreen = () => navigation.navigate("orders")
    const blogListScreen = () => navigation.navigate("blogList")
    const blogDetailScreen = () => navigation.navigate("blogDetail")
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
              Landing (Here) </Button></Box>

            <Box><Button
              size="lg"
              variant="outline"
              onPress={contactScreen}>
              Contact</Button></Box>

            <Box><Button
              size="lg"
              variant="outline"
              onPress={aboutScreen}>
              About</Button></Box>

            <Box><Button
              size="lg"
              variant="outline"
              onPress={paymentScreen}>
              Payment</Button></Box>

            <Box><Button
              size="lg"
              variant="outline"
              onPress={pricingScreen}>
              Pricing</Button></Box>

            <Box><Button
              size="lg"
              variant="outline"
              onPress={shippingScreen}>
              Shipping</Button></Box>
            <Box><Button
              size="lg"
              variant="outline"
              onPress={ordersScreen}>
              Orders</Button></Box>


            <Box><Button
              size="lg"
              variant="outline"
              onPress={blogListScreen}>
              Blog List</Button></Box>
            <Box><Button
              size="lg"
              variant="outline"
              onPress={blogDetailScreen}>
              Blog Detail </Button></Box>

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

import React from "react"
import { Pressable } from "react-native"
import {
    Menu,
    Divider,
    HamburgerIcon,
} from 'native-base';

export const NavMenu = ({
    navigation
}: any) => {


    // funnel
    // const landingScreen = () => navigation.navigate("landing")
    const aboutScreen = () => navigation.navigate("about")
    const contactScreen = () => navigation.navigate("contact")

    // blog 
    const blogListScreen = () => navigation.navigate("blogList")
    // const blogDetailScreen = () => navigation.navigate("blogDetail")

    // payment
    const pricingScreen = () => navigation.navigate("pricing")
    // const paymentScreen = () => navigation.navigate("payment")
    // const shippingScreen = () => navigation.navigate("shipping")

    // main
    // const listScreen = () => navigation.navigate("list")
    // const masonScreen = () => navigation.navigate("mason")
    // const detailScreen = () => navigation.navigate("detail")

    // account
    const signUpScreen = () => navigation.navigate("signUp")
    const logInScreen = () => navigation.navigate("logIn")
    const profileScreen = () => navigation.navigate("profile")
    // const editProfileScreen = () => navigation.navigate("editProfile")
    // const resetPasswordScreen = () => navigation.navigate("resetPassword")
    // const changePasswordScreen = () => navigation.navigate("changePassword")

    // other
    const termsScreen = () => navigation.navigate("terms")
    const privacyScreen = () => navigation.navigate("privacy")
    const cookiesScreen = () => navigation.navigate("cookies")
    // const loadingScreen = () => navigation.navigate("loading")


    return (
        <Menu
            // backgroundColor={'amber.100'}
            closeOnSelect={true}
            trigger={(triggerProps) => {
                return (
                    <Pressable accessibilityLabel="More options menu" {...triggerProps}>
                        <HamburgerIcon />
                    </Pressable>
                );
            }}
        >


            <Menu.Group title="MAIN">
                {/* <Menu.Item key={'0'}onPress={landingScreen} >landing</Menu.Item> */}
                <Menu.Item key={'1'} onPress={aboutScreen} >About</Menu.Item>
                <Menu.Item key={'2'} onPress={contactScreen} >Contact us</Menu.Item>
                {/* </Menu.Group>

            <Divider borderColor="#f0f" />

            <Menu.Group title="Blog"> */}
                <Menu.Item key={'3'} onPress={blogListScreen} >Blog</Menu.Item>
                {/* <Menu.Item key={'4'}onPress={blogDetailScreen} >blogDetail</Menu.Item> */}
                {/* </Menu.Group>

            <Divider borderColor="#f0f" />

            <Menu.Group title="Payment"> */}
                <Menu.Item key={'5'} onPress={pricingScreen} >Pricing</Menu.Item>
                {/* <Menu.Item key={'6'}onPress={paymentScreen} >payment</Menu.Item>
                <Menu.Item key={'7'}onPress={shippingScreen} >shipping</Menu.Item> */}
            </Menu.Group>

            <Divider borderColor="#f0f" />

            <Menu.Group title="ACCOUNT">
                <Menu.Item key={'11'} onPress={signUpScreen} >Sign Up</Menu.Item>
                <Menu.Item key={'12'} onPress={logInScreen} >Log In</Menu.Item>
                <Menu.Item key={'13'} onPress={profileScreen} >Profile</Menu.Item>
                {/* <Menu.Item key={'14'}onPress={editProfileScreen} >editProfile</Menu.Item>
                <Menu.Item key={'15'}onPress={resetPasswordScreen} >resetPassword</Menu.Item>
                <Menu.Item key={'16'}onPress={changePasswordScreen} >changePassword</Menu.Item> */}
            </Menu.Group>

            <Divider borderColor="#f0f" />

            <Menu.Group title="OTHER">
                <Menu.Item key={'17'} onPress={termsScreen} >Terms</Menu.Item>
                <Menu.Item key={'18'} onPress={privacyScreen} >Privacy</Menu.Item>
                <Menu.Item key={'19'} onPress={cookiesScreen} >Cookies</Menu.Item>
                {/* <Menu.Item key={'20'}onPress={loadingScreen} >loading</Menu.Item> */}
            </Menu.Group>

        </Menu>

    );
};


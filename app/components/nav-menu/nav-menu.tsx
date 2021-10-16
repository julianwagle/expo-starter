import React from "react"
import { Pressable } from "react-native"
import {
    Menu,
    Divider,
    HamburgerIcon
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
    const listScreen = () => navigation.navigate("list")
    const masonScreen = () => navigation.navigate("mason")
    const detailScreen = () => navigation.navigate("detail")

    // account
    const signUpScreen = () => navigation.navigate("signUp")
    const logInScreen = () => navigation.navigate("logIn")
    const profileScreen = () => navigation.navigate("profile")
    // const editProfileScreen = () => navigation.navigate("editProfile")
    // const resetPasswordScreen = () => navigation.navigate("resetPassword")
    // const changePasswordScreen = () => navigation.navigate("changePassword")

    // other
    // const termsScreen = () => navigation.navigate("terms")
    // const privacyScreen = () => navigation.navigate("privacy")
    // const cookiesScreen = () => navigation.navigate("cookies")
    // const loadingScreen = () => navigation.navigate("loading")


    return (
        <Menu
            closeOnSelect={true}
            onOpen={() => console.log('opened')}
            onClose={() => console.log('closed')}
            trigger={(triggerProps) => {
                return (
                    <Pressable {...triggerProps}>
                        <HamburgerIcon />
                    </Pressable>
                );
            }}
        >
            <Menu.Group title="Funnel">
                {/* <Menu.Item onPress={landingScreen} >landing</Menu.Item> */}
                <Menu.Item onPress={aboutScreen} >about</Menu.Item>
                <Menu.Item onPress={contactScreen} >contact</Menu.Item>
                {/* </Menu.Group>

            <Divider borderColor="gray.300" />

            <Menu.Group title="Blog"> */}
                <Menu.Item onPress={blogListScreen} >blog</Menu.Item>
                {/* <Menu.Item onPress={blogDetailScreen} >blogDetail</Menu.Item> */}
                {/* </Menu.Group>

            <Divider borderColor="gray.300" />

            <Menu.Group title="Payment"> */}
                <Menu.Item onPress={pricingScreen} >pricing</Menu.Item>
                {/* <Menu.Item onPress={paymentScreen} >payment</Menu.Item>
                <Menu.Item onPress={shippingScreen} >shipping</Menu.Item> */}
            </Menu.Group>

            <Divider borderColor="gray.300" />

            <Menu.Group title="Main">
                <Menu.Item onPress={listScreen} >list</Menu.Item>
                <Menu.Item onPress={masonScreen} >mason</Menu.Item>
                <Menu.Item onPress={detailScreen} >detail</Menu.Item>
            </Menu.Group>

            <Divider borderColor="gray.300" />

            <Menu.Group title="Account">
                <Menu.Item onPress={signUpScreen} >signUp</Menu.Item>
                <Menu.Item onPress={logInScreen} >logIn</Menu.Item>
                <Menu.Item onPress={profileScreen} >profile</Menu.Item>
                {/* <Menu.Item onPress={editProfileScreen} >editProfile</Menu.Item>
                <Menu.Item onPress={resetPasswordScreen} >resetPassword</Menu.Item>
                <Menu.Item onPress={changePasswordScreen} >changePassword</Menu.Item> */}
            </Menu.Group>

            {/* <Divider borderColor="gray.300" />

            <Menu.Group title="Other">
                <Menu.Item onPress={termsScreen} >terms</Menu.Item>
                <Menu.Item onPress={privacyScreen} >privacy</Menu.Item>
                <Menu.Item onPress={cookiesScreen} >cookies</Menu.Item>
                <Menu.Item onPress={loadingScreen} >loading</Menu.Item>
            </Menu.Group> */}

        </Menu>

    );
};


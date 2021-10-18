import React from "react"

import { Box, Hidden, ScrollView, VStack } from 'native-base';

import { ColorToggler, LogoBackdrop } from "../components/constants"
import { View, ViewStyle } from "react-native"
import { Header, Screen, NavMenu } from "../components"
import { color } from "../theme"
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';


export const LayoutNavMenu = ({
    leftIcon,
    onLeftPress,
    rightIcon,
    onRightPress,
    headerTx,
    onCenterPress,
    children,
    navigation,
    navigation_,
    preset
}: any) => {

    const FULL: ViewStyle = {
        flex: 1,
    }

    const [isSidebarVisible, setIsSidebarVisible] = React.useState(false);

    const toggleSidebar = () => setIsSidebarVisible(!isSidebarVisible);


    return (

        <View style={FULL}>

            <Screen
                preset={preset} // scroll or fixed
                backgroundColor={color.transparent}

            >

                <Box
                    px={2}
                    mx="auto"
                    pt={navigation ? '70px' : 0}
                    w={{ base: '100%', md: '100%', lg: '100%', xl: '1380px' }}
                >


                    <Header
                        leftIcon={false}
                        onLeftPress={toggleSidebar}
                        rightIcon={rightIcon}
                        onRightPress={onRightPress}
                        headerTx={headerTx}
                        onCenterPress={onCenterPress}
                        navigation={navigation_}
                    />


                    {isSidebarVisible && (
                        <NavMenu />
                    )}



                    {children}

                </Box>


                <ColorToggler />

                <LogoBackdrop />


            </Screen>

        </View>



    );
};

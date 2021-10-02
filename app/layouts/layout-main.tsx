import React from 'react';
import { Box } from 'native-base';
import { ColorToggler, LogoBackdrop } from "../components/constants"
import { View, ViewStyle } from "react-native"
import { Header, Screen } from "../components"
import { color } from "../theme"

export const LayoutMain = ({
    leftIcon,
    onLeftPress,
    rightIcon,
    onRightPress,
    headerTx,
    onCenterPress,
    children,
    navigation,
    preset
}: any) => {

    const FULL: ViewStyle = { flex: 1 }

    return (

        <View style={FULL}>

            <Screen
                preset={preset} // scroll or fixed
                backgroundColor={color.transparent}
            >

                <Box
                    px={4}
                    mx="auto"
                    pt={navigation ? '70px' : 0}
                    w={{ base: '100%', md: '768px', lg: '1000px', xl: '1080px' }}
                >

                    <Header
                        leftIcon={leftIcon}
                        onLeftPress={onLeftPress}
                        rightIcon={rightIcon}
                        onRightPress={onRightPress}
                        headerTx={headerTx}
                        onCenterPress={onCenterPress}
                    />


                    {children}



                </Box>

            </Screen>

            <ColorToggler />

            <LogoBackdrop />

        </View>

    );
};

import React from 'react';
import {
    VStack,
    Box,
} from 'native-base';
import { ColorToggler, LogoBackdrop } from "../components/constants"
import { View, ViewStyle, ScrollView } from "react-native"
import { Header, Screen } from "../components"
import { color, spacing, } from "../theme"

export const LayoutMain = ({
    leftIcon,
    onLeftPress,
    rightIcon,
    onRightPress,
    headerTx,
    onCenterPress,
    children,
    navigation,
}: any) => {

    const FULL: ViewStyle = { flex: 1 }
    const CONTAINER: ViewStyle = {
        paddingHorizontal: spacing[4],
    }

    return (

        <>

            <View style={FULL}>

                <Screen
                    style={CONTAINER}
                    preset="scroll"
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

                        <ScrollView
                            contentContainerStyle={{ width: '100%' }}
                            showsVerticalScrollIndicator={false}
                        >

                            <VStack w="100%" >

                                {children}

                            </VStack>

                        </ScrollView>

                    </Box>

                </Screen>

            </View>

            <ColorToggler />

            <LogoBackdrop />

        </>

    );
};

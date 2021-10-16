import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { StackScreenProps } from "@react-navigation/stack"
import { NavigatorParamList } from "../../navigators"
import {
    FormControl,
    Input,
    Icon as NativeIcon,
    Button as NativeButton,
    Spacer,
    useColorModeValue,
    Heading
} from 'native-base';
import { LayoutMain, LayoutForm } from '../../layouts';
import { Icon } from "../../components/icon/icon"
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
export const ShippingScreen: FC<StackScreenProps<NavigatorParamList, "shipping">> = observer(

    ({ navigation }) => {

        const goBack = () => navigation.goBack()
        const profileScreen = () => navigation.navigate("profile")
        const listScreen = () => navigation.navigate("list")

        return (

            <LayoutMain
                headerTx="common.companyNameCaps"
                onCenterPress={listScreen}
                leftIcon='true'
                onLeftPress={goBack}
                rightIcon='true'
                onRightPress={profileScreen}
                preset="scroll"

            >

                <LayoutForm
                    headerTx='shippingScreen.title'
                >


                    <Heading
                        size="lg"
                        color={useColorModeValue('blueGray.700', 'blueGray.100')}
                    >
                        Shipping info
                    </Heading>

                    <FormControl isRequired >
                        <Input

                            placeholder="Name of recipient" />
                        <FormControl.ErrorMessage>Something is wrong.</FormControl.ErrorMessage>
                    </FormControl>

                    <FormControl isRequired >
                        <Input
                            placeholder="Street address" />
                        <FormControl.ErrorMessage>Something is wrong.</FormControl.ErrorMessage>
                    </FormControl>

                    <FormControl isRequired >
                        <Input
                            placeholder="City" />
                        <FormControl.ErrorMessage>Something is wrong.</FormControl.ErrorMessage>
                    </FormControl>

                    <FormControl isRequired >
                        <Input
                            placeholder="State/Province" />
                        <FormControl.ErrorMessage>Something is wrong.</FormControl.ErrorMessage>
                    </FormControl>


                    <FormControl isRequired >
                        <Input
                            placeholder="Country" />
                        <FormControl.ErrorMessage>Something is wrong.</FormControl.ErrorMessage>
                    </FormControl>

                    <Spacer />

                    <FormControl >
                        <NativeButton
                            size="md"
                            height="48px"
                            width="200px"
                            borderColor="green.500"
                            mx={{ base: 'auto', md: 0 }}
                            onPress={listScreen}
                        >
                            Next
                        </NativeButton>
                    </FormControl>




                </LayoutForm>

            </LayoutMain>

        );

    });

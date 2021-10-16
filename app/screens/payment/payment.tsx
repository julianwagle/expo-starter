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


export const PaymentScreen: FC<StackScreenProps<NavigatorParamList, "payment">> = observer(

    ({ route, navigation }) => {

        const goBack = () => navigation.goBack()
        const profileScreen = () => navigation.navigate("profile")
        const listScreen = () => navigation.navigate("list")
        const shippingScreen = () => navigation.navigate("shipping")

        const passedParams: any = route.params || new Map();
        const passedPlan: string = passedParams.plan || 'Undefined name';

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
                    headerTx='paymentScreen.title'
                >

                    <Heading
                        size="lg"
                        color={useColorModeValue('blueGray.700', 'blueGray.100')}
                    >
                        Payment form for {passedPlan}
                    </Heading>

                    <FormControl isRequired >
                        <FormControl.Label>Name on card</FormControl.Label>
                        <Input
                            InputLeftElement={
                                <NativeIcon
                                    as={<Ionicons name="person" />}
                                    size="md"
                                    m={2}
                                    color={useColorModeValue('black', 'gray.300')}
                                />
                            }
                            placeholder="Name on card" />
                        <FormControl.ErrorMessage>Something is wrong.</FormControl.ErrorMessage>
                    </FormControl>


                    <FormControl isRequired >
                        <FormControl.Label>Card number</FormControl.Label>
                        <Input
                            InputLeftElement={
                                <NativeIcon
                                    as={<AntDesign name="creditcard" />}
                                    size="md"
                                    m={2}
                                    color={useColorModeValue('black', 'gray.300')}
                                />
                            }
                            placeholder="Card number" />
                        <FormControl.ErrorMessage>Something is wrong.</FormControl.ErrorMessage>
                    </FormControl>

                    <Spacer />

                    <Heading
                        size="lg"
                        color={useColorModeValue('blueGray.700', 'blueGray.100')}
                    >
                        Billing address
                    </Heading>


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
                            onPress={shippingScreen}
                        >
                            Next
                        </NativeButton>
                    </FormControl>




                </LayoutForm>

            </LayoutMain >

        );

    });

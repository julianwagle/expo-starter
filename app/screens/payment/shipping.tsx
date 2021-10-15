import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { StackScreenProps } from "@react-navigation/stack"
import { NavigatorParamList } from "../../navigators"
import {
    Spacer,
    FormControl,
    Input,
    Text,
    Button,
    Icon as NativeIcon,
    VStack,
    useColorModeValue,
} from 'native-base';
import { LayoutMain, LayoutForm } from '../../layouts';
import { Icon } from "../../components/icon/icon"
import { MaterialIcons, Entypo, Ionicons } from '@expo/vector-icons';

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

                </LayoutForm>

            </LayoutMain>

        );

    });

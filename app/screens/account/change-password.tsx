import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { StackScreenProps } from "@react-navigation/stack"
import { NavigatorParamList } from "../../navigators"
import {
  Spacer,
  FormControl,
  Input,
  Button,
  useColorModeValue
} from 'native-base';
import { LayoutMain, LayoutForm } from '../../layouts';
import { Icon } from "../../components/icon/icon"
import { Entypo } from '@expo/vector-icons';

export const ChangePasswordScreen: FC<StackScreenProps<NavigatorParamList, "changePassword">> = observer(

  ({ navigation }) => {

    const goBack = () => navigation.goBack()
    const profileScreen = () => navigation.navigate("profile")
    const listScreen = () => navigation.navigate("list")

    const [show, setShow] = React.useState(false);
    const handleClick = () => setShow(!show);

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
          headerTx='changePasswordScreen.title'
        >

          <FormControl isRequired >
            <FormControl.Label>New Password</FormControl.Label>
            <Input
              type={show ? 'text' : 'password'}
              InputRightElement={
                <Button ml={1} roundedLeft={0} roundedRight="md" onPress={handleClick}>
                  {show ? <Entypo name="eye-with-line" size={24} color={useColorModeValue('black', 'gray.300')} /> : <Entypo name="eye" size={24} color={useColorModeValue('black', 'gray.300')} />}
                </Button>
              }
              placeholder="New Password"
            />
            <FormControl.ErrorMessage>Something is wrong.</FormControl.ErrorMessage>
          </FormControl>

          <Spacer />

          <FormControl >
            <Button
              size="md"
              height="48px"
              width="200px"
              borderColor="green.500"
              mx={{ base: 'auto', md: 0 }}
              onPress={listScreen}
            >
              Change Password
            </Button>
          </FormControl>

          <Spacer />

        </LayoutForm>

      </LayoutMain>


    );

  });

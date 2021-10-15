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
  useColorModeValue
} from 'native-base';
import { LayoutMain, LayoutForm } from '../../layouts';
import { Icon } from "../../components/icon/icon"
import { Entypo } from '@expo/vector-icons';

export const LogInScreen: FC<StackScreenProps<NavigatorParamList, "logIn">> = observer(

  ({ navigation }) => {

    const goBack = () => navigation.goBack()
    const profileScreen = () => navigation.navigate("profile")
    const listScreen = () => navigation.navigate("list")
    const resetPasswordScreen = () => navigation.navigate("resetPassword")

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
          headerTx='logInScreen.title'
        >

          <FormControl isRequired >
            <FormControl.Label>E-mail</FormControl.Label>
            <Input
              InputLeftElement={
                <NativeIcon
                  as={<Entypo name="mail" />}
                  size="md"
                  m={2}
                  color={useColorModeValue('black', 'gray.300')}
                />
              }
              placeholder="E-mail address"
            />
            <FormControl.ErrorMessage>Something is wrong.</FormControl.ErrorMessage>
          </FormControl>

          <FormControl isRequired >
            <FormControl.Label>Password</FormControl.Label>
            <Input
              type={show ? 'text' : 'password'}
              InputRightElement={
                <Button ml={1} roundedLeft={0} roundedRight="md" onPress={handleClick}>
                  {show ? <Entypo name="eye-with-line" size={24} color={useColorModeValue('black', 'gray.300')} /> : <Entypo name="eye" size={24} color={useColorModeValue('black', 'gray.300')} />}
                </Button>
              }
              placeholder="Password"
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
              LOG IN
            </Button>
          </FormControl>


          <Spacer />

          <Text isTruncated alignSelf={{ base: 'center', md: 'flex-start' }} onPress={resetPasswordScreen} >Forgot your password?</Text>

        </LayoutForm>

      </LayoutMain>

    );
  });

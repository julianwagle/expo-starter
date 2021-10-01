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
import { LayoutMain, LayoutAccount } from '../../layouts';
import { Icon } from "../../components/icon/icon"
import { MaterialIcons, Entypo, Ionicons } from '@expo/vector-icons';

export const SignUpScreen: FC<StackScreenProps<NavigatorParamList, "signUp">> = observer(

  ({ navigation }) => {

    const goBack = () => navigation.goBack()
    const profileScreen = () => navigation.navigate("profile")
    const listScreen = () => navigation.navigate("demoList")
    const logInScreen = () => navigation.navigate("logIn")

    const [show, setShow] = React.useState(false);
    const handleClick = () => setShow(!show);

    return (

      <LayoutMain
        headerTx="welcomeScreen.poweredBy"
        onCenterPress={listScreen}
        leftIcon='true'
        onLeftPress={goBack}
        rightIcon='true'
        onRightPress={profileScreen}
      >

        <LayoutAccount
          headerTx='Sign Up'
        >

          <FormControl isRequired >
            <FormControl.Label>Username</FormControl.Label>
            <Input
              InputLeftElement={
                <NativeIcon
                  as={<Ionicons name="person" />}
                  size="md"
                  m={2}
                  color={useColorModeValue('black', 'gray.300')}
                />
              }
              placeholder="Username" />
            <FormControl.ErrorMessage>Something is wrong.</FormControl.ErrorMessage>
          </FormControl>

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

          <FormControl>
            <FormControl.Label>Phone number</FormControl.Label>
            <Input
              InputLeftElement={
                <NativeIcon
                  as={<MaterialIcons name="phone" />}
                  size="md"
                  m={2}
                  color={useColorModeValue('black', 'gray.300')}
                />
              }
              placeholder="Phone number"
            />
            <FormControl.ErrorMessage>Something is wrong.</FormControl.ErrorMessage>
          </FormControl>


          <FormControl isRequired >
            <FormControl.Label>Password</FormControl.Label>
            <Input
              mb={10}
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


          <FormControl >
            <VStack space={8} alignItems="center">
              <Text alignSelf={{ base: 'center', md: 'flex-start' }}>
                By signing up, you agree to the <Text underline onPress={listScreen}>Terms of Service</Text>.
              </Text>
            </VStack>
          </FormControl>

          <Spacer />

          <FormControl >
            <Button
              testID="demo-list-screen-button"
              size="md"
              height="48px"
              width="200px"
              borderColor="green.500"
              mx={{ base: 'auto', md: 0 }}
              onPress={listScreen}
            >
              SIGN UP
            </Button>
          </FormControl>

          <Spacer />

          <FormControl >
            <Text isTruncated alignSelf={{ base: 'center', md: 'flex-start' }} onPress={logInScreen}>Already have an account? </Text>
          </FormControl>

        </LayoutAccount>

      </LayoutMain>

    );

  });

import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { StackScreenProps } from "@react-navigation/stack"
import { NavigatorParamList } from "../../navigators"
import {
  Modal,
  Center,
  PinInput,
  Spacer,
  FormControl,
  Input,
  Button,
  Icon as NativeIcon,
  useColorModeValue
} from 'native-base';
import { LayoutMain, LayoutAccount } from '../../layouts';
import { Icon } from "../../components/icon/icon"
import { Entypo } from '@expo/vector-icons';

export const ResetPasswordScreen: FC<StackScreenProps<NavigatorParamList, "resetPassword">> = observer(

  ({ navigation }) => {

    const goBack = () => navigation.goBack()
    const profileScreen = () => navigation.navigate("profile")
    const listScreen = () => navigation.navigate("list")
    const changePasswordScreen = () => navigation.navigate("changePassword")

    const [show, setShow] = React.useState(false);
    const handleClick = () => setShow(!show);
    const [modalVisible, setModalVisible] = React.useState(false);

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

        <LayoutAccount
          headerTx='resetPasswordScreen.title'
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

          <Spacer />

          <Modal isOpen={modalVisible} onClose={setModalVisible}>
            <Modal.Content>
              {/* <Modal.CloseButton /> */}
              <Modal.Header>Please verify your identity</Modal.Header>
              <Modal.Body>
                <Center>
                  <FormControl >
                    {/* isInvalid */}
                    <FormControl.Label>An otp is send to number ending with 07.</FormControl.Label>
                    <PinInput mt={4} mb={4} alignItems="center" >
                      <PinInput.Field />
                      <PinInput.Field />
                      <PinInput.Field />
                      <PinInput.Field />
                      <PinInput.Field />
                      <PinInput.Field />
                    </PinInput>
                    <FormControl.ErrorMessage>Please Retry.</FormControl.ErrorMessage>
                  </FormControl>
                </Center>
              </Modal.Body>
              <Modal.Footer>
                <Button.Group variant="ghost" space={2}>
                  <Button onPress={
                    () => {
                      setModalVisible(!modalVisible);
                      changePasswordScreen();
                    }
                  }
                  >ENTER</Button>
                  <Button
                    onPress={() => {
                      setModalVisible(!modalVisible);

                    }}
                    colorScheme="secondary"
                  >CANCEL</Button>
                </Button.Group>
              </Modal.Footer>
            </Modal.Content>
          </Modal>

          <FormControl >
            <Button
              size="md"
              height="48px"
              width="200px"
              borderColor="green.500"
              mx={{ base: 'auto', md: 0 }}
              onPress={() => {
                setModalVisible(!modalVisible);
              }}
            >
              Reset Password
            </Button>
          </FormControl>

          <Spacer />
        </LayoutAccount>

      </LayoutMain>

    );
  });

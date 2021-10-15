import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { StackScreenProps } from "@react-navigation/stack"
import { NavigatorParamList } from "../../navigators"
import {
    Avatar,
    Spacer,
    HStack,
    FormControl,
    Input,
    TextArea,
    Button,
    Icon as NativeIcon,
    useColorModeValue,
    Pressable,
    Modal,
    Center
} from 'native-base';
import { LayoutMain, LayoutAccount } from '../../layouts';
import { Icon } from "../../components/icon/icon"
import { MaterialIcons, Entypo, Ionicons } from '@expo/vector-icons';

export const ContactScreen: FC<StackScreenProps<NavigatorParamList, "contact">> = observer(

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
                    headerTx='contactScreen.title'
                >


                    <FormControl >
                        <FormControl.Label>Full name</FormControl.Label>
                        <Input
                            InputLeftElement={
                                <NativeIcon
                                    as={<Ionicons name="person" />}
                                    size="md"
                                    m={2}
                                    color={useColorModeValue('black', 'gray.300')}
                                />
                            }
                            placeholder="Full name" />

                        <FormControl.ErrorMessage>Something is wrong.</FormControl.ErrorMessage>
                    </FormControl>


                    <FormControl >
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
                            placeholder="first.last@domain.ext"
                            placeholderTextColor={useColorModeValue('blueGray.400', 'blueGray.50')}
                        />
                        <FormControl.ErrorMessage>Something is wrong.</FormControl.ErrorMessage>
                    </FormControl>

                    <FormControl>
                        <FormControl.Label>Phone number (optional)</FormControl.Label>
                        <Input
                            InputLeftElement={
                                <NativeIcon
                                    as={<MaterialIcons name="phone" />}
                                    size="md"
                                    m={2}
                                    color={useColorModeValue('black', 'gray.300')}
                                />
                            }
                            placeholder="+1(234)567-8901"
                            placeholderTextColor={useColorModeValue('blueGray.400', 'blueGray.50')}
                        />
                        <FormControl.ErrorMessage>Something is wrong.</FormControl.ErrorMessage>
                    </FormControl>


                    <FormControl >
                        <FormControl.Label>Message</FormControl.Label>
                        <TextArea
                            h={20}
                            placeholder="Hey, I just wanted to reach out and tell you all how amaing your services are!"
                            placeholderTextColor={useColorModeValue('blueGray.400', 'blueGray.50')}
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
                            onPress={() => {
                                setModalVisible(!modalVisible);
                            }}
                        >
                            Send Message
                        </Button>

                    </FormControl>



                    <Modal isOpen={modalVisible} onClose={setModalVisible}>
                        <Modal.Content>
                            {/* <Modal.CloseButton /> */}
                            <Modal.Header>Thanks for reaching out!</Modal.Header>
                            <Modal.Body>
                                <Center>
                                    <FormControl >
                                        {/* isInvalid */}
                                        <FormControl.Label>You message is now being processsed and will be read soon.</FormControl.Label>

                                        <FormControl.ErrorMessage>Your message was not sent. There was an error.</FormControl.ErrorMessage>
                                    </FormControl>
                                </Center>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button.Group variant="ghost" space={2}>
                                    <Button onPress={
                                        () => {
                                            setModalVisible(!modalVisible);
                                            listScreen();
                                        }
                                    }
                                    >RETURN HOME</Button>

                                </Button.Group>
                            </Modal.Footer>
                        </Modal.Content>
                    </Modal>

                </LayoutAccount>

            </LayoutMain>


        );
    });

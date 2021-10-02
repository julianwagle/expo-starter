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

export const EditProfileScreen: FC<StackScreenProps<NavigatorParamList, "editProfile">> = observer(

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
                headerTx="welcomeScreen.poweredBy"
                onCenterPress={listScreen}
                leftIcon='true'
                onLeftPress={goBack}
                rightIcon='true'
                onRightPress={profileScreen}
                preset="scroll"
            >

                <LayoutAccount
                    headerTx='Edit profile'
                >
                    <Pressable
                        onPress={() => {
                            setModalVisible(!modalVisible);
                        }}
                        _web={{ cursor: 'pointer', }}
                    >

                        <Avatar
                            size={'xl'}
                            source={{
                                uri:
                                    'https://avatars.githubusercontent.com/u/54553693?s=400&u=2f1b4be04dc9b4e30d39f7fee1af434205fa05c2&v=4',
                            }}>
                            JW
                        </Avatar>
                    </Pressable>

                    <FormControl >
                        <FormControl.Label>Username</FormControl.Label>
                        <Input placeholder="Username" placeholderTextColor={useColorModeValue('blueGray.400', 'blueGray.50')} />
                        <FormControl.ErrorMessage>Something is wrong.</FormControl.ErrorMessage>
                    </FormControl>

                    <FormControl >
                        <FormControl.Label>Bio</FormControl.Label>
                        <TextArea h={20} placeholder="Apparently, this user prefers to keep an air of mystery about them." placeholderTextColor={useColorModeValue('blueGray.400', 'blueGray.50')} />
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
                            placeholder="+1(234)567-8901"
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
                            onPress={changePasswordScreen}
                        >
                            Reset Password
                        </Button>
                    </FormControl>

                    <Spacer />

                    <HStack
                        position="absolute"
                        top={3}
                        right={2}
                        space={2}
                        alignItems="center"
                    >

                        <Button
                            colorScheme="teal"
                            mr={2}
                            onPress={listScreen}
                        >
                            Save
                        </Button>

                    </HStack>

                    <Modal isOpen={modalVisible} onClose={setModalVisible}>
                        <Modal.Content>
                            {/* <Modal.CloseButton /> */}
                            <Modal.Header>This is temporary</Modal.Header>
                            <Modal.Body>
                                <Center>
                                    <FormControl >
                                        {/* isInvalid */}
                                        <FormControl.Label>This should be replaced with a form to upload a new image.</FormControl.Label>

                                        <FormControl.ErrorMessage>Please Retry.</FormControl.ErrorMessage>
                                    </FormControl>
                                </Center>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button.Group variant="ghost" space={2}>
                                    <Button onPress={
                                        () => {
                                            setModalVisible(!modalVisible);
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

                </LayoutAccount>

            </LayoutMain>


        );
    });

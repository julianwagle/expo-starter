import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { StackScreenProps } from "@react-navigation/stack"
import { NavigatorParamList } from "../../navigators"
import {
    Stack,
    Spacer,
    Button,
    Heading,
    Icon as NativeIcon,
    Text,
    HStack,
    Avatar,
    useColorModeValue,
} from 'native-base';
import { LayoutMain, LayoutAccount } from '../../layouts';
import { Icon } from "../../components/icon/icon"
import { FontAwesome5, MaterialIcons, Entypo } from '@expo/vector-icons';

export const ProfileScreen: FC<StackScreenProps<NavigatorParamList, "profile">> = observer(

    ({ navigation }) => {

        const goBack = () => navigation.goBack()
        const profileScreen = () => navigation.navigate("profile")
        const listScreen = () => navigation.navigate("demoList")
        const welcomeScreen = () => navigation.navigate("welcome")
        const editProfileScreen = () => navigation.navigate("editProfile")

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
                    headerTx='Profile'
                >
                    <Avatar
                        size={'xl'}
                        source={{
                            uri:
                                'https://avatars.githubusercontent.com/u/54553693?s=400&u=2f1b4be04dc9b4e30d39f7fee1af434205fa05c2&v=4',
                        }}
                    />
                    <Stack space={3}>
                        <Heading
                            size="lg"
                            color={useColorModeValue('blueGray.700', 'blueGray.100')}
                        >
                            Username
                        </Heading>
                        <Text
                            color={useColorModeValue('blueGray.500', 'blueGray.200')}
                            fontWeight="medium"
                            fontSize="xs"
                        >
                            Apparently, this user prefers to keep an air of mystery about them.
                        </Text>
                    </Stack>
                    <HStack
                        justifyContent="space-between"
                        alignItems="flex-end"
                        flexShrink={1}
                    >
                        <Stack space={3}>
                            <HStack space={3} alignItems="center" flexShrink={1}>
                                <NativeIcon
                                    as={<Entypo name="mail" />}
                                    size="md"
                                    m={2}
                                    color={useColorModeValue('black', 'gray.300')}
                                />
                                <Text
                                    isTruncated
                                    flexShrink={1}
                                    fontWeight="medium"
                                    color={useColorModeValue('blueGray.500', 'blueGray.200')}
                                >
                                    first.last@domain.ext
                                </Text>
                            </HStack>
                            <HStack space={3} alignItems="center">
                                <NativeIcon
                                    as={<MaterialIcons name="phone" />}
                                    size="md"
                                    m={2}
                                    color={useColorModeValue('black', 'gray.300')}
                                />
                                <Text
                                    isTruncated
                                    color={useColorModeValue('blueGray.500', 'blueGray.200')}
                                    fontWeight="medium"
                                >
                                    +1(234)567-8901
                                </Text>
                            </HStack>

                            <Spacer />




                            <Button
                                size="md"
                                height="48px"
                                width="200px"
                                borderColor="white"
                                mx={{ base: 'auto', md: 0 }}
                                colorScheme="teal"
                                _text={{ color: 'white' }}
                                onPress={listScreen}
                            >
                                Home
                            </Button>
                            <Button
                                size="md"
                                height="48px"
                                width="200px"
                                borderColor="white"
                                mx={{ base: 'auto', md: 0 }}
                                colorScheme="danger"
                                _text={{ color: 'white' }}
                                onPress={welcomeScreen}
                            >
                                Log out
                            </Button>



                            <Spacer />

                        </Stack>
                    </HStack>
                    <HStack
                        position="absolute"
                        top={3}
                        right={3}
                        space={2}
                        alignItems="center"
                    >

                        <NativeIcon
                            as={<FontAwesome5 name="edit" />}
                            size="md"
                            m={2}
                            color={useColorModeValue('black', 'gray.300')}
                            onPress={editProfileScreen}
                        />

                    </HStack>

                </LayoutAccount>

            </LayoutMain>

        );
    });

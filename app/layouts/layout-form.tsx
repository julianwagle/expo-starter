import React from 'react';
import {
    Box,
    Stack,
    VStack,
    useColorModeValue,
    Flex,
    Heading,
    useColorMode,
    Divider,
} from 'native-base';
import { translate } from "../i18n"

export const LayoutForm = ({
    headerTx,
    children,
}: any) => {

    const { colorMode, toggleColorMode } = useColorMode();
    const headerText = (headerTx && translate(headerTx))
    return (

        <Box
            shadow={1}
            bg={useColorModeValue('white', 'blueGray.700')}
            my={2}
            mx={3}
            borderRadius={16}
        >

            <VStack>

                <Heading
                    size="md"
                    p={4}
                    color={colorMode == 'dark' ? 'gray.100' : 'trueGray.700'}
                >
                    {headerText}
                </Heading>

                <Divider
                    bg={colorMode == 'dark' ? 'blueGray.500' : 'warmGray.200'}
                />

                <Flex
                    align="center"
                    p={6}
                    justify="center"
                    d="flex"
                >

                    <Stack
                        width="90%"
                        space={4}
                        px={4}
                    >

                        {children}

                    </Stack>

                </Flex>

            </VStack>

        </Box>

    );
};

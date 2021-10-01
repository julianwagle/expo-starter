import React from 'react';
import {
    useColorMode,
    Heading,
    HStack,
    Pressable,
    ArrowBackIcon,
} from 'native-base';

export const Header = ({
    navigation,
    title,
    navigateTo,
    _hStack,
}: any) => {
    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <>
            <HStack
                position="absolute"
                left={0}
                top={0}
                right={0}
                px={4}
                zIndex={-1}
                {..._hStack}
            >
                <HStack py={2} alignItems="center" w="100%">

                    <Pressable
                        onPress={() => { navigation && navigation.navigate(navigateTo); }}
                        _web={{ cursor: 'pointer', }}
                    >
                        {title && <ArrowBackIcon mx={2} />}
                    </Pressable>
                    <Heading
                        color={colorMode == 'dark' ? 'white' : 'gray.800'}
                        _web={{ py: 2 }}
                        isTruncated
                    >
                        {title ? title : 'Hi World'}
                    </Heading>
                </HStack>
            </HStack>
        </>
    );
};

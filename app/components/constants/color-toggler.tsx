import React from 'react';
import { Fab, useColorMode, Icon } from 'native-base';
import { Ionicons } from '@expo/vector-icons';

export const ColorToggler = () => {
    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <>
            <Fab
                shadow={7}
                variant="unstyled"
                _dark={{
                    bg: 'orange.50',
                    _hover: {
                        bg: 'orange.100',
                    },
                    _pressed: {
                        bg: 'orange.100',
                    },
                }}
                _light={{
                    bg: 'blueGray.900',
                    _hover: {
                        bg: 'blueGray.800',
                    },
                    _pressed: {
                        bg: 'blueGray.800',
                    },
                }}
                p={3}
                icon={
                    <Icon
                        as={Ionicons}
                        _dark={{ name: 'sunny', color: 'orange.400' }}
                        _light={{ name: 'moon', color: 'blueGray.100' }}
                        size="md"
                    />
                }
                onPress={toggleColorMode}
            />
        </>
    );
};

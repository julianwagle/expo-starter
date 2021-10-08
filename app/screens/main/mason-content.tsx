import React from "react"

import {
    Box,
    Badge,
    Heading,
    Image as NativeImage,
    Pressable,
    Text as NativeText,
    Stack,
    useColorModeValue
} from 'native-base';

export const MasonContent = ({
    character, navigation
}: any) => {

    const combos = [
        [['lightBlue.400', 'cyan.200'], ['lightBlue.600', 'cyan.300']],
        [['cyan.400', 'teal.200'], ['cyan.600', 'teal.300']],
        [['orange.400', 'amber.200'], ['orange.600', 'amber.300']],
        [['blue.800', 'lightBlue.300'], ['blue.900', 'lightBlue.500']],
        [['blue.800', 'lightBlue.300'], ['blue.900', 'lightBlue.500']],
        [['violet.800', 'lightBlue.300'], ['violet.900', 'lightBlue.500']],
        [['emerald.400', 'lime.200'], ['emerald.600', 'lime.300']],
        [['fuchsia.800', 'pink.300'], ['fuchsia.900', 'pink.500']]
    ]
    var selections = combos[Math.floor(Math.random() * combos.length)]
    const lightGrad = selections[0]
    const darkGrad = selections[1]
    const gradColors = useColorModeValue(lightGrad, darkGrad) || ['gray.700', 'white',];

    return (

        <Pressable
            key={character.name}
            flex={1}
            onPress={
                () => {
                    navigation.push('detail', { name: character.name });
                }
            }
        >

            <Box
                flexDirection={{ base: 'column', md: 'row' }}
                shadow={8}
                rounded="xl"
                overflow="hidden"
                w="100%"
                mb={4}
                bg={{
                    linearGradient: {
                        colors: gradColors,
                        start: [0, 0],
                        end: [0, 1],
                    },
                }}

            >

                <Box width={{ md: '30%' }} height={{ base: 32, md: '100%' }}>

                    <NativeImage
                        key={character.image}
                        source={{ uri: character.image }}
                        height={'100%'}
                        width={'100%'}
                        alt={character.name}
                    />

                </Box>

                <Stack p={3} space={2} minW={32}>

                    <NativeText fontSize="xs" fontWeight="semibold">
                        {character.species}
                    </NativeText>

                    <Stack space={1}>

                        <Heading size="sm" >{character.name}</Heading>

                        <NativeText
                            fontWeight="medium"
                        >
                            <Badge colorScheme={character.statusColor} mr={1} rounded="md">
                                {character.status}
                            </Badge>
                        </NativeText>

                    </Stack>
                </Stack>

            </Box>
        </Pressable>

    );
};

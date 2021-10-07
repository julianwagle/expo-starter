import React from "react"

import {
    Box,
    Badge,
    Heading,
    Image as NativeImage,
    Pressable,
    Text as NativeText,
    Stack,
} from 'native-base';

export const DetailMoreContent = ({
    character, navigation
}: any) => {

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
                    <NativeText fontSize="xs" color="red.400" fontWeight="semibold">
                        {character.species}
                    </NativeText>
                    <Stack space={1}>
                        <Heading size="sm">{character.name}</Heading>
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

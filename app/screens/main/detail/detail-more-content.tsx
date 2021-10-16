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
    item, navigation
}: any) => {

    return (

        <Pressable
            key={item.name}
            flex={1}
            onPress={
                () => {
                    navigation.push('detail', { name: item.name });
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
                        key={item.image}
                        source={{ uri: item.image }}
                        height={'100%'}
                        width={'100%'}
                        alt={item.name}
                    />

                </Box>

                <Stack p={3} space={2} minW={32}>
                    <NativeText fontSize="xs" color="red.400" fontWeight="semibold">
                        {item.species}
                    </NativeText>
                    <Stack space={1}>
                        <Heading size="sm">{item.name}</Heading>
                        <NativeText
                            fontWeight="medium"
                        >
                            <Badge colorScheme={item.statusColor} mr={1} rounded="md">
                                {item.status}
                            </Badge>
                        </NativeText>

                    </Stack>
                </Stack>

            </Box>
        </Pressable>

    );
};

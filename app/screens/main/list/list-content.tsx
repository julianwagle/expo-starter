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

export const ListContent = ({
    item, navigation
}: any) => {

    return (

        <Pressable
            flex={1}
            onPress={() =>
                navigation.navigate('detail', { name: String(item.name) })}
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
                        source={{ uri: item.image }}
                        height={'100%'}
                        width={'100%'}
                        alt={item.name}
                    />

                </Box>

                <Stack p={3} space={2} minW={32}>


                    <Heading size="lg">
                        {item.name}
                    </Heading>

                    <NativeText fontWeight="medium" >
                        <Badge colorScheme={item.statusColor} mr={1} rounded="md">
                            {item.status}
                        </Badge>
                        - {item.species}
                    </NativeText>


                    <NativeText fontSize="sm" mt={3}>
                        Last known location:
                    </NativeText>

                    <NativeText fontWeight="medium" >
                        {item.locationName}
                    </NativeText>

                    <NativeText fontSize="sm" mt={3}>
                        First seen in:
                    </NativeText>

                    <NativeText fontWeight="medium" >
                        {item.originName}
                    </NativeText>

                </Stack>

            </Box>
        </Pressable>



    );
};

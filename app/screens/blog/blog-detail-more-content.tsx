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

export const BlogDetailMoreContent = ({
    item, navigation
}: any) => {

    return (

        <Pressable
            key={item.title}
            flex={1}
            onPress={() =>
                navigation.push('blogDetail', { id: String(item.id) })}
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
                        alt={item.title}
                    />

                </Box>

                <Stack p={3} space={2} minW={32}>
                    <Stack space={1}>
                        <Heading size="sm">{item.title}</Heading>


                        <NativeText noOfLines={3}>
                            {item.description}
                        </NativeText>


                    </Stack>
                </Stack>

            </Box>
        </Pressable>

    );
};

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

export const BlogListContent = ({
    item, navigation
}: any) => {

    return (

        <Pressable
            flex={1}
            onPress={() =>
                navigation.navigate('blogDetail', { id: String(item.id) })}
        >

            <Box
                w="100%"
                shadow={8}
                mb={8}
                mx={{ base: 'auto', md: 4 }}
                rounded="xl"
                overflow="hidden"
            >
                <NativeImage
                    key={item.title}
                    h={64}
                    source={{ uri: item.image }}
                    alt={item.title}
                />
                <Stack p={4} space={2}>
                    <Heading>
                        {item.title}
                    </Heading>
                    <NativeText>
                        {item.description}
                    </NativeText>
                </Stack>
            </Box>


        </Pressable>



    );
};

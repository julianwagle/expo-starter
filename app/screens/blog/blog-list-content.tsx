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
                navigation.navigate('detail', { id: String(item.id) })}
        >

            <Box rounded="pill" w="100%" shadow={4} mx={{ base: 'auto', md: 0 }}>
                <NativeImage
                    h={64}
                    roundedTop="pill"
                    source={{ uri: item.image }}
                    alt={item.title}
                />
                <Stack p={4} space={2}>
                    <Heading>
                        {item.title}
                    </Heading>
                    <NativeText>
                        {item.description}
                        <NativeText>
                            more
                        </NativeText>
                    </NativeText>
                </Stack>
            </Box>


        </Pressable>



    );
};

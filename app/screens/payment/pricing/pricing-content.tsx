import React from "react"

import {
    Box,
    Badge,
    Checkbox,
    Heading,
    Image as NativeImage,
    Pressable,
    Text as NativeText,
    Stack,
    useColorModeValue,
    FlatList
} from 'native-base';

export const PricingContent = ({
    item, navigation
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
            key={item.title}
            flex={1}
            onPress={
                () => {
                    navigation.push('payment', { plan: item.title });
                }
            }
        >

            <Box
                flexDirection={{ base: 'column', md: 'row' }}
                shadow={8}
                rounded="xl"
                overflow="hidden"
                w="100%"
                mb={8}
                bg={{
                    linearGradient: {
                        colors: gradColors,
                        start: [0, 0],
                        end: [0, 1],
                    },
                }}

            >

                <Box w="100%" shadow={4} mx={{ base: 'auto', md: 0 }} >
                    <NativeImage
                        key={item.image}
                        h={64}
                        source={{ uri: item.image }}
                        alt={item.title}
                    />
                    <Stack p={4} space={2}>
                        <Heading color={useColorModeValue('blueGray.700', 'blueGray.100')}>
                            {item.title}
                        </Heading>
                        <NativeText color={useColorModeValue('blueGray.500', 'blueGray.200')}>
                            {item.description}
                        </NativeText>
                    </Stack>



                    <FlatList
                        data={[...item.perks]}
                        renderItem={({ item }) => (
                            <Box px={5} py={2} rounded="md" my={2} >
                                {item}
                            </Box>
                        )}
                        keyExtractor={(item) => String(item.id)}
                    />


                </Box>


            </Box>


        </Pressable>

    );
};

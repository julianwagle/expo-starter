import React, { useEffect, FC } from "react"
import { FlatList, ViewStyle } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { observer } from "mobx-react-lite"
import { spacing } from "../../theme"
import { useStores } from "../../models"
import { NavigatorParamList } from "../../navigators"
import { LayoutMain } from '../../layouts';
import {
  Box,
  Text as NativeText,
  Image as NativeImage,
  Heading,
  Stack,
  Badge,
  Pressable
} from 'native-base';

const FLAT_LIST: ViewStyle = {
  paddingHorizontal: spacing[4],
}

export const ListScreen: FC<StackScreenProps<NavigatorParamList, "list">> = observer(

  ({ navigation }) => {

    const goBack = () => navigation.goBack()
    const profileScreen = () => navigation.navigate("profile")
    const listScreen = () => navigation.navigate("list")

    const { characterStore } = useStores()
    const { characters } = characterStore

    useEffect(() => {
      async function fetchData() {
        await characterStore.getCharacters()
      }

      fetchData()
    }, [])

    return (
      <LayoutMain
        headerTx="common.companyNameCaps"
        onCenterPress={listScreen}
        leftIcon='true'
        onLeftPress={goBack}
        rightIcon='true'
        onRightPress={profileScreen}
        preset="scroll"

      >

        <FlatList
          contentContainerStyle={FLAT_LIST}
          data={[...characters]}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => (

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



          )}
        />

      </LayoutMain >

    )
  },
)


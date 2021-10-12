import React, { useEffect, FC } from "react"
import { FlatList, ViewStyle } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { observer } from "mobx-react-lite"
import { spacing } from "../../theme"
import { useStores } from "../../models"
import { NavigatorParamList } from "../../navigators"
import { LayoutMain } from '../../layouts'
import { ListContent } from './list-content'

const FLAT_LIST: ViewStyle = {
  paddingHorizontal: spacing[4],
}

export const ListScreen: FC<StackScreenProps<NavigatorParamList, "list">> = observer(

  ({ navigation }) => {

    const goBack = () => navigation.goBack()
    const profileScreen = () => navigation.navigate("profile")
    // const listScreen = () => navigation.navigate("list")
    const masonScreen = () => navigation.navigate("mason")

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
        onCenterPress={masonScreen}
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

            <ListContent
              item={item}
              navigation={navigation}
            />



          )}
        />

      </LayoutMain >

    )
  },
)


import React, { useEffect, FC } from "react"
import { ScrollView } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { observer } from "mobx-react-lite"
import { useStores } from "../../../models"
import { NavigatorParamList } from "../../../navigators"
import { LayoutMain, LayoutMason } from '../../../layouts';
import {
  useBreakpointValue,
} from 'native-base';
import { MasonContent } from './mason-content'


export const MasonScreen: FC<StackScreenProps<NavigatorParamList, "mason">> = observer(

  ({ navigation }) => {

    const goBack = () => navigation.goBack()
    const profileScreen = () => navigation.navigate("profile")
    const listScreen = () => navigation.navigate("list")

    const { characterStore } = useStores()
    const { characters } = characterStore
    function getRelatedItems(characters: any) {
      let masonItems = [];
      for (let i = 0; i < characters.length; i++) {
        masonItems.push(
          <MasonContent
            character={characters[i]}
            navigation={navigation}
          />
        );
      }
      return masonItems
    }
    const masonItems = getRelatedItems(characters);

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

        <ScrollView
          contentContainerStyle={{ width: '100%' }}
          showsVerticalScrollIndicator={false}
        >
          <LayoutMason
            column={useBreakpointValue({
              base: [1, 1],
              sm: [1, 1],
              md: [1, 1, 1],
              lg: [1, 1, 1, 1],
              xl: [1, 1, 1, 1, 1],
            })}
            _hStack={{
              space: 4,
              mb: 4,
              pt: '70px',
            }}
            _vStack={{ space: 4 }}
          >

            {masonItems}

          </LayoutMason>

        </ScrollView>

      </LayoutMain >

    )
  },
)


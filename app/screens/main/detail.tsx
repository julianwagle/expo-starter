import React, { FC } from "react"
import { StackScreenProps } from "@react-navigation/stack"
import { observer } from "mobx-react-lite"
import { NavigatorParamList } from "../../navigators"
import { LayoutMain } from '../../layouts';


export const DetailScreen: FC<StackScreenProps<NavigatorParamList, "detail">> = observer(
  ({ navigation }) => {
    const goBack = () => navigation.goBack()
    const profileScreen = () => navigation.navigate("profile")
    const listScreen = () => navigation.navigate("list")

    return (
      <LayoutMain
        headerTx="welcomeScreen.poweredBy"
        onCenterPress={listScreen}
        leftIcon='true'
        onLeftPress={goBack}
        rightIcon='true'
        onRightPress={profileScreen}
        preset="scroll"

      >

      </LayoutMain>

    )
  },
)

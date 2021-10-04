import React, { FC } from "react"
import { StackScreenProps } from "@react-navigation/stack"
import { observer } from "mobx-react-lite"
import { NavigatorParamList } from "../../navigators"
import { LayoutMain } from '../../layouts';

export const DetailScreen: FC<StackScreenProps<NavigatorParamList, "detail">> = observer(
  ({ route, navigation }) => {
    const details: any = route.params || new Map();
    const name: string = details.name || 'Undefined name';

    const goBack = () => navigation.goBack()
    const profileScreen = () => navigation.navigate("profile")
    const listScreen = () => navigation.navigate("list")

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

        {name}

      </LayoutMain>

    )
  },
)

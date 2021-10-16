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
import { PricingContent } from './pricing-content'
import { mapping } from './pricing-map';


export const PricingScreen: FC<StackScreenProps<NavigatorParamList, "pricing">> = observer(

  ({ navigation }) => {

    const goBack = () => navigation.goBack()
    const profileScreen = () => navigation.navigate("profile")
    const listScreen = () => navigation.navigate("list")

    var pricingOptions = []
    for (let i = 0; i < mapping.length; i++) {
      pricingOptions.push(
        <PricingContent
          item={mapping[i]}
          navigation={navigation}
        />

      );

    }

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
              base: [1],
              sm: [1],
              md: [1, 1, 1],
            })}
            _hStack={{
              space: 4,
              mb: 4,
              pt: '70px',
            }}
            _vStack={{ space: 4 }}
          >

            {pricingOptions}

          </LayoutMason>

        </ScrollView>

      </LayoutMain >

    )
  },
)


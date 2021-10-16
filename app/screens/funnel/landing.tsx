import React, { FC } from "react"
import { StackScreenProps } from "@react-navigation/stack"
import { observer } from "mobx-react-lite"
import { NavigatorParamList } from "../../navigators"
import { Button, VStack, Box } from 'native-base';
import { LayoutMain } from '../../layouts'

export const LandingScreen: FC<StackScreenProps<NavigatorParamList, "landing">> = observer(
  ({ navigation }) => {

    const listScreen = () => navigation.navigate("list")
    const profileScreen = () => navigation.navigate("profile")

    return (
      <LayoutMain
        headerTx="common.companyNameCaps"
        onCenterPress={listScreen}
        rightIcon='true'
        onRightPress={profileScreen}
        preset="scroll"
        navigation_={navigation}

      >

        <Box
          px={4}
          mx="auto"
          pt={navigation ? '70px' : 0}
          w={{ base: '100%', md: '768px', lg: '1000px', xl: '1080px' }}
        >


        </Box>
      </LayoutMain >
    )
  },
)

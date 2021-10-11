import React, { FC } from "react"
import { View, ViewStyle, TextStyle, SafeAreaView } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { observer } from "mobx-react-lite"
import {
  Button,
  Header,
  Screen,
  Text
} from "../../components"
import { color, spacing, typography } from "../../theme"
import { NavigatorParamList } from "../../navigators"
import { Button as NativeButton, Stack, Box } from 'native-base';

const FULL: ViewStyle = { flex: 1 }
const CONTAINER: ViewStyle = {
  backgroundColor: color.transparent,
  paddingHorizontal: spacing[4],
  paddingTop: spacing[4],
}
const TEXT: TextStyle = {
  color: color.palette.white,
  fontFamily: typography.primary,
}
const BOLD: TextStyle = { fontWeight: "bold" }
const HEADER: TextStyle = {
  paddingTop: spacing[3],
  paddingBottom: spacing[4] + spacing[1],
  paddingHorizontal: 0,
}
const HEADER_TITLE: TextStyle = {
  ...TEXT,
  ...BOLD,
  fontSize: 12,
  lineHeight: 15,
  textAlign: "center",
  letterSpacing: 1.5,
}
const TITLE_WRAPPER: TextStyle = {
  ...TEXT,
  textAlign: "center",
  marginBottom: 8
}
const TITLE: TextStyle = {
  ...TEXT,
  ...BOLD,
  fontSize: 28,
  lineHeight: 38,
  textAlign: "center",
}


const CONTINUE: ViewStyle = {
  paddingVertical: spacing[4],
  paddingHorizontal: spacing[4],
  backgroundColor: color.palette.deepPurple,
}
const SMALL_SPACED_TEXT: TextStyle = {
  ...TEXT,
  ...BOLD,
  fontSize: 13,
  letterSpacing: 2,
  textAlign: "center",

}

const MEDIUM_SPACED_TEXT: TextStyle = {
  ...TEXT,
  ...BOLD,
  fontSize: 18,
  letterSpacing: 2,
  textAlign: "center",
  paddingTop: spacing[4],

}


const FOOTER_CONTENT: ViewStyle = {
  paddingVertical: spacing[4],
  paddingHorizontal: spacing[4],
}

export const LandingScreen: FC<StackScreenProps<NavigatorParamList, "landing">> = observer(
  ({ navigation }) => {
    const nextScreen = () => navigation.navigate("signUp")

    return (
      <View style={FULL}>
        <Header headerTx="common.companyNameCaps" style={HEADER} titleStyle={HEADER_TITLE} />

        <Screen style={CONTAINER} preset="scroll" backgroundColor={color.transparent}>
          <Text style={SMALL_SPACED_TEXT} preset="header" tx="common.companyMotoShort" />
          <Text style={TITLE_WRAPPER}>
            <Text style={TITLE} preset="header" tx="common.companyMotoMedium" />
          </Text>
          <Text style={MEDIUM_SPACED_TEXT} preset="header" tx="common.companyMotoLong" />

        </Screen>


        <SafeAreaView>
          <View style={FOOTER_CONTENT}>
            <Box
              px={4}
              mx="auto"
              pt={navigation ? '70px' : 0}
              w={{ base: '100%', md: '768px', lg: '1000px', xl: '1080px' }}
            >
              <Button
                testID="next-screen-button"
                style={CONTINUE}
                textStyle={SMALL_SPACED_TEXT}
                tx="common.continue"
                onPress={nextScreen}
              />
            </Box>
          </View>
        </SafeAreaView>
      </View>
    )
  },
)

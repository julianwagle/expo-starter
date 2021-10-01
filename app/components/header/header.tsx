import React from "react"
import { View, ViewStyle, TextStyle } from "react-native"
import { spacing } from "../../theme"
import { translate } from "../../i18n/"
import {
  useColorMode,
  Heading,
  HStack,
  Pressable,
  ArrowBackIcon,
  Avatar
} from 'native-base';

// import { ArrowLeft } from "../icon/icons/arrow-left"

const ROOT_VIEW: ViewStyle = {
  alignItems: "center",
  paddingTop: spacing[5],
  paddingBottom: spacing[5],
}
const ROOT_TEXT: TextStyle = {
  paddingTop: spacing[5],
  paddingBottom: spacing[5] - 1,
}
const TITLE_VIEW_HOME: ViewStyle = { flex: 1, alignItems: "center" }
// const TITLE_VIEW_ARROW: ViewStyle = { flex: 0.9, alignItems: "center" }
const TITLE_TEXT: TextStyle = { textAlign: "center" }

export const Header = ({
  leftIcon,
  onLeftPress,
  rightIcon,
  onRightPress,
  headerTx,
  onCenterPress
}: any) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const headerText = (headerTx && translate(headerTx)) || "Ignition"
  return (
    <>
      <View style={[ROOT_VIEW, ROOT_TEXT]}>
        <HStack alignItems="center" w="100%">

          {leftIcon ? (
            <Pressable onPress={onLeftPress} _web={{ cursor: 'pointer', }} >
              <ArrowBackIcon ml={2} />
            </Pressable>
          ) : (<View />)}

          <View style={TITLE_VIEW_HOME}>
            <Pressable onPress={onCenterPress} _web={{ cursor: 'pointer', }} >

              <Heading
                color={colorMode == 'dark' ? 'white' : 'gray.800'}
                isTruncated
                style={TITLE_TEXT}
              >
                {headerText}
              </Heading>
            </Pressable>
          </View>

          {rightIcon ? (
            <Pressable onPress={onRightPress} _web={{ cursor: 'pointer', }} >
              <Avatar source={{ uri: 'https://avatars.githubusercontent.com/u/54553693?s=400&u=2f1b4be04dc9b4e30d39f7fee1af434205fa05c2&v=4', }} >
                JW
              </Avatar>
            </Pressable>
          ) : (
            <View />
          )}

        </HStack>
      </View>

    </>
  );
};


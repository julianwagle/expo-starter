import React from "react"
import { ImageStyle, TextStyle, View, ViewStyle } from "react-native"
import {
    Text,
    AutoImage as Image,
} from ".."
import { color, spacing } from "../../theme"
export const logoIgnite = require("./images/logo-ignite.png")
export const heart = require("./images/heart.png")


const LOVE_WRAPPER: ViewStyle = {
    backgroundColor: color.transparent,
    marginTop: 15,
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
}
const LOVE: TextStyle = {
    fontSize: 15,
    lineHeight: 22,
}
const HEART: ImageStyle = {
    marginHorizontal: spacing[2],
    width: 10,
    height: 10,
    resizeMode: "contain",
}

export const Footer = () => {
    return (
        <View style={LOVE_WRAPPER}>
            <Text style={LOVE} text="Made with" />
            <Image source={heart} style={HEART} />
            <Text style={LOVE} text="by Infinite Red" />
        </View>
    )
}
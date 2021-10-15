import React, { FC } from "react"
import { FlatList, ViewStyle } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { observer } from "mobx-react-lite"
import { spacing } from "../../../theme"
import { NavigatorParamList } from "../../../navigators"
import { LayoutMain } from '../../../layouts'
import { BlogListContent } from './blog-list-content'
import { mapping } from '../blog-map';

const FLAT_LIST: ViewStyle = {
    paddingHorizontal: spacing[4],
}

export const BlogListScreen: FC<StackScreenProps<NavigatorParamList, "blogList">> = observer(

    ({ navigation }) => {

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

                <FlatList
                    contentContainerStyle={FLAT_LIST}
                    data={[...mapping]}
                    keyExtractor={(item) => String(item.id)}
                    renderItem={({ item }) => (

                        <BlogListContent
                            item={item}
                            navigation={navigation}
                        />



                    )}
                />

            </LayoutMain >

        )
    },
)


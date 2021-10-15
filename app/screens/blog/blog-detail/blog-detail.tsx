import React, { FC } from "react"
import { StackScreenProps } from "@react-navigation/stack"
import { observer } from "mobx-react-lite"
import { NavigatorParamList } from "../../../navigators"
import { LayoutMain } from '../../../layouts'
import {
  HStack,
  Heading,
} from 'native-base';
import { mapping } from '../blog-map';
import { BlogDetailMoreContent } from './blog-detail-more-content'
import { getItemFromArrOfMaps } from '../../../utils/get-item-from-arr-of-maps'
import { getNextItemsFromArrOfMaps } from '../../../utils/get-next-items-from-arr-of-maps'


export const BlogDetailScreen: FC<StackScreenProps<NavigatorParamList, "blogDetail">> = observer(
  ({ route, navigation }) => {

    const goBack = () => navigation.goBack()
    const profileScreen = () => navigation.navigate("profile")
    const listScreen = () => navigation.navigate("list")

    const passedParams: any = route.params || new Map();
    const passedID: string = passedParams.id || '1';
    // const item = mapping[passedID];

    const getItemResp = getItemFromArrOfMaps(mapping, 'id', passedID);
    const item = getItemResp[0];
    const itemCount = getItemResp[1];

    const itemQuant = 3
    const nextItemIndexs = getNextItemsFromArrOfMaps(mapping, itemCount, itemQuant);

    let relatedItems = [];
    for (let i = 0; i < itemQuant; i++) {
      var count = nextItemIndexs[i];
      relatedItems.push(
        <BlogDetailMoreContent
          item={mapping[count]}
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


        <item.article.BlogDetail
          item={item}
        />

        <Heading mb={4} mt={10}>
          More Content
        </Heading>
        <HStack mx={{ base: 'auto', md: 0 }} space={2} mb={8} >
          {relatedItems}
        </HStack>



      </LayoutMain>

    )
  },
)

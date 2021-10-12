import React, { FC } from "react"
import { StackScreenProps } from "@react-navigation/stack"
import { observer } from "mobx-react-lite"
import { NavigatorParamList } from "../../../navigators"
import { LayoutMain } from '../../../layouts'
import {
    HStack,
    Heading,
    Image as NativeImage,
    Text as NativeText,
} from 'native-base';
import { mapping } from '../blog-list-map';

export const DetailScreen: FC<StackScreenProps<NavigatorParamList, "detail">> = observer(
    ({ route, navigation }) => {

        const goBack = () => navigation.goBack()
        const profileScreen = () => navigation.navigate("profile")
        const listScreen = () => navigation.navigate("list")

        const passedParams: any = route.params || new Map();
        const passedID: string = passedParams.id || '0';
        const item = mapping[passedID];

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



                <Heading mb={4} mt={10} key="HeadingMain">
                    {item.title}
                </Heading>

                <NativeText fontSize="xl" mb={4} >
                    in principio creavit Deus caelum et terram
                    terra autem erat inanis et vacua et tenebrae super faciem abyssi et spiritus Dei ferebatur super aquas
                    dixitque Deus fiat lux et facta est lux
                    et vidit Deus lucem quod esset bona et divisit lucem ac tenebras
                    appellavitque lucem diem et tenebras noctem factumque est vespere et mane dies unus
                </NativeText>

                <NativeText fontSize="xl" mb={4} >
                    dixit quoque Deus fiat firmamentum in medio aquarum et dividat aquas ab aquis
                    et fecit Deus firmamentum divisitque aquas quae erant sub firmamento ab his quae erant super firmamentum et factum est ita
                    vocavitque Deus firmamentum caelum et factum est vespere et mane dies secundus
                    dixit vero Deus congregentur aquae quae sub caelo sunt in locum unum et appareat arida factumque est ita
                </NativeText>


                <NativeImage
                    key={item.image}
                    h={64}
                    rounded="xl"
                    source={{
                        uri: item.image,
                    }}
                    alt={item.title}
                />

                <Heading mb={4} mt={10}>
                    Heading Two
                </Heading>

                <NativeText fontSize="xl" mb={4} >
                    et vocavit Deus aridam terram congregationesque aquarum appellavit maria et vidit Deus quod esset bonum
                    et ait germinet terra herbam virentem et facientem semen et lignum pomiferum faciens fructum iuxta genus suum cuius semen in semet ipso sit super terram et factum est ita
                    et protulit terra herbam virentem et adferentem semen iuxta genus suum lignumque faciens fructum et habens unumquodque sementem secundum speciem suam et vidit Deus quod esset bonum
                    factumque est vespere et mane dies tertius
                    dixit autem Deus fiant luminaria in firmamento caeli ut dividant diem ac noctem et sint in signa et tempora et dies et annos
                </NativeText>

                <NativeText fontSize="xl" mb={4} >
                    ut luceant in firmamento caeli et inluminent terram et factum est ita
                    fecitque Deus duo magna luminaria luminare maius ut praeesset diei et luminare minus ut praeesset nocti et stellas
                    et posuit eas in firmamento caeli ut lucerent super terram
                    et praeessent diei ac nocti et dividerent lucem ac tenebras et vidit Deus quod esset bonum
                    et factum est vespere et mane dies quartus
                </NativeText>


                <Heading mb={4} mt={10}>
                    More Content
                </Heading>
                <HStack mx={{ base: 'auto', md: 0 }} space={2} mb={8} >
                    {/* {relatedItems} */}
                </HStack>



            </LayoutMain>

        )
    },
)

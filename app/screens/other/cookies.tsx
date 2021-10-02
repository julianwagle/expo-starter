import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { StackScreenProps } from "@react-navigation/stack"
import { NavigatorParamList } from "../../navigators"
import {
    Box,
    Text,
    Heading,
} from 'native-base';
import { LayoutMain, LayoutAccount } from '../../layouts';
import { Icon } from "../../components/icon/icon"

export const CookiesScreen: FC<StackScreenProps<NavigatorParamList, "cookies">> = observer(

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

                <LayoutAccount
                    headerTx='Cookie policy'
                >

                    <Box alignSelf={{ base: 'center', md: 'flex-start' }}>

                        <Heading mb={4}>
                            Heading One
                        </Heading>

                        <Text fontSize="xl" mb={4} >
                            in principio creavit Deus caelum et terram
                            terra autem erat inanis et vacua et tenebrae super faciem abyssi et spiritus Dei ferebatur super aquas
                            dixitque Deus fiat lux et facta est lux
                            et vidit Deus lucem quod esset bona et divisit lucem ac tenebras
                            appellavitque lucem diem et tenebras noctem factumque est vespere et mane dies unus
                        </Text>

                        <Text fontSize="xl" mb={4} >
                            dixit quoque Deus fiat firmamentum in medio aquarum et dividat aquas ab aquis
                            et fecit Deus firmamentum divisitque aquas quae erant sub firmamento ab his quae erant super firmamentum et factum est ita
                            vocavitque Deus firmamentum caelum et factum est vespere et mane dies secundus
                            dixit vero Deus congregentur aquae quae sub caelo sunt in locum unum et appareat arida factumque est ita
                        </Text>

                        <Heading mb={4}>
                            Heading Two
                        </Heading>

                        <Text fontSize="xl" mb={4} >
                            et vocavit Deus aridam terram congregationesque aquarum appellavit maria et vidit Deus quod esset bonum
                            et ait germinet terra herbam virentem et facientem semen et lignum pomiferum faciens fructum iuxta genus suum cuius semen in semet ipso sit super terram et factum est ita
                            et protulit terra herbam virentem et adferentem semen iuxta genus suum lignumque faciens fructum et habens unumquodque sementem secundum speciem suam et vidit Deus quod esset bonum
                            factumque est vespere et mane dies tertius
                            dixit autem Deus fiant luminaria in firmamento caeli ut dividant diem ac noctem et sint in signa et tempora et dies et annos
                        </Text>

                        <Text fontSize="xl" mb={4} >
                            ut luceant in firmamento caeli et inluminent terram et factum est ita
                            fecitque Deus duo magna luminaria luminare maius ut praeesset diei et luminare minus ut praeesset nocti et stellas
                            et posuit eas in firmamento caeli ut lucerent super terram
                            et praeessent diei ac nocti et dividerent lucem ac tenebras et vidit Deus quod esset bonum
                            et factum est vespere et mane dies quartus
                        </Text>

                        <Heading mb={4}>
                            Heading Three
                        </Heading>

                        <Text fontSize="xl" mb={4} >
                            dixit etiam Deus producant aquae reptile animae viventis et volatile super terram sub firmamento caeli
                            creavitque Deus cete grandia et omnem animam viventem atque motabilem quam produxerant aquae in species suas et omne volatile secundum genus suum et vidit Deus quod esset bonum
                            benedixitque eis dicens crescite et multiplicamini et replete aquas maris avesque multiplicentur super terram
                            et factum est vespere et mane dies quintus
                            dixit quoque Deus producat terra animam viventem in genere suo iumenta et reptilia et bestias terrae secundum species suas factumque est ita
                            et fecit Deus bestias terrae iuxta species suas et iumenta et omne reptile terrae in genere suo et vidit Deus quod esset bonum
                        </Text>

                        <Text fontSize="xl" mb={4} >
                            et ait faciamus hominem ad imaginem et similitudinem nostram et praesit piscibus maris et volatilibus caeli et bestiis universaeque terrae omnique reptili quod movetur in terra
                            et creavit Deus hominem ad imaginem suam ad imaginem Dei creavit illum masculum et feminam creavit eos
                            benedixitque illis Deus et ait crescite et multiplicamini et replete terram et subicite eam et dominamini piscibus maris et volatilibus caeli et universis animantibus quae moventur super terram
                            dixitque Deus ecce dedi vobis omnem herbam adferentem semen super terram et universa ligna quae habent in semet ipsis sementem generis sui ut sint vobis in escam
                            et cunctis animantibus terrae omnique volucri caeli et universis quae moventur in terra et in quibus est anima vivens ut habeant ad vescendum et factum est ita
                            viditque Deus cuncta quae fecit et erant valde bona et factum est vespere et mane dies sextus
                        </Text>

                    </Box>

                </LayoutAccount>

            </LayoutMain>


        );

    });

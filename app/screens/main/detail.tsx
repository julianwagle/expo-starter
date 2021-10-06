import React, { useEffect, FC, useRef } from "react"
import { ScrollView } from 'react-native';
import { useScrollToTop } from '@react-navigation/native';
import { StackScreenProps } from "@react-navigation/stack"
import { observer } from "mobx-react-lite"
import { NavigatorParamList } from "../../navigators"
import { LayoutMain } from '../../layouts'
import { useStores } from "../../models"
import { getRange } from '../../utils/range'
import {
  HStack,
  Box,
  Badge,
  Heading,
  Image as NativeImage,
  Pressable,
  Text as NativeText,
  Stack,
} from 'native-base';


export const DetailScreen: FC<StackScreenProps<NavigatorParamList, "detail">> = observer(
  ({ route, navigation }) => {

    const goBack = () => navigation.goBack()
    const profileScreen = () => navigation.navigate("profile")
    const listScreen = () => navigation.navigate("list")

    const passedParams: any = route.params || new Map();
    var passedName: string = passedParams.name || 'Undefined name';

    const { characterStore } = useStores()
    const { characters } = characterStore

    function getItem(characters: any) {
      for (let i = 0; i < characters.length; i++) {
        var characterName = characters[i]['name'];
        if (characterName == passedName) {
          const item: any = characters[i] || new Map();
          return [item, i];
        }
      }
      // this is the fall back incase of error
      const item: any = characters[0] || new Map();
      return [item, 0];
    }
    const getItemResp = getItem(characters);
    const item = getItemResp[0];
    const itemCount = getItemResp[1];


    function getRelatedItems(characters: any, itemCount: number, respQuant: number) {

      let relatedItems = [];
      let requests: any[]

      const startVal: number = itemCount + 1
      const maxVal: number = characters.length
      const maxValM1: number = characters.length - 1
      const endVal: number = itemCount + respQuant
      if (startVal == maxVal) {
        requests = getRange(0, respQuant, 1);
      }
      else if (endVal >= maxVal) {
        var backVals = getRange(startVal, maxValM1, 1);
        var frontValsEnd = endVal - maxValM1;
        var frontVals = getRange(0, frontValsEnd, 1);
        requests = [...backVals, ...frontVals];
      } else {
        requests = getRange(startVal, endVal, 1);
      }
      for (let i = 0; i < respQuant; i++) {
        var count = requests[i];
        var character = characters[count];
        relatedItems.push(

          <Pressable
            flex={1}
            onPress={
              () => {
                navigation.navigate('detail', { name: String(character.name) });
              }
            }
          >

            <Box
              flexDirection={{ base: 'column', md: 'row' }}
              shadow={8}
              rounded="xl"
              overflow="hidden"
              w="100%"
              mb={4}
            >

              <Box width={{ md: '30%' }} height={{ base: 32, md: '100%' }}>

                <NativeImage
                  key={character.image}
                  source={{ uri: character.image }}
                  height={'100%'}
                  width={'100%'}
                  alt={character.name}
                />

              </Box>

              <Stack p={3} space={2} minW={32}>
                <NativeText fontSize="xs" color="red.400" fontWeight="semibold">
                  {character.species}
                </NativeText>
                <Stack space={1}>
                  <Heading size="sm">{character.name}</Heading>
                  <NativeText
                    fontWeight="medium"
                  >
                    <Badge colorScheme={character.statusColor} mr={1} rounded="md">
                      {character.status}
                    </Badge>
                  </NativeText>

                </Stack>
              </Stack>

            </Box>
          </Pressable>


        );
      }
      return relatedItems
    }
    const respQuant = 3
    const relatedItems = getRelatedItems(characters, itemCount, respQuant);


    useEffect(() => {
      async function fetchData() {
        await characterStore.getCharacters()
      }

      fetchData()
    }, [])

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

        <Box alignSelf={{ base: 'center', md: 'flex-start' }} >

          <Heading mb={4} mt={10}>
            {item.name}
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
            alt={item.name}
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

          <NativeImage
            key={item.name}
            h={64}
            rounded="xl"
            source={{
              uri: item.image,
            }}
            alt={item.name}
          />

          <Heading mb={4} mt={10}>
            Heading Three
          </Heading>

          <NativeText fontSize="xl" mb={4} >
            dixit etiam Deus producant aquae reptile animae viventis et volatile super terram sub firmamento caeli
            creavitque Deus cete grandia et omnem animam viventem atque motabilem quam produxerant aquae in species suas et omne volatile secundum genus suum et vidit Deus quod esset bonum
            benedixitque eis dicens crescite et multiplicamini et replete aquas maris avesque multiplicentur super terram
            et factum est vespere et mane dies quintus
            dixit quoque Deus producat terra animam viventem in genere suo iumenta et reptilia et bestias terrae secundum species suas factumque est ita
            et fecit Deus bestias terrae iuxta species suas et iumenta et omne reptile terrae in genere suo et vidit Deus quod esset bonum
          </NativeText>

          <NativeText fontSize="xl" mb={4} >
            et ait faciamus hominem ad imaginem et similitudinem nostram et praesit piscibus maris et volatilibus caeli et bestiis universaeque terrae omnique reptili quod movetur in terra
            et creavit Deus hominem ad imaginem suam ad imaginem Dei creavit illum masculum et feminam creavit eos
            benedixitque illis Deus et ait crescite et multiplicamini et replete terram et subicite eam et dominamini piscibus maris et volatilibus caeli et universis animantibus quae moventur super terram
            dixitque Deus ecce dedi vobis omnem herbam adferentem semen super terram et universa ligna quae habent in semet ipsis sementem generis sui ut sint vobis in escam
            et cunctis animantibus terrae omnique volucri caeli et universis quae moventur in terra et in quibus est anima vivens ut habeant ad vescendum et factum est ita
            viditque Deus cuncta quae fecit et erant valde bona et factum est vespere et mane dies sextus
          </NativeText>


          <Heading mb={4} mt={10}>
            More Content
          </Heading>
          <HStack mx={{ base: 'auto', md: 0 }} space={2} mb={8} >
            {relatedItems}
          </HStack>


        </Box>


      </LayoutMain>

    )
  },
)

import { Instance, SnapshotOut, types } from "mobx-state-tree"
import { CharacterModel, CharacterSnapshot } from "../character/character"
import { CharacterApi } from "../../services/api/character-api"
import { withEnvironment } from "../extensions/with-environment"

/**
 * Example store containing Rick and Morty characters
 */
export const CharacterStoreModel = types
  .model("CharacterStore")
  .props({
    characters: types.optional(types.array(CharacterModel), []),
  })
  .extend(withEnvironment)
  .actions((self) => ({
    saveCharacters: (characterSnapshots: CharacterSnapshot[]) => {
      var js = ['origin', 'location']
      var ks = ['name', 'url']
      for (let i = 0; i < characterSnapshots.length; i++) {
        var character = characterSnapshots[i]
        for (let j = 0; j < js.length; j++) {
          for (let k = 0; k < ks.length; k++) {
            var upperK = ks[k].charAt(0).toUpperCase() + ks[k].slice(1);
            var key = js[j] + upperK
            character[key] = character[js[j]][ks[k]];
          }
        }
        var status = character['status']
        if (status === 'Alive') {
          character['statusColor'] = 'success'
        } else if (status === 'Dead') {
          character['statusColor'] = 'danger'
        } else {
          character['status'] = 'Unknown'
          character['statusColor'] = 'info'
        }
      }
      self.characters.replace(characterSnapshots)
    },
  }))
  .actions((self) => ({
    getCharacters: async () => {
      const characterApi = new CharacterApi(self.environment.api)
      const result = await characterApi.getCharacters()

      if (result.kind === "ok") {
        self.saveCharacters(result.characters)
      } else {
        __DEV__ && console.tron.log(result.kind)
      }
    },
  }))

type CharacterStoreType = Instance<typeof CharacterStoreModel>
export interface CharacterStore extends CharacterStoreType { }
type CharacterStoreSnapshotType = SnapshotOut<typeof CharacterStoreModel>
export interface CharacterStoreSnapshot extends CharacterStoreSnapshotType { }
export const createCharacterStoreDefaultModel = () => types.optional(CharacterStoreModel, {})

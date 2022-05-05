import * as got from '../data.json';

export const getAllCharacters = () => {
    return got.characters;
};

export const getOneCharacterById = (id: string) => {
    return got.characters.find((character) => character.id == id);
};
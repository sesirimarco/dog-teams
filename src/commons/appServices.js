import { apiUrl } from './configs';
import { getBreedAndSubBreed } from './utils';
const ERROR_MESSAGE_GENERIC =
  'There was a network error. Please try again later.'; //It could be in an error file maybe
export const searchByBreedName = async (breed) => {
  try {
    const response = await fetch(
      `${apiUrl}breed/${getBreedAndSubBreed(breed)}/images/random`
    );
    const data = await response.json();
    if (data.code > 400) {
      throw new Error(ERROR_MESSAGE_GENERIC);
    }
    return data;
  } catch (e) {
    throw new Error(ERROR_MESSAGE_GENERIC);
  }
};

export const getAllBreeds = async () => {
  try {
    const response = await fetch(`${apiUrl}breeds/list/all`);
    const data = await response.json();
    if (data.code > 400) {
      throw new Error(ERROR_MESSAGE_GENERIC);
    }
    return data.message;
  } catch (e) {
    throw new Error(ERROR_MESSAGE_GENERIC);
  }
};

export const getAllImagesFromBreed = async (breed) => {
  try {
    const response = await fetch(
      `${apiUrl}breed/${getBreedAndSubBreed(breed, '/', '-')}/images`
    );
    const data = await response.json();
    if (data.code > 400) {
      throw new Error(ERROR_MESSAGE_GENERIC);
    }
    return data.message;
  } catch (e) {
    throw new Error(ERROR_MESSAGE_GENERIC);
  }
};

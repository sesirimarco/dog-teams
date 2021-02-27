import { apiUrl } from './configs';
import { getBreedAndSubBreed } from './utils';
export const searchByBreedName = async (breed) => {
  
  try {
    const response = await fetch(`${apiUrl}breed/${getBreedAndSubBreed(breed)}/images/random`);
    const data = await response.json();
    return data;
  } catch (e) {
    throw e;
  }
};
export const getAllBreeds = async () => {
  try {
    const response = await fetch(`${apiUrl}breeds/list/all`);
    const data = await response.json();
    return data.message;
  } catch (e) {
    throw e;
  };
}
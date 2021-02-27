import { apiUrl } from './configs';
export const searchByBreedName = async (breed) => {
  
  try {
    const breedAndSub = breed.toString()
    .replace(' ','\/')
    .toLowerCase();
    const response = await fetch(`${apiUrl}breed/${breedAndSub}/images/random`);
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
    return adaptToSuggestionsBreeds(data.message);
  } catch (e) {
    throw e;
  };
}

//Utils:
const adaptToSuggestionsBreeds = (breeds) => {
  const tmpBreedsList = Object.entries(breeds)
  .map(breed => ({name: breed[0], subNames: breed[1]}));

  return tmpBreedsList.map(breed => {
    if (breed.subNames.length > 0) {
      return breed.subNames.map(subName => {
        return `${breed.name} ${subName}`
      });
    }else {
      return breed.name
    }
  }).flat();
};
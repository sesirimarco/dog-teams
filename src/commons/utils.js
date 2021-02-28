import { userTeamLocalStorage } from './configs';
//Utils:
export const adaptToSuggestionsBreeds = (breeds) => {
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

export const filterByString = (arr, string) => {
  return arr.filter(item => {
    if(item.substring(0, string.length) === string){
      return item;
    }
  })
};

export const getBreedAndSubBreed = (breed, concat = '/', separator = ' ') => {
  return breed.toString()
    .replace(separator, concat)
    .toLowerCase();
};

export const capitalizeText = (str) => {
  return str.split(' ').map(name => {
    return name.charAt(0).toUpperCase() + name.substring(1, name.length);
  }).join(' ');
}
// Local Storage Team
export const getDogById = (id) => {
  const team = getLocalStorageTeam();
  return team.find(dog => dog.id === id);
};

export const addDogToMyTeam = ({breed, img, id}) => {
  const team = getLocalStorageTeam();
  team.push({breed, img, id});
  localStorage.setItem(userTeamLocalStorage, JSON.stringify(team));
};

export const getLocalStorageTeam = () => {
  if(localStorage.getItem(userTeamLocalStorage)) {
    return JSON.parse(localStorage.getItem(userTeamLocalStorage));
  }else {
    localStorage.setItem(userTeamLocalStorage, '[]');
    return JSON.parse(localStorage.getItem(userTeamLocalStorage));
  }
};
//Team logic
export const checkMaxDogByTeam = (max = 10) => {
  return (getLocalStorageTeam().length < max);
};

export const checkMaxBreeds = (breed, max = 3) => {
  return (getLocalStorageTeam().filter(dog => dog.breed === breed).length < max);
};
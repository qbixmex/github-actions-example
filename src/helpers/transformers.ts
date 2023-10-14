/**
 * Capitalize input text.
 */
export const capitalize = (text: string) => {
  if (!text) {
    throw new Error('You must provide provide a text !');
  }
  if (text.length < 2) {
    throw new Error('You must provide a string with minimum 2 characters !');
  }
  const firstCharacter = text[0].toUpperCase();
  const restCharacters = text.slice(1).toLowerCase();
  return firstCharacter + restCharacters;
};

export const getTranslation = (content, key, fallback = 'Translation missing') => {
  return content[key] || fallback;
};
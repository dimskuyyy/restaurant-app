const limitText = (text, maxChar = 100) => {
  const chars = text.split('');
  if (chars.length < 100) return text;

  const limitedText = chars.slice(0, maxChar).join('');
  return `${limitedText}...`;
};

const separatingObject = (bunchOfObject, separator = ',') => {
  const convertToString = bunchOfObject.map((row) => row.name);
  return convertToString.join(` ${separator} `);
};

const resetTabIndex = () => {
  document.querySelector('#firstTabIndex').focus();
};

export { limitText, separatingObject, resetTabIndex };

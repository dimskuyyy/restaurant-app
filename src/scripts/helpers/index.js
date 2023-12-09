const separatingObject = (bunchOfObject, separator = ',') => {
  const convertToString = bunchOfObject.map((row) => row.name);
  return convertToString.join(` ${separator} `);
};

const resetTabIndex = () => {
  document.querySelector('#firstTabIndex').focus();
};

export { separatingObject, resetTabIndex };

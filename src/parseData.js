const parseData = (data, fileExtension) => {
  switch (fileExtension) {
    case 'json':
      try {
        const parsedData = JSON.parse(data);
        return parsedData;
      } catch (error) {
        return { error };
      }
    case 'yaml':
      // в процессе
      break;
    default:
      return { error: `${fileExtension} не поддерживается` };
  }
};

export default parseData;

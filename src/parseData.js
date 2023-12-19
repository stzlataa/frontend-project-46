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
      return undefined;
    default:
      return { error: `${fileExtension} is not supported` };
  }
};

export default parseData;

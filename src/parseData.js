const parseData = (data, fileExtension) => {
  let parsedData;

  switch (fileExtension) {
    case 'json':
      try {
        parsedData = JSON.parse(data);
        return { parsedData };
      } catch (error) {
        return { error: 'Ошибка при парсинге JSON данных' };
      }
    case 'yaml':
      return 'в процессе';
    default:
      return `${fileExtension} не поддерживается`;
  }
};

export default parseData;

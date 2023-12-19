import yaml from 'js-yaml';

const parsers = (data, fileExtension) => {
  let parsedData;
  switch (fileExtension) {
    case 'json':
      try {
        parsedData = JSON.parse(data);
        return parsedData;
      } catch (error) {
        return { error };
      }
    case 'yaml':
    case 'yml':
      try {
        parsedData = yaml.load(data);
        return parsedData;
      } catch (error) {
        return { error };
      }
    default:
      return { error: `${fileExtension} is not supported` };
  }
};

export default parsers;

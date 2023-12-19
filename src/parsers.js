import yaml from 'js-yaml';

const parseData = (data, parser) => {
  try {
    return parser(data);
  } catch (error) {
    return { error };
  }
};

const parsers = (data, fileExtension) => {
  switch (fileExtension) {
    case 'json':
      return parseData(data, JSON.parse);
    case 'yaml':
    case 'yml':
      return parseData(data, yaml.load);
    default:
      return { error: `${fileExtension} is not supported` };
  }
};

export default parsers;

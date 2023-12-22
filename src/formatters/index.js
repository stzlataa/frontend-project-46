import stylish from './stylish.js';
import plain from './plain.js';

const format = (diffTree, formatType) => {
  switch (formatType) {
    case 'stylish':
      return stylish(diffTree);
    case 'plain':
      return plain(diffTree);
    case 'json':
      return JSON.stringify(diffTree);
    default:
      return false;
  }
};

export default format;

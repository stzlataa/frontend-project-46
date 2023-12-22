import stylish from "./stylish.js";
import plain from "./plain.js";

const format = (diffTree, formatType) => {
  switch (formatType) {
    case 'stylish':
      return stylish(diffTree);
    case 'plain':
      return plain(diffTree);
    default:
      throw new Error(`Unsupported format type: ${formatType}`);
  }
};

export default format;
import _ from 'lodash';

const plain = (diffTree, parentKey = '') => {
  const formatValue = (value) => {
    if (_.isObject(value)) {
      return '[complex value]';
    } else if (_.isString(value)) {
      return `'${value}'`;
    } else {
      return value;
    }
  };

  const formattedDiff = diffTree.map((node) => {
    const keyPath = parentKey ? `${parentKey}.${node.key}` : node.key;
    switch (node.type) {
      case 'added':
        return `Property '${keyPath}' was added with value: ${formatValue(node.value)}`;
      case 'removed':
        return `Property '${keyPath}' was removed`;
      case 'unchanged':
        return '';
      case 'changed':
        return `Property '${keyPath}' was updated. From ${formatValue(node.oldValue)} to ${formatValue(
          node.newValue,
        )}`;
      case 'nested':
        return plain(node.children, keyPath);
      default:
        throw new Error(`Unsupported node type: ${node.type}`);
    }
  });

  return formattedDiff.filter((line) => line !== '').join('\n');
};


export default plain;
import _ from 'lodash';

const stylish = (diffTree, depth = 1) => {
  const formatValue = (value, innerDepth = 1) => {
    if (_.isObject(value)) {
      const indentSize = 4;
      const indent = ' '.repeat(innerDepth * indentSize - 2);
      return `{\n${Object.entries(value)
        .map(([k, v]) => `${indent}  ${k}: ${formatValue(v, innerDepth + 1)}`)
        .join('\n')}\n${' '.repeat(indentSize * (innerDepth - 1))}}`;
    }
    return value;
  };

  const indentSize = 4;
  const indent = ' '.repeat(depth * indentSize);
  const indentWithSymbols = ' '.repeat(depth * indentSize - 2);

  const formattedDiff = diffTree.map((node) => {
    switch (node.type) {
      case 'added':
        return `${indentWithSymbols}+ ${node.key}: ${formatValue(node.value, depth + 1)}`;
      case 'removed':
        return `${indentWithSymbols}- ${node.key}: ${formatValue(node.value, depth + 1)}`;
      case 'unchanged':
        return `${indent}${node.key}: ${formatValue(node.value, depth + 1)}`;
      case 'changed':
        return [
          `${indentWithSymbols}- ${node.key}: ${formatValue(node.oldValue, depth + 1)}`,
          `${indentWithSymbols}+ ${node.key}: ${formatValue(node.newValue, depth + 1)}`,
        ].join('\n');
      case 'nested':
        return `${indent}${node.key}: ${stylish(node.children, depth + 1)}`;
      default:
        throw new Error(`Unsupported node type: ${node.type}`);
    }
  });

  return `{\n${formattedDiff.join('\n')}\n${' '.repeat(indentSize * (depth - 1))}}`;
};

export default stylish;

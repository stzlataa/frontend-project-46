import _ from 'lodash';
import format from './formatters/index.js';

const generateDiffTree = (data1, data2) => {
  const keys = _.union(Object.keys(data1), Object.keys(data2));
  const sortedKeys = _.sortBy(keys);

  return sortedKeys.map((key) => {
    switch (true) {
      case !_.has(data1, key):
        return { type: 'added', key, value: data2[key] };
      case !_.has(data2, key):
        return { type: 'removed', key, value: data1[key] };
      case _.isEqual(data1[key], data2[key]):
        return { type: 'unchanged', key, value: data1[key] };
      case _.isObject(data1[key]) && _.isObject(data2[key]):
        return { type: 'nested', key, children: generateDiffTree(data1[key], data2[key]) };
      default:
        return {
          type: 'changed',
          key,
          oldValue: data1[key],
          newValue: data2[key],
        };
    }
  });
};

const genDiff = (data1, data2, formatType) => {
  const diffTree = generateDiffTree(data1, data2);
  return format(diffTree, formatType);
};

export default genDiff;

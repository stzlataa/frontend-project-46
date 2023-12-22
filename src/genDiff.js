import _ from 'lodash';
import format from './formatters/index.js';

const genDiff = (data1, data2, formatType) => {
  const diffTree = generateDiffTree(data1, data2);
  return format(diffTree, formatType);
};

const generateDiffTree = (data1, data2) => {
  const keys = _.union(Object.keys(data1), Object.keys(data2)).sort();
  return keys.map((key) => {
    if (!_.has(data1, key)) {
      return { type: 'added', key, value: data2[key] };
    }
    if (!_.has(data2, key)) {
      return { type: 'removed', key, value: data1[key] };
    }
    if (_.isEqual(data1[key], data2[key])) {
      return { type: 'unchanged', key, value: data1[key] };
    }
    if (_.isObject(data1[key]) && _.isObject(data2[key])) {
      return { type: 'nested', key, children: generateDiffTree(data1[key], data2[key]) };
    }
    return {
      type: 'changed', key, oldValue: data1[key], newValue: data2[key],
    };
  });
};

export default genDiff;

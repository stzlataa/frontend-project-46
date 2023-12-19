import _ from 'lodash';

const genDiff = (data1, data2) => {
  // объединяем ключи в массив и сортируем
  const keys = _.union(Object.keys(data1), Object.keys(data2)).sort();
  const diff = keys.map((key) => {
    // если ключа нет в первом файле
    if (!_.has(data1, key)) {
      return `  + ${key}: ${(data2[key])}`;
      // если ключа нет во втором файле
    } if (!_.has(data2, key)) {
      return `  - ${key}: ${(data1[key])}`;
      // если ключи равны
    } if (_.isEqual(data1[key], data2[key])) {
      return `  ${key}: ${(data1[key])}`;
    }
    // если ключи есть, но различаются
    return [
      `  - ${key}: ${(data1[key])}`,
      `  + ${key}: ${(data2[key])}`,
    ];
  });

  return `{\n${diff.flat().join('\n')}\n}`;
};

export default genDiff;

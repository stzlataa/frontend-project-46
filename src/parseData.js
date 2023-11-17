import { readFileSync } from 'node:fs';

const parseData = (path) => {
  const file = path.split('/').slice(-1)[0];
  const fileExtension = file.split('.').slice(-1)[0];

  let parsedData;

  switch (fileExtension) {
    case 'json':
      const content = readFileSync(path, 'utf-8');
      parsedData = JSON.parse(content);
      return { parsedData };
    case 'yaml':
      return 'в процессе';
    default:
      return `${file} имеет неправильное расширение`;
  }
};

export { parseData };

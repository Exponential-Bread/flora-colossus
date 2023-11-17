const { writeFileSync, readFileSync } = require('fs');

const pkg = JSON.parse(readFileSync('package.json', 'utf-8'));
if (process.argv.includes('--pre'))
  writeFileSync(
    'package.json',
    JSON.stringify(
      {
        name: '@3xpo/flora-colossus',
        ...pkg,
      },
      null,
      2,
    ),
  );
else if (process.argv.includes('--post'))
  writeFileSync(
    'package.json',
    JSON.stringify(
      {
        name: 'flora-colossus',
        ...pkg,
      },
      null,
      2,
    ),
  );

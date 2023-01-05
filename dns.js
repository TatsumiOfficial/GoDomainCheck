const fs = require('fs');
const dns = require('dns');

const file = process.argv[2];

fs.readFile(file, 'utf8', async (err, data) => {
  if (err) {
    console.error(`Error reading file: ${err.message}`);
    return;
  }

  const domains = data.split('\n');
  const results = [];


  fs.writeFile('results.txt', '', 'utf8', (err) => {
    if (err) {
      console.error(`Error writing to file: ${err.message}`);
      return;
    }
  });

  for (const domain of domains) {
    try {

      const address = await Promise.race([
        new Promise((resolve, reject) => {
          dns.lookup(domain, (err, address) => {
            if (err) {
              reject(err);
            } else {
              resolve(address);
            }
          });
        }),
        new Promise((resolve, reject) => {
          setTimeout(() => {
            reject(new Error('Timeout'));
          }, 10000);
        }),
      ]);
      console.log(`IP address for "${domain}": ${address}`);
      results.push(`${address}`);


      fs.appendFile('results.txt', `${address}\n`, 'utf8', (err) => {
        if (err) {
          console.error(`Error writing to file: ${err.message}`);
        }
      });
    } catch (err) {
      console.error(`Error resolving domain "${domain}": ${err.message}`);

      continue;
    }
  }
});

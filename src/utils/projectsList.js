
function importAll(r) {
  const files = [];
  r.keys().forEach(item => files.push(r(item)) );
  
  return files;
}

const jsonFiles = importAll(require.context('../resources/jsonData', false, /\.json$/));

export default jsonFiles;
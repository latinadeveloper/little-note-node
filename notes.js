console.log('Starting notes.js');

var addNote = (title, body)=>{
  console.log('Adding ',title, body)
};

var getAll = ()=>{
  console.log('GEtting all ')
};

var getNote = (title)=>{
  console.log('reading note ',title)
};
var remove = (title, body)=>{
  console.log('remove ',title)
};
module.exports = {
  addNote,
  getAll,
  getNote,
  remove
};
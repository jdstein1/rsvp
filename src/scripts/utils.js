const utils = {

  // creates monster date object from ms value
  createMonster: (ms) => {
    const obj = {};
    obj.ms = ms;
    obj.iso = new Date(ms).toISOString();
    obj.obj = new Date(obj.iso);
    obj.utc = obj.obj.toUTCString();
    obj.date = obj.obj.toDateString();
    obj.time = obj.obj.toTimeString();
    obj.json = obj.obj.toJSON();
    obj.us = obj.obj.toLocaleString('en-US');
    // obj['parsed'] = this.parseISOString(obj['iso']);
    // console.log('obj: ', obj);
    return obj;
  },

  // creates a date obj from an ISO string
  parseISOString: (s) => {
    const b = s.split(/\D+/);
    return new Date(Date.UTC(b[0], --b[1], b[2], b[3], b[4], b[5], b[6]));
  },

};

export default utils;

let time = new Date();
let hour = time.getHours() > 12 ? time.getHours() - 12 : time.getHours();
let min = time.getMinutes();
let sec = time.getSeconds();
let ampm = time.getHours() >= 12 ? 'pm' : 'am';

console.log(`${hour}:${min}:${sec} ${ampm}`);
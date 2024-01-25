var fs=require('fs');
var _=require('lodash');
var os=require('os');

var user=os.userInfo();
console.log(user.username);

fs.appendFile('greeting.txt','hi',()=>{
    console.log('file is created');
})
const notes=require('./notes');
console.log(notes.age);
console.log(notes.addnumber(3,4));

var data=["per","per",1,2,1,2,'name'];
var filter=_.uniq(data);
console.log(filter);

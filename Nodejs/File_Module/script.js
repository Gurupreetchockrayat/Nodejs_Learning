const fs = require('fs');

// fs.writeFile('app.js', 'console.log("hello")',(err)=>{
//     if(err) {
//         console.log(err);
//     }
//     else {
//         console.log('done!!');
//     }
// })

// fs.appendFile('app.js', '\nconsole.log("hello dobara")',(err)=>{
//     if(err) {
//         console.log(err);
//     }
//     else {
//         console.log('done!!');
//     }
// })

// fs.rename('app.js','app2.js',(err)=> {
//     if(err) {
//         console.log(err);
//     }
//     else {
//         console.log('file Renamed succesfully!!')
//     }
// });



// fs.copyFile('app2.js', 'app.js', (err)=> {
//     if(err) {
//         console.log(err);
//     }
//     else {
//         console.log('File Copied Successfully!!')
//     }
// })


// fs.unlink('app.js', (err)=> {
//     if(err) {
//         console.log(err);
//     }
//     else {
//         console.log('File Deleted Successfully!!!')
//     }
// })


// this will delete only empty folder for folder having file we have to used one more parameter{recursive:true}
// fs.rmdir('./good', (err)=> {
//     if(err) {
//         console.log(err);
//     }
//     else {
//         console.log('Folder Deleted Successfully!!!')
//     }
// })



// fs.rm('./wow', {recursive:true},(err)=> {
//     if(err) {
//         console.log(err);
//     }
//     else {
//         console.log('Folder Deleted Successfully!!!')
//     }
// })

// fs.mkdir('./ok', {recursive:true}, (err)=> {
//     if(err) console.log(err)
//     else console.log('folder created!')
// });



// fs.readFile('./File_Module/app2.js','utf-8', (err, data)=> {
//     if(err) {
//         console.log(err);
//     }
//    else {
//         fs.appendFile('newFile.txt', data, (err) =>{
//             if(err) console.log(err);
            
//         })
//    }
// })
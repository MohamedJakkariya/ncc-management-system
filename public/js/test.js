// var fs = require('fs');
// function dynamicHtml(docs) {
//   let html = '<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8" /><meta name="viewport" content="width=device-width, initial-scale=1.0" /><meta http-equiv="X-UA-Compatible" content="ie=edge" /><title>Pdf Modal</title><link rel="stylesheet" href="file:///C:/Users/mdjac/Desktop/NCC/public/lib/bootstrap/css/bootstrap.min.css" /><link rel="stylesheet" href="file:///C:/Users/mdjac/Desktop/NCC/public/img/showcase-1.jpg/lib/font-awesome/css/font-awesome.min.css" /><link rel="stylesheet" href="file:///C:/Users/mdjac/Desktop/NCC/public/css/pdf.css" /><style>h1{margin-left:10rem}h4{margin-left:18rem}</style></head><body><div class="form-group pt-4 col-md-7 mx-auto"><h1>University College Of Enginneering(BIT campus)</h1><h4>(2020 Enrollment cadet details)</h4>';

//   docs.forEach((student) => {
//     html +=
//       `<div style="margin-top: 2rem;"><img src="file:///C:/Users/mdjac/Desktop/NCC/public/img/showcase-1.jpg" alt="Profile" width="100px" height="100px" style="width: 200px; height: 200px; margin-left: 19rem;"><div style="margin: auto; margin-left: 10rem; margin-top: 3rem"><div class="info d-flex flex-row flex-wrap"> <label for="name" class="col-md-4">Name</label><p id="name" class="col-md-8" style="margin-left: 6.5rem;">${student.fullname}</p></div><div class="info d-flex flex-row flex-wrap"> <label class="col-md-4" for="regno">Regno</label><p class="col-md-8" style="margin-left: 6rem;" id="regno">810018104048</p></div><div class="info d-flex flex-row flex-wrap"> <label for="fname" class="col-md-4">Father Name</label><p id="fname" class="col-md-8" style="margin-left: 2.5rem;">${student.fathername}</p></div><div class="info d-flex flex-row flex-wrap"> <label for="mname" class="col-md-4">Mother Name</label><p id="mname" class="col-md-8" style="margin-left: 2rem;">${student.mothername}</p></div><div class="info d-flex flex-row flex-wrap"> <label class="col-md-4" for="email">Email</label><p class="col-md-8" style="margin-left: 6.5rem;" id="email">${student.email}</p></div><div class="info d-flex flex-row flex-wrap"> <label class="col-md-4" for="dob">DOB</label><p class="col-md-8" style="margin-left: 7.3rem;" id="dob">${student.dob}</p></div><div class="info d-flex flex-row flex-wrap"> <label class="col-md-4" for="gender">Gender</label><p class="col-md-8" style="margin-left: 5.3rem;" id="gender">${student.gender}</p></div><div class="info d-flex flex-row flex-wrap"> <label class="col-md-4" for="bloodgroup">Blood Group</label><p class="col-md-8" style="margin-left: 2.3rem;" id="bloodgroup">${student.bloodgroup}</p></div><div class="info d-flex flex-row flex-wrap"> <label class="col-md-4" for="aadhar">Aadhar</label><p class="col-md-8" style="margin-left: 5.3rem;" id="aadhar">2014 2019 4920 1298</p></div><div class="info d-flex flex-row flex-wrap"> <label class="col-md-4" for="contact">Contact</label><p class="col-md-8" style="margin-left: 4.8rem;" id="contact">${student.mobile}</p></div><div class="info d-flex flex-row flex-wrap"> <label class="col-md-4" for="address">Address</label><p class="col-md-8" style="margin-left: 5rem;" id="address">${student.comaddress}</p></div><div class="info d-flex flex-row flex-wrap"> <label class="col-md-4" for="department">Department</label><p class="col-md-8" style="margin-left:3rem;" id="department">${student.degree}</p></div> <img src="file:///C:/Users/mdjac/Desktop/NCC/public/img/showcase-1.jpg" alt="Profile img " style="width: 150px;margin-top: 1.5rem; height: 150px; margin-left: 26rem;"></div></div></div></body></html>`;
//   });

//   const filename = 'pdfModal.html';
//   const path = '../generatedHtml/' + filename;

//   fs.writeFile(path, html, function (err) {
//     if (err) {
//       return console.log(err);
//     }
//     console.log('The file was saved!');
//   });
// }

// let docs = [
//   {
//     fullname: 'jack',
//     fathername: 'Raja',
//     mothername: 'Thasin',
//     email: 'jacksparrow.mdjack@gmail.com',
//     dob: '01/12/2000',
//     gender: 'Male',
//     bloodgroup: 'O+',
//     mobile: '+91 9283293293',
//     comaddress: '1/42 kudi street koothur',
//     degree: 'B.E. Computer Sciense and Engineering'
//   }
// ];

// dynamicHtml(docs);

// var fs = require('fs');
// var pdf = require('html-pdf');
// var root = require('app-root-path');
// // Generate pdf

// console.log(root.path + '\\public\\img');

// var html = fs.readFileSync('../pagelinks/pdfModel.html', 'utf8');

// var options = {
//   format: 'A4',
//   orientation: "portrait",

//   paginationOffset: 1,
//  footer: {
//     height: "28mm",
//     contents: {
//       first: '1',
//       2: '2', // Any page number is working. 1-based index
//       default: '<span style="color: #444; font-weight: bold; text-align: center">{{page}}</span>/<span>{{pages}}</span>', // fallback value
//       last: 'Last Page'
//     }
//   }
// };

// pdf.create(html, options).toFile('../pdf/enroll.pdf', function (err, file) {
//   if (err) return console.log(err);
//   console.log(file); // { filename: '/app/businesscard.pdf' }
// });

// const findPlace = document.querySelector('#getPlace');
// const allMemberOfPlace = document.querySelectorAll('.member-home-town');

// // Place based search
// findPlace.addEventListener('input', e => {
//   console.log(e.target.value);

//   // To parse all members one by one
//   allMemberOfPlace.forEach(member => {
//     console.log(member.textContent[0]);

//     const keyArr = String(e.target.value).split('');
//     console.log(keyArr + ' with length = ' + keyArr.length);

//     if (!keyArr.length) {
//       allMemberOfPlace.forEach(member => {
//         member.parentElement.parentElement.style.display = 'flex';
//       });
//     } else {
//       // to parst a member into array of all character
//       for (let i = 0; i < keyArr.length; i++) {
//         // check present character match
//         if (
//           keyArr[i].toLowerCase() == String(member.textContent[i]).toLowerCase()
//         ) {
//           if(
//           keyArr[i - 1] == undefined
//           ){
//             continue;
//           }
//           else if(
//           keyArr[i - 1].toLowerCase() == String(member.textContent[i - 1]).toLowerCase()
//           ){
//             member.parentElement.parentElement.style.display = 'flex';
//           }
//           else{
//             member.parentElement.parentElement.style.display = 'none';
//           }
//         } else {
//           member.parentElement.parentElement.style.display = 'none';
//         }
//       }
//     }
//   });
// });

// var dob = new Date().toLocaleDateString().split('/');

// console.log(dob);

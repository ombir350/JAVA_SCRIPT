          // DATES
const now=new Date();
console.log(now);
console.log(now.toString());  
console.log(now.toISOString()); 
console.log(now.toLocaleString()); 
// OUTPUT=
// 2026-07-19T05:54:02.378Z   //tell UTC(Coordinated Universal Time)
// Sun Jul 19 2026 11:24:02 GMT+0530 (India Standard Time)
// 2026-07-19T05:54:02.378Z
// 7/19/2026, 11:24:02 AM   //it tell local time 


// date: 19-7-2026 sunday 11hor-37min-32sec
console.log(now.getDay());  // 0
console.log(now.getDate()); // 19
console.log(now.getFullYear()); // 2026
console.log(now.getMonth());  // 6 ( it started from 0 so, return output(mounth-1)).
console.log(now.getHours());  //11
console.log(now.getMinutes()); //37
console.log(now.getSeconds()); //32


// How to creat a date
// Year mounth date hours minutes  seconds  miliseconds
const date=new Date(2026,7,19,11,39,56,32);
console.log(date);  //2026-08-19T06:09:56.032Z


//time stamp.
const now=Date.now();
console.log(now);
const date=new Date(1784442300525) // 1784442370577 (it is UTC (cordinates universal time) in MiliSeconds. 
console.log(date.toString());  // Sun Jul 19 2026 11:55:00 GMT+0530 (India Standard Time)
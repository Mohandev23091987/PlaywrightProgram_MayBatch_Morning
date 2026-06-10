import {expect,test} from '@playwright/test'

test("second",async({page})=>{


  await page.goto("https://playwright.dev/");
  console.log(await page.title());
})


test("destructing",()=>{

 let student ={
    id:101,
    name:"Ravi",
    course:"Playwright"
 }

 //without destructuring 

//  let id = student.id;
//  let name = student.name;
//  let course = student.course;

//  console.log(id);
//   console.log(name);
//    console.log(course);

   //with destructuring 

   let {id,name,course} = student;

    console.log(id);
  console.log(name);
   console.log(course);


})
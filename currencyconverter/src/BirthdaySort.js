import React ,{useEffect,useState} from "react";

export default function BirthdaySort(){
    const [data,setData]=useState([]);
function doSomething()
{
  fetch('./students.json').then(result=>result.json()).then((resp)=>{
    resp.sort(function (a, b) {
      return a.name.localeCompare(b.name);
  })
   setData(resp);
  })
}

useEffect(()=>{
doSomething();
})

  
return(
    <div>
    <br />
    Sorting json data on the basis of name:
    
    <table border="1">
      <tr>
        <td>Id</td>
        <td>Name</td>
        <td>Date of Birth</td>
      </tr>
      {
        data.map((item)=>
        <tr>
        <td>{item.id}</td>
        <td>{item.name}</td>
        <td>{item.dateOfBirth}</td>
      </tr>
        )
      }
    </table>
   
    </div>
);
}

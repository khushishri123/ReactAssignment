import React, { useEffect, useState } from "react";
export default function GetRequest(){
  const [data,setData]=useState([]);
    useEffect(()=>{
      fetch('https://jsonplaceholder.typicode.com/posts').then((result)=>{
        result.json().then((resp)=>{
setData(resp);
        })
      })
    },[]);

    return(
        <div>
 GET type request
 <table border="1px solid black">
  <tr>
    <td>User Id</td>
    <td>Id</td>
    <td>title</td>
    <td>Body</td>
  </tr>
  {
    data.map((item)=>
    <tr>
      <td>{item.userId}</td>
      <td>{item.id}</td>
      <td>{item.title}</td>
      <td>{item.body}</td>
    </tr>
    )
  }
 </table>
        </div>
    );
}
import React from 'react'
export default function UsdToInr(props){
    return(
        <div>
            {props.value} -- 
        { 
          props.value * 70
        }    
        </div>
    );
}

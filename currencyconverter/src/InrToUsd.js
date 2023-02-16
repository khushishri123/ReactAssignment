import React from 'react'
export default function InrToUsd(props){
    return(
        <div>
            {props.value} -- {
                props.value /70
            }
        </div>
    );
}
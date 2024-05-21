import React from "react";

function TooDoItem(props){

    return (
        <div onClick={ () => {
            props.onChecked(props.id);
        }}>
        <li >{props.text}</li>
        </div>
    );
}

export default TooDoItem; 






// const [isDone , setIsDone] = React.useState(false);

//     function handleClick(){
//         setIsDone(function(prevValue){
//             return !prevValue;
//         })
//     }


// <li style={{textDecorationLine: isDone? "line-through": "none"}}>{props.text}</li> 
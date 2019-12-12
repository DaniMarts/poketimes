import React from 'react'

function Rainbow (WrappedComponent, color){
    const NewComponent = (props) => (
        <div className={color + "-text"}>
            <WrappedComponent {...props}/>
        </div>
    );
    // const NewComponent = (props) =>  {
    //     let prop = {className:"red-text"}//{...props, className:`${props.className} ${color}-text`};
    //     return (
    //         <WrappedComponent {...prop}/>
    //     );
    // }

    return NewComponent;
    
        
}

export default Rainbow
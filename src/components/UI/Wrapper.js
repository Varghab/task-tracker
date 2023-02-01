import React from 'react'

function Wrapper(props) {
    return (
        <div style={{margin:"10px"}}>
            {props.children}
        </div>
    )
}

export default Wrapper

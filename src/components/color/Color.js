import React from 'react'

const Color = ({color, setColor}) => (
    <div onClick={() => setColor(color)}  style={{
        width:"50px",
        height:"50px",
        borderRadius:"10px",
        marginTop:"10px",
        marginBottom:"10px",
        background:color,
        cursor:"pointer"

    }}></div>
)

export default Color
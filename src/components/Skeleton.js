import React from 'react'

const Skeleton = () => {
    const classes = `w-72 h-96 bg-gradient-to-b from-blue-400 to-indigo-400 rounded-xl animate__animated animate__bounceIn`;
    return (
        <div className={classes}>
        </div>
    )
}

export default Skeleton

import React from 'react'

const Loader = () => {
    return (
        <div className='loader_cont'>
            <div className="spinner-border text-light" role="status">
                <span className="sr-only" style={{'color':'white'}}>Loading...</span>
            </div>
        </div>
    )
}

export default Loader

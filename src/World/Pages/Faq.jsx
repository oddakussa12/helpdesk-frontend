import React from 'react'

const Faq = () => {
    return (
        <div className='mt-10'>
            <h1 className='text-3xl ml-3 mb-4'>Frequently asked questions</h1>
            <hr />
            <div tabIndex={0} className="collapse collapse-plus bg-base-100 rounded-box">
                <div className="collapse-title text-xl">
                    Focus me to see content
                </div>
                <div className="collapse-content">
                    <p>attribute is necessary to make the div focusable</p>
                </div>
            </div>
            <hr />
            <div tabIndex={0} className="collapse collapse-plus bg-base-100 rounded-box">
                <div className="collapse-title text-xl">
                    Focus me to see content
                </div>
                <div className="collapse-content">
                    <p>attribute is necessary to make the div focusable</p>
                </div>
            </div>
            <hr />
            <div tabIndex={0} className="collapse collapse-plus bg-base-100 rounded-box">
                <div className="collapse-title text-xl">
                    Focus me to see content
                </div>
                <div className="collapse-content">
                    <p>tabIndex={0} attribute is necessary to make the div focusable</p>
                </div>
            </div>
            <hr />
            <div tabIndex={0} className="collapse collapse-plus bg-base-100 rounded-box">
                <div className="collapse-title text-xl">
                    Focus me to see content
                </div>
                <div className="collapse-content">
                    <p>tabIndex={0} attribute is necessary to make the div focusable</p>
                </div>
            </div>
        </div>
    )
}

export default Faq

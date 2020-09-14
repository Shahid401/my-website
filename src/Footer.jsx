import React from 'react'

const fullYear = new Date().getFullYear();

function Footer() {
    return (
        <div className="footer">
            <p>Copyright © Smart LED Made In India {fullYear}. All Rights Reserved.</p>
        </div>
    )
}

export default Footer

import React from 'react'
import './style.css'
const Navbar = () => {
    const links = ['home','about me','skills','portfolio','services','contact']
    const fetchLinks = links.map(value => {
        return <div className={'link'}>
                   <a className={'link-item'} href={value} >{value}</a>
                </div>
    })
    return (
        <div className={'navbar'}>
            {fetchLinks}
        </div>
    )
}

export default Navbar;

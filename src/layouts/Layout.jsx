import {Outlet} from 'react-router-dom'
import React from 'react'

const Layout = () => {
  return (
    <div className='Layout'>
        <Outlet></Outlet>
    </div>
  )
}

export default Layout
import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import './Foot.scss'

const Foot = () => {
  const context = useContext(AppContext)
  const isLight = context.theme === 'light'
  const dateString = new Date().getFullYear()

  const handleThemeSwitch = (value) => {
    context.changeTheme(value)
  }

  return (
    <>
      <div className='foot-info'>
        <span>
          powered by <a href="https://github.com/couchbaselabs">Couchbase Labs</a> and 
          <a href="https://docs.couchbase.com/home/server.html">Couchbase Server</a> 6.6.0-7909-enterprise
          | &nbsp; <a href="#" className={isLight ? "active" : ""} onClick={() => handleThemeSwitch('light')}>light</a> / 
          <a href="#" className={isLight ? "" : "active"} onClick={() => handleThemeSwitch('dark')}>dark</a>
        </span>
      </div>
      <div className='foot-date'>
        <div className='date'>
          © {dateString}
        </div>
      </div>
    </>
  )
}

export default Foot

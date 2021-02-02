import React from 'react'
import {
  TheFooter,
  TheHeader
} from '../index'
import TheSidebar from './Sldebar';
import TheContent from './Content'

const TheLayout = () => {
  return (
    <div className="c-app c-default-layout">
      <TheSidebar/>
      <div className="c-wrapper">
        <TheHeader/>
        <div className="c-body">
          <TheContent/>
        </div>
        <TheFooter/>
      </div>
    </div>
  )
}

export default TheLayout

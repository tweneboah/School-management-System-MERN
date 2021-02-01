import React from 'react'
import {
  TheContent,
  TheSidebar,
  TheFooter,
  TheHeader
} from './index'
import routes from '../routes'
import navigation from './_nav'

const TheLayout = () => {

  return (
    <div className="c-app c-default-layout">
      <TheSidebar navs={navigation}/>
      <div className="c-wrapper">
        <TheHeader/>
        <div className="c-body">
          <TheContent routes={routes}/>
        </div>
        <TheFooter/>
      </div>
    </div>
  )
}

export default TheLayout

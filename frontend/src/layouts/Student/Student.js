import React from 'react'
import {
  TheContent,
  TheSidebar,
  TheFooter,
  TheHeader
} from '../../containers/index'
import routes from './studentRoutes';
import navs from './sidebarNavs'

const TheLayout = () => {

  return (
    <div className="c-app c-default-layout">
      <TheSidebar navs={navs}/>
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

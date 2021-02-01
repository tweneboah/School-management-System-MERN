import React from 'react'
import CIcon from '@coreui/icons-react'

const _nav =  [
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Dashboard',
    route: '/admin',
    icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon sidebarIcon"/>,
    _children: [
        {
            _tag: 'CSidebarNavItem',
            name: 'Admin',
            to: '/base/breadcrumbs',
          },
          {
            _tag: 'CSidebarNavItem',
            name: 'Students',
            to: '/base/cards',
          },
          {
            _tag: 'CSidebarNavItem',
            name: 'Parents',
            to: '/base/breadcrumbs',
          },
          {
            _tag: 'CSidebarNavItem',
            name: 'Teachers',
            to: '/base/cards',
          },
    ]
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Students',
    route: '/admin/students',
    icon: <CIcon name="cil-people" customClasses="c-sidebar-nav-icon  sidebarIcon"/>,
    _children: [
        {
            _tag: 'CSidebarNavItem',
            name: 'Breadcrumb',
            to: '/base/breadcrumbs',
          },
          {
            _tag: 'CSidebarNavItem',
            name: 'Cards',
            to: '/base/cards',
          },
    ]
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Staff',
    route: '/admin/teachers',
    icon: <CIcon name="cil-people" customClasses="c-sidebar-nav-icon  sidebarIcon"/>,
    _children: [
        {
            _tag: 'CSidebarNavItem',
            name: 'Breadcrumb',
            to: '/base/breadcrumbs',
          },
          {
            _tag: 'CSidebarNavItem',
            name: 'Cards',
            to: '/base/cards',
          },
    ]
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Parents',
    route: '/admin/teachers',
    icon: <CIcon name="cil-people" customClasses="c-sidebar-nav-icon  sidebarIcon"/>,
    _children: [
        {
            _tag: 'CSidebarNavItem',
            name: 'Breadcrumb',
            to: '/base/breadcrumbs',
          },
          {
            _tag: 'CSidebarNavItem',
            name: 'Cards',
            to: '/base/cards',
          },
    ]
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Attendance',
    route: '/admin/teachers',
    icon: 'cil-pencil',
    _children: [
        {
            _tag: 'CSidebarNavItem',
            name: 'Breadcrumb',
            to: '/admin/teachers',
          },
          {
            _tag: 'CSidebarNavItem',
            name: 'Cards',
            to: '/base/cards',
          },
    ]
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Academics',
    route: '/admin/academics',
    icon: 'cil-puzzle',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Breadcrumb',
        to: '/base/breadcrumbs',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Cards',
        to: '/base/cards',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Carousel',
        to: '/base/carousels',
      },
     
    
    ],
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Finance',
    route: '/admin/Finance',
    icon: 'cil-cursor',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Buttons',
        to: '/buttons/buttons',
      }
    ],
  },

  {
    _tag: 'CSidebarNavDropdown',
    name: 'Notifications',
    route: '/notifications',
    icon: 'cil-bell',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Alerts',
        to: '/notifications/alerts',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Badges',
        to: '/notifications/badges',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Modal',
        to: '/notifications/modals',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Toaster',
        to: '/notifications/toaster'
      }
    ]
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Message',
    to: '/widgets',
    icon: 'cil-calculator',
  },
  
  
]

export default _nav

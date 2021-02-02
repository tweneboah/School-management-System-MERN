import React from 'react'
import CIcon from '@coreui/icons-react'

const _nav =  [
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Teacher Dashboard',
    route: '/admin',
    icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon sidebarIcon"/>,
    _children: [
        {
            _tag: 'CSidebarNavItem',
            name: 'My Profile',
            to: '/base/breadcrumbs',
          },
          {
            _tag: 'CSidebarNavItem',
            name: 'Edit Profile',
            to: '/base/cards',
          },
          {
            _tag: 'CSidebarNavItem',
            name: 'Salary',
            to: '/base/breadcrumbs',
          }
    ]
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Academics',
    route: '/academics',
    icon: <CIcon name="cil-people" customClasses="c-sidebar-nav-icon  sidebarIcon"/>,
    _children: [
        {
            _tag: 'CSidebarNavItem',
            name: 'All Classes',
            to: '/classes/all',
          },
          {
            _tag: 'CSidebarNavItem',
            name: 'Classes',
            to: '/classes/details',
          },
          {
            _tag: 'CSidebarNavItem',
            name: 'All Courses',
            to: '/courses/all',
          },
          {
            _tag: 'CSidebarNavItem',
            name: 'Course Details',
            to: '/courses/details',
          },
    ]
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Attendences',
    to: '/attendances',
    icon: 'cil-calculator',
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Messages',
    to: '/messages',
    icon: 'cil-calculator',
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Notifications',
    to: '/notifications',
    icon: 'cil-calculator',
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Account Settings',
    to: '/settings',
    icon: 'cil-calculator',
  },
  
  
]

export default _nav

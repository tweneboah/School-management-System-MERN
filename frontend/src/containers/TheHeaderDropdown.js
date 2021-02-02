import React from 'react'
import {
  CBadge,
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CButton

} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import {Avatar} from '@material-ui/core'
import { useSelector, useDispatch} from 'react-redux';
import {selectUser, logout} from '../store/slices/userSlice';
import {getIntial, getCapitalize} from '../utils';
import {useHistory} from 'react-router-dom'

const TheHeaderDropdown = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const history = useHistory();
  


  const handleLogout = () => {
      dispatch(logout);
      localStorage.clear();
      history.push('/login')
  }
  console.log(user)

  return (
    <CDropdown
      inNav
      className="c-header-nav-items mx-5"
      direction="down"
    >
      <CDropdownToggle className="c-header-nav-link" caret={false}>
        <div className="user__avatar ">
            <h6> <strong>{getCapitalize(user?.name)} {getIntial(user?.middleName || "")} {getCapitalize(user?.lastName)}</strong> <br/>  <span>{user?.role}</span></h6>
          <Avatar   src={user?.photoUrl} />
        </div>
      </CDropdownToggle>
      <CDropdownMenu className="pt-0" placement="bottom-end">
        <CDropdownItem
          header
          tag="div"
          color="light"
          className="text-center"
        >
          <strong>{getCapitalize(user?.name)} {getIntial(user?.middleName || "")}  {getCapitalize(user?.lastName)}</strong>
        </CDropdownItem>
        <CDropdownItem>
          <CIcon name="cil-bell" className="mfe-2" />
            My Profile
          <CBadge color="info" className="mfs-auto">42</CBadge>
        </CDropdownItem>
        <CDropdownItem>
          <CIcon name="cil-envelope-open" className="mfe-2" />
         Task
          <CBadge color="success" className="mfs-auto">42</CBadge>
        </CDropdownItem>
        <CDropdownItem>
          <CIcon name="cil-task" className="mfe-2" />
         Message
          <CBadge color="danger" className="mfs-auto">42</CBadge>
        </CDropdownItem>
  
        <CDropdownItem>
          <CIcon name="cil-user" className="mfe-2" />Settings
        </CDropdownItem>
        <CDropdownItem>
          <CIcon name="cil-settings" className="mfe-2" />
          Settings
        </CDropdownItem>
        <CButton onClick={handleLogout}>
          <CIcon name="cil-lock-locked" className="mfe-2" />
           Log Out
        </CButton>
      </CDropdownMenu>
    </CDropdown>
  )
}

export default TheHeaderDropdown

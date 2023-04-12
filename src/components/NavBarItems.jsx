import {
  DashboardIcon,
  TransactionIcon,
  SchedulesIcon,
  UsersIcons,
  SettingsIcon,
} from '@/assets'
import styled from 'styled-components'

const NavBarItems = (props) => {
  const { itemName } = props
  const IconComponent = {
    Dashboard: DashboardIcon,
    Transactions: TransactionIcon,
    Schedules: SchedulesIcon,
    Users: UsersIcons,
    Settings: SettingsIcon,
  }[itemName]
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        gap: '20px',
        alignItems: 'center',
      }}
    >
      <IconComponent />
      <StyledItemName>{itemName}</StyledItemName>
    </div>
  )
}

export default NavBarItems

const StyledItemName = styled.div`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: #ffffff;
`

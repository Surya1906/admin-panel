import styled from 'styled-components'
import { NavBarItems } from '@/components'

const NavBar = () => {
  const NavBarItemNames = [
    'Dashboard',
    'Transactions',
    'Schedules',
    'Users',
    'Settings',
  ]
  return (
    <StyledNavBarWrapper>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          height: '100%',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <StyledCompanyName>Board.</StyledCompanyName>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              marginTop: '60px',
              gap: '40px',
            }}
          >
            {NavBarItemNames.map((item) => (
              // eslint-disable-next-line react/jsx-key
              <NavBarItems itemName={item} />
            ))}
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
          }}
        >
          <StyledOtherNavBarText>Help</StyledOtherNavBarText>
          <StyledOtherNavBarText>Contact Us</StyledOtherNavBarText>
        </div>
      </div>
    </StyledNavBarWrapper>
  )
}

export default NavBar

const StyledNavBarWrapper = styled.div`
  background: #000000;
  border-radius: 30px;
  padding: 60px 50px 60px 50px;
`
const StyledCompanyName = styled.div`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 44px;
  color: #ffffff;
`

const StyledOtherNavBarText = styled.div`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #ffffff;
`

import styled from 'styled-components'
import { SearchBar } from '@/components'
import { AlertIcon } from '@/assets'
const DashboardHeader = (props) => {
  const { UserProfilePic } = props
  console.log(UserProfilePic)
  return (
    <StyledHeaderWrapper>
      <StyledHeaderTitles>Dashboard</StyledHeaderTitles>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          gap: '20px',
        }}
      >
        <SearchBar />
        <AlertIcon />
        <img
          src={UserProfilePic}
          style={{ borderRadius: '50px', width: '30px', height: '30px' }}
        />
      </div>
    </StyledHeaderWrapper>
  )
}

export default DashboardHeader

const StyledHeaderWrapper = styled.div`
  padding: 20px 0px;
  display: flex;
  flex-direction: row;
  flex: 1;
  justify-content: space-between;
`
const StyledHeaderTitles = styled.div`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  color: #000000;
`

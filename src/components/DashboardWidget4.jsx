/* eslint-disable react/jsx-key */
import styled from 'styled-components'
import { ArrowRightIcon } from '@/assets'
import { ScheduleBlock } from '@/components'

const DashboardWidget4 = () => {
  const datasets = [
    {
      id: 1,
      title: 'Meeting with suppliers from Kuta Bali',
      time: '14.00-15.00',
      location: 'at Sunset Road, Kuta, Bali',
    },
    {
      id: 2,
      title: 'Check operation at Giga Factory 1',
      time: '18.00-20.00',
      location: 'at Central Jakarta',
    },
  ]
  return (
    <StyledWidgetWrapper>
      <div
        style={{
          display: 'flex',
          gap: '20px',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        <StyledActivityText>Today’s schedule</StyledActivityText>
        <div
          style={{
            display: 'flex',
            gap: '5px',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <StyledDateSwitcherText>See All</StyledDateSwitcherText>
          <ArrowRightIcon />
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {datasets.map((item) => (
          <ScheduleBlock item={item} />
        ))}
      </div>
    </StyledWidgetWrapper>
  )
}

export default DashboardWidget4

const StyledWidgetWrapper = styled.div`
  background: #ffffff;
  border-radius: 20px;
  padding: 32px 41px;
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 25px;
`
const StyledActivityText = styled.div`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  color: #000000;
`
const StyledDateSwitcherText = styled.div`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #858585;
`

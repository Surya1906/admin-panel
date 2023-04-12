import styled from 'styled-components'
import { LineChart } from '@/components'
import { ArrowIcon } from '@/assets'

const DashboardWidget2 = () => {
  return (
    <StyledWidgetWrapper>
      <div
        style={{
          display: 'flex',
          gap: '5px',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <div style={{ display: 'flex', gap: '5px', flexDirection: 'column' }}>
          <StyledActivityText>Activities</StyledActivityText>
          <div
            style={{
              display: 'flex',
              gap: '5px',
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
            <StyledDateSwitcherText>May - June 2021</StyledDateSwitcherText>
            <ArrowIcon />
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            gap: '35px',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <div
            style={{
              display: 'flex',
              gap: '10px',
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
            <div
              style={{
                background: '#E9A0A0',
                borderRadius: '50px',
                width: '10px',
                height: '10px',
              }}
            />
            <StyledLegendText>User Gained</StyledLegendText>
          </div>
          <div
            style={{
              display: 'flex',
              gap: '10px',
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
            <div
              style={{
                background: '#9BDD7C',
                borderRadius: '50px',
                width: '10px',
                height: '10px',
              }}
            />
            <StyledLegendText>User Lost</StyledLegendText>
          </div>
        </div>
      </div>
      <div style={{ maxHeight: '212px' }}>
        <LineChart />
      </div>
    </StyledWidgetWrapper>
  )
}

export default DashboardWidget2

const StyledWidgetWrapper = styled.div`
  background: #ffffff;
  border-radius: 20px;
  padding: 30px 40px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 30px;
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
const StyledLegendText = styled.div`
  font-family: 'Lato';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #000000;
`

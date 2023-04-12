import styled from 'styled-components'
import { PieChart } from '@/components'
import { ArrowIcon } from '@/assets'

const DashboardWidget3 = () => {
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
        <StyledActivityText>Top products</StyledActivityText>
        <div
          style={{
            display: 'flex',
            gap: '5px',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <StyledDateSwitcherText>May - June 2021</StyledDateSwitcherText>
          <ArrowIcon />
        </div>
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          gap: '40px',
          alignItems: 'center',
        }}
      >
        <div style={{ maxHeight: '145', maxWidth: '145px' }}>
          <PieChart />
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '21px',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
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
                  background: '#9BDD7C',
                  borderRadius: '50px',
                  width: '10px',
                  height: '10px',
                }}
              />
              <StyledLegendText>Basic Tees</StyledLegendText>
            </div>
            <StyledLegendValue>55%</StyledLegendValue>
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
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
                  background: '#F6DC7D',
                  borderRadius: '50px',
                  width: '10px',
                  height: '10px',
                }}
              />
              <StyledLegendText>Custom Short Pants</StyledLegendText>
            </div>
            <StyledLegendValue>31%</StyledLegendValue>
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
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
                  background: '#EE8484',
                  borderRadius: '50px',
                  width: '10px',
                  height: '10px',
                }}
              />
              <StyledLegendText>Super Hoodies</StyledLegendText>
            </div>
            <StyledLegendValue>14%</StyledLegendValue>
          </div>
        </div>
      </div>
    </StyledWidgetWrapper>
  )
}

export default DashboardWidget3

const StyledWidgetWrapper = styled.div`
  background: #ffffff;
  border-radius: 20px;
  padding: 32px 41px;
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 20px;
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
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  color: #000000;
`
const StyledLegendValue = styled.div`
  font-family: 'Lato';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  color: #858585;
  padding: 0px 0px 0px 20px;
`

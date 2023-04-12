import {
  RevenuesIcon,
  TransactionDarkIcon,
  LikeIcon,
  User2Icon,
} from '@/assets'
import styled from 'styled-components'

const DashboardWidget1 = (props) => {
  const { item } = props
  const IconComponent = {
    1: RevenuesIcon,
    2: TransactionDarkIcon,
    3: LikeIcon,
    4: User2Icon,
  }[item.id]
  const ColorComponent = {
    1: '#DDEFE0',
    2: '#F4ECDD',
    3: '#EFDADA',
    4: '#DEE0EF',
  }[item.id]
  return (
    <CardWrapper color={ColorComponent}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'flex-end',
        }}
      >
        <IconComponent />
      </div>
      <div>
        <CardTitle>{item.title}</CardTitle>
        <CardValue>{item.value}</CardValue>
      </div>
    </CardWrapper>
  )
}

export default DashboardWidget1

const CardWrapper = styled.div`
  background: ${(props) => props.color};
  border-radius: 20px;
  width: 220px;
  height: 120px;
  padding: 20px 25px;
`
const CardTitle = styled.div`
  font-family: 'Lato';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #000000;
`
const CardValue = styled.div`
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 33px;
  color: #000000;
`

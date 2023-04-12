import styled from 'styled-components'

const ScheduleBlock = (props) => {
  const { item } = props
  const color = {
    1: '#9BDD7C',
    2: '#6972C3',
  }[item.id]
  return (
    <div style={{ display: 'flex', flexDirection: 'row', gap: '15px' }}>
      <Divider color={color} />
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '5px',
          paddingBottom: '10px',
        }}
      >
        <ScheduleTitle>{item.title}</ScheduleTitle>
        <ScheduleTime>{item.time}</ScheduleTime>
        <ScheduleLocation>{item.location}</ScheduleLocation>
      </div>
    </div>
  )
}

export default ScheduleBlock

const ScheduleTitle = styled.div`
  font-family: 'Lato';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  color: #666666;
`
const ScheduleTime = styled.div`
  font-family: 'Lato';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  color: #999999;
`
const ScheduleLocation = styled.div`
  font-family: 'Lato';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  color: #999999;
`
const Divider = styled.div`
  border: ${(props) => `5px solid ${props.color}`};
`

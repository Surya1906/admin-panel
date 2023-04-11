import styled from 'styled-components'

const InputComponent = (props) => {
  const { type, label } = props
  return (
    <div style={{ gap: '10px', display: 'flex', flexDirection: 'column' }}>
      <StyledLabel>{label}</StyledLabel>
      <StyledInput type={type} />
    </div>
  )
}

export default InputComponent

const StyledLabel = styled.div`
  font-family: 'Lato';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #000000;
`
const StyledInput = styled.input`
  background: #eaeaea;
  border-radius: 10px;
  padding: 10px 15px;
  border-color: transparent;
  width: 100%;
`

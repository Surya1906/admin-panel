import styled from 'styled-components'

const Button = (props) => {
  const { label } = props
  return <StyledButtonLayout>{label}</StyledButtonLayout>
}

export default Button

const StyledButtonLayout = styled.div`
  background: #000000;
  border-radius: 10px;
  width: 100%;
  display: flex;
  align-items: center;
  text-align: center;
  color: #ffffff;
  justify-content: center;
  padding: 9px 0px;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
`

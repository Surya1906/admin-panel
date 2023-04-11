import { GoogleIcon, AppleIcon } from '@/assets'
import styled from 'styled-components'

const SignInWithButton = (props) => {
  const { iconName, Text } = props
  return (
    <StyledButton>
      {iconName === 'Google' ? <GoogleIcon /> : <AppleIcon />}
      <StyledButtonText>{Text}</StyledButtonText>
    </StyledButton>
  )
}

export default SignInWithButton

const StyledButton = styled.div`
  background: #ffffff;
  border-radius: 10px;
  width: 180px;
  height: 30px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`
const StyledButtonText = styled.div`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  margin-left: 10px;
`

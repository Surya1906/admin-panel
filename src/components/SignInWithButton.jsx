import { GoogleIcon, AppleIcon } from '@/assets'
import styled from 'styled-components'
import { useSession, signIn, signOut } from 'next-auth/react'

const SignInWithButton = (props) => {
  const { iconName, Text } = props
  async function handleGoogleSignin() {
    if (iconName === 'Google') {
      await signIn('google', { callbackUrl: '/dashboard' })
    }
  }
  return (
    <StyledButton onClick={handleGoogleSignin}>
      {iconName === 'Google' ? <GoogleIcon /> : <AppleIcon />}
      <StyledButtonText>{Text}</StyledButtonText>
    </StyledButton>
  )
}

export default SignInWithButton

const StyledButton = styled.div`
  background: #ffffff;
  border-radius: 10px;
  padding: 8px 19px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  :hover {
    cursor: pointer;
  }
`
const StyledButtonText = styled.div`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  margin-left: 10px;
`

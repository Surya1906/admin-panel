import styled from 'styled-components'
import { SignInWithButton, FormWrapper } from '@/components'
import { useWindowDimensions } from '@/hooks'
const SigninBlock = () => {
  let { width, height } = useWindowDimensions()
  if (width < 768) {
    height = height - 128
  }
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        height: `${height}px`,
        justifyContent: 'center',
      }}
    >
      <div>
        <div>
          <StyledSignInText>Sign In</StyledSignInText>
          <StyledSignInSubText>Sign in to your account</StyledSignInSubText>
        </div>
        <div
          style={{
            margin: '25px 0px',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          <SignInWithButton iconName='Google' Text='Sign in with Google' />
          <SignInWithButton Text='Sign in with Apple' />
        </div>
        <FormWrapper />
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '4px',
            marginTop: '20px',
          }}
        >
          <StyledDontHaveAccountText>
            Don’t have an account?
          </StyledDontHaveAccountText>
          <StyledRegisterText>Register here</StyledRegisterText>
        </div>
      </div>
    </div>
  )
}

export default SigninBlock

const StyledSignInText = styled.div`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 44px;
  color: #000000;
  margin-bottom: 5px;
`
const StyledSignInSubText = styled.div`
  font-family: 'Lato';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #000000;
`

const StyledDontHaveAccountText = styled.div`
  font-family: 'Lato';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #858585;
`

const StyledRegisterText = styled.div`
  font-family: 'Lato';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #346bd5;
`

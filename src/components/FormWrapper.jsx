import styled from 'styled-components'
import { InputComponent, Button } from '@/components'

const FormWrapper = () => {
  return (
    <StyledFormWrapper>
      <InputComponent label='Email' type='email' />
      <InputComponent label='Password' type='password' />
      <StyledForgotPasswordText>Forgot password?</StyledForgotPasswordText>
      <Button label='Sign In' />
    </StyledFormWrapper>
  )
}

export default FormWrapper

const StyledFormWrapper = styled.div`
  padding: 30px;
  width: 365px;
  background: #ffffff;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`
const StyledForgotPasswordText = styled.div`
  font-family: 'Lato';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #346bd5;
`

import type { NextPage } from 'next';
import { useEffect } from 'react';
import styled from 'styled-components';

const RegisterPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 100px;
`;

const ServiceTitle = styled.div`
  font-size: 40px;
  color: navy;
  font-weight: bold;
`;

const Register: NextPage = () => {
  return (
    <RegisterPageContainer>
      <ServiceTitle>MediGo</ServiceTitle>
      <form>
        <input type="text" required></input>
      </form>
    </RegisterPageContainer>
  );
};

export default Register;

import type { NextPage } from 'next';
import { useState } from 'react';
import Image from 'next/Image';
import styled from 'styled-components';
import { useRouter } from 'next/router';

const LoginPageContainer = styled.div`
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

const IconWrapper = styled.div`
  margin-top: 30px;
`;

const BtnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
  width: 100%;
`;

const GoogleLoginBtn = styled.button`
  border-radius: 10px;
  border: 1px solid black;
  width: 80%;
  height: 40px;
`;

const NaverLoginBtn = styled.button`
  border-radius: 10px;
  border: 1px solid black;
  width: 80%;
  height: 40px;
`;

const Login: NextPage = () => {
  const router = useRouter();
  const [login, setLogin] = useState(false);

  return (
    <LoginPageContainer>
      <ServiceTitle>MediGo</ServiceTitle>
      <IconWrapper>
        <Image
          src={'/icon-512x512.png'}
          width={250}
          height={250}
          alt={'medicineIcon'}
        />
      </IconWrapper>
      <BtnWrapper>
        <GoogleLoginBtn onClick={() => router.push('/crud')}>
          구글로 시작하기
        </GoogleLoginBtn>
        <NaverLoginBtn>네이버로 시작하기</NaverLoginBtn>
      </BtnWrapper>
    </LoginPageContainer>
  );
};

export default Login;

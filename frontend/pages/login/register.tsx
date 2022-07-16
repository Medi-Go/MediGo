import type { NextPage } from 'next';
import Image from 'next/Image';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import { useRecoilState } from 'recoil';
import { authState } from '../../contexts/auth';

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

const RegisterForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const RegisterInput = styled.input`
  margin-top: 50px;
  width: 300px;
  height: 40px;
`;

const RegisterBtn = styled.button`
  margin-top: 50px;
  height: 40px;
  background-color: navy;
  color: white;
  font-weight: bold;
`;

const Register: NextPage = () => {
  const router = useRouter();
  const [auth, setAuth] = useRecoilState(authState);

  const registerNewUser = () => {
    console.log('register');
    setAuth(true);
    router.push('/main');
  };
  return (
    <RegisterPageContainer>
      <ServiceTitle>
        <Image
          src={'/images/mainLogo.png'}
          width={130}
          height={40}
          alt={'arrowRightBtn'}
        />
      </ServiceTitle>
      <RegisterForm action="http://localhost:3000/main/get" method="get">
        <RegisterInput
          type="text"
          // value="이름을 입력해주세요"
          id="name"
          required
        ></RegisterInput>
        <RegisterInput
          type="text"
          // value="핸드폰 번호를 입력해주세요"
          id=""
          required
        ></RegisterInput>
        <RegisterInput
          type="text"
          // value="주민번호를 입력해주세요"
          required
        ></RegisterInput>
        <RegisterBtn onClick={registerNewUser}>회원가입</RegisterBtn>
      </RegisterForm>
    </RegisterPageContainer>
  );
};

export default Register;

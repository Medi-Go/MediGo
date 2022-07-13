import type { NextPage } from 'next';
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { authState } from '../../contexts/auth';
import { useRouter } from 'next/router';

const Auth: NextPage = () => {
  const router = useRouter();
  const [auth, setAuth] = useRecoilState(authState);

  useEffect(() => {
    if (auth) {
      router.push('/main');
    } else {
      router.push('/login/register');
    }
  });

  return <div>auth page</div>;
};

export default Auth;

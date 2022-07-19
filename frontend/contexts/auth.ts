import { atom } from 'recoil';

const authState = atom({
  key: 'authState',
  default: true,
});

export { authState };

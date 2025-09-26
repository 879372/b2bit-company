import { lazy, Suspense, type ReactNode } from 'react';
import ClipLoader from "react-spinners/ClipLoader";
import logo from '../assets/logo.png';

const Loader = () => (
  <div className='flex flex-col gap-5 justify-center items-center h-[100vh]'>
    <img src={logo} alt="logo" className='h-10' />
    <ClipLoader
      color={'#002274'}
      loading={true}
      size={30}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
  </div>
);

const Login = lazy(() => import('../pages/Login'));
const Dashboard = lazy(() => import('../pages/Dashboard'));

export interface AppRoute {
  path: string;
  element: ReactNode;
  private?: boolean;
}

const appRoutes: AppRoute[] = [
  {
    path: '/',
    element: (
      <Suspense fallback={<Loader />}>
        <Login />
      </Suspense>
    ),
  },
  {
    path: '/dashboard',
    element: (
      <Suspense fallback={<Loader />}>
        <Dashboard />
      </Suspense>
    ),
    private: true,
  },
];

export { appRoutes as routes };


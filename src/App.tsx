import { AppRouter } from './components/routes/AppRouter';
import { AuthProvider } from './context/AuthContext';

export const App = () => (
  <AuthProvider>
    <AppRouter />
  </AuthProvider>
);

import { routes, type AppRoute } from '@/lib/routesConfig';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { PrivateRoute } from './PrivateRoute';

export const AppRouter = () => {
    const { user } = useAuth();
    const isAuthenticated = !!user;
    return (
        <BrowserRouter>
            <Routes>
                {routes.map((route: AppRoute) => {
                    if (route.private) {
                        return (
                            <Route
                                key={route.path}
                                path={route.path}
                                element={
                                    <PrivateRoute isAuthenticated={isAuthenticated}>
                                        {route.element}
                                    </PrivateRoute>
                                }
                            />
                        );
                    }
                    return <Route key={route.path} path={route.path} element={route.element} />;
                })}
            </Routes>
        </BrowserRouter>
    );
};

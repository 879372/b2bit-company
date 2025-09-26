import type { Login } from "@/api/interfaces/auth.interfaces";
import logo from "@/assets/logo.png";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useAuth } from "@/context/AuthContext";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";
import * as Yup from "yup";

export const AuthLogin = () => {
    const { user, login, loading, error } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (user) {
            navigate("/dashboard");
        }
    }, [user, navigate]);

    const initialValues: Login = { email: "", password: "" };

    const validationSchema = Yup.object({
        email: Yup.string().email("E-mail inválido").required("E-mail obrigatório"),
        password: Yup.string().min(6, "Mínimo 6 caracteres").required("Senha obrigatória"),
    });

    const handleSubmit = async (values: Login) => {
        const success = await login(values);
        if (success) {
            navigate("/dashboard");
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <Card className="bg-white px-6 py-10 shadow-2xl w-full max-w-md">
                <div className="flex justify-center">
                    <img src={logo} alt="b2bit" className="w-full px-10 py-5" />
                </div>

                {error && <div className="text-red-500 text-center">{error}</div>}

                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                >
                    <Form className="flex flex-col gap-4 space-y-2">
                        <div className="flex flex-col">
                            <label className="mb-1 font-semibold text-[1.2em]">E-mail</label>
                            <Field
                                data-cy="email"
                                type="email"
                                name="email"
                                placeholder="@gmail.com"
                                className="p-3 border rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#002274]"
                            />
                            <ErrorMessage
                                name="email"
                                component="div"
                                className="text-red-500 text-sm mt-1"
                            />
                        </div>

                        <div className="flex flex-col">
                            <label className="mb-1 font-semibold text-[1.2em]">Password</label>
                            <Field
                                data-cy="password"
                                type="password"
                                name="password"
                                placeholder="*************"
                                className="p-3 border rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#002274]"
                            />
                            <ErrorMessage
                                name="password"
                                component="div"
                                className="text-red-500 text-sm mt-1"
                            />
                        </div>

                        <Button
                            data-cy="submit"
                            type="submit"
                            disabled={loading}
                            className="bg-[#002274] mt-2 text-[1.2em] text-white p-5 border rounded-lg focus:outline-none focus:ring-2 cursor-pointer h-12"
                        >
                            {loading ?
                                <ClipLoader
                                    color={'#ffffff'}
                                    loading={true}
                                    size={20}
                                    aria-label="Loading Spinner"
                                    data-testid="loader"
                                />
                                :
                                "Sign In"
                            }
                        </Button>
                    </Form>
                </Formik>
            </Card>
        </div >
    );
};

export default AuthLogin;

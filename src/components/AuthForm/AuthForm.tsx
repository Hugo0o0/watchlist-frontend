import { Link, Navigate } from "react-router-dom";
import { Button, FormInput, Heading } from "../UI";
import { motion } from "framer-motion";
import capitialize from "@/utils/capitilaze";
import { useFormik } from "formik";
import { loginSchema, registerSchema } from "@/models/authSchema";
import useAuth from "@/utils/hooks/auth/useAuth";

interface AuthFormProps {
  type: "login" | "register";
}

const AuthForm = ({ type }: AuthFormProps) => {
  const { login, register, token } = useAuth();
  const isLogin = type === "login";
  const handleLogin = async (values: any) => {
    await login(values.email, values.password);
  };
  const handleRegister = async (values: any) => {
    await register(values.email, values.password);
  };

  const { handleSubmit, values, errors, handleChange, handleBlur } = useFormik({
    initialValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
    onSubmit: isLogin ? handleLogin : handleRegister,
    validationSchema: isLogin ? loginSchema : registerSchema,
  });

  return !token ? (
    <form
      onSubmit={handleSubmit}
      className="rounded-[20px] bg-mirage flex px-12 py-5 flex-col justify-between w-[32.7rem] h-[36.5rem] md:h-[41.8rem] md:w-[40rem] lg:h-[37.3rem]"
    >
      <Heading
        key={type}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        size="l"
      >
        {capitialize(type)}
      </Heading>
      <FormInput
        name="email"
        value={values.email}
        onBlur={handleBlur}
        onChange={handleChange}
        error={errors.email}
        type="email"
        placeholder="Email Address"
      />
      <FormInput
        name="password"
        value={values.password}
        onBlur={handleBlur}
        onChange={handleChange}
        error={errors.password}
        type="password"
        placeholder="Password"
      />

      {type === "register" && (
        <FormInput
          name="confirmPassword"
          value={values.confirmPassword}
          onBlur={handleBlur}
          onChange={handleChange}
          error={errors.confirmPassword}
          type="password"
          placeholder="Confirm Password"
        />
      )}

      <Button>{isLogin ? "Login to your account" : "Create an account"}</Button>
      <div className="flex items-center gap-2 ">
        <motion.p
          key={type}
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 200, opacity: 0 }}
        >
          {isLogin ? "Don't have an account?" : "Already have an account?"}
        </motion.p>
        <Link to={isLogin ? "/register" : "/login"} className="text-primary">
          {isLogin ? "Register" : "Login"}
        </Link>
      </div>
    </form>
  ) : (
    <Navigate to="/" />
  );
};

AuthForm.defaultProps = {
  type: "login",
};

export default AuthForm;

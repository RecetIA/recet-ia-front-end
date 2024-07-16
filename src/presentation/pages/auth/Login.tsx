import { zodResolver } from "@hookform/resolvers/zod";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { TypographyH2 } from "@/presentation/components/shared/TypographyH2";
import { TypographyP } from "@/presentation/components/shared/TypographyP";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/presentation/components/ui/form";
import { Input } from "@/presentation/components/ui/input";
import { Button } from "@/presentation/components/ui/button";

import { loginSchema } from "@/presentation/validations/userSchema";
import { useLoginMutation } from "@/presentation/hooks";
import { Spinner } from "@/presentation/components/ui/spinner";

export const Login = () => {
  console.log(import.meta.env.VITE_BACKEND_URL);
  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const { loginMutation, isLoadingLogin } = useLoginMutation();

  async function onSubmit(values: z.infer<typeof loginSchema>) {
    loginMutation.mutateAsync(values);
  }

  return (
    <div className="w-full p-4 sm:px-8 sm:py-5 flex flex-col gap-4">
      <TypographyH2 className="uppercase text-center">
        Inicia sesión
      </TypographyH2>
      <TypographyP className="text-center">
        Inicia sesión y accede a tus recetas
      </TypographyP>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-4"
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field, formState: { errors } }) => (
              <FormItem>
                <FormLabel>Correo</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Tu email"
                    className={`border ${
                      errors.email?.message
                        ? "border-red-500"
                        : "border-blue-600"
                    }`}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field, formState: { errors } }) => (
              <FormItem>
                <FormLabel>Contraseña</FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="Tu contraseña"
                    className={`border ${
                      errors.email?.message
                        ? "border-red-500"
                        : "border-blue-600"
                    }`}
                    {...field}
                  />
                </FormControl>
                <FormMessage>
                  {loginMutation.error && loginMutation.error.message}
                </FormMessage>
              </FormItem>
            )}
          />

          <Link to="/auth/olvide-password" className="text-sky-600">
            ¿Olvidaste tu contraseña?
          </Link>

          <Button type="submit" className="w-full flex gap-2 md:text-lg">
            <Spinner
              size="small"
              show={isLoadingLogin}
              className="text-slate-300"
            />
            Ingresar
          </Button>

          <TypographyP className="text-md">
            ¿No tienes cuenta?
            <Link
              to="/auth/registrar"
              className="text-sky-600 ml-2 font-medium"
            >
              Crea una
            </Link>
          </TypographyP>
        </form>
      </Form>
    </div>
  );
};

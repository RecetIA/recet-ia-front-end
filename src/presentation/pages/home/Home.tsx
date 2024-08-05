import { TypographyH1 } from "@/presentation/components/shared/TypographyH1";
import { TypographyP } from "@/presentation/components/shared/TypographyP";
import { buttonVariants } from "@/presentation/components/ui/button";
import { useLoginMutation } from "@/presentation/hooks";

import { Link } from "react-router-dom";

export const Home = () => {
  const { token } = useLoginMutation();
  return (
    <section className="flex items-center flex-col py-10 px-4 lg:flex-row h-full lg:py-32">
      <article
        className="lg:px-10 w-5/6 lg:w-full lg:max-w-[40rem] 
      flex flex-col justify-center items-center gap-4"
      >
        <div className="space-y-4">
          <TypographyH1 className="font-bold text-balance">
           Las mejores recetas con{" "}
            <b className="text-green-600">RecetIA</b>
          </TypographyH1>

          <TypographyP className="text-balance">
            <b className="text-green-600">RecetIA</b> tu asistente inteligente
            de recetas saludables ¿Tienes verduras y no sabes qué cocinar?{" "}
            <b className="text-green-600">RecetIA</b> te ofrece{" "}
            <b>recetas deliciosas y nutritivas</b> basadas en tus ingredientes.{" "}
            <b className="text-green-600">¡Prueba RecetIA hoy y sorpréndete!</b>
          </TypographyP>

          <Link
            to={token ? "/recetas/crear-receta" : "/auth/login"}
            className={buttonVariants({
              className: "rounded-lg text-base py-5",
            })}
          >
            Comenzar ahora
          </Link>
        </div>

        <img
          className="block lg:hidden w-4/5"
          src="/home-image.png"
          alt="home-image"
        />
      </article>

      <img
        src="/slider-images.png"
        className="absolute hidden lg:block
       lg:-top-[35rem] lg:-right-[35rem] animate-[spinWithPause_10s_linear_2] xl:-top-[41rem] xl:-right-[41rem]
      2xl:-top-[51rem] 2xl:-right-[51rem]"
        alt="image"
      />
    </section>
  );
};

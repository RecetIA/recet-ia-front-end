import { TypographyH2 } from "@/presentation/components/shared/TypographyH2";
import { TypographyP } from "@/presentation/components/shared/TypographyP";

import { useConfirmAccount } from "@/presentation/hooks";

import { CheckCircle2Icon, Loader } from "lucide-react";
import { Link, useParams } from "react-router-dom";

export const ConfirmAccount = () => {
  const params = useParams();
  const { queryConfirmAccount } = useConfirmAccount(params.id as string);

  return (
    <div className="flex flex-col gap-4 p-4 sm:px-8 sm:py-5 ">
      <header className="flex flex-col gap-2">
        <TypographyH2 className="text-center">
          ¡Tu cuenta ha sido autenticada con éxito!
        </TypographyH2>
        <TypographyP className="text-[#202446] text-center">
          Ahora tienes acceso completo a todas tus funciones. ¡Explora, crea y
          disfruta de tus proyectos y compras favoritas!
        </TypographyP>
      </header>

      {queryConfirmAccount.isLoading && (
        <div className="bg-blue-200 border-l-4 border-blue-500 p-3 flex items-center gap-2 text-blue-500">
          <Loader />

          <TypographyP>Validando cuenta...</TypographyP>
        </div>
      )}

      {queryConfirmAccount.data && (
        <div className="bg-green-200 border-l-4 border-green-500 p-3 flex items-center gap-2 text-green-500">
          <CheckCircle2Icon />

          <TypographyP>Usuario confirmado correctamente</TypographyP>
        </div>
      )}

      <Link
        to="/"
        type="submit"
        className="bg-[#366EFF] p-3 hover:bg-[#366EFF]/90 text-center text-white rounded-lg"
      >
        Volver a la pagina principal
      </Link>
    </div>
  );
};

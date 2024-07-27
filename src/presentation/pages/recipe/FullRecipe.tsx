
import { useLoginMutation, useRecipe } from "@/presentation/hooks";

import { Button } from "@/presentation/components/ui/button";
import { RecipeInfo } from "@/presentation/components/recipe/RecipeInfo";

import {  useNavigate, useParams } from "react-router-dom";
import { ArrowLeft, Bookmark, Heart } from "lucide-react";
import { TypographyH3 } from "@/presentation/components/shared/TypographyH3";

export const FullRecipe = () => {
  const params = useParams();
  const navigate = useNavigate();

  const { token } = useLoginMutation();
  const { queryRecipe } = useRecipe(params.id!, token!);

  // TODO: Agregar .fill-primary a icons cuando hay un evento
  return (
    <div className="bg-gray-100 my-4 rounded-xl shadow-lg border border-gray-200 mx-2 md:mx-0">
      <section className="flex justify-between items-center py-4 px-6">
        <Button
          onClick={() => navigate(-1)}
          size="icon"
          className="w-8 h-8 rounded-lg bg-slate-200 hover:bg-slate-300 text-gray-700 shadow-none transition-all"
        >
          <ArrowLeft />
        </Button>

        <div className="flex gap-3">
          <Button
            size="icon"
            className="w-8 h-8 rounded-lg bg-primary/20 hover:bg-primary/30 text-primary shadow-none transition-all"
          >
            <Heart className="" />
          </Button>

          <Button
            size="icon"
            className="w-8 h-8 rounded-lg bg-primary/20 hover:bg-primary/30 text-primary shadow-none transition-all"
          >
            <Bookmark className="" />
          </Button>
        </div>
      </section>

      <section className="p-6 bg-white">
        {queryRecipe.data && <RecipeInfo recipe={queryRecipe.data} />}
      </section>

      <section>
        <TypographyH3 className="font-bold text-gray-700 text-balance w-full">
          Ingredientes
        </TypographyH3>
      </section>
    </div>
  );
};

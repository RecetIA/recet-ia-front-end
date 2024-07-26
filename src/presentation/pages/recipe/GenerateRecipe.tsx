
import { TypographyP } from '@/presentation/components/shared/TypographyP';
import { TypographyH2 } from '../../components/shared/TypographyH2';

import { Badge } from '@/presentation/components/ui/badge';
import { Button } from '@/presentation/components/ui/button';
import MultipleSelector from '@/presentation/components/ui/multiple-selector';

import { ingredientsOptions, useIngredientsStore } from '@/presentation/store/ingredients-store';

import { Sparkles } from 'lucide-react';


export const GenerateRecipe = () => {
  const ingredients = useIngredientsStore((state) => state.ingredients);
  const addIngredient = useIngredientsStore((state) => state.addIngredient);
  const maxSelectedIngredients = useIngredientsStore(
    (state) => state.maxSelectedIngredients
  );
  const handleMaxSelected = useIngredientsStore((state) => state.handleMaxSelected);


  return (
    <div>
      <section className="flex flex-col justify-center items-center p-2 text-center">
        <TypographyH2 className="font-semibold mb-3 text-gray-700">
          Tus ingredientes aquí
        </TypographyH2>
        <TypographyP className="text-gray-700 text-balance">
          Echa un vistazo a tu despensa y escribe algunos ingredientes que
          tengas a la mano.
        </TypographyP>
        <TypographyP className="text-gray-700 text-balance">
          Tambien puedes escoger entre algunos de los siguientes debajo del
          campo.
        </TypographyP>

        <MultipleSelector
          className="w-full min-h-12 mt-2 text-lg rounded-xl"
          value={ingredients}
          onChange={(value) => useIngredientsStore.setState({ ingredients: value })}
          onMaxSelected={handleMaxSelected}
          defaultOptions={ingredientsOptions}
          placeholder="Ingresa tus ingredientes"
          emptyIndicator={
            <TypographyP className="text-center text-gray-700">
              Ingrediente no encontrado
            </TypographyP>
          }
          hidePlaceholderWhenSelected
          maxSelected={maxSelectedIngredients}
        />

        <div className="flex flex-wrap justify-center gap-3 w-full my-3">
          {ingredientsOptions.map((option, i) => (
            <Button
              key={i}
              onClick={() => addIngredient(option)}
              variant="ghost"
              className="p-0"
            >
              <Badge className="rounded-full bg-gray-200 hover:bg-gray-300 text-gray-700 text-sm cursor-pointer">
                {option.emoji} {option.label}
              </Badge>
            </Button>
          ))}
        </div>

        <Button size="xl" className="flex gap-3 font-semibold mb-2">
          Generar receta <Sparkles />
        </Button>
      </section>

      <hr className="border-gray-300" />

      <section className="my-5">
        <TypographyH2 className="font-semibold mb-3 text-primary text-center">
          Genera una receta <br />
          para ver los resultados
        </TypographyH2>
        <TypographyP className="text-gray-700 text-center text-balance">
          Nuestra Inteligencia Artificial te brindará distintas recomendaciones
          de recetas para ti!
        </TypographyP>
      </section>
    </div>
  );
}

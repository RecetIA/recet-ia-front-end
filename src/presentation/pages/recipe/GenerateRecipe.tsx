import { MouseEvent, useState } from 'react';

import { TypographyP } from '@/presentation/components/shared/TypographyP';
import { TypographyH2 } from '../../components/shared/TypographyH2';

import { Badge } from '@/presentation/components/ui/badge';
import { Button } from '@/presentation/components/ui/button';
import MultipleSelector, { Option } from '@/presentation/components/ui/multiple-selector';

import { Sparkles } from 'lucide-react';

const ingredientsOptions = [
  {
    label: "Pan blanco",
    value: "pan-blanco",
    emoji: "🍞"
  },
  {
    label: "Aguacate",
    value: "aguacate",
    emoji: "🥑"
  },
  {
    label: "Car de res",
    value: "carne-res",
    emoji: "🥩"
  },
  {
    label: "Zanahoria",
    value: "zanahoria",
    emoji: "🥕"
  },
  {
    label: "Brócoli",
    value: "brocoli",
    emoji: "🥦"
  },
  {
    label: "Tomate",
    value: "tomate",
    emoji: "🍅"
  },
  {
    label: "Papa",
    value: "papa",
    emoji: "🥔"
  },
  {
    label: "Cebolla",
    value: "cebolla",
    emoji: "🧅"
  },
  {
    label: "Limón",
    value: "limon",
    emoji: "🍋"
  },
  {
    label: "Ajo",
    value: "ajo",
    emoji: "🧄"
  },
  {
    label: "Huevo",
    value: "huevo",
    emoji: "🥚"
  },
  {
    label: "Pollo",
    value: "pollo",
    emoji: "🍗"
  },
  {
    label: "Arroz",
    value: "arroz",
    emoji: "🍚"
  },
  {
    label: "Ají",
    value: "aji",
    emoji: "🌶️"
  },
  {
    label: "Queso",
    value: "queso",
    emoji: "🧀"
  },
  {
    label: "Leche",
    value: "leche",
    emoji: "🥛"
  },
  {
    label: "Mantequilla",
    value: "mantequilla",
    emoji: "🧈"
  },
  {
    label: "Champiñón",
    value: "champinon",
    emoji: "🍄"
  },
  {
    label: "Maíz",
    value: "maiz",
    emoji: "🌽"
  },
  {
    label: "Plátano",
    value: "platano",
    emoji: "🍌"
  },
  {
    label: "Fresa",
    value: "fresa",
    emoji: "🍓"
  },
  {
    label: "Manzana",
    value: "manzana",
    emoji: "🍎"
  },
  {
    label: "Piña",
    value: "pina",
    emoji: "🍍"
  },
  {
    label: "Pescado",
    value: "pescado",
    emoji: "🐟"
  },
];

export const GenerateRecipe = () => {
  const [ingredients, setIngredients] = useState<Option[]>([]);
  // console.log(ingredients);

  const handleLoadIngredients = (ingredient: Option) => {
    setIngredients((prev) => [...prev, ingredient]);
  }

  return (
    <div>
      <section className="flex flex-col justify-center items-center py-6 text-center">
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
          className="w-full min-h-12 mt-4 text-lg rounded-xl"
          value={ingredients}
          onChange={setIngredients}
          defaultOptions={ingredientsOptions}
          placeholder="Ingresa tus ingredientes"
          emptyIndicator={
            <TypographyP className="text-center text-gray-700">
              Ingrediente no encontrado
            </TypographyP>
          }
          hidePlaceholderWhenSelected
        />

        <div className="flex flex-wrap justify-center gap-3 w-full my-5">
          {ingredientsOptions.map((option, i) => (
            <Button
              key={i}
              onClick={() => handleLoadIngredients(option)}
              variant="ghost"
              className="p-0"
            >
              <Badge className="rounded-full bg-gray-200 hover:bg-gray-300 text-gray-700 text-sm cursor-pointer">
                {option.emoji} {option.label}
              </Badge>
            </Button>
          ))}
        </div>

        <Button size="xl" className="flex gap-3 font-semibold">
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

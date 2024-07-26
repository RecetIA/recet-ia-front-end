import {create} from 'zustand';

import { toast } from '@/presentation/components/ui/use-toast';
import { Option } from '../components/ui/multiple-selector';

export const ingredientsOptions = [
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



interface IngredientsState {
  ingredients: Option[];
  maxSelectedIngredients: number;
  addIngredient: (ingredient: Option) => void;
  handleMaxSelected: (maxLimit: number) => void;
}

export const useIngredientsStore = create<IngredientsState>((set, get) => ({
  ingredients: [],
  maxSelectedIngredients: 4,
  addIngredient: (ingredient) => {
    const { ingredients, maxSelectedIngredients, handleMaxSelected } = get();
    if (ingredients.some((i) => i.value === ingredient.value)) return;

    if (ingredients.length >= maxSelectedIngredients) {
      handleMaxSelected(maxSelectedIngredients);
      return;
    }

    set((state) => ({
     ingredients: [...state.ingredients, ingredient],
    }));
  },
  handleMaxSelected: (maxLimit) => {
    toast({
      title: `Solo puedes seleccionar ${maxLimit} ingredientes`,
      variant: 'destructive',
    });
  },
}));
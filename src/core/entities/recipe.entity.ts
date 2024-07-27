import { Ingredient, Nutritional } from "@/infrastructure/interfaces/recipe.response";

export interface Recipe {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  cookTimeInMins: number;
  calories: number;
  servings: number;
}

export interface FullRecipe extends Recipe {
  ingredients: Ingredient[];
  steps: string[];
  nutritional: Nutritional;
  isFavorite: boolean;
}

export interface ShortRecipe{
  id: string;
  name: string;
  imageUrl: string;
  quantityIngredients: number;
  cookTimeInMins: number;
  calories: number;
  servings: number;
  matchRate: number;
}
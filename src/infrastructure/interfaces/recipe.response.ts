export interface RecipeResponse {
  id: string;
  observations: string;
  recipe: Recipe;
  img: string;
  creator: string;
  createAt: string;
  updateAt: string;
}

interface Recipe {
  matchRate: number;
  title: string;
  description: string;
  cookTimeInMins: number;
  calories: number;
  servings: number;
  ingredients: Ingredient[];
  steps: string[];
  nutritional: Nutritional;
  observations: string;
}

interface Nutritional {
  summary: string;
  values: Value[];
}

interface Value {
  name: string;
  measure: Measure;
  quantity: number;
}

export interface Ingredient {
  name: string;
  measure: Measure;
  quantity: number;
  isOptional: boolean;
}

interface Measure {
  full: string;
  short: string;
}

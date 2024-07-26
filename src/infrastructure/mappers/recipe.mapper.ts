import { Recipe } from "@/core/entities/recipe.entity";
import { RecipeResponse } from "../interfaces/recipe.response";

export class RecipeMapper {
  static fromRecipeResultToEntity(response: RecipeResponse): Recipe {
    return {
      id: response.id,
      name: response.recipe.title,
      description: response.recipe.description,
      image: response.img,
      cookTimeInMins: response.recipe.cookTimeInMins,
      calories: response.recipe.calories,
      servings: response.recipe.servings,
    };
  }
}

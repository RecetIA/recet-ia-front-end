import { FullRecipe, Recipe } from "@/core/entities/recipe.entity";
import { RecipeResponse } from "../interfaces/recipe.response";

export class RecipeMapper {
  static fromRecipeResultToEntity(response: RecipeResponse): Recipe {
    return {
      id: response.id,
      name: response.recipe.title,
      description: response.recipe.description,
      imageUrl: response.img,
      cookTimeInMins: response.recipe.cookTimeInMins,
      calories: response.recipe.calories,
      servings: response.recipe.servings,
    };
  }

  static fromRecipeToEntity(response: RecipeResponse): FullRecipe {
    return {
      ...RecipeMapper.fromRecipeResultToEntity(response),
      ingredients: response.recipe.ingredients,
      steps: response.recipe.steps,
      nutritional: response.recipe.nutritional,
      
    };
  }
}

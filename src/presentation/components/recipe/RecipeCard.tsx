import { Button } from '@/presentation/components/ui/button';
import { Clock, Flame, User, ArrowRight, Target } from 'lucide-react';

interface RecipeCardProps {
  name: string;
  imageUrl: string;
  ingredientQuantity: number;
  cookTimeInMins: number;
  calories: number;
  servings: number;
  matchRate: number;
}

export const RecipeCard = (
  { name, imageUrl, ingredientQuantity, cookTimeInMins, calories, servings, matchRate }: RecipeCardProps
) => {

  return (
    <article className="relative max-w-60 rounded-xl border border-gray-200 shadow-sm overflow-hidden">
      <span className='absolute top-0 left-0 bg-gray-100 py-1.5 px-2 rounded-br-xl text-xs font-bold flex gap-1 items-center'>
        <Target width='.9rem' height='.9rem' /> {matchRate} %
      </span>
      <div className="py-2 h-40 bg-[url('/assets/bg1.jpg')] bg-cover bg-no-repeat bg-center flex items-center justify-center">
        <img src={imageUrl} alt="Imagen de la receta" className="h-full" />
      </div>
      <div className='flex gap-4 flex-col p-4 text-center'>
        <div className=''>
          <h1 className='text-2xl leading-none font-extrabold uppercase text-gray-700'>
            {name}
          </h1>
          <span className='text-gray-500 text-base font-medium'>{ingredientQuantity} ingredientes</span>
        </div>
        <div className='flex px-4 justify-between items-center'>
          <RecipeFeature text={`${cookTimeInMins} mins`} iconType="clock" />
          <RecipeFeature text={`${calories} cals`} iconType="cals" />
          <RecipeFeature text={`${servings} porcs`} iconType="serving" />
        </div>
        <Button>Ver receta <ArrowRight width='1rem' /></Button>
      </div>
    </article>
  )
}

// =========== Recipe Feature ===========

interface RecipeFeatureProps {
  text: string;
  iconType: 'clock' | 'cals' | 'serving';
}

const iconStyles = {
  width: '1.5rem',
  height: '1.5rem',
  color: '#16A34A',
}
const iconElement = {
  'clock': <Clock {...iconStyles} />,
  'cals': <Flame {...iconStyles} />,
  'serving': <User {...iconStyles} />,
}

const RecipeFeature = ({ text, iconType }: RecipeFeatureProps) => {
  return (
    <div className='flex flex-col justify-center items-center'>
      <div className='rounded-full bg-[#E3F9C2] p-2'>
        {iconElement[iconType]}
      </div>
      <div className='text-sm text-gray-500'>{text}</div>
    </div>
  )
}
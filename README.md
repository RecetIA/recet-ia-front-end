# RecetIA 
_Frontend_ de aplicación para generar recetas con inteligencia artificial, ideal para obtener ideas de
preparaciones con ingredientes que tienes en casa.
___

## Diagrama de arquitectura limpia
Esta app se desarrollará bajo una arquitectura limpia incompleta o adaptada, ya que no usaremos los _Datasources_ y el patrón _Repository_. Sin embargo, se usarán buenas prácticas de _Clean code_ y principios _SOLID_ que permitirá la mantenibilidad y escalabilidad de la aplicación.

![arquitectura-limpia](https://miro.medium.com/v2/resize:fit:1200/1*A_rg9nq0W01o0X8SnNZpFQ.png)

## Tecnologías y Bibliotecas:

Para el desarrollo _Frontend_ de esta _App Web_ se usaron las siguientes tecnologías y bibliotecas:

- **_HTML_**
- **_CSS_**
- **_Javascript_**
- **_Shadcn/UI_**
- **_Tailwind CSS_**
- **_React_**
- **_TypeScript_**
- **_Git_** 
- **_Netlify_**

![Tecnologias](https://skillicons.dev/icons?i=html,css,js,tailwind,react,vite,ts,git,github,npm,netlify)


---

## Hosting:

Utilizamos Netlify para alojar nuestra aplicación. Ofrece un proceso de implementación rápido y sencillo, con integración de herramientas de automatización y despliegue continuo para una publicación ágil y eficiente en entornos de producción.

[Ir a Netlify](https://app.netlify.com)

---

## ¿Que enfoque usa esta _App Web_?

Esta _App Web_ es una **Single Page Application(_SPA_)** o **Aplicación de una Sola Página** que usa principios de arquitectura limpia.

## Estructura de carpetas y archivos:

| Carpeta                          | Descripción | Formato para nombrar archivo | 
| -------------------------------- | ----------- | ------------------- |
| `/src`                           | Contiene toda el código de la app para producción(casos de uso, UI, configuraciones, etc) |  N/A |
| `/config`                        | Contiene archivos de configuración global para nuestra app(configuraciones de __APIs__, adaptadores, helpers, etc)  | N/A  |
| `/config/adapter`                | Contiene adaptadores que son piezas de código de librerías externas que adapta funcionalidades para que sean flexibles al cambio | `/nombre-contexto/nombre-modulo.adapter.ts` |
| `/config/helpers`                | Contiene funciones que realizan tareas comunes y que pueden ser reutilizadas(por ejemplo, formatear fechas, montos, calculos, etc)  | `nombre-descriptivo.ts` |
| `/core`                          | Contiene la lógica de negocio de nuestra app, como las entidades y casos de uso (esta lógica es independiente a cualquier framework frontend) | N/A |
| `/core/entities`                 | Contiene las _"entidades"_ de nuestra app (objeto que contiene la lógica de negocio o datos que usaremos) | `nombreentidad.entity.ts` |
| `/core/use-cases`                | Contiene los _"casos de uso"_ de nuestra app(un caso de uso es una operación específica que un usuario puede realizar. Ejemplo:  _"Iniciar sesión", "Registrarse", "Crear producto", etc_) | `/nombre-modulo/nombre-caso-uso.use-case.ts` |
| `/infrastructure`                | Es responsable de implementar los detalles de cómo nuestra app interactúa con las __APIs__, etc. | N/A |
| `/infrastructure/interfaces`     | Contiene las interfaces que definen cómo nuestra app interactúa con los sistemas externos (__APIs__, etc) | `nombre-descriptivo.response.ts`  |
| `/infrastructure/mappers`        | Son piezas de código que convierten datos de un formato a otro. | `nombreentidad.mapper.ts` |
| `/presentation`                  | Contiene código relacionado con la interfaz de usuario de nuestra aplicación. | N/A |
| `/presentation/components`       | Contiene  los componentes de React que se utilizan en nuestra aplicación. | `nombre-descriptivo/NombreComponente.tsx` |
| `/presentation/hooks`            | Contiene los hooks personalizados de React que se utilizan en nuestra aplicación. | `modulo/useNombreHook.tsx` |
| `/presentation/layouts`          | Contiene componentes de diseño de páginas que encapsulan la estructura general de una página. | `NombreLayout.tsx` |
| `/presentation/pages`            | Contiene los componentes de página(corresponden a una ruta o pantalla en nuestra app). |  `nombre-descriptivo/NombrePagina.tsx` |
| `/presentation/store`            | Contiene el código relacionado con la gestión del estado de nuestra app(usando Zustand). | `nombre-descriptivo-store.ts` |
---

## Nomenclatura de funcionalidades archivos de la Arquitectura Frontend.

### Adaptadores - **`/adapters`**
Se usa el patrón adaptador con una clase que puede contenedor métodos comunes o estáticos
dependiendo de nuestros requerimientos.

#### Ejemplo de patrón adaptador:
```ts
export class NombreAdapter {
  // Metodos estaticos o comunes...

  public static metodo{
    // Logica de paquete o libreria externa 

    return valor;
  }
}
```

---

### Helpers - **`/helpers`**
Son clases con métodos estáticos.

#### Ejemplo de helper `formatter.ts`:
```ts
export class Formatter {
  public static currency(value: number): string {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(value);
  }
}
```

---

### Entidades - **`/entities`**
Son interfaces que tienen en común un contexto(o pertenecen a un módulo)

#### Ejemplo de entity `movie.entity.ts`:
```ts
export interface Movie {

  id: number;
  title: string;
  description: string;
  releaseDate: Date;
  rating: number;
  poster: string;
  backdrop: string;

}

export interface FullMovie extends Movie {
  genres: string[];
  duration: number;
  budget: number;
  originalTitle: string;
  productionCompanies: string[];
}
```

---

### Casos de usos - **`/use-cases`**
Son funciones que se encargan de consumir un endpoint de una API que
obligatoriamente reciben un adaptador para peticiones http y si requerimos 
un parámetro extra tambien podemos agregarlos.

#### Ejemplo de caso de uso `movie/get-by-id.use-case.ts`:
```ts
import {HttpAdapter} from '../../../config/adapters/http/http.adapter';
import {MovieDBMovie} from '../../../infrastructure/interfaces/movie-db.responses';
import {MovieMapper} from '../../../infrastructure/mappers/movie.mapper';
import {FullMovie} from '../../entities/movie.entity';

export const getMovieByIdUseCase = async (
  fetcher: HttpAdapter,
  movieId: number,
): Promise<FullMovie> => {
  try {
    const movie = await fetcher.get<MovieDBMovie>(`/${movieId}`);
    const fullMovie = MovieMapper.fromMovieDBToEntity(movie);
    return fullMovie;
    
  } catch (error) {
    throw new Error(`Cannot get movie by id: ${movieId}`);
  }
}
```

---

### Interfaces - **`/interfaces`**
Son interfaces que hacen un contrato con las respuestas de endpoints de __APIs__.

#### Ejemplo de interfaz `movie-db.response.ts`:
```ts
export interface MovieDBMovie {
  adult:                 boolean;
  backdrop_path:         string;
  belongs_to_collection: BelongsToCollection;
  budget:                number;
  genres:                Genre[];
  homepage:              string;
  id:                    number;
  imdb_id:               string;
  original_language:     string;
  original_title:        string;
  overview:              string;
  popularity:            number;
  poster_path:           string;
  production_companies:  ProductionCompany[];
  production_countries:  ProductionCountry[];
  release_date:          string;
  revenue:               number;
  runtime:               number;
  spoken_languages:      SpokenLanguage[];
  status:                string;
  tagline:               string;
  title:                 string;
  video:                 boolean;
  vote_average:          number;
  vote_count:            number;
}
```

---

### Mappers - **`/mappers`**
En este caso el patrón mapper usa clases con métodos estáticos para transformar
la estructura de los datos y solo tener los datos que utilizaremos en la UI.

#### Ejemplo de mapper `movie.mapper.ts`:
```ts
import { FullMovie, Movie } from '../../core/entities/movie.entity';
import type { MovieDBMovie, Result } from '../interfaces/movie-db.responses';

export class MovieMapper {
  static fromMovieDBResultToEntity( result: Result  ): Movie {
    return {
      id: result.id,
      title: result.title,
      description: result.overview,
      releaseDate: new Date( result.release_date ),
      rating: result.vote_average,
      poster: `https://image.tmdb.org/t/p/w500${ result.poster_path }`,
      backdrop: `https://image.tmdb.org/t/p/w500${ result.backdrop_path }`,
    } 
  }

  static fromMovieDBToEntity( movie: MovieDBMovie ): FullMovie {
    return {
      id: movie.id,
      title: movie.title,
      description: movie.overview,
      releaseDate: new Date( movie.release_date ),
      rating: movie.vote_average,
      poster: `https://image.tmdb.org/t/p/w500${ movie.poster_path }`,
      backdrop: `https://image.tmdb.org/t/p/w500${ movie.backdrop_path }`,
      genres: movie.genres.map( genre => genre.name ),
      duration: movie.runtime,
      budget: movie.budget,
      originalTitle: movie.original_title,
      productionCompanies: movie.production_companies.map( company => company.name ),
    }
  }
}
```
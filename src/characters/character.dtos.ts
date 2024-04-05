import { IsString } from "class-validator";

export class BaseStarWarCharacterDto {
   @IsString()
   color_de_ojos: string;
   
   @IsString()
   genero: string;
   @IsString()
   color_de_cabello: string;
   @IsString()
   estatura: string;
   
   @IsString()
   masa: string;
   @IsString()
   nombre: string;
   @IsString()
   color_de_piel: string;
}
export class PeopleDto extends BaseStarWarCharacterDto {
   mundo_de_origin: string;
   peliculas: string[];
   año_de_nacimiento: string;
   creado: string;
   actualizado: string;
   especies: string[];
   naves_espaciales: string[];
   url: string
   vehiculos: string[];
}
export class CustomizeCharacterToBeSaveDto extends PeopleDto{
   id:string
}

export class SwapiPeopleDto {
   birth_year: string;
   eye_color: string;
   films: string[];
   gender: string;
   hair_color: string;
   height: string;
   homeworld: string;
   mass: string;
   name: string;
   skin_color: string;
   edited: string;
   created: string;
   species: string[];
   starships: string[]
   url: string;
   vehicles: string[];
}
   
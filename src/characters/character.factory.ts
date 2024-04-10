import { PeopleDto, SwapiPeopleDto } from "./character.dtos";

export function characterFactory(character: SwapiPeopleDto) {
   const buildCharacter: PeopleDto = {
      año_de_nacimiento: character.birth_year,
      creado: character.created,
      mundo_de_origin:character.homeworld,
      masa:character.mass,
      nombre:character.name,
      color_de_ojos:character.eye_color,
      color_de_piel:character.skin_color,
      peliculas:character.films,
      color_de_cabello:character.hair_color,
      genero:character.gender,
      estatura:character.height,
      actualizado:character.edited,
      especies:character.species,
      naves_espaciales:character.starships,
      url:character.url,
      vehiculos:character.vehicles
   }
   return buildCharacter
}
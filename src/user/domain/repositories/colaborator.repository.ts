import { Colaborador } from "../entities/colaborador.entity";

export interface ColaboradorRepository {
   find(document: string): Promise<Colaborador | null>
}
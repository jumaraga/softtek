export interface ColaboradorRepository {
   find(document: string): Promise<Colaborador | null>
}
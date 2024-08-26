export interface emailPort {
   send( to: string[], subject: string, template: string): Promise<void>
}
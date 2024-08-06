import { User } from "../entities/user.entity";

export interface AuthPort {
   create(user: User): Promise<void>
   getUser(username: string): Promise<{ status: string, enabled: boolean } | null>
}
import { User } from "../entities/user.entity";

export interface UserRepository {
   save(newUser: User): Promise<void>;
} 
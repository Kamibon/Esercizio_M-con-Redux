import { User } from "./dto";
import {  UsersService } from "./serviceImpl";


export interface UsersManagementService{
     getData(): Promise<User[]>,
     sendData(userToAdd:User): Promise<void>,
     editData(userToEdit:User): Promise<void>,
     deleteData(idToDelete: string): Promise<void>
}

export function NewUsersManagementService(){
     return new UsersService()
}
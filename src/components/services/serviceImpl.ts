
import axios from "axios";
import { UsersManagementService } from "./service";
import { User } from "./dto";


const url = 'https://jsonplaceholder.typicode.com/users/'

export class UsersService implements UsersManagementService {
    
    public getData(): Promise<User[]> {
        return axios.get(url).then(res => res.data);
    }

    public sendData(data: User): Promise<void> {
        return axios.post(url, data).then(response => response.data);
    }

    public editData(data: User): Promise<void> {
        return axios.put(`${url}/${data.id}`, data).then(res => res.data);
    }

    public deleteData(idToDelete: string): Promise<void> {
        return axios.delete(`${url}/${idToDelete}`);
    }
}
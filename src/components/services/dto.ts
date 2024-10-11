
export interface Address{
     street: string,
     suite:string,
     city:string,
     zipcode:string,
     geo: {
        lat:string,
        lng:string
     }
}

export interface User{
    [index: string]:any
    id:string,
    name: string,
    email:string,
    address:Address
}
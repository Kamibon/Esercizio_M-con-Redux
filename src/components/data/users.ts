export  type User = {
    [index: string]:any
    id:string,
    Name: string,
    Surname:string,
    BirthDate: Date,
    CF: string,
    Address:string
}


export const users: User[] = [
    {id:'0',Name:"Marco", Surname:"Veloso", BirthDate: new Date(1981, 8, 6), CF:"XXXXXXX", Address:"Via PincoPallino N.84" },
    {id:'1',Name:"Mario", Surname:"Rossi", BirthDate: new Date(1999, 12, 15), CF:"XXXXXXX", Address:"Via Roma N.12" },
    {id:'2',Name:"Giacomo", Surname:"Verdi", BirthDate: new Date(1976, 10, 4), CF:"XXXXXXX", Address:"Via Napoli N.33" },
    {id:'3',Name:"Giovanni", Surname:"Esposito", BirthDate: new Date(1954, 4, 8), CF:"XXXXXXX", Address:"Via Prova N.47" },
    {id:'4',Name:"Aldo", Surname:"Torrisi", BirthDate: new Date(2001, 3, 16), CF:"XXXXXXX", Address:"Via Mazzini N.55" },
    {id:'5',Name:"Pinco", Surname:"Panco", BirthDate: new Date(2012, 1, 27), CF:"XXXXXXX", Address:"Via Garibaldi N.68" },
    {id:'6',Name:"Panco", Surname:"Pinco", BirthDate: new Date(1966, 10, 12), CF:"XXXXXXX", Address:"Via PincoPallino N.65" },

]
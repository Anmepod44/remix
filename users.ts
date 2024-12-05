export interface User{
    id : string;
    name: string;
    email : string;
    password: string;
}

export const users:User[] =[
    {
        id: "1",
        name: "John Doe",
        email: "john.doe@example.com",
        password: "password123",
      },
      {
        id: "2",
        name: "Jane Smith",
        email: "jane.smith@example.com",
        password: "password456",
      },
      {
        id: "3",
        name: "Robert Johnson",
        email: "robert.johnson@example.com",
        password: "password789",
      },
      {
        id: "4",
        name: "Emily Davis",
        email: "emily.davis@example.com",
        password: "password321",
      },
]

export const addUser=(user:User)=>{
    // look for an existing user
    const existinguser = users.find((u)=>u.email==user.email && u.password==user.password)

    if (!existinguser){
        users.push(user)
    }
}

export const findUser=(id:string)=>users.find((u)=>u.id==id)
export const findUserByEmailPassword=(email:string,password:string)=>users.find((u)=>u.email==email && u.password==password)
export const deleteUser=(id:string)=>{}
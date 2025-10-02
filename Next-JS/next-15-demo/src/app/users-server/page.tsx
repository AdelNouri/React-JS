type User = {
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
}

export default async function UserServer() {
    await new Promise(resolve => setTimeout(resolve, 2000));
    const response = await fetch("https://jsonplaceholder.typicode.com/users123");
    const users = await response.json() as User[];

    return <div>
        {
            users.map(user => {
                return <div key={user.id}>
                    {user.name} - {user.username}
                </div>
            })
        }
    </div>
}
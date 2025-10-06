import { Fragment } from "react";
import { revalidatePath } from "next/cache";

type MockUser = {
    id: number;
    name: string;
};

export default async function Users() {
    const res = await fetch("https://68de7121d7b591b4b78f8dd9.mockapi.io/users");
    const users = await res.json();

    const addUser = async (formData: FormData) => {
        "use server"
        const name = formData.get("name");
        const res = await fetch(
            "https://68de7121d7b591b4b78f8dd9.mockapi.io/users",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                "private": "my-key",
              },
              body: JSON.stringify({ name }),
            }
          );
          const newUser = await res.json();
          console.log(newUser);
          revalidatePath('/mock-users');
      
    }

    return (
        <Fragment>
            <div className="grid grid-cols-4 gap-4 ">
                {users.map((user: MockUser) => (
                    <div
                        key={user.id}
                        className="p-4 bg-white shadow-md rounded-lg text-gray-700"
                    >
                        {user.name}
                    </div>
                ))}
            </div>
            <form action={addUser} className="mb-4">
                <input
                    type="text"
                    name="name"
                    required
                    className="p-2 mr-2 border border-gray-300 rounded text-gray-700"
                />
                <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 rounded"
                >
                    افزودن کاربر
                </button>
            </form>
        </Fragment>
    );
}

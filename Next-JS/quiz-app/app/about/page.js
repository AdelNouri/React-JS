import Image from "next/image";
import Link from "next/link";

export default async function About() {
    // await new Promise((resolve) => setTimeout(resolve, 1000));

    const photo =
        "https://avatars.githubusercontent.com/u/176317348?s=400&u=1e3feb8590f745b1637ff6c8f0aede31c7152e31&v=4";

    return (
        <main className="p-5 mt-2 bg-gray-50 dark:bg-gray-800 shadow-lg dark:shadow-dark rounded mx-auto w-7/12 ">
            <div>
                <div className="text-gray-300  text-center mb-5">
                    <h1 className="text-lg">عادل نوری</h1>
                    <h2>برنامه نویس و دانش اموز</h2>
                </div>
                <Link href={`/about/photo`}>
                    <Image
                        alt=""
                        src={photo}
                        height={400}
                        width={400}
                        className="mx-auto rounded object-cover aspect-square"
                    />
                </Link>
            </div>
        </main>
    );
}

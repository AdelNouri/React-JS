import Frame from "../components/frame";

export default function PhotoPage() {
    const photo =
        "https://avatars.githubusercontent.com/u/176317348?s=400&u=1e3feb8590f745b1637ff6c8f0aede31c7152e31&v=4";

    return (
        <div className="container mx-auto my-10">
            <div className="w-1/2 mx-auto border border-gray-700">
                <Frame photo={photo} />
            </div>
        </div>
    );
}

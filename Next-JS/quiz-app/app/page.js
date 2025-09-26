import Link from "next/link";

export default function Home() {
  throw new Error("این یک ارور فیک است")

  return (
    <main>
      <div className="container">
        <h1>اپلیکیشن Quiz</h1>
        <Link href="/quiz">
          <button>شروع آزمون</button>
        </Link>
      </div>
    </main>
  );
}

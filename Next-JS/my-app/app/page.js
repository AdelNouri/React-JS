import Link from "next/link";



export default function Home() {
  return (
    <main>
      <h1>سلام دوست من</h1>
      <Link href={{pathname: "/about", query: {name: "adel"}}} >درباره ی عادل</Link>
    </main>
  );
}

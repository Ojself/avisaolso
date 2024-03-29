import { redirect } from "next/navigation";

export default function Home() {
  redirect("/oslo-byrad-vedtar-utvidet-skjenketid");

  return (
    <main className='flex min-h-screen flex-col text-ablack abody'>
      <p>Nothing here</p>
    </main>
  );
}

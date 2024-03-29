import Footer from "./components/Footer";
import Article from "./components/Article";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Header from "./components/Header";

export const metadata = {
  openGraph: {
    title: "Oslo byråd vedtar utvidet skjenketid",
    description:
      "Oslo byråd vedtar utvidet skjenketid: - Oslo kan bli Nordens Berlin",
    url: "https://avisa-olso.no/oslo-byrad-vedtar-utvidet-skjenketid",
    siteName: "Avisa Olso",
    images: [
      {
        url: "http://localhost:3000/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbradet.b41e89aa.jpg&w=2048&q=75",
        width: 800,
        height: 600,
      },
    ],
    locale: "nb_NO",
    type: "website",
  },
};

export default function Page() {
  return (
    <main className='flex min-h-screen flex-col text-ablack abody'>
      <Header />
      <Nav />

      <article>
        <Hero />
        <Article />
      </article>
      <Footer />
    </main>
  );
}

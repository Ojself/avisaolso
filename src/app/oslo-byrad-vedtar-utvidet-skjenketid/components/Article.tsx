import Link from "next/link";

export default function Article() {
  return (
    <section className='flex justify-center mb-8'>
      <div className='w-[1020px] flex flex-col px-4'>
        <h2 className='text-2xl md:text-3xl font-light mb-4'>
          - Starter allerede i kveld.
        </h2>
        <div className='pl-4 md:pl-16 font-body text-lg w-11/12 md:w-5/6 '>
          <p className='mb-8'>
            I et overraskende vedtak har byrådet i Oslo besluttet å tillate
            utvidede skjenketider i hovedstaden, effektivt fra og med i dag.
            Dette tiltaket kommer som en velkommen nyhet for både
            utelivsbransjen og byens borgere, etter en årrekke med Nordens
            strengeste salgstider for alkohol.
          </p>
          <p className='mb-8 font-bold'>
            Byrådsleder Eirik Lae Solberg uttrykte under kunngjøringen at dette
            vedtaket er et ledd i å revitalisere Oslos omprofilering til
            <span className='italic'> Nordens Berlin</span>, i håp om at Oslo
            skal endelig komme på kartet for Europas nattklubbturister.
          </p>
          <p className='mb-8'>
            «Oslos gater skal igjen fylles med liv og glede, ikke bare på
            dagtid, men til alles døgnets tider, samtidig som vi opprettholder
            en ansvarlig og trygg tilnærming til alkoholkonsum» sa Solberg.
          </p>
          <p className='mb-8 font-bold'>
            Det nye regelverket tillater serveringssteder med skjenkebevilling å
            forlenge alkoholserveringen til kl. 05:00, to timer lenger enn
            tidligere. Vedtaket har blitt mottatt med jubel blant bar- og
            restaurantinnehavere, som ser på dette som et avgjørende skritt mot
            kulturell hevelse.
          </p>
          <p className='mb-8'>
            Kritikken har imidlertid ikke latt vente på seg.
          </p>
          <p className='mb-8'>
            En samlet opposisjon stiller spørsmål ved byrådets timing og
            prioriteringer, med bekymringer om potensielle negative konsekvenser
            for offentlig orden og helse. «Selv om vi ønsker en utvidet
            skjenketid velkommen, må det gjøres med omtanke og under
            kontrollerte former», uttaler Julianne Ofstad, leder av helse- og
            sosialutvalget for Fremskrittspartiet. Byrådet understreker at
            utvidelsen vil bli nøye overvåket, med muligheter for justeringer
            basert på erfaringer og tilbakemeldinger.
          </p>
          <p className='mb-8'>
            Dette er et eksperimentelt steg for å balansere mellom kulturell
            vekst og folkehelse, med håp om å sette en ny standard for
            nattelivet i Oslo. Som en del av dette nye tiltaket, vil politiet og
            andre relevante myndigheter styrke sin tilstedeværelse i bybildet
            for å sikre at de utvidede skjenketidene ikke fører til en økning i
            uønskede hendelser.
          </p>
          <p className='mb-8'>
            På spørsmål om de skal feire i kveld, svarer byrådsleder Solberg:{" "}
            <span className='font-bold'>
              «Hele byrådet skal feire på Jæger i kveld, og vi håper å se mange
              av dere der!»
            </span>
          </p>
          <p className='mb-8 '>
            Med dette vedtaket markerer Oslo et betydelig skritt mot en ny
            normal, med en visjon om et mer levende og inkluderende byliv.
          </p>
        </div>
        <div className='pl-16'>
          <p className='inline'>
            Les mer om:{" "}
            <Link href='https://www.osloomvendt.no'>
              <span className='text-ablue underline ml-1 '>Politikk</span>{" "}
            </Link>
            <Link href='https://www.osloomvendt.no'>
              <span className='text-ablue underline ml-1'>Sentrum</span>{" "}
            </Link>
            <Link href='https://www.osloomvendt.no'>
              <span className='text-ablue underline ml-1'>Alkohol</span>{" "}
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}

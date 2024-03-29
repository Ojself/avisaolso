"use client";
import {
  FacebookIcon,
  FacebookShareButton,
  TwitterShareButton,
  XIcon,
} from "react-share";
import Image from "next/image";
import byradet from "../../bradet.jpg";

export default function Hero() {
  return (
    <section className='flex justify-center '>
      <div className='w-[1020px] flex flex-col px-4'>
        <hr className='h-1 w-full bg-agrey ' />
        <ul className='flex items-end uppercase my-4'>
          <li className='text-adarkblue text-2xl pr-2 font-medium'>Politikk</li>
          <li className='text-base px-2'>Sentrum</li>
          <li className='text-base px-2'>Alkohol</li>
        </ul>
        <h1 className='adisplay font-black text-3xl md:text-7xl'>
          Oslo byråd vedtar utvidet skjenketid: - Oslo kan bli Nordens Berlin
        </h1>
        <div className='mb-6'>
          <div className='mt-6'>
            <Image className='' src={byradet} alt='Byrådet ' />
          </div>
          <div className='bg-agrey h-10 flex items-center'>
            <p className='ml-4 border-2'>
              Enstemmig byråd: Skjenketiden skal utvides
            </p>
          </div>
        </div>
        <div className='flex justify-between my-4 items-center '>
          <div className='flex flex-col md:flex-row justify-between items-start md:items-center grow'>
            <h5>
              Av{" "}
              <a
                target='_blank'
                rel='noopener noreferrer'
                className='hover:underline'
                href='mailto:hei@osloomvendt.no'
              >
                <span className='text-ablue'>Oscar Omland</span>
              </a>
            </h5>
            <div className='flex items-center'>
              <h5 className='mr-2'>Publisert: 01.04.24 07:18</h5>
            </div>
          </div>
          <div>
            <TwitterShareButton
              url={"https://avisa-olso.no/oslo-byrad-vedtar-utvidet-skjenketid"}
              title={"Oslo byråd vedtar utvidet skjenketid"}
              className='Demo__some-network__share-button ml-2'
            >
              <XIcon size={32} round={true} />
            </TwitterShareButton>
            <FacebookShareButton
              title='Oslo byråd vedtar utvidet skjenketid'
              url={"https://avisa-olso.no/oslo-byrad-vedtar-utvidet-skjenketid"}
              className='Demo__some-network__share-button ml-1'
            >
              <FacebookIcon size={32} round />
            </FacebookShareButton>
          </div>
        </div>
      </div>
    </section>
  );
}

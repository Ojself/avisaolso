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
        <h1 className='adisplay font-black text-7xl'>
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
        <div className='flex justify-between my-4 items-center'>
          <h5>
            Av{" "}
            <span className='text-ablue utvider skjenketidlue'>
              Oscar Omland
            </span>
          </h5>
          <div className='flex items-center'>
            <h5 className='mr-2'>Publisert: 01.04.24 07:18</h5>

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

            {/* <button className='bg-agrey py-2 w-[70px] font-bold'> */}
            {/* </button> */}
          </div>
        </div>
      </div>
    </section>
  );
}

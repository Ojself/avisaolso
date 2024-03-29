import Image from "next/image";
import logo from "../../alogo.svg";
export default function Footer() {
  return (
    <section className='flex bg-[#474544] justify-center text-white py-8'>
      <div className='w-[1020px] flex flex-col justify-center items-center'>
        <div className='h-24'>
          <Image
            className='ml-3 w-auto h-[85%] overflow-clip box-content'
            src={logo}
            alt='Avisa Olso'
          />
        </div>
        <div className='mb-2'>
          <ul className='text-center'>
            <li>
              Ansvarlig redaktør:{" "}
              <a
                target='_blank'
                rel='noopener noreferrer'
                className='underline'
                href='mailto:hei@osloomvendt.no'
              >
                Olivia Osen
              </a>
            </li>
            <li>
              Nyhetsredaktør:{" "}
              <a
                target='_blank'
                rel='noopener noreferrer'
                className='underline'
                href='mailto:hei@osloomvendt.no'
              >
                Ove Olsdatter
              </a>
            </li>
            <li>
              Politisk redaktør:{" "}
              <a
                target='_blank'
                rel='noopener noreferrer'
                className='underline'
                href='mailto:hei@osloomvendt.no'
              >
                Oline Ombustvedt
              </a>
            </li>
            <li>
              Debattredaktør:{" "}
              <a
                target='_blank'
                rel='noopener noreferrer'
                className='underline'
                href='mailto:hei@osloomvendt.no'
              >
                Oddvar Ognedal
              </a>
            </li>
            <li>
              Redaksjonssjef:{" "}
              <a
                target='_blank'
                rel='noopener noreferrer'
                className='underline'
                href='mailto:hei@osloomvendt.no'
              >
                Oda Opsahl
              </a>
            </li>
          </ul>
        </div>
        <div className='mb-4'>Avisa Olso © 2024</div>
      </div>
    </section>
  );
}

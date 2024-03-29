import Image from "next/image";
import logo from "../../alogo.svg";

export default function Header() {
  return (
    <header>
      <div className='bg-ared h-[116px] flex justify-center'>
        <div className='w-[1020px] flex items-center'>
          <div className='h-24'>
            <Image
              className='ml-3 w-auto h-[85%] overflow-clip box-content'
              src={logo}
              alt='Avisa Olso'
            />
          </div>
        </div>
      </div>
    </header>
  );
}

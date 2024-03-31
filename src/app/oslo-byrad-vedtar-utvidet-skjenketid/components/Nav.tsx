import Link from "next/link";
import { CiSquarePlus } from "react-icons/ci";
import { RxHamburgerMenu } from "react-icons/rx";

export default function Nav() {
  return (
    <nav className='flex justify-center bg-agrey h-[42px] mb-14'>
      <div className='w-[1020px] flex items-center justify-end md:justify-between border-2 '>
        <ul className='hidden md:flex h-full'>
          <li className='hover:bg-gray-100'>
            <Link
              className='px-3 h-full w-full flex items-center justify-center'
              href='https://www.osloomvendt.no'
            >
              Tips oss
            </Link>
          </li>
          <li className='hover:bg-gray-100'>
            <Link
              className='px-3 h-full w-full flex items-center justify-center'
              href='https://www.osloomvendt.no'
            >
              ALT
            </Link>
          </li>
          <li className='hover:bg-gray-100'>
            <Link
              className='px-3 h-full w-full flex items-center justify-center'
              href='https://www.osloomvendt.no'
            >
              Oslodebatten
            </Link>
          </li>
          <li className='hover:bg-gray-100'>
            <Link
              className='px-3 h-full w-full flex items-center justify-center'
              href='https://www.osloomvendt.no'
            >
              Direktesport
            </Link>
          </li>
          <li className='hover:bg-gray-100'>
            <Link
              className='px-3 h-full w-full flex items-center justify-center'
              href='https://www.osloomvendt.no'
            >
              Videotips{" "}
              <span className='hidden md:block'>- send oss video!</span>
            </Link>
          </li>
          <li className='hover:bg-gray-100'>
            <Link
              className='px-3 h-full w-full flex items-center justify-center'
              href='https://www.osloomvendt.no'
            >
              Annonsering
            </Link>
          </li>
        </ul>
        <ul className='flex h-full'>
          <li className='hover:bg-gray-100'>
            <Link
              className='px-3 h-full w-full flex items-center justify-center'
              href='https://www.osloomvendt.no'
            >
              <CiSquarePlus className='text-2xl' />
            </Link>
          </li>
          <li className='hover:bg-gray-100'>
            <Link
              className='px-3 h-full w-full flex items-center justify-center'
              href='https://www.osloomvendt.no'
            >
              <RxHamburgerMenu className='text-2xl' />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

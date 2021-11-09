import Image from 'next/image';
import { SearchIcon } from '@heroicons/react/solid';

function Header() {
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10">
      <div className="relative flex items-center h-10 cursor-pointer my-auto">
        <Image
          src="https://links.papareact.com/qd3"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
      </div>

      <div>
        <input placeholder="Start your search" />
      </div>

      <div>Left</div>
    </header>
  );
}

export default Header;

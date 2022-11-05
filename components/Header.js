import React from 'react'
import Image from 'next/image'
import HeaderItem from './HeaderItem'
import {
    CheckBadgeIcon,
    RectangleStackIcon,
    HomeIcon,
    BoltIcon,
    MagnifyingGlassIcon,
    UserIcon

} from "@heroicons/react/24/outline"

const Header = () => {
  return (
    <header className='flex flex-col items-center sm:flex-row m-5 justify-between sm:m-2'>

        <div className='flex flex-grow justify-evenly max-w-xl'>
            <HeaderItem title="HOME" Icon={HomeIcon} />
            <HeaderItem title="TRENDING" Icon={BoltIcon} />
            <HeaderItem title="VERIFIED" Icon={CheckBadgeIcon} />
            <HeaderItem title="COLLECTIONS" Icon={RectangleStackIcon} />
            <HeaderItem title="SEARCH" Icon={MagnifyingGlassIcon} />
            <HeaderItem title="ACCOUNT" Icon={UserIcon} />

        </div>

        <Image
        className='object-contain' 
        src='https://links.papareact.com/ua6'
        width={200}
        height={100}
        />
    </header>
  )
}
export default Header

import AcmeLogo from '@/app/ui/acme-logo'
import { ArrowRightIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import styles from '@/app/ui/home.module.css'
import {
  lusitana,
  roboto_mono,
  roboto,
  jacques,
  notoColor,
  noto
} from '@/app/ui/fonts'
import Image from 'next/image'
import icons from '@/app/ui/icons.module.css'
import utils from '@/app/ui/utils.module.css'
import knuckles from '@/public/knuckles.gif'
import sponge_bob from '@/public/sponge_bob.gif'
import rice_bowl from '@/public/rice_bowl.png'
import loading from '@/public/loading.svg'
import Emoji from '@/app/ui/emoji'

export default function Page() {
  const iconsArr = `${icons.clock} ${icons.smile}`
  const timeRot = { ['--time' as string]: '5s' }
  return (
    <main className='flex min-h-screen flex-col p-6'>
      <div className='flex h-20 shrink-0 items-end rounded-lg bg-blue-500 p-4 md:h-52'>
        <AcmeLogo />
      </div>
      <div className='mt-4 flex grow flex-col gap-4 md:flex-row'>
        <div className='flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20'>
          {/* <div className='h-0 w-0 border-b-[30px] border-l-[20px] border-r-[20px] border-b-black border-l-transparent border-r-transparent' /> */}
          <div className={styles.shape} />
          <p className={`${roboto_mono.className}`}>Ala_Bala</p>
          <p className={`${lusitana.className}`}>Ala_Bala</p>
          <div className='flex'>
            <p
              className={`${roboto.className} m-auto font-thin text-red-900 text-xl`}
            >
              Ala_Bala
            </p>
            <p
              className={`${roboto.className} m-auto font-medium text-green-900 text-2xl`}
            >
              Ala_Bala
            </p>
            <p
              className={`${jacques.className} m-auto font-black text-blue-800 text-3xl`}
            >
              Ala_Bala
            </p>
            <Emoji
              className={`${notoColor.className} m-auto text-3xl`}
              label='skull'
              symbol='☠'
            />
          </div>
          <div className='flex justify-center gap-5'>
            <Emoji
              label='clock&smile'
              className={`${iconsArr} ${noto.className} text-3xl`}
            />
            <Emoji label='clock' className={icons.clock} />
            <Emoji label='hamburger' className={icons.hamburger} />
            <Emoji label='smile' className={icons.smile} />
            <Emoji label='hamburger' symbol={String.fromCodePoint(0x1f354)} />
            <Emoji label='100%' symbol={String.fromCodePoint(0x1f4af)} />
            <Emoji label='halloween' symbol={String.fromCodePoint(0x1f383)} />
          </div>
          <div className='flex justify-between'>
            <Image
              src={knuckles}
              alt='knuckles'
              width={25}
              unoptimized={true}
            />
            <Image
              className={utils.rotate}
              style={timeRot}
              src={rice_bowl}
              alt='rice_bowl'
              width={25}
            />
            <Image
              src={sponge_bob}
              alt='sponge_bob'
              width={25}
              unoptimized={true}
            />
          </div>
          <button
            type='button'
            className='flex items-center gap-5 self-center rounded-xl bg-indigo-500 px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-pink-700 md:text-lg'
          >
            <Image
              src={loading}
              alt='loading animation'
              width={20}
              height={20}
            />
            Processing
          </button>
          <p
            className={`${lusitana.className} text-xl text-gray-800 md:text-3xl md:leading-normal`}
          >
            <strong>Welcome to Acme.</strong> This is the example for the{' '}
            <a href='https://nextjs.org/learn/' className='text-blue-500'>
              Next.js Learn Course
            </a>
            , brought to you by Vercel.
          </p>
          <Link
            href='/login'
            className='flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base'
          >
            <span>Log in</span> <ArrowRightIcon className='w-5 md:w-6' />
          </Link>
          <h1 className='text-blue-500'>I&apos;m blue!</h1>
        </div>
        <div className='flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12'>
          {/* Add Hero Images Here */}
          <Image
            src='/hero-desktop.png'
            width={1000}
            height={760}
            className='hidden md:block'
            alt='Screenshots of the dashboard project showing desktop version'
          />
          <Image
            src='/hero-mobile.png'
            width={560}
            height={620}
            // className='hidden max-md:block'
            className='block md:hidden'
            alt='Screenshots of the dashboard project showing mobile version'
          />
        </div>
      </div>
    </main>
  )
}

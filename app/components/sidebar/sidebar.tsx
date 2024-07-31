'use client';

import clsx from 'clsx'
import { ChartLine, Film, Gamepad2, List, UserRound, X } from 'lucide-react';
import { usePathname , useRouter } from 'next/navigation';
import useActiveSidebar from '@/hooks/use-active-sidebar';

const Sidebar = () => {
    const pathname = usePathname();
    const router = useRouter();

    // internal hooks
    const { active , setActive } = useActiveSidebar();

    return (
        <aside
            className={clsx(
                `w-full flex flex-col lg:w-[256px] h-screen overflow-y-scroll overflow-x-hidden
                mt-[96px] lg:mt-0 absolute lg:fixed top-0 left-0 px-5 py-10 bg-white`,
                active ? "flex" : "hidden lg:flex"
            )}
        >
            <h1
                className='text-[#11142D] text-4xl font-bold mb-9 hidden lg:block'
            >
                Unity.
            </h1>

            <button
                onClick={() => setActive(false)}
                className='bg-red-400 w-max p-3 rounded-md text-white mb-8 lg:hidden'
            >
                <X/>
            </button>

            <div>
                <h6 className='text-[#808191] font-medium text-sm'>
                    New Feeds
                </h6>
                <ul className='my-4 flex flex-col'>
                    <li
                        onClick={() => router.push("/")}
                        className={clsx(
                            'px-5 py-5 rounded-xl text-sm font-semibold flex items-center gap-1 cursor-pointer',
                            pathname === '/' ? "bg-[#6C5DD3] text-white" : "bg-white text-[#808191]"
                        )}
                    >
                        <Gamepad2/>   
                        New Feeds
                    </li>
                    <li
                        onClick={() => router.push('/trending')}
                        className={clsx(
                            'px-5 py-5 rounded-xl text-sm font-semibold flex items-center gap-1 cursor-pointer',
                            pathname === '/trending' ? "bg-[#6C5DD3] text-white" : "bg-white text-[#808191]"
                        )}
                    >
                        <ChartLine/>
                        Trending
                    </li>
                    <li
                        onClick={() => router.push('/following')}
                        className={clsx(
                            'px-5 py-5 rounded-xl text-sm font-semibold flex items-center gap-1 cursor-pointer',
                            pathname === '/following' ? "bg-[#6C5DD3] text-white" : "bg-white text-[#808191]"
                        )}
                    >
                        <UserRound/>
                        Following
                    </li>
                    <li
                        onClick={() => router.push('/videos')}
                        className={clsx(
                            'px-5 py-5 rounded-xl text-sm font-semibold flex items-center gap-1 cursor-pointer',
                            pathname === '/videos' ? "bg-[#6C5DD3] text-white" : "bg-white text-[#808191]"
                        )}
                    >
                        <Film/>
                        Your Videos
                    </li>
                    <li
                        onClick={() => router.push('/playlist')}
                        className={clsx(
                            'px-5 py-5 rounded-xl text-sm font-semibold flex items-center gap-1 cursor-pointer',
                            pathname === '/playlist' ? "bg-[#6C5DD3] text-white" : "bg-white text-[#808191]"
                        )}
                    >
                        <List/>
                        Playlist
                    </li>
                </ul>
            </div>
        </aside>
  )
}

export default Sidebar
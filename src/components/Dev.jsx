import { useState } from 'react'

export default function Dev() {
    const [burgerMenu, setBurgerMenu] = useState(false)

    const handleBurgerMenu = () => {
        if (!burgerMenu) {
            setBurgerMenu(true)
        } else if (burgerMenu) {
            setBurgerMenu(false)
        }
    }

    return (
        // Header
        <header className="flex justify-between items-center bg-slate-700">
            <div className="flex justify-center items-center m-2 p-2 cursor-pointer">
                <img  className=" w-14 hover:animate-spin" src="src/assets/dice-outline-svgrepo-com.svg" alt="dice" />
                <h1 className="text-orange-500 flex font-bold">TRPG<p className="text-white font-normal">Helper</p></h1>
            </div>
            <div onClick={handleBurgerMenu} className="relative m-2 p-2">
                <div className='flex justify-center items-center'>
                    <a href="/signup" className='text-white p-2 m-2 hover:underline'>Create account</a>
                    <a href="/signin" className='text-white font-semibold m-2 py-2 px-4 border border-transparent rounded-xl bg-orange-500 animate-pulse hover:animate-none'>Log in!</a>
                    <img className=" w-14 border-2 rounded-md border-transparent cursor-pointer hover:border-orange-500" src="src/assets/burger-menu-svgrepo-com.svg" alt="Hamburger menu" />
                    <div className={burgerMenu ? "flex flex-col absolute w-screen md:max-w-3xl top-20 right-0 translate-x-2 border border-transparent border-t-black bg-slate-700" : "hidden"}>
                        <a href="/" className="text-white font-semibold p-2 m-2 cursor-pointer border border-transparent rounded-lg bg-slate-600 hover:bg-orange-500">Home</a>
                        <a href="/" className="text-white font-semibold p-2 m-2 cursor-pointer border border-transparent rounded-lg bg-slate-600 hover:bg-orange-500">Play!</a>
                        <a href="/character-sheet-creator" className="text-white font-semibold p-2 m-2 cursor-pointer border border-transparent rounded-lg bg-slate-600 hover:bg-orange-500">Create Character!</a>
                        <a href="/char-sheet" className="text-white font-semibold p-2 m-2 cursor-pointer border border-transparent rounded-lg bg-slate-600 hover:bg-orange-500">Character Sheet</a>
                        <a href="/about" className="text-white font-semibold p-2 m-2 cursor-pointer border border-transparent rounded-lg bg-slate-600 hover:bg-orange-500">About...</a>
                    </div>
                </div>
            </div>
        </header>
    )
}
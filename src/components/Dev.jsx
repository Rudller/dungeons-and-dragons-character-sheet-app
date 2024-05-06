import { useEffect, useState } from 'react'

export default function Dev() {
    const [burgerMenu, setBurgerMenu] = useState(false)
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)

    const handleBurgerMenu = () => {
        if (!burgerMenu) {
            setBurgerMenu(true)
        } else if (burgerMenu) {
            setBurgerMenu(false)
        }
    }

    useEffect(() => {
        window.addEventListener('resize', () => {
            setWindowWidth(window.innerWidth)
        })
    }, [windowWidth])

    return (
        // Header
        <header className="flex justify-between items-center bg-bgColor h-14">
            <div className="flex justify-center items-center m-2 p-2 cursor-pointer">
                <img  className=" w-10 hover:animate-spin" src="src/assets/dice-outline-svgrepo-com.svg" alt="dice" />
                <h1 className="text-primaryColor flex text-xl font-bold">TRPG<p className="text-textColor font-normal">Helper</p></h1>
            </div>
            {windowWidth <= 480 && (
                <div onClick={handleBurgerMenu} className="relative flex justify-center items-center m-2 p-2">
                    <div className='flex justify-center items-center'>
                        <img className=" text-white w-10 border-2 rounded-md border-transparent cursor-pointer hover:border-primaryColor" src="src/assets/burger-menu-svgrepo-com.svg" alt="Hamburger menu" />
                        <div className={burgerMenu ? "flex flex-col absolute w-screen md:max-w-3xl top-14 right-0 translate-x-2 border border-transparent border-t-black bg-bgColor" : "hidden"}>
                            <a href="/" className="text-textColor font-semibold p-2 m-2 cursor-pointer border border-transparent rounded-lg bg-accentColor hover:bg-primaryColor">Home</a>
                            <a href="/" className="text-textColor font-semibold p-2 m-2 cursor-pointer border border-transparent rounded-lg bg-accentColor hover:bg-primaryColor">Play!</a>
                            <a href="/character-sheet-creator" className="text-textColor font-semibold p-2 m-2 cursor-pointer border border-transparent rounded-lg bg-accentColor hover:bg-primaryColor">Create Character!</a>
                            <a href="/char-sheet" className="text-textColor font-semibold p-2 m-2 cursor-pointer border border-transparent rounded-lg bg-accentColor hover:bg-primaryColor">Character Sheet</a>
                            <a href="/about" className="text-textColor font-semibold p-2 m-2 cursor-pointer border border-transparent rounded-lg bg-accentColor hover:bg-primaryColor">About...</a>
                        </div>
                    </div>
                </div>
            )}
            {windowWidth <= 768 && windowWidth > 480 && (
                <div onClick={handleBurgerMenu} className="relative flex justify-center items-center m-2 p-2">
                    <a href="/signup" className='text-textColor border border-primaryColor mx-2 px-2 py-1 rounded-xl'>Create Account</a>
                    <a href="/signin" className='text-textColor bg-primaryColor font-bold mx-2 px-2 py-1 rounded-xl animate-pulse'>Log In!</a>
                    <div className='flex justify-center items-center'>
                        <img className=" w-10 border-2 rounded-md border-transparent cursor-pointer hover:border-primaryColor" src="src/assets/burger-menu-svgrepo-com.svg" alt="Hamburger menu" />
                        <div className={burgerMenu ? "flex flex-col absolute w-screen md:max-w-3xl top-14 right-0 translate-x-2 border border-transparent border-t-black bg-bgColor" : "hidden"}>
                            <a href="/" className="text-textColor font-semibold p-2 m-2 cursor-pointer border border-transparent rounded-lg bg-accentColor hover:bg-primaryColor">Home</a>
                            <a href="/" className="text-textColor font-semibold p-2 m-2 cursor-pointer border border-transparent rounded-lg bg-accentColor hover:bg-primaryColor">Play!</a>
                            <a href="/character-sheet-creator" className="text-textColor font-semibold p-2 m-2 cursor-pointer border border-transparent rounded-lg bg-accentColor hover:bg-primaryColor">Create Character!</a>
                            <a href="/char-sheet" className="text-textColor font-semibold p-2 m-2 cursor-pointer border border-transparent rounded-lg bg-accentColor hover:bg-primaryColor">Character Sheet</a>
                            <a href="/about" className="text-textColor font-semibold p-2 m-2 cursor-pointer border border-transparent rounded-lg bg-accentColor hover:bg-primaryColor">About...</a>
                        </div>
                    </div>
                </div>
            )}
            {windowWidth > 768 && (
                <div className="flex justify-center items-center m-2 p-2">
                    <a href="/" className="text-textColor font-semibold p-2 m-2 cursor-pointer border border-transparent rounded-lg bg-accentColor hover:bg-primaryColor">Home</a>
                    <a href="/" className="text-textColor font-semibold p-2 m-2 cursor-pointer border border-transparent rounded-lg bg-accentColor hover:bg-primaryColor">Play!</a>
                    <a href="/character-sheet-creator" className="text-textColor font-semibold p-2 m-2 cursor-pointer border border-transparent rounded-lg bg-accentColor hover:bg-primaryColor">Create Character!</a>
                    <a href="/char-sheet" className="text-textColor font-semibold p-2 m-2 cursor-pointer border border-transparent rounded-lg bg-accentColor hover:bg-primaryColor">Character Sheet</a>
                    <a href="/about" className="text-textColor font-semibold p-2 m-2 cursor-pointer border border-transparent rounded-lg bg-accentColor hover:bg-primaryColor">About...</a>
                </div>
            )}
        </header>
    )
}
/* eslint-disable */
export default function CharSheet({ stats }) {
    console.log(stats)

    if (typeof stats !== 'object') {
        console.error('nieprawidłowy typ danych')
        return null
    }

    const MainInfo = () => {
        return (
            <div className="flex justify-between items-center border border-gray-300 rounded-md w-11/12 sm:w-9/12 lg:w-1/2 xl:w-1/3 mx-auto my-5 p-2 shadow-xl">
              <div>
                <h1>{stats.name}</h1>
                <p className="border-t">Character name</p>
              </div>
              <div className="flex justify-around items-center border border-gray-300 rounded-md w-1/2">
                <div>
                    <p>{stats.class}</p>
                    <p>{stats.alignment}</p>
                </div>
                <div>
                    <p>{stats.race}</p>
                    <p>{stats.background}</p>
                </div>
              </div>
            </div>
        )
    }

    const Abilities = () => {
        return (
            <div className="flex justify-between shadow-xl w-11/12 sm:w-9/12 lg:w-1/2 xl:w-1/3 mx-auto bg-gray-300 rounded-md p-2 mb-5">
            {stats.abilities.map((e,i) => {
                return (
                    <div className="flex flex-col justify-center items-center border border-black bg-white rounded-xl w-1/6 m-1">
                        <p className="text-xs">{e.name}</p>
                        <h1>{e.modifier}</h1>
                        <p className="border border-black bg-white rounded-2xl w-1/2 text-center translate-y-1/2">{e.score}</p>
                    </div>
                )
            })}
            </div>
        )
    }

    const STS = () => {
        return (
            <div className="w-1/2">
                <div className="flex flex-col justify-center items-center border border-gray-300 rounded-md mb-5">
                    {stats.savingThrows.map((e, i) => {
                        return <p key={i}>{e.modifier} {e.ability}</p>
                    })}
                    <p className="font-bold">Saving Throws</p>
                </div>
                <div className="flex flex-col justify-center items-center border border-gray-300 rounded-md">
                    {stats.skills.map((e, i) => {
                        return <p key={i}>{e.modifier} {e.name}</p>
                    })}
                    <p className="font-bold">Skills</p>
                </div>
            </div>
        )
    }

    return (
        <>
        <MainInfo />
        <Abilities />
        <STS />
        </>
    )
}
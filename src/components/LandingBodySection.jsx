
export default function LandingBodySection() {
    return (
        <section className="dark:bg-gray-100 dark:text-gray-800">
            <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between w-[80%]">
                <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                    <h1 className="text-5xl font-bold leading-none sm:text-6xl text-pink-500">You're feeling the pangs of hunger creeping in?</h1>
                    <p className="mt-6 mb-8 text-lg sm:mb-12">We know importance and value of food and the quest to find new dishes to enjoy.
                        <br />We are here to help you find the best dishes to satisfy your cravings.
                    </p>
                    <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                        <a rel="noopener noreferrer" href="/signup" className="px-8 py-3 text-lg font-semibold rounded dark:bg-violet-600 dark:text-gray-50 bg-purple-400 hover:bg-lime-500">🚀 Explore</a>
                    </div>
                </div>
                <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                    <img src="src/assets/girl_eating_food.svg" alt="assets" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
                </div>
            </div>
        </section>
    )
}
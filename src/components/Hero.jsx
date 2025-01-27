'use client'

export default function Hero() {
    return (
        <div className="">
            <div className="relative isolate px-6 pt-14 lg:px-8">
                <div
                    aria-hidden="true"
                    className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                >
                    <div
                        style={{
                            clipPath:
                                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                        className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                    />
                </div>
                <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-25 pb-0">
                    <div className="text-center">
                        <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">
                            "Empowering your calculations, one equation at a time."
                        </h1>
                        <br />

                        <p className="mt-8 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8">
                            "Calculating your smile... It's off the charts! 😄"
                        </p>
                        <div className="mt-10 flex items-center justify-center gap-x-6">
                            <a
                                href="/"
                                className={`px-6 py-3 rounded-full focus:outline-none text-white hover:opacity-80`}
                                style={{
                                    background: 'linear-gradient(to right, #4BC0C8, #C779D0, #FEAC5E)',
                                    transition: 'background 0.3s ease', // Adds smooth transition for hover effects
                                }}
                            >
                                Let's Calculate
                            </a>
                            <a href="#" className="text-sm font-semibold">
                                Learn more <span aria-hidden="true">→</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

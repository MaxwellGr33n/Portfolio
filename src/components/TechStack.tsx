export default function TechStack() {
    return (

    <section>
        <div className='grid grid-cols-2 max-h-screen'>
            <div className='grid gap-3 grid-cols-2 md:grid-cols-3 md:gap-4 max-w-4axl p-4 md:pl-10'>
                <a href="https://www.typescriptlang.org/" target="_blank" rel="noopener noreferrer">
                    <div className='bg-neutral-50 aspect-square rounded-lg shadow-md hover:shadow-xl overflow-hidden'>
                        <div className="flex justify-center px-3 pt-3 lg:pt-4 xl:pt-5">
                            <img src="src/assets/typescript.svg" alt="TypeScript" height="85%" width="85%" />
                        </div>
                        <p className="text-center text-transparent font-semibold text-sm sm:text-md xl:text-xl sm:pt-1 2xl:pt-2 bg-clip-text bg-gradient-to-r from-blue-300 to-purple-900">TypeScript</p>
                    </div>
                </a>
                <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
                    <div className='bg-neutral-50 aspect-square rounded-lg shadow-md hover:shadow-xl overflow-hidden'>
                        <div className="flex justify-center px-3 pt-3 lg:pt-5">
                            <img src="src/assets/react.svg" alt="React" height="90%" width="90%" />
                        </div>
                        <p className="text-center text-transparent font-semibold text-sm sm:text-md xl:text-xl pt-1 sm:p-1.5 md:pt-2 2xl:pt-5 bg-clip-text bg-gradient-to-r from-blue-300 to-purple-900">React</p>
                    </div>
                </a>
                <a href="https://vitejs.dev/" target="_blank" rel="noopener noreferrer">
                    <div className='bg-neutral-50 aspect-square rounded-lg shadow-md hover:shadow-xl overflow-hidden'>
                        <div className="flex justify-center px-3 pt-3">
                            <img src="src/assets/vite.svg" alt="Vite" height="90%" width="90%" />
                        </div>
                        <p className="text-center text-transparent font-semibold text-sm sm:text-md xl:text-xl lg:pt-1 bg-clip-text bg-gradient-to-r from-blue-300 to-purple-900">Vite</p>
                    </div>
                </a>
                <a href="https://nextjs.org/" target="_blank" rel="noopener noreferrer">
                    <div className='bg-neutral-50 aspect-square rounded-lg shadow-md hover:shadow-xl overflow-hidden'>
                        <div className="flex justify-center px-3 pt-3 lg:pt-4">
                            <img src="src/assets/nextjs.svg" alt="Next.js" height="85%" width="85%" />
                        </div>
                        <p className="text-center text-transparent font-semibold text-sm sm:text-md xl:text-xl sm:pt-1 2xl:pt-3 bg-clip-text bg-gradient-to-r from-blue-300 to-purple-900">Next.js 13</p>
                    </div>
                </a>
                <a href="https://nodejs.org/" target="_blank" rel="noopener noreferrer">
                    <div className='bg-neutral-50 aspect-square rounded-lg shadow-md hover:shadow-xl overflow-hidden'>
                        <div className="flex justify-center px-3 pt-3">
                            <img src="src/assets/node.svg" alt="Node.js" height="90%" width="90%" />
                        </div>
                        <p className="text-center text-transparent font-semibold text-sm sm:text-md xl:text-xl lg:pt-1 bg-clip-text bg-gradient-to-r from-blue-300 to-purple-900">Node.js</p>
                    </div>
                </a>
                <a href="https://www.mongodb.com/" target="_blank" rel="noopener noreferrer">
                    <div className='bg-neutral-50 aspect-square rounded-lg shadow-md hover:shadow-xl overflow-hidden'>
                        <div className="flex justify-center px-3 pt-3">
                            <img src="src/assets/mongo.svg" alt="MonoDB" height="90%" width="90%" />
                        </div>
                        <p className="text-center text-transparent font-semibold text-sm sm:text-md xl:text-xl lg:pt-1 bg-clip-text bg-gradient-to-r from-blue-300 to-purple-900">MongoDB</p>
                    </div>
                </a>
            </div>
            <div className='flex flex-col self-center px-3 xs:px-10'>
                <h1 className='text-blue-800 font-semibold text-xl sm:text-4xl xl:text-6xl'>Current tech stack.</h1>
                <p className='text-blue-800 text-xs md:text-lg lg:text-3xl pt-2 sm:pt-6'>My stack focuses on blazing fast web design. Using modern frameworks and libraries, combined with a fundamental understanding of coding concepts and design conventions. </p>
            </div>
        </div>
    </section>

    );
}

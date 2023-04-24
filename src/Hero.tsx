import DividerTop from './DividerTop';
import DividerBottom from './DividerBottom';
import './styles.css'

export default function Hero() {
    return (
    <div>
        <div>
            <div className="flex flex-col justify-center flex-grow bg-gradient-to-b from-blue-800 to-black">
                <div className="py-6 sm:py-20 px-6 sm:px-20">
                    <h3 className="text-neutral-200 text-opacity-70 text:lg sm:text-xl">Hello my name is</h3>
                    <h1 className="text-neutral-50 text-7xl sm:text-9xl -mt-2 -ml-1">Max.</h1>
                    <h2 className="text-neutral-50 -mt-1 text-lg sm:text-2xl">Full Stack Developer</h2>
                </div>
                <div className="flex-grow flex justify-end pb-8 sm:pb-20 pr-6 sm:pr-20">
                    <p className="text-neutral-50 w-48 md:w-96 text-xs sm:text-xl">I’m a full stack developer based in Australia, specialising in building exceptional websites, applications and everything in between.</p>
                </div>
                <DividerBottom />
            </div>
                <section>
                    <div className='h-full flex justify-between'>
                        <div className='flex flex-wrap max-w-4xl min-w-xl pl-5 lg:pl-24 md:pt-20'>
                            <div className='bg-neutral-50 p-9 sm:p-16 lg:p-28 m-2 md:m-4 rounded-lg shadow-md relative'></div>
                            <div className='bg-neutral-50 p-9 sm:p-16 lg:p-28 m-2 md:m-4 rounded-lg shadow-md relative'></div>
                            <div className='bg-neutral-50 p-9 sm:p-16 lg:p-28 m-2 md:m-4 rounded-lg shadow-md relative'></div>
                            <div className='bg-neutral-50 p-9 sm:p-16 lg:p-28 m-2 md:m-4 rounded-lg shadow-md relative'></div>
                            <div className='bg-neutral-50 p-9 sm:p-16 lg:p-28 m-2 md:m-4 rounded-lg shadow-md relative'></div>
                            <div className='bg-neutral-50 p-9 sm:p-16 lg:p-28 m-2 md:m-4 rounded-lg shadow-md relative'></div>
                        </div>
                        <div className='flex flex-col pr-4 sm:pr-16 sm:pt-20 lg:pr-24'>
                            <h1 className='text-blue-800 font-semibold text-lg max-w-xs md:text-6xl md:max-w-4xl mt-1 md:mt-4'>Current tech stack.</h1>
                            <p className='text-blue-800 text-xs md:text-lg lg:text-3xl max-w-md md:max-w-xl pt-2 sm:pt-6'>My stack focuses on blazing fast web design. Using modern frameworks and libraries, combined with a fundamental understanding of coding concepts and design conventions. </p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

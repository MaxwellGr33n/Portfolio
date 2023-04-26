import DividerTop from './DividerTop';
import DividerBottom from './DividerBottom';

export default function Hero() {
    return (

    <div className="flex flex-col justify-center flex-grow bg-gradient-to-b from-blue-800 to-black">
        <div className="py-6 sm:py-20 px-6 sm:px-20">
            <h3 className="text-neutral-200 text-opacity-70 sm:text-xl">Hello my name is</h3>
            <h1 className="text-neutral-50 text-7xl sm:text-9xl -mt-2 -ml-1">Max.</h1>
            <h2 className="text-neutral-50 -mt-1 text-lg sm:text-2xl">Full Stack Developer</h2>
        </div>
        <div className="flex-grow flex justify-end pb-8 sm:pb-20 pr-6 sm:pr-20">
            <p className="text-neutral-50 w-48 md:w-96 text-xs md:text-xl">I’m a full stack developer based in Australia, specialising in building exceptional websites, applications and everything in between.</p>
        </div>
        <DividerBottom />
    </div>
    
    );
}

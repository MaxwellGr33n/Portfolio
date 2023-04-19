
function Banner() {
    return (
      <div className="sticky top-0 bg-neutral-50 shadow-md z-10">
        <div className="flex justify-between items-center px-4 py-3 w-full">
          <img src="public/e6d71efbc20bbbc7b0e432993a454377-sticker.png" alt="Sticker of Max on a laptop" height="50" width="50" />
          <div className="flex space-x-4">
            <a href="#" className="items-center px-5 py-2 text-sm font-medium text-center text-neutral-800 bg-neutral-50 rounded-full hover:bg-red-600 focus:outline-none focus:shadow-md dark:bg-neutral-50 dark:hover:bg-neutral-100 dark:focus:shadow-md">Home</a>
            <a href="#" className="items-center px-5 py-2 text-sm font-medium text-center text-neutral-800 bg-neutral-50 rounded-full hover:bg-red-600 focus:outline-none focus:shadow-md dark:bg-neutral-50 dark:hover:bg-neutral-100 dark:focus:shadow-md">About Me</a>
            <a href="#" className="items-center px-5 py-2 text-sm font-medium text-center text-red-700 bg-neutral-50 rounded-full hover:bg-red-600 focus:outline-none focus:shadow-md dark:bg-neutral-50 dark:hover:bg-neutral-100 dark:focus:shadow-md">Projects</a>
            <a href="#" className="items-center px-7 py-2 text-sm font-medium text-center shadow-md text-neutral-800 bg-red-500 rounded-full hover:bg-red-600 dark:bg-red-500 dark:hover:bg-red-600 dark:focus:ring-red-700">Resume</a>
          </div>
        </div>
      </div>
    );
  }
  
  export default Banner;
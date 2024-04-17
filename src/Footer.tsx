export function Footer() {
    return <footer className="bg-blue-900 text-white">
        <div className="flex flex-row gap-6 py-8 px-8 sm:px-16 xl:px-32">
            <div className="flex flex-col gap-1 flex-1">
                <h1 className="font-bold sm:text-lg">PB Tutoring</h1>
                <p className="text-xs sm:text-sm italic">Mathematics tutoring for students by students</p>
            </div>
            <div className="flex flex-col gap-1 flex-1">
                <h2 className="font-semibold">Pages</h2>
                <a className="text-sm text-blue-100 cursor-pointer hover:underline" href="/">Meet the Tutors</a>
                <a className="text-sm text-blue-100 cursor-pointer hover:underline" href="/">Testimonies</a>
            </div>
            <div className="flex flex-col gap-1 flex-1">
                <h2>Contact Us</h2>
                <a className="text-sm text-blue-100 cursor-pointer hover:underline" href="mailto:jbpulliam06@gmail.com">jbpulliam06@gmail.com</a>
                <a className="text-sm text-blue-100 cursor-pointer hover:underline" href="maiolto:sawyerbivens06@gmail.com">sawyerbivens06@gmail.com</a>
            </div>
        </div>
        <div className="bg-blue-950 text-white py-4 px-8 sm:px-16 xl:px-32">
            &copy; {new Date().getFullYear()} all rights reserved.
        </div>
    </footer>
}
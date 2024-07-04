import { faSquareGithub } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLinkedin } from "@fortawesome/free-brands-svg-icons"

const Header = () => {
  return (
    <header className=" h-[80vh] w-screen bg-green-100 p-4">
        <nav className=" md:flex space-y-4 md:space-x-36 items-center">
        <p className="text-3xl text-black font-bold cursor-pointer">Web<span className="text-green-300">Dev</span> </p>
        
        <ul className="list-none md:space-x-6 text-black font-medium cursor-pointer flex space-x-3">
            <li>Home</li>
            <li>Skills</li>
            <li>About</li>
            <li>Projects</li>
        </ul>    
        </nav>

        <div className="flex h-full ">
            <div className=" flex flex-col justify-center space-y-4">
            <p className=" text-8xl font-bold">I'm Thomas</p>
            <p className="text-2xl text-slate-600">Font-End Developer</p>
            <p className="text-base text-slate-500">Turning Ideas into interactive Reality</p>
            <div className="space-x-4">
            <FontAwesomeIcon className="text-5xl text-slate-500" icon={faSquareGithub} />
            <FontAwesomeIcon className="text-5xl text-slate-500"  icon={faLinkedin} />
            
            </div>
            </div>
            <div className="hidden " >
                <p>pic</p>
            </div>
        </div>
    </header>
  )
}

export default Header
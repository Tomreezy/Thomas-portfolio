import { faUser } from "@fortawesome/free-regular-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHouse } from "@fortawesome/free-solid-svg-icons"

const Footer = () => {
  return (
    <footer className='h-[20vh] w-full p-4 space-x-4 flex items-center justify-center bg-green-200'>
        <div className="flex items-center space-x-4">
            <FontAwesomeIcon icon={faUser} />
            <p>Scelo Thomas Gumede</p>
        </div>
        <address className="flex items-center space-x-4">

            <FontAwesomeIcon icon={faHouse}/>
            <div>
            <p>Johannesburg</p>
            </div>
        </address>

    </footer>
  )
}

export default Footer
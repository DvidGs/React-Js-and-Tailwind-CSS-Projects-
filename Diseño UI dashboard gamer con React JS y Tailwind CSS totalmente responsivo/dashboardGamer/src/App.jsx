import { useState } from "react"
import { 
  RiHome3Line,
  RiFireLine, 
  RiLayoutGridLine, 
  RiTeamLine, 
  RiLiveLine,
  RiDownload2Line,
  RiSettings3Line,
  RiCheckboxBlankCircleFill,
  RiMenu3Fill,
  RiCloseLine,
  RiNotification3Line,
  RiSearchLine,
} from "react-icons/ri"

function App() {
  const [showMenu, setShowMenu] = useState(false)

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  }

  return (
    <div className="bg-[#141414] min-h-screen">
      <sidebar 
        className={`fixed top-0 w-80 h-full overflow-y-scroll border-r border-gray-800 p-8 flex flex-col justify-between bg-[#141414] transition-all lg:left-0
          ${showMenu ? "left-0" : "-left-full"
        }`}
      >
        <div>
          {/* Logo */}
          <h1 className="text-gray-300 uppercase font-bold text-2xl tracking-[5px] mb-10">
            Game :D
          </h1>
          <ul>
            <li>
              <a href="#" className="text-gray-300 flex items-center gap-4 hover:bg-[#232323] py-3 px-4 rounded-xl transition-colors">
                <RiHome3Line />
                Home
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-300 flex items-center gap-4 hover:bg-[#232323] py-3 px-4 rounded-xl transition-colors">
                <RiFireLine />
                Store
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-300 flex items-center gap-4 hover:bg-[#232323] py-3 px-4 rounded-xl transition-colors">
                <RiLayoutGridLine />
                Library
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-300 flex items-center gap-4 hover:bg-[#232323] py-3 px-4 rounded-xl transition-colors">
                <RiTeamLine />
                Friends
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-300 flex items-center gap-4 hover:bg-[#232323] py-3 px-4 rounded-xl transition-colors">
                <RiLiveLine />
                Live
              </a>
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <li>
              <a href="#" className="text-gray-300 flex items-center gap-4 hover:bg-[#232323] py-3 px-4 rounded-xl transition-colors">
                <RiDownload2Line />
                Download
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-300 flex items-center gap-4 hover:bg-[#232323] py-3 px-4 rounded-xl transition-colors">
                <RiSettings3Line />
                Settings
              </a>
            </li>
            <li>
              <a href="#" className="relative text-gray-300 flex items-center gap-4 hover:bg-[#232323] py-3 px-4 rounded-xl transition-colors">
                <img 
                  src="https://img.freepik.com/foto-gratis/retrato-joven-satisfecho-celebrando-exito_171337-10186.jpg" 
                  className="w-6 h-6 object-cover rounded-full"
                />
                <RiCheckboxBlankCircleFill className="absolute text-green-600 bottom-3 left-8 text-[8px]" />
                Tung Tran
              </a>
            </li>
          </ul>
        </div>
        {/* Btn menu movil */}
        <button onClick={toggleMenu} className="lg:hidden bg-blue-600 text-white fixed bottom-8 right-6 p-2 text-lg rounded-full">
          {showMenu ? <RiCloseLine /> : <RiMenu3Fill />}
        </button>
      </sidebar>
      {/* Header */}
      <header className="fixed pl-[340px] w-full flex items-start justify-between p-8">
        <nav className="flex items-center gap-4">
          <a href="#" className="bg-blue-600 text-white py-2 px-4 rounded-full">
            Discover
          </a>
          <a href="#" className="text-gray-500 py-2 px-4 rounded-full">
            Browse
          </a>
          <a href="#" className="text-gray-500 py-2 px-4 rounded-full">
            Wishlist
          </a>
        </nav>
        <ul className="flex items-center gap-4">
          <li>
            <a href="#" className="text-gray-500 text-lg">
              {" "}
              <RiNotification3Line />{" "}
            </a>
          </li>
          <li>
            <form className="relative">
              <RiSearchLine className="text-gray-500 absolute" />
              <input type="text" className="bg-[#232323] outline-none text-gray-300" />
            </form>
          </li>
        </ul>
      </header>
    </div>
  )
}

export default App

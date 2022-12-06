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
  RiArrowRightSLine,
  RiArrowLeftCircleLine,
  RiArrowRightCircleLine,
} from "react-icons/ri"

function App() {
  const [showMenu, setShowMenu] = useState(false)

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  }

  return (
    <div className="bg-[#141414] min-h-screen">
      <sidebar 
        className={`fixed top-0 w-80 h-full overflow-y-scroll border-r border-gray-800 p-8 flex flex-col justify-between bg-[#141414] transition-all lg:left-0 z-50
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
        <button onClick={toggleMenu} className="lg:hidden bg-blue-600 text-white fixed bottom-8 right-6 p-2 text-lg rounded-full z-50">
          {showMenu ? <RiCloseLine /> : <RiMenu3Fill />}
        </button>
      </sidebar>
      {/* Header */}
      <header className="fixed lg:pl-[340px] w-full flex flex-col md:flex-row items-center justify-between gap-4 p-8 bg-[#141414] z-40">
        <nav className="flex items-center gap-4 order-1 lg:order-none">
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
              <RiSearchLine className="text-gray-500 absolute top-3 left-2" />
              <input type="text" className="bg-[#232323] outline-none text-gray-300 py-2 pl-8 pr-4 rounded-full" placeholder="Search" w-full />
            </form>
          </li>
        </ul>
      </header>
      {/* Content */}
      <main className="lg:pl-[340px] p-8 pt-36">
        {/* Hero */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-2">
          <div className="md:col-span-5 relative">
            <img 
              src="https://cdn2.unrealengine.com/Fortnite%2Fblog%2Fsolo-showdown-limited-time-mode%2FFN_News_Large_EPIC-GAMES-WILL-PROVIDE-%24100-1920x1080-76e2c7bb0d4bc98e61d7e516c76bc3113f6ce9d7.jpg" 
              className="w-full h-[500px] object-cover lg:rounded-tl-xl lg:rounded-bl-xl"
            />
            <h1 className="absolute top-4 left-4 text-3xl text-white font-bold">
              Fornite
            </h1>
            <div className="absolute left-0 bottom-0 p-8 max-w-xl">
              <p className="text-gray-200">Update</p>
              <h2 className="text-4xl text-white font-extrabold mb-4">
                The hunt is on Fornite Chapter 2 - Season 5: Zero point
              </h2>
              <button className="bg-blue-600 text-white py-4 px-6 rounded-xl flex items-center gap-2 text-lg group">
                Play for free {" "}
                <RiArrowRightSLine className="group-hover:translate-x-2" />
              </button>
            </div>
          </div>
          {/* Games */}
          <div className="col-span-1 w-full h-[500px] bg-[#232323] lg:rounded-tr-xl lg:rounded-br-xl">
            <ul className="p-4 flex flex-col gap-6 h-full overflow-y-scroll">
              <li>
                <a href="#" className="flex items-center gap-4 text-white text-lg">
                  <img 
                    src="https://static-cdn.jtvnw.net/ttv-boxart/33214-285x380.jpg" 
                    className="w-20 h-full object-cover"
                    />{" "}
                    <span className="md:hidden lg:block">Fornite</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center gap-4 text-white text-lg">
                  <img 
                    src="https://images.start.gg/images/videogame/14/image-c9083bae5a162d24291bd91215acf83c.jpg?ehk=XDMLbdLsmqhCbIGWQFxmW%2B%2FBVmQwR6Yipp%2F3rew5G18%3D&ehkOptimized=hgpC4xrT9w3z9%2FMUNA5wU9DFtp6y0K58JoULvRWW0%2FI%3D" 
                    className="w-20 h-full object-cover"
                    />{" "}
                    <span className="md:hidden lg:block">Rocket League</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center gap-4 text-white text-lg">
                  <img 
                    src="https://cdn.cdkeys.com/media/catalog/product/t/h/the_escapists_2_pc_cover.jpg" 
                    className="w-20 h-full object-cover"
                    />{" "}
                    <span className="md:hidden lg:block">The Escapist 2</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center gap-4 text-white text-lg">
                  <img 
                    src="https://static-cdn.jtvnw.net/ttv-boxart/33214-285x380.jpg" 
                    className="w-20 h-full object-cover"
                    />{" "}
                    <span className="md:hidden lg:block">Fornite</span>
                </a>
              </li>
            </ul>
          </div>



        </div>
        {/* Slide VideoGames */}
        <div className="mt-10 mb-6 flex items-center justify-between">
          <h5 className="text-gray-300 text-2xl">Games on sale</h5>
          <div className="text-gray-400 text-3xl flex items-center gap-4">
            <RiArrowLeftCircleLine className="cursor-pointer" />
            <RiArrowRightCircleLine className="cursor-pointer" />
          </div>
        </div>
        {/* Videogames */}
        <div className="grid lg:grid-cols-5">
          <div className="p-4">
            <img src="https://as01.epimg.net/meristation/imagenes/2021/01/26/cover/956560151611687466.jpg" 
            className="w-full h-80 object-cover rounded-xl mb-2"
            />
            <h3 className="text-gray-300 text-lg">Valheim</h3>
            <p className="text-gray-500 mb-3">Action games</p>
            <span className="text-white">$8.15</span>
          </div>
          <div className="p-4">
            <img src="https://upload.wikimedia.org/wikipedia/en/6/6d/BioShock_cover.jpg" 
            className="w-full h-80 object-cover rounded-xl mb-2"
            />
            <h3 className="text-gray-300 text-lg">Bioshock</h3>
            <p className="text-gray-500 mb-3">Action, RPG</p>
            <div className="flex items-center gap-2">
              <span className="bg-green-300 p-1 text-green-800 rounded-lg">-80%</span>
              <span className="text-gray-500">$50</span>
              <span className="text-white">$8.15</span>
            </div>
          </div>
          <div className="p-4">
            <img src="https://image.api.playstation.com/cdn/UP0006/CUSA10483_00/7F2aA7ckAa0YROMt50NhDcwSaR31SE9a.png" 
            className="w-full h-80 object-cover rounded-xl mb-2"
            />
            <h3 className="text-gray-300 text-lg">Unravel Two</h3>
            <p className="text-gray-500 mb-3">Adventur games</p>
            <span className="text-white">$20.38</span>
          </div>
          <div className="p-4">
            <img src="https://images.nintendolife.com/66ed3b2a5f5e2/tick-tock-a-tale-for-two-cover.cover_large.jpg" 
            className="w-full h-80 object-cover rounded-xl mb-2"
            />
            <h3 className="text-gray-300 text-lg">Tick Tock: A tale for two</h3>
            <p className="text-gray-500 mb-3">Indie games</p>
            <div className="flex items-center gap-2">
              <span className="bg-green-300 p-1 text-green-800 rounded-lg">-60%</span>
              <span className="text-gray-500">$3.47</span>
              <span className="text-white">$1.39</span>
            </div>
          </div>
          <div className="p-4">
            <img src="https://cdn.akamai.steamstatic.com/steam/apps/1659040/capsule_616x353.jpg?t=1645711397" 
            className="w-full h-80 object-cover rounded-xl mb-2"
            />
            <h3 className="text-gray-300 text-lg">Hitman 3</h3>
            <p className="text-gray-500 mb-3">Action games</p>
            <span className="text-white">$23.99</span>
          </div>
        </div>
      </main>
    </div>
  )
}

export default App

//if the file in the navbar is called index.tsx, there is no need to include it in the import
import Navbar from "@/scenes/navbar"
import Home from "@/scenes/home"
import { useEffect, useState } from "react"
import { SelectedPage } from "./shared/types"

function App() {
  // this state controls which page (from the navbar) is selected
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home)
  // this state controls if the navbar is on top of the page or not
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true)
        // when we scrool on top of the page (...scrollY=0) we set Home as selected page
        setSelectedPage(SelectedPage.Home)
      }
      if (window.scrollY !== 0) setIsTopOfPage(false)
    }
    // every time the page is scrolling, handleScroll is called
    window.addEventListener("scroll", handleScroll)
    //this clean function ensure that when the component is not used or its going to be mounted again
    // the last listener is removed. In this way I can avoid bugs and optimize the resources
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="app bg-gray-20">
      <Navbar
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
        isTopOfPage={isTopOfPage}
      />
      <Home selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
    </div>
  )
}

export default App

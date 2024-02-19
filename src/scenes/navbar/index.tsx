import { useState } from "react"
import { Bars3Icon } from "@heroicons/react/24/solid"
import Logo from "@/assets/Logo.png"
import Link from "./Link"
import { SelectedPage } from "@/shared/types"
import useMediaQuery from "@/hooks/useMediaQuery"
import ActionButton from "@/shared/ActionButton"

type Props = {
  selectedPage: SelectedPage
  setSelectedPage: (value: SelectedPage) => void
}

const Navbar = ({ selectedPage, setSelectedPage }: Props) => {
  const flexBetween = "flex items-center justify-between"
  // this const is a boolean, true if the statement is true and false if its false
  const isAbovemediumScreens = useMediaQuery("(min-width: 1060px)")
  const [isMenuToggled, setIsMenuToggles] = useState<boolean>(false)

  return (
    <nav>
      <div className={`${flexBetween} fixed top-0 z-30 w-full py-6`}>
        <div className={`${flexBetween} mx-auto w-5/6`}>
          <div className={`${flexBetween} w-full gap-16`}>
            {/* Left side */}
            <div className={`${flexBetween} gap-1`}>
              <img src={Logo} alt="logo" className="w-16" />
              <p className="font-black font-montserrat">DUCKS</p>
            </div>

            {/* Right side */}
            {isAbovemediumScreens ? (
              <div className={`${flexBetween} w-full `}>
                {/* Links */}
                <div className={`${flexBetween} gap-8 text-sm`}>
                  <Link page="Home" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                  <Link
                    page="Benefits"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="Our Classes"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="Contact Us"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                </div>
                {/* Become a member */}
                <div className={`${flexBetween} gap-8 `}>
                  <p>Sign In</p>
                  {/* I need setSelectedPage props to sroll along the page when the button is pressed */}
                  <ActionButton setSelectedPage={setSelectedPage}>Become a Member</ActionButton>
                </div>
              </div>
            ) : (
              <button
                className="p-2 rounded-full bg-secondary-500"
                onClick={() => setIsMenuToggles(!isMenuToggled)}
              >
                <Bars3Icon className="w-6 h-6 text-white " />
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

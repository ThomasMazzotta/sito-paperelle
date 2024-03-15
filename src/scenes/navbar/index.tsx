import { useState } from "react"
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid"
import Logo from "@/assets/Logo.webp"
import Link from "./Link"
import { SelectedPage } from "@/shared/types"
import useMediaQuery from "@/hooks/useMediaQuery"
import ActionButton from "@/shared/ActionButton"

type Props = {
  selectedPage: SelectedPage
  isTopOfPage: boolean
  setSelectedPage: (value: SelectedPage) => void
}

const Navbar = ({ selectedPage, setSelectedPage, isTopOfPage }: Props) => {
  const flexBetween = "flex items-center justify-between"
  // this const is a boolean, true if the statement is true and false if its false
  const isAbovemediumScreens = useMediaQuery("(min-width: 1060px)")
  const [isMenuToggled, setIsMenuToggles] = useState<boolean>(false)
  const navbarBackground = isTopOfPage ? "" : "bg-primary-100 drop-shadow"

  return (
    <nav>
      <div
        className={`${navbarBackground} ${flexBetween} fixed top-0 z-30 w-full py-3`}
      >
        <div className={`${flexBetween} mx-auto w-5/6`}>
          <div className={`${flexBetween} w-full gap-16`}>
            {/* Left side */}
            <div className={`${flexBetween} gap-3`}>
              <img src={Logo} alt="logo" className="w-12" loading="lazy" />
              <p className="font-black font-montserrat">DUCKS</p>
            </div>

            {/* Right side */}
            {isAbovemediumScreens ? (
              <div className={`${flexBetween} w-full `}>
                {/* Links */}
                <div className={`${flexBetween} gap-8 text-sm`}>
                  <Link
                    page="Home"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
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
                  <ActionButton setSelectedPage={setSelectedPage}>
                    Become a Member
                  </ActionButton>
                </div>
              </div>
            ) : (
              <button
                aria-label="open drop down menu"
                className="p-2 rounded-full bg-secondary-500"
                onClick={() => setIsMenuToggles(!isMenuToggled)}
              >
                <Bars3Icon className="w-6 h-6 text-white " />
              </button>
            )}
          </div>
        </div>
      </div>
      {/* MOBILE MODAL */}
      {/* if i press the icon a modal appears! */}
      {!isAbovemediumScreens && isMenuToggled && (
        <div className="fixed bottom-0 right-0 z-50 h-full w-[300px] bg-primary-100 drop-shadow-xl opacity-95">
          {/* Close Icon */}
          <div className="flex justify-end p-12">
            <button
              aria-label="close drop down menu"
              onClick={() => setIsMenuToggles(!isMenuToggled)}
            >
              <XMarkIcon className="w-6 h-6 text-gray-400" />
            </button>
          </div>
          {/* Menu Items */}
          <div className="ml-[33%] flex flex-col gap-10 text-xl">
            <Link
              page="Home"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
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
        </div>
      )}
    </nav>
  )
}

export default Navbar

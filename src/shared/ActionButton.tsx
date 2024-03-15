import AnchorLink from "react-anchor-link-smooth-scroll"
import { SelectedPage } from "./types"

type Props = {
  children: React.ReactNode
  setSelectedPage: (value: SelectedPage) => void
}

// to set the name of the button we pass children as a prop
const ActionButton = ({ children, setSelectedPage }: Props) => {
  return (
    <AnchorLink
      className="px-10 py-2 rounded-md bg-secondary-500 hover:bg-primary-500 hover:text-white"
      onClick={() => {
        setSelectedPage(SelectedPage.ContactUs)
      }}
      //Remember to add the "/" I have lost an hour bc of this:(
      href={`/${SelectedPage.ContactUs}`}
      aria-label="contact us"
    >
      {children}
    </AnchorLink>
  )
}

export default ActionButton

import { SelectedPage } from "@/shared/types"
import AnchorLink from "react-anchor-link-smooth-scroll"

type Props = {
  page: string
  selectedPage: SelectedPage
  setSelectedPage: (value: SelectedPage) => void
}

const Link = ({ page, selectedPage, setSelectedPage }: Props) => {
  //every time we have a space, it's gonna be removed (see reg-ex)
  // I need the value of setSelectedPage to be SelectedPage, bc i defined the function in that way
  // The values types are SelectedPage, I'm sure about that, the compiler need to trust me ;)
  const lowerCasePage = page.toLowerCase().replace(/ /g, "") as SelectedPage
  console.log(selectedPage, lowerCasePage)
  return (
    <AnchorLink
      className={`${selectedPage === lowerCasePage ? "text-primary-500" : ""} transition duration-500 hover:text-primary-300`}
      href={`#${lowerCasePage}`}
      onClick={() => setSelectedPage(lowerCasePage)}
    >
      {page}
    </AnchorLink>
  )
}

export default Link

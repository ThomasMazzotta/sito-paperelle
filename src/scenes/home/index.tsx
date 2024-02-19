import useMediaQuery from "@/hooks/useMediaQuery"
import { SelectedPage } from "@/shared/types"
import ActionButton from "@/shared/ActionButton"
import HomePageText from "@/assets/HomePageText.png"
import AnchorLink from "react-anchor-link-smooth-scroll"
import HomePageGraphic from "@/assets/HomePageGraphic.png"

type Props = {
  setSelectedPage: (value: SelectedPage) => void
  selectedPage: SelectedPage
}

const Home = ({ setSelectedPage, selectedPage }: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)")
  return (
    <section id="home" className="gap-16 py-10 bg-gray-20 md:h-full md:pb-0">
      {/* IMAGE and MAIN HEADER*/}
      <div className="items-center justify-center w-5/6 mx-auto md:flex md:h-5/6">
        {/* MAIN HEADER */}
        <div className="z-10 mt-32 md:basis-3/5">
          {/* HEADINGS */}
          <div className="relative md:-mt-20">
            <div className="relative">
              <div className="before:absolute before:-top-20 before:content-ducks">
                <img src={HomePageText} alt="home-page-text" />
              </div>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate aspernatur sit
              accusantium odio deserunt! Cum voluptate magnam quia earum laborum! Eius maiores odit
              consectetur fugiat quas obcaecati! Dolorem, natus ratione.
            </p>
          </div>
          {/* ACTIONS */}
          <div>
            <ActionButton setSelectedPage={setSelectedPage}>Join Now</ActionButton>
            <AnchorLink
              className="text-sm font-bold underline text-primary-500 hover:text-secondary-500"
              onClick={() => setSelectedPage(SelectedPage.ContactUs)}
              href={`${SelectedPage.ContactUs}`}
            >
              Learn More
            </AnchorLink>
          </div>
        </div>
        {/* IMAGE */}
        <div>
          <img alt="home-page-graphic" src={HomePageGraphic} />
        </div>
      </div>
      {/* SPONSOR (big screen) */}
      {isAboveMediumScreens && (
        <div>
          <div>
            <div>
              <img src="" alt="" />
              <img src="" alt="" />
              <img src="" alt="" />
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Home

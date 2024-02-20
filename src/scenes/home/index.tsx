import useMediaQuery from "@/hooks/useMediaQuery"
import { SelectedPage } from "@/shared/types"
import ActionButton from "@/shared/ActionButton"
import HomePageText from "@/assets/HomePageText.png"
import AnchorLink from "react-anchor-link-smooth-scroll"
import HomePageGraphic from "@/assets/HomePageGraphic.png"
import { motion } from "framer-motion"

type Props = {
  setSelectedPage: (value: SelectedPage) => void
  selectedPage: SelectedPage
}

const Home = ({ setSelectedPage, selectedPage }: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)")
  return (
    <section id="home" className="gap-16 py-10 bg-gray-20 md:h-full md:pb-0">
      {/* IMAGE and MAIN HEADER ps. onViewportEnter calls a function when this div reach the viewport*/}
      <motion.div
        className="items-center justify-center w-5/6 mx-auto md:flex md:h-5/6"
        onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
      >
        {/* MAIN HEADER */}
        <div className="z-10 mt-32 md:basis-3/5">
          {/* HEADINGS */}
          <motion.div
            className="md:-mt-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <div className="relative">
              <div className="before:absolute before:-top-20 md:before:content-ducks before:left-20 before:z-[-1]">
                <img src={HomePageText} alt="home-page-text" />
              </div>
            </div>
            <p className="mt-8 text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate aspernatur sit
              accusantium odio deserunt! Cum voluptate magnam quia earum laborum! Eius maiores odit
              consectetur fugiat quas obcaecati! Dolorem, natus ratione.
            </p>
          </motion.div>
          {/* ACTIONS */}
          <motion.div
            className="flex items-center gap-8 mt-8 md:justify-start"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <ActionButton setSelectedPage={setSelectedPage}>Join Now</ActionButton>
            <AnchorLink
              className="text-sm font-bold underline text-primary-500 hover:text-secondary-500"
              onClick={() => setSelectedPage(SelectedPage.ContactUs)}
              href={`${SelectedPage.ContactUs}`}
            >
              Learn More
            </AnchorLink>
          </motion.div>
        </div>
        {/* IMAGE */}
        <div className="flex basis-3/5 justify center md:z-10 md:ml-40 md:mt-16 md:justify-items-end">
          <img alt="home-page-graphic" src={HomePageGraphic} />
        </div>
      </motion.div>
      {/* SPONSOR (big screen) */}
      {isAboveMediumScreens && (
        <div className="h-[150px] w-full bg-primary-100 py-10">
          <div className="w-5/6 mx-auto">
            <div className="flex items-center justify-between w-3/5 gap-8">
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

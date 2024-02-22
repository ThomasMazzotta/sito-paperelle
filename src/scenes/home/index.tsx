import useMediaQuery from "@/hooks/useMediaQuery"
import { SelectedPage } from "@/shared/types"
import ActionButton from "@/shared/ActionButton"
import HomePageText from "@/assets/HomePageText.png"
import AnchorLink from "react-anchor-link-smooth-scroll"
import HomePageGraphic from "@/assets/HomePageGraphic.png"
import { motion } from "framer-motion"
import Sponsor1 from "@/assets/DuckKing1.png"
import Sponsor2 from "@/assets/DuckSoldier1.png"
import Sponsor3 from "@/assets/DuckNasa1.png"

//remeber to import sponsor

type Props = {
  setSelectedPage: (value: SelectedPage) => void
  selectedPage: SelectedPage
}

const Home = ({ setSelectedPage, selectedPage }: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)")
  return (
    <section id="home" className="gap-16 py-4 md:py-32 bg-gray-20 md:min-h-full md:pb-0">
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
              <div className="before:absolute before:-top-20 md:before:content-ducks before:left-10 before:z-[-1]">
                <img src={HomePageText} alt="home-page-text" />
              </div>
            </div>
            <p className="mt-8 text-sm">
              Join the grand realm where only ducks reign supreme! Embrace your quacks, spread your
              wings, and unite under the banner of feathery freedom. This is your kingdom, where
              every quack matters
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
        <motion.div
          className="flex mt-6 basis-3/5 justify center md:z-10 md:ml-40 md:-mt-5 md:justify-items-end"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.0, duration: 0.8 }}
          variants={{
            hidden: { opacity: 0.8, scale: 0.9 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <img alt="home-page-graphic" src={HomePageGraphic} />
        </motion.div>
      </motion.div>
      {/* SPONSOR (big screen) */}
      {isAboveMediumScreens && (
        <div className="h-[150px] w-full bg-primary-100 py-10 flex xl:h-[250px]">
          <div className="flex items-center w-5/6 gap-32 mx-auto">
            <img src={Sponsor1} alt="sponsor1" className="w-1/12" />
            <img src={Sponsor2} alt="sponsor2" className="w-1/12" />
            <img src={Sponsor3} alt="sponsor3" className="w-1/12" />
          </div>
        </div>
      )}
    </section>
  )
}

export default Home

import { SelectedPage } from "@/shared/types"
import { ClassType } from "@/shared/types"
import { motion } from "framer-motion"
import gallery1 from "@/assets/science.webp"
import gallery2 from "@/assets/farm.webp"
import gallery3 from "@/assets/art.webp"
import gallery4 from "@/assets/government.webp"
import gallery5 from "@/assets/commerce.webp"
import gallery6 from "@/assets/army.webp"
import rightArrow from "@/assets/rightArrow.svg"
import HText from "@/shared/HText"
import Class from "./Class"
import { Helmet } from "react-helmet"

const arrowAnimation = {
  animate: {
    x: [0, 0, 0, 30, 0, 30, 0, 0, 0, 0, 0],
    transition: {
      duration: 6, // Durata totale dell'animazione
      ease: "easeInOut", // Tipo di easing per l'animazione
      repeat: Infinity, // Ripete l'animazione all'infinito
    },
  },
}

const classes: Array<ClassType> = [
  {
    name: "Scientist",
    description:
      "Dive into the mysteries of our world, conducting experiments and research to bring knowledge and innovation. Your work lights the way to a brighter future for all ducks",
    image: gallery1,
  },
  {
    name: "Farmer",
    description:
      "With dedication and care, you cultivate the land, ensuring a bountiful harvest. Your efforts feed the realm, sustaining life and growth in every corner",
    image: gallery2,
  },
  {
    name: "Artist",
    description:
      "Capture the essence of our realm with your creativity. Through painting, music, or storytelling, you reflect the beauty around us, inspiring hearts and minds",
    image: gallery3,
  },
  {
    name: "Government Official",
    description:
      "Steer the course of our community with wisdom and integrity. Your decisions shape our laws, policies, and daily life, guiding us towards harmony and prosperity",
    image: gallery4,
  },
  {
    name: "Economist",
    description:
      "Guard the wealth of our kingdom, managing resources and strategies for economic growth. Your expertise ensures stability and prosperity, allowing our society to flourish",
    image: gallery5,
  },
  {
    name: "Military",
    description:
      " Defend our borders and maintain peace, standing vigilant against any threat. Your courage and strength are the pillars upon which our safety and freedom rest",
    image: gallery6,
  },
]

type Props = {
  setSelectedPage: (value: SelectedPage) => void
}

const OurClasses = ({ setSelectedPage }: Props) => {
  return (
    <section className="w-full py-32 bg-primary-100" id="ourclasses">
      {/* META DESCRIPTION */}
      <Helmet>
        <title>Choose your path</title>
        <meta
          name="description"
          content=" Step into a realm where your career defines our collective future.
              Be it as a visionary scientist, nurturing farmer, dedicated
              government official, creative artist, savvy economist, or brave
              soldier, your role is pivotal."
        />
      </Helmet>

      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
      >
        <motion.div
          className="w-5/6 mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="relative md:w-3/5">
            <HText>Choose your path</HText>
            <p className="py-5">
              Step into a realm where your career defines our collective future.
              Be it as a visionary scientist, nurturing farmer, dedicated
              government official, creative artist, savvy economist, or brave
              soldier, your role is pivotal. Choose your path and let your
              talents flourish, contributing to the prosperity and safety of our
              kingdom. Every choice carves out a part of our shared destiny
            </p>
            <motion.div {...arrowAnimation} className="flex items-center gap-2">
              <span className="pt-3 -mb-5 sm:hidden">Slide & click 🦆</span>
              <img
                id="arrow"
                src={rightArrow}
                alt="right-arrow"
                className="w-10 pt-3 -mb-6"
                loading="lazy"
              />
            </motion.div>
          </div>
        </motion.div>
        <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
          <ul className="sm:w-[2800px] whitespace-nowrap">
            {classes.map((item, index) => (
              <Class
                key={`${item.name}-${index}`}
                name={item.name}
                description={item.description}
                image={item.image}
              />
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  )
}

export default OurClasses

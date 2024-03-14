import { SelectedPage } from "@/shared/types"
import {
  GlobeAltIcon,
  UserGroupIcon,
  HeartIcon,
} from "@heroicons/react/24/solid"
import { motion } from "framer-motion"
import HText from "@/shared/HText"
import { BenefitType } from "@/shared/types"
import Benefit from "./Benefit"
import ActionButton from "@/shared/ActionButton"
import BenefitsDuck from "@/assets/BenefitsDuck.webp"

const benefits: Array<BenefitType> = [
  {
    icon: <UserGroupIcon className="w-6 h-6" />,
    title: "Unity in Diversity",
    description:
      "Within our realm, every feather, quack, and waddle is celebrated. We thrive together, embracing the vast tapestry of duck life, united in our differences",
  },
  {
    icon: <GlobeAltIcon className="w-6 h-6" />,
    title: "Freedom and Exploration",
    description:
      "Our skies and waters beckon, offering endless adventures. In our kingdom, every duck has the freedom to explore, learn, and grow, bound only by the horizo",
  },
  {
    icon: <HeartIcon className="w-6 h-6" />,
    title: "Stewardship and Care",
    description:
      "We honor the ponds, lakes, and lands that nurture us. Our commitment to protecting our environment ensures a thriving kingdom for generations of ducks to come",
  },
]

// this is for framer motion
const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.4 },
  },
}

type Props = {
  setSelectedPage: (value: SelectedPage) => void
}

const Benefits = ({ setSelectedPage }: Props) => {
  return (
    <section id="benefits" className="w-5/6 min-h-full py-20 mx-auto">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
      >
        {/* HEADER */}
        <motion.div
          className="md:my-5 md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <HText>MORE THAN JUST A HUMAN</HText>
          <p className="my-5 text-sm">
            Discover a world where ducks surpass mere human boundaries,
            embodying wisdom, courage, and camaraderie. Here, every duck
            contributes to a greater cause, soaring beyond the ordinary.
          </p>
        </motion.div>
        {/* BENEFITS */}
        <motion.div
          className="items-center justify-between gap-8 mt-5 md:flex"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          {benefits.map((benefit: BenefitType) => (
            <Benefit
              key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              setSelectedPage={setSelectedPage} //because of learn more
            />
          ))}
        </motion.div>
        {/* GRAPHICS AND DESCRIPTIONS*/}
        <motion.div
          className="items-center justify-between gap-20 mt-16 md:mt-28 md:flex "
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.6 }}
          transition={{ delay: 0.0, duration: 0.8 }}
          variants={{
            hidden: { opacity: 0.8, scale: 0.9 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          {/* GRAPHIC */}
          <img
            className="w-5/6 mx-auto mb-10 md:mb-0 sm:w-4/12"
            src={BenefitsDuck}
            alt="benefits-duck"
          />
          {/* DESCRIPTION */}
          <div>
            {/* TITLE */}
            <div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6 }}
                variants={{
                  hidden: { opacity: 0, x: 50 },
                  visible: { opacity: 1, x: 0 },
                }}
              >
                <HText>
                  MILLIONS OF HAPPY DUCKS ENTER THE{" "}
                  <span className="text-primary-500">REIGN</span>
                </HText>
              </motion.div>
            </div>
            {/* DESCRIPTION */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6 }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <p className="my-5">
                Within the borders of our splendid realm, millions of ducks find
                joy and fulfillment. It's a sanctuary where laughter echoes over
                the waters, and happiness is as abundant as the grains on the
                shore. Every day, countless ducks join, drawn by the promise of
                a community that cherishes joy and friendship above all
              </p>
              <p className="mb-5">
                As these happy ducks enter, they're greeted by a world of
                unparalleled beauty and peace. Here, every quack is a note in
                the symphony of unity, and every wingbeat propels us toward a
                future bright with hope. This realm is not just a place, but a
                journey towards endless happiness, shared by millions
              </p>
            </motion.div>
            {/* BUTTON */}
            <motion.div
              className="relative mt-16"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <ActionButton setSelectedPage={setSelectedPage}>
                Join Now
              </ActionButton>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Benefits

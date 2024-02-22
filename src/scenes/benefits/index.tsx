import { SelectedPage } from "@/shared/types"
import { HomeModernIcon, UserGroupIcon, AcademicCapIcon } from "@heroicons/react/24/solid"
import { motion } from "framer-motion"
import HText from "@/shared/HText"
import { BenefitType } from "@/shared/types"
import Benefit from "./Benefit"
import ActionButton from "@/shared/ActionButton"
import BenefitsDuck from "@/assets/BenefitsDuck.png"

const benefits: Array<BenefitType> = [
  {
    icon: <HomeModernIcon className="w-6 h-6" />,
    title: "State of the Art Facilities",
    description:
      " orem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio, nisi porro aliquid quae nesciunt optio sequi vitae amet, facilis vel, labore doloremque quia laborum?",
  },
  {
    icon: <UserGroupIcon className="w-6 h-6" />,
    title: "100's of Diverse classes",
    description:
      " orem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio, nisi porro aliquid quae nesciunt optio sequi vitae amet, facilis vel, labore doloremque quia laborum?",
  },
  {
    icon: <AcademicCapIcon className="w-6 h-6" />,
    title: "Expert and pro Trainers",
    description:
      " orem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio, nisi porro aliquid quae nesciunt optio sequi vitae amet, facilis vel, labore doloremque quia laborum?",
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
      <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}>
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
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio, nisi porro aliquid
            quae nesciunt optio sequi vitae amet, facilis vel, labore doloremque quia laborum? Nam
            nesciunt magnam dolore aperiam facere.
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
                  MILLIONS OF HAPPY DUCKS ENTER THE <span className="text-primary-500">REIGN</span>
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
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam maxime deserunt aut
                quisquam omnis iusto saepe facere debitis. Nobis optio corporis iste! Ex officia
                earum dolorem, velit voluptatum quos voluptatem.
              </p>
              <p className="mb-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium quibusdam,
                voluptatem dolores obcaecati eaque laborum, reprehenderit alias saepe vitae quas et
                hic? Nostrum ipsa placeat iusto, perspiciatis sequi reiciendis molestiae.
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
              <ActionButton setSelectedPage={setSelectedPage}>Join Now</ActionButton>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Benefits

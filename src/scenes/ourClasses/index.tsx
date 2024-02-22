import { SelectedPage } from "@/shared/types"
import { ClassType } from "@/shared/types"
import { motion } from "framer-motion"
import gallery1 from "@/assets/science.png"
import gallery2 from "@/assets/farm.png"
import gallery3 from "@/assets/art.png"
import gallery4 from "@/assets/government.png"
import gallery5 from "@/assets/commerce.png"
import gallery6 from "@/assets/army.png"
import rightArrow from "@/assets/rightArrow.svg"
import HText from "@/shared/HText"
import Class from "./Class"

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
    name: "Science sector",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, recusandae voluptate numquam enim in incidunt, quas aliquam sequi ullam voluptatem saepe dolore mollitia nobis! Blanditiis est quae nam sed doloribus.",
    image: gallery1,
  },
  {
    name: "Farming",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, recusandae voluptate numquam enim in incidunt, quas aliquam sequi ullam voluptatem saepe dolore mollitia nobis! Blanditiis est quae nam sed doloribus.",
    image: gallery2,
  },
  {
    name: "Art",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, recusandae voluptate numquam enim in incidunt, quas aliquam sequi ullam voluptatem saepe dolore mollitia nobis! Blanditiis est quae nam sed doloribus.",
    image: gallery3,
  },
  {
    name: "Government",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, recusandae voluptate numquam enim in incidunt, quas aliquam sequi ullam voluptatem saepe dolore mollitia nobis! Blanditiis est quae nam sed doloribus.",
    image: gallery4,
  },
  {
    name: "Economic",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, recusandae voluptate numquam enim in incidunt, quas aliquam sequi ullam voluptatem saepe dolore mollitia nobis! Blanditiis est quae nam sed doloribus.",
    image: gallery5,
  },
  {
    name: "Armyr",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, recusandae voluptate numquam enim in incidunt, quas aliquam sequi ullam voluptatem saepe dolore mollitia nobis! Blanditiis est quae nam sed doloribus.",
    image: gallery6,
  },
]

type Props = {
  setSelectedPage: (value: SelectedPage) => void
}

const OurClasses = ({ setSelectedPage }: Props) => {
  return (
    <section className="w-full py-32 bg-primary-100" id="ourclasses">
      <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}>
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
            <HText>Our Classes</HText>
            <p className="py-5">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis nostrum asperiores
              excepturi earum voluptate quae qui exercitationem provident tenetur quam. Omnis,
              eveniet quisquam fuga tempora inventore commodi illo architecto odit?
            </p>
            <motion.div {...arrowAnimation} className="flex items-center gap-2">
              <span className="pt-3 -mb-5 sm:hidden">Slide & click 🦆</span>
              <img id="arrow" src={rightArrow} alt="right-arrow" className="w-10 pt-3 -mb-6" />
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

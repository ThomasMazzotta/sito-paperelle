import { SelectedPage } from "@/shared/types"
import { HomeModernIcon, UserGroupIcon, AcademicCapIcon } from "@heroicons/react/24/solid"
import { motion } from "framer-motion"
import HText from "@/shared/HText"

type Props = {
  setSelectedPage: (value: SelectedPage) => void
}

const Benefits = ({ setSelectedPage }: Props) => {
  return (
    <section id="benefits" className="w-5/6 min-h-full py-20 mx-auto">
      <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}></motion.div>
      {/* HEADER */}
      <div className="md:my-5 md:w-3/5">
        <div>
          <HText>MORE THAN JUST A HUMAN</HText>
          <p className="my-5 text-sm">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio, nisi porro aliquid
            quae nesciunt optio sequi vitae amet, facilis vel, labore doloremque quia laborum? Nam
            nesciunt magnam dolore aperiam facere.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Benefits

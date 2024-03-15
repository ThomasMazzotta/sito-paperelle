import { useForm } from "react-hook-form"
import { SelectedPage } from "@/shared/types"
import { motion } from "framer-motion"
import Reign from "@/assets/Reign.webp"
import HText from "@/shared/HText"
import { Helmet } from "react-helmet"

type Props = {
  setSelectedPage: (value: SelectedPage) => void
}

const ContactUs = ({ setSelectedPage }: Props) => {
  const inputStyles = `mb-5 w-full rounded-lg bg-primary-300
  px-5 py-3 placeholder-white`

  // funcions from useFrom hook
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm()

  // This prevents to send the form if its invalid
  // It is also the only time that I use any
  const onSubmit = async (e: any) => {
    const isValid = await trigger()
    if (!isValid) {
      e.preventDefault()
    }
  }

  return (
    <section id="contactus" className="w-5/6 pt-24 mx-auto pb-28">
      {/* META DESCRIPTION */}
      <Helmet>
        <title>Fill out the form</title>
        <meta
          name="description"
          content="The Duck Empire awaits you, offering a world of
            opportunity, camaraderie, and growth. Fill out the form below to
            join our vibrant community and start your journey in a realm where
            every duck thrives."
        />
      </Helmet>
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}
      >
        {/* HEADER */}
        <motion.div
          className="md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <HText>
            <span className=" text-primary-500">JOIN NOW</span> THE DUCK EMPIRE
          </HText>
          <p className="mt-7">
            Embark on an extraordinary adventure and become part of something
            greater. The Duck Empire awaits you, offering a world of
            opportunity, camaraderie, and growth. Fill out the form below to
            join our vibrant community and start your journey in a realm where
            every duck thrives
          </p>
        </motion.div>

        {/* FORM AND IMAGE */}
        <div className="justify-between gap-8 mt-10 md:flex">
          <motion.div
            className="mt-10 basis-3/5 md:mt-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <form
              target="_blank"
              onSubmit={onSubmit}
              action={`https://formsubmit.co/1646444d89349739f1772e7878b6df64`}
              method="POST"
            >
              <input
                className={inputStyles}
                type="text"
                placeholder="NAME"
                {...register("name", {
                  required: true,
                  maxLength: 100,
                })}
              />
              {errors.name && (
                <p className="mt-1 text-primary-500">
                  {errors.name.type === "required" && "This field is required."}
                  {errors.name.type === "maxLength" &&
                    "Max length is 100 char."}
                </p>
              )}

              <input
                className={inputStyles}
                type="text"
                placeholder="EMAIL"
                {...register("email", {
                  required: true,
                  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                })}
              />
              {errors.email && (
                <p className="mt-1 text-primary-500">
                  {errors.email.type === "required" &&
                    "This field is required."}
                  {errors.email.type === "pattern" && "Invalid email address."}
                </p>
              )}

              <textarea
                className={inputStyles}
                placeholder="MESSAGE"
                rows={4}
                cols={50}
                {...register("message", {
                  required: true,
                  maxLength: 2000,
                })}
              />
              {errors.message && (
                <p className="mt-1 text-primary-500">
                  {errors.message.type === "required" &&
                    "This field is required."}
                  {errors.message.type === "maxLength" &&
                    "Max length is 2000 char."}
                </p>
              )}

              <button
                type="submit"
                className="px-20 py-3 mt-5 transition duration-500 rounded-lg bg-secondary-500 hover:text-white"
              >
                SUBMIT
              </button>
            </form>
          </motion.div>

          <motion.div
            className="relative mt-16 basis-2/5 md:-mt-36"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <div className="w-full before:absolute before:-bottom-16 before:right-20 before:z-[-1] md:before:content-ducks md:ml-10">
              <img className="w-full" alt="reign" src={Reign} loading="lazy" />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default ContactUs

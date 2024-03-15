type Props = {
  name: string
  description?: string
  image: string
}

const Class = ({ name, description = "default text", image }: Props) => {
  const overlayStyles = `p-5 absolute z-10 flex 
    sm:h-[380px] sm:w-[450px] h-[350px] w-[350px]  flex-col items-center justify-center 
    whitespace-normal bg-primary-500 text-center text-white
    opacity-0 transition duration-500 hover:opacity-90 hover:z-10 `
  return (
    <li className="relative mx-5 inline-block sm:h-[380px] sm:w-[450px] h-[280px] w-[350px] ">
      <div className={overlayStyles}>
        <p className="text-2xl">{name}</p>
        <p className="mt-5">{description}</p>
      </div>
      <img alt={`${image}`} src={image} loading="lazy" />
    </li>
  )
}

export default Class

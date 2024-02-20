type Props = {
  children: React.ReactNode // this type represent everything that can be rendered
}

const HText = ({ children }: Props) => {
  return <h1 className="text-3xl font-bold basis-3/5 font-montserrat">{children}</h1>
}

export default HText

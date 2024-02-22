import Logo from "@/assets/Logo.png"

const Footer = () => {
  return (
    <footer className="py-16 bg-primary-100">
      <div className="w-5/6 gap-16 mx-auto justify-content md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img alt="logo" src={Logo} className="w-12" />
          <p className="my-5">
            Discover the heart of the Duck Empire. Explore, connect, and soar with us. Together, we
            make waves
          </p>
          <p>© Ducks All Rights Reserved</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Links</h4>
          <p className="my-5"> DuckEmpireLegends.com</p>
          <p className="my-5">DuckEmpireEvents.com</p>
          <p>QuackAnswers.com</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          <p className="my-5">
            For whispers and quacks, reach out through contact@DuckEmpireRealm.com or summon us on
            Quacker @DuckEmpireMajesty
          </p>
          <p>🦆 Quack Line: 1-800-555-DUCK (3825)</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

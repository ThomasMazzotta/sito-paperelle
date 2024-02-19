//if the file in the navbar is called index.tsx, there is no need to include it in the import
import Navbar from "@/scenes/navbar"
import { useState } from "react"
import { SelectedPage } from "./shared/types"

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home)

  return (
    <div className="app bg-gray-20">
      <Navbar selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
    </div>
  )
}

export default App

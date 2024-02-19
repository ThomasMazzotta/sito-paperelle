//this hooks controls if the page agree with a certain condition and it returns a boolean
//we can use this boolean to decide what a component do
// for example, if its true that the page width is > x we can do y else z
import { useState, useEffect } from "react"

const useMediaQuery = (query: string) => {
  const [matches, setMatches] = useState(false)

  useEffect(() => {
    const media = window.matchMedia(query)
    if (media.matches !== matches) {
      setMatches(media.matches)
    }
    const listener = () => setMatches(media.matches)
    window.addEventListener("resize", listener)
    return () => window.removeEventListener("resize", listener)
  }, [matches, query])

  return matches
}

export default useMediaQuery

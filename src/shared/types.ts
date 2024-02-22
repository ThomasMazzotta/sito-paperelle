// enums exist in the final build, we are using them! But they also exist has a particular type!
export enum SelectedPage {
  Home = "home",
  Benefits = "benefits",
  OurClasses = "ourclasses",
  ContactUs = "contactus",
}

export interface BenefitType {
  icon: JSX.Element
  title: string
  description: string
}

export interface ClassType {
  name: string
  description?: string
  image: string
}

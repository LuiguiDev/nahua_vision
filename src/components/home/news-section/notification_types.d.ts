export interface newsProps {
  date: string
  headline: string,
  image: {
    imgSrc: string
    imgAlt: string
  }
  notification: notificationProps | null
}

export type notificationProps = {
  date: string
  title: string
  body: string
}

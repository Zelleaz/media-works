import { IPost, IUser } from "../store/types/jsonPlaceholder";

export type CardProps = IUser

export interface IActiveLinkProps {
  href: string
  activeClassName?: string 
  className?: string
}

export interface IInfoItemProps {
  myKey: string
  value: string
}

export interface IInfoParserProps {
  myKey: string
  value: string
}

export type PostProps = IPost
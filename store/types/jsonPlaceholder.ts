export interface IUser {
  id: number
  name: string
  username: string 
  email: string
  address: IAddress 
  phone: string 
  website: string 
  company: ICompany
}

export interface IPost {
  userId: number
  id: number 
  title: string 
  body: string
  comments?: IComment[]
}

export interface IComment {
  postId: number 
  id: number 
  name: string 
  email: string 
  body: string
}

export type Users = IUser[]
export type Posts = IPost[]
export type Comments = IComment[]

export interface IAddress {
  street: string
  suite: string 
  city: string 
  zipcode: string 
  geo: {
    lat: string 
    lng: string 
  }
}

export interface ICompany {
  name: string 
  catchPhrase: string 
  bs: string
}


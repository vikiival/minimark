export type UpdateFunction = (name: string, index: number) => string;

export type DisplayType =
  | null
  | 'boost_number'
  | 'number'
  | 'boost_percentage';


export type Attribute = {
  display_type?: DisplayType;
  trait_type?: string
  value: number | string
}

export interface Metadata {
  name: string;
  description: string
  image: string
  animation_url?: string
  attributes?: Attribute[]
  external_url?: string
  type: string;
}
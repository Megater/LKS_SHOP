import { type SchemaTypeDefinition } from 'sanity'
import product from './product'
import heroEvent from './heroEvent'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product, heroEvent],
}


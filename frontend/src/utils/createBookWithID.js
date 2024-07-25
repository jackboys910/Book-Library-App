import { v4 as uuidv4 } from 'uuid'

function createBookWithID(book, source) {
  return {
    ...book,
    source: source,
    isFavorite: false,
    id: uuidv4(),
  }
}

export default createBookWithID

import { useDispatch, useSelector } from 'react-redux'
import { deleteBook } from '../../redux/books/actionCreators'
import './BookList.css'

function BookList() {
  const dispatch = useDispatch()
  const books = useSelector((state) => state.books)

  function handleBookDelete(id) {
    dispatch(deleteBook(id))
  }

  return (
    <div className="app-block book-list">
      <h2>Book List</h2>
      {books.length === 0 ? (
        <p>No books available</p>
      ) : (
        <ul>
          {books.map((book, index) => {
            return (
              <li key={book.id}>
                <div className="book-info">
                  {++index}. {book.title} by <strong>{book.author}</strong>
                </div>
                <div className="book-actions">
                  <button onClick={() => handleBookDelete(book.id)}>
                    Delete
                  </button>
                </div>
              </li>
            )
          })}
        </ul>
      )}
    </div>
  )
}

export default BookList

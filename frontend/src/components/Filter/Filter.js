import { useDispatch, useSelector } from 'react-redux'
import {
  setTitleFilter,
  setAuthorFilter,
  selectTitleFilter,
  selectAuthorFilter,
  resetFilters,
} from '../../redux/slices/filterSlice'
import './Filter.css'

function Filter() {
  const dispatch = useDispatch()
  const titleFilter = useSelector(selectTitleFilter)
  const authorFilter = useSelector(selectAuthorFilter)

  const handleTitleFilterChange = (e) => {
    dispatch(setTitleFilter(e.target.value))
  }

  const handleResetFilters = () => {
    dispatch(resetFilters())
  }

  const handleAuthorFilterChange = (e) => {
    dispatch(setAuthorFilter(e.target.value))
  }

  return (
    <div className="app-block filter">
      <div className="filter-row">
        <div className="filter-group">
          <input
            onChange={handleTitleFilterChange}
            type="text"
            value={titleFilter}
            placeholder="Filter by title..."
          />
        </div>
        <div className="filter-group">
          <input
            onChange={handleAuthorFilterChange}
            type="text"
            value={authorFilter}
            placeholder="Filter by author..."
          />
        </div>
        <button type="button" onClick={handleResetFilters}>
          Reset Filters
        </button>
      </div>
    </div>
  )
}

export default Filter

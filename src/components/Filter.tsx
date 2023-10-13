import { type FilterValue } from '../types'
import { FILTER_BUTTONS } from './consts'

interface Props {
  onFilterChange: (filter: FilterValue) => void
  filterSelected: FilterValue
}

export const Filter: React.FC<Props> = ({ filterSelected, onFilterChange }) => {
  return (
    <ul className="filters">
      {
        Object.entries(FILTER_BUTTONS).map(([key, { href, literal }]) => {
          const isSelected = key === filterSelected
          const className = isSelected ? 'selected' : ''

          return (
            <li key={key}>
              <a href={href}
                className={className}
                onClick={(e) => {
                  e.preventDefault()
                  onFilterChange(key as FilterValue)
                }}
              >
                {literal}
              </a>
            </li>
          )
        })
      }
    </ul>
  )
}

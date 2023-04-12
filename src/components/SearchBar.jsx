import styled from 'styled-components'
import { SearchIcon } from '@/assets'
const SearchBar = () => {
  return (
    <StyledSearchBarWrapper>
      <SearchLabel>Search...</SearchLabel>
      <SearchIcon />
    </StyledSearchBarWrapper>
  )
}

export default SearchBar

const StyledSearchBarWrapper = styled.div`
  width: 180px;
  display: flex;
  flex-direction: row;
  padding: 6px 15px;
  background: #ffffff;
  border-radius: 10px;
  align-items: center;
  justify-content: space-between;
`
const SearchLabel = styled.div`
  font-family: 'Lato';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #b0b0b0;
`

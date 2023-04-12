const SearchIcon = (props) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={13}
      height={12}
      fill='none'
      {...props}
    >
      <circle cx={5} cy={5} r={4.5} stroke='#858585' />
      <path stroke='#858585' d='m8.354 7.646 4 4' />
    </svg>
  )
}

export default SearchIcon

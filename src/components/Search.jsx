
export default function Search({handleSearch}) {

  // extract the value
  function filterSearch(e) {
    const input = e.target.value;
    handleSearch(input)
  }

  return (
    <>
      <input 
      style={{width: 200}}
      placeholder='Search'
      onChange={filterSearch}
      />
    </>
  )
}

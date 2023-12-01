
export default function Line({ name, description, searching }) {
  
  function highlightText(string) {
    let result = string

    // start highlighting when there is something to look for    
    if (searching != "") {
      // start highlighting when there is a match
      if (string.toLowerCase().includes(searching)) {
        let firstIndex = string.toLowerCase().indexOf(searching)
        let lastIndex = firstIndex + searching.length;
  
        let before = string.slice(0,firstIndex)
        let highlight = string.slice(firstIndex, lastIndex)
        let after = string.slice(lastIndex)

        // console.log('before', before)
        // console.log('highlight', highlight)
        // console.log('after', after)
  
        result = `${before}<mark>${highlight}<mark/>${after}`
      }
    }
    return (
      <p style={{
          width: '20%', 
          textAlign: 'left'
        }}>{result}</p>
    )
  }

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'row',
      width: 500,
      }} >
        {
          highlightText(name)
        }
      {/* <p style={{width: '20%', textAlign: 'left'}} >{item?.name}</p> */}
      <p style={{width: '80%', textAlign: 'left'}} >{description}</p>
    </div>
  )
}

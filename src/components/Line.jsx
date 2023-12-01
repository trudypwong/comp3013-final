
export default function Line({ name, description, searching }) {
  
  function highlightText(string, width) {
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

        return (
          <p style={{ width: width, textAlign: 'left' }}>{before}<mark>{highlight}</mark>{after}</p>
        )
      }
    }
    return (
      <p style={{ width: width, textAlign: 'left' }}>{result}</p>
    )
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'row', width: 500 }} >
      { highlightText(name, "20%") }
      { highlightText(description, "80%") }
    </div>
  )
}

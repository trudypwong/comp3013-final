
export default function Line({ item, searching }) {

  console.log('searching', searching)
  
  function highlightText() {

  }

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'row',
      width: 500,
      }} >
      <p style={{width: '20%', textAlign: 'left'}} >{item?.name}</p>
      <p style={{width: '80%', textAlign: 'left'}} >{item?.description}</p>
    </div>
  )
}

export function MessageInput(){
  return (
    <div style={{
      display: 'flex ',
      // borderTop: '1px solid black',
      height: '70px'
    }}>
    <input style={{
      flex: '1',
      padding: '10px',
    }} type="text" placeholder="type message"  />
    <button style={{
      width: '100px',
      height: '100%'
    }}>Send</button>
    </div>
    
  )
}
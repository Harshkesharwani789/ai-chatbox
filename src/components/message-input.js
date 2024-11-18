export function MessageInput(){
  return (
    <div style={{
      display: 'flex ',
      padding: '10px',
      borderTop: '1px solid black',
    }}>
    <input type="text" placeholder="type message"  />
    <button>send</button>
    </div>
    
  )
}
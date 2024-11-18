export function LeftChat() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "10px",
      }}
    >
      <img
        src="https://cdn-icons-png.flaticon.com/128/8943/8943377.png"
        width={40}
        height={40}
        alt="User Icon"
      />
      <div
        style={{
          border: "2px solid teal",
          padding: "10px",
          width: "80%",
          marginTop: "10px",
          borderRadius: "10px",
          backgroundColor: "lightteal",
        }}
      >
        <p>Hey, how are you?</p>
      </div>
    </div>
  );
}

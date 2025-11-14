export default function Custom404() {
  return (
    <div style={{
      display:"flex",
      flexDirection:"column",
      justifyContent:"center",
      alignItems:"center",
      minHeight:"100vh",
      background:"#0a0a0a",
      color:"#fff",
      textAlign:"center",
      padding:20
    }}>
      <h1 style={{fontSize:"4rem", color:"#ff3d00"}}>404</h1>
      <h2>Page Not Found</h2>
      <p>Oops! The page you are looking for does not exist.</p>
      <a href="/" style={{
        marginTop:20,
        padding:"10px 20px",
        background:"#ff3d00",
        color:"#fff",
        borderRadius:6,
        textDecoration:"none"
      }}>
        Go to Home
      </a>
    </div>
  );
}

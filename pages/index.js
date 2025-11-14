import Link from 'next/link';

export default function Home() {
  return (
    <div style={{background:"#0a0a0a", color:"#fff", fontFamily:"Arial", minHeight:"100vh", padding:20}}>
      <h1 style={{textAlign:"center", color:"#ff3d00"}}>🎬 MovieBuzzZone Test Movie 🎬</h1>
      <div style={{display:"flex", justifyContent:"center", marginTop:50}}>
        <div style={{background:"#1a1a1a", borderRadius:12, width:220, overflow:"hidden", boxShadow:"0 0 10px rgba(255,61,0,0.2)"}}>
          <img 
            src="https://1024terabox.com/s/12XXKQCi2mmC03w80f5n6tw" 
            alt="Test Movie Poster" 
            style={{width:"100%", height:320, objectFit:"cover"}}
          />
          <div style={{padding:15}}>
            <h3 style={{color:"#f5f5f5"}}>Test Movie</h3>
            <p style={{color:"#ccc"}}>Release: 2025 | Genre: Educational</p>
            <Link href="/dl/test-movie">
              <a style={{display:"block", background:"#ff3d00", color:"#fff", textAlign:"center", padding:"10px 0", borderRadius:6, fontWeight:"bold", marginTop:10}}>
                ⬇ Download Now
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

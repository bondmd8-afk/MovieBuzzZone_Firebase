import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function DownloadPage() {
  const router = useRouter();
  const { id } = router.query;
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    if (!id) return;

    // 3 Ads (replace with your actual ad URLs)
    const ads = [
      "https://example-ad1.com",
      "https://example-ad2.com",
      "https://example-ad3.com"
    ];

    // Open ads in new tabs
    ads.forEach(ad => window.open(ad, "_blank"));

    // Countdown
    const interval = setInterval(() => {
      setCountdown(prev => prev - 1);
    }, 1000);

    // After countdown, fetch masked link and redirect
    setTimeout(async () => {
      clearInterval(interval);
      const res = await fetch(`/api/redirect?file=${id}`);
      const link = await res.text();
      window.location.href = link; // Redirect to your TeraBox file
    }, 5000);

    return () => clearInterval(interval);
  }, [id]);

  return (
    <div style={{textAlign:"center", padding:50, background:"#0a0a0a", color:"#fff", minHeight:"100vh"}}>
      <h2 style={{color:"#ff3d00"}}>Preparing your download for Test Movie...</h2>
      <p>Redirecting in {countdown} seconds...</p>
    </div>
  );
}

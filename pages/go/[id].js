import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const demoAds = [
  "https://example.com/ad1",
  "https://example.com/ad2",
  "https://example.com/ad3",
];

// TeraBox download links
const downloadLinks = {
  1: "https://1024terabox.com/s/1pqNq4SJhsk2R6ytdFfnE-g",
};

export default function GoPage() {
  const router = useRouter();
  const { id } = router.query;
  const [step, setStep] = useState(0);
  const [showDownload, setShowDownload] = useState(false);

  useEffect(() => {
    if (!id) return;

    if (step < demoAds.length) {
      window.open(demoAds[step], "_blank");
      setStep(step + 1);
    } else if (step === demoAds.length) {
      // Ads finished → show download button
      setShowDownload(true);
    }
  }, [step, id]);

  const handleDownloadClick = () => {
    const finalLink = downloadLinks[id];
    if (finalLink) window.open(finalLink, "_blank");
    setStep(0); // reset session
    setShowDownload(false); // hide download button until next session
  };

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h1>Preparing your download...</h1>
      {!showDownload ? (
        <p>
          Step {Math.min(step + 1, demoAds.length)} of {demoAds.length} - Ads
          loading
        </p>
      ) : (
        <button onClick={handleDownloadClick}>Download Now</button>
      )}
    </div>
  );
}

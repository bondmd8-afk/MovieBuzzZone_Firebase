import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const demoAds = [
  "https://example.com/ad1",
  "https://example.com/ad2",
  "https://example.com/ad3",
];

// তোমার TeraBox link বসানো হলো
const downloadLinks = {
  1: "https://1024terabox.com/s/1pqNq4SJhsk2R6ytdFfnE-g",
};

export default function GoPage() {
  const router = useRouter();
  const { id } = router.query;
  const [step, setStep] = useState(0);

  useEffect(() => {
    if (!id) return;

    if (step < demoAds.length) {
      window.open(demoAds[step], "_blank");
      setStep(step + 1);
    } else {
      const finalLink = downloadLinks[id];
      if (finalLink) window.open(finalLink, "_blank");
    }
  }, [step, id]);

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h1>Preparing your download...</h1>
      <p>
        Step {step + 1} of {demoAds.length + 1}
      </p>
      <p>Please wait while ads are loading.</p>
    </div>
  );
}

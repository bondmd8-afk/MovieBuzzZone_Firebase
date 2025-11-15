// pages/go/[id].js
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const demoAds = [
  "https://example.com/ad1",
  "https://example.com/ad2",
  "https://example.com/ad3",
];

const downloadLinks = {
  1: "https://1024terabox.com/s/1-D6l--HRcEquANJEQ3hqtg",
  2: "https://1024terabox.com/s/demo-link-2",
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
    <div>
      <h1>Preparing your download...</h1>
      <p>
        Step {step + 1} of {demoAds.length + 1}
      </p>
    </div>
  );
}


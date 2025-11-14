// Simple auto-expire system (in-memory)
let links = {
  "test-movie": {
    url: "https://1024terabox.com/s/12XXKQCi2mmC03w80f5n6tw",
    created: Date.now() // timestamp in milliseconds
  }
};

const LINK_EXPIRY = 1000 * 60 * 60 * 3; // 3 hours in milliseconds

export default function handler(req, res) {
  const file = req.query.file;

  if (!links[file]) {
    return res.status(404).send("File not found");
  }

  // Check if link expired
  if (Date.now() - links[file].created > LINK_EXPIRY) {
    return res.status(410).send("Link expired. Please try again later.");
  }

  res.status(200).send(links[file].url);
}

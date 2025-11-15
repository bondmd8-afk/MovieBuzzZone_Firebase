import Image from "next/image";
import Link from "next/link";

const movies = [
  {
    id: 1,
    title: "Test Movies",
    size: "700MB",
    poster: "https://1024terabox.com/s/1vn5KYPuR35JZs2guWQTx1w",
    download: "/go/1", // hidden TeraBox link
  },
];

export default function TestMovies() {
  return (
    <div>
      <h1>Test Movies</h1>
      {movies.map((movie) => (
        <div key={movie.id} style={{ marginBottom: "30px" }}>
          <h2>{movie.title}</h2>
          <p>Size: {movie.size}</p>
          <Image
            src={movie.poster}
            width={300}
            height={450}
            alt={movie.title}
          />
          <br />
          <Link href={movie.download} target="_blank">
            <button>Download</button>
          </Link>
        </div>
      ))}
    </div>
  );
}

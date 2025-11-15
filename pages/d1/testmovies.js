import Image from "next/image";
import Link from "next/link";

const movies = [
  {
    id: 1,
    title: "Test Movies",
    size: "700MB",
    poster: "https://1024terabox.com/s/1vn5KYPuR35JZs2guWQTx1w",
    download: "/go/1",
  },
];

export default function TestMovies() {
  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
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
          <Link href={movie.download}>
            <button>Download</button>
          </Link>
        </div>
      ))}
    </div>
  );
}

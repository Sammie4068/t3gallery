const mockUrls = [
  "https://utfs.io/f/X0b11PvVdnq5IwGESHbtscMJLeDCdhp6TWi5YHzN7GU0Axwj",
  "https://utfs.io/f/X0b11PvVdnq5ErBCZLaW0NC4QFRXHbhn2pOsuIileoa1YKz9",
  "https://utfs.io/f/X0b11PvVdnq5A9okvSp9qscW0DXj8lnERVkrip1aUY3yFGoN",
  "https://utfs.io/f/X0b11PvVdnq5XUrPONvVdnq5c74ZOGT3xWvufIMA2HiLwpQ6",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default function HomePage() {
  return (
    <main>
      <div className="flex flex-wrap gap-4">
        {[...mockImages, ...mockImages, ...mockImages].map((img, index) => (
          <div key={img.id + "-" + index} className="w-48">
            <img src={img.url} alt="image" />
          </div>
        ))}
      </div>
    </main>
  );
}

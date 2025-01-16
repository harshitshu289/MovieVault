import React from "react";
import { useLocation } from "react-router-dom";

const Movies = () => {
  const movies = [
    { title: "30 Days of Night 2007 | Dual Audio | 720p", link: "https://drive.google.com/file/d/1-QDCnXCewHclGnOY46jQOW1Zki_ia5CC/view?usp=drive_link" },
    { title: "Sleepy Hollow 1999 | Dual Audio | 720p", link: "https://drive.google.com/file/d/1SQTbqVEWDke-0tswZyJilNIBmJ_NOu4G/view?usp=sharing" },
    { title: "The Ring 2002 | Dual Audio | 720p", link: "https://drive.google.com/file/d/1RwLBzud7y3iJbHr-y4t88yxt3u4lxt4_/view?usp=sharing" },
    { title: "Case 39 2009 | Dual Audio | 720p", link: "https://drive.google.com/file/d/1qmgccW6vi6VIPItFldVbe0hmZkoEkplT/view?usp=drive_link" },
    { title: "The Nun 2018 | Dual Audio | 720p", link: "https://drive.google.com/file/d/1nTvYFGxMVaBR__Bzr0hxL1ITM3wcpMGL/view?usp=sharing" },
    { title: "The Nun 2 2023 | Dual Audio | 1080p", link: "https://drive.google.com/file/d/1pMtVkn4AsW7TmbmvDR_aj0nQg0h40Zar/view?usp=sharing" },
    { title: "Howl 2015 | Dual Audio | 720p", link: "https://drive.google.com/file/d/1Dvk98ak22LvsYJbpFSBTeYm0hd6w87Uq/view?usp=sharing" },
    { title: "Ouija 2014 | Dual Audio | 1080p", link: "https://drive.google.com/file/d/1oBaUy2NLxSHyv_E7ciAQoRSxwO7Dbuzy/view?usp=sharing" },
    { title: "The Curse of La Llrona 2019 | Dual Audio | 720p", link: "https://drive.google.com/file/d/1bjK66CDyLoS9u3yPO_R9PAOklgHJwFdA/view?usp=sharing" },
    { title: "Tin & Tina 2023 | Dual Audio | 720p", link: "https://drive.google.com/file/d/1LCoISmPrYJjoXtA8n-numKdU3o8v1eCq/view?usp=sharing" },
    { title: "Smile 2022 | Dual Audio | 1080p", link: "https://drive.google.com/file/d/1y3esbJXk-oNVqSW2o90cyOUKQRlTShRn/view?usp=sharing" },
    { title: "Smile 2 2024 | Dual Audio | 720p", link: "https://drive.google.com/file/d/1g2LcyfOY1uYznIH_y7o5wxpU29jb-X8V/view?usp=sharing" },
    { title: "Stranger Things S1 | Dual Audio | 1080p", link: "https://drive.google.com/drive/folders/19Bl-BtvUrS7vjO_UHCvvtfTdBBntUwYb?usp=sharing" },
  ];

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const searchTerm = searchParams.get("search")?.toLowerCase() || "";

  // Filter movies based on search term
  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchTerm)
  );

  return (
    <div className="text-center mt-10 px-4 sm:px-8 md:px-16 lg:px-24 mb-3">
      <h1 className="text-3xl font-bold">Awesome Movies</h1>
      <p className="text-lg mt-4 mb-6">
        Here's a list of awesome movies to download!
      </p>
      {filteredMovies.length > 0 ? (
        <ul className="space-y-4">
          {filteredMovies.map((movie, index) => (
            <li key={index}>
              <a
                href={movie.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-700 text-lg sm:text-xl font-semibold"
              >
                {movie.title}
              </a>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-red-500 text-lg">
          No movies found for "{searchTerm}"
        </p>
      )}
    </div>
  );
};

export default Movies;

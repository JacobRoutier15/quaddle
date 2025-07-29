document.addEventListener("DOMContentLoaded", () => {
    const today = new Date(); // Or statically: new Date("2025-08-01")
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const dd = String(today.getDate()).padStart(2, '0');
    const yyyy = today.getFullYear();
    const filename = `${mm}-${dd}-${yyyy}.jpg`;
    const imagePath = `images/${filename}`;
    const defaultImage = 'images/default.jpg';
  
    const imageElement = document.getElementById('dailyImage');
    const captionElement = document.getElementById('caption');
  
    // Normalize for range
    const normalizedToday = new Date(2025, today.getMonth(), today.getDate());
    const startDate = new Date("2025-08-01");
    const endDate = new Date("2026-01-13");
  
    if (normalizedToday >= startDate && normalizedToday <= endDate) {
      fetch(imagePath)
        .then(response => {
          if (response.ok) {
            imageElement.src = imagePath;
          } else {
            imageElement.src = defaultImage;
          }
        })
        .catch(() => {
          imageElement.src = defaultImage;
        });
    } else {
      imageElement.src = defaultImage;
    }
  
    // Set caption with date
    captionElement.textContent = `Dua stuns on ${mm}/${dd}/${yyyy}`;

    // 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
    // Spotify logic synced with same date logic
    const spotifyTrackIDs = [
        "0gEyKnHvgkrkBM6fbeHdwK",
        "1KGi9sZVMeszgZOWivFpxs",
        "3AJwUDP919kvQ9QcozQPxg",
        "3vkQ5DAB1qQMYO4Mr9zJN6",
        "5YJtMNWKe55yr49cyJgxva",
        "4sebUbjqbcgDSwG6PbSGI0",
        "60wwxj6Dd9NJlirf84wr2c",
        "6CGMZijOAZvTXG21T8t6R0",
        "5q0EXnBYyeCdXD72FzJxH0",
        "0ccoGCaOFCxI6pHixrQpKj",
        "48UPSzbZjgc449aqz8bxox",
        "01iyCAUm8EvOFqVWYJ3dVX",
        "0DiWol3AO6WpXZgp0goxAV",
        "61HQWI1Woxup7CnGwVUsdI",
        "1ixbwbeBi5ufN4noUKmW5a",
        "6qspW4YKycviDFjHBOaqUY",
        "25FTMokYEbEWHEdss5JLZS",
        "2gam98EZKrF9XuOkU13ApN",
        "3U5JVgI2x4rDyHGObzJfNf",
        "1jJci4qxiYcOHhQR247rEU",
        "1gihuPhrLraKYrJMAEONyc",
        "44CZRkOxv7UItaAUmh8PgN",
        "6Nq5lE0CeOAAAqN4qhkbZU",
        "3yI5oGYRtqR6ycf7UwehF4",
        "7fzHQizxTqy8wTXwlrgPQQ",
        "4qDpLaFGf5ampf2DXD2TMA",
        "6Ec5LeRzkisa5KJtwLfOoW",
        "51Lf3l6wx008NdBxCQnD6B",
        "37F0uwRSrdzkBiuj0D5UHI",
        "1LPGwuFgIzbJoShfDdw7MY",
        "5Y2n6pW4Vqr4Mzkd9V4Uk8",
        "0VO8gYVDSwM1Qdd2GsMoYK",
        "1ljtQrsf55VCwjqXjro7Po",
        "6UFivO2zqqPFPoQYsEMuCc",
        "1GnTBbaFtxNkHEjUsWEdNu",
        "2Nq4SFbvYYZa8AF7lD7CWU",
        "72cGBEqu7RitIOoACXYjfR",
        "1ZvwkZZh8aW2romw9G76ps",
        "6l6XVeeoTe3ggya4fLY8l8",
        "2H2ytI7ompfNmRkI2sq8Uk",
        "4w2GLmK2wnioVnb5CPQeex",
        "4lKe0viSvv8ckoTPvHBih1",
        "0Mrd1zn7yPnaOqGGowzQfB",
        "1RETWs1IVR5bbDOPyHdRG8",
        "02oB4JMmIgkJWWiWza4K6U",
        "1ACA277B6f46DYCgZW8di3",
        "6dOtVTDdiauQNBQEDOtlAB",
        "5Eh1nj7IjV9lwpcKAkidyY",
        "2BVUOGciUUUqOPSLtHwLGp",
        "2NAZcL9tLUkdMMb5v3xFVG",
        "3aIhJDHxr1kgTSnutJxPTH",
        "1GD5ooLHgV9nolrem1DBiB",
        "0agQ9vIV7NP4dntGKLcCXO",
        "6n0OQD5aGspHuwFPJ2ePGC",
        "5HYwRSalrvZC7ZTT8BuDR7",
        "5vOZflu9doigyNV5ifO7pr",
        "3C2OYWQFRVEo4QoHZKTNBK",
        "4NkgQJFG0aDHXyylIGnmJ4",
        "6nJiqVmR1SyAu50GuDenIJ",
        "7zSIaxd1mgB53fm4PNX7qA",
        "4cqoZl61mIxLMak6gFCSIo",
        "6btkdvumrTmcFzy3oFpZqS",
        "3WtCu35qpzGCLIGa8pczdu",
        "53YYzXe4shE5FF13XBrhGz",
        "3cXX26hB3R4lHbZC2LFBao",
        "4JiuLIWKkLH2iluzOhXh5Y",
        "0Aj9mjOpjS2TbgSB6sdXNo",
        "2ISSQPb9LHHiV6ng2NXosL",
        "3qhlB30KknSejmIvZZLjOD",
        "32VIrOsJmwvqRm4rWFBCsi",
        "3rEwGRmPVVudVjqdgv0tRR",
        "4qAEFnCVCqZsIcaOKQwMUj",
        "3rmiNo2HTxE1tKes2w8Fb1",
        "62N2JSA0jHmSH7Va9t7hIf",
        "6ft4hAq6yde8jPZY2i5zLr",
        "2DqhE7xzpGNsKYbptqblJg",
        "40zJbxW89dq6bEwUVLrxJS",
        "1cxttvflVlYD4QA34tR5Yj",
        "2gQK13gXYZRq2MgvPJyHx8",
        "2MA6YoaFF7fnWqkuOAWjUg",
        "5Se32hEA9raeboZerywxka",
        "42iVUSuq8hco18nPEksiXz",
        "1kMuU3TNQvHbqvXCWBodmP",
        "3W2ZcrRsInZbjWylOi6KhZ",
        "3AzjcOeAmA57TIOr9zF1ZW",
        "0Aj9mjOpjS2TbgSB6sdXNo",
        "1WQ6Lq9ifLnpbhi60KtGFk",
        "7cMFjxhbXBpOlais7KMF3j",
        "4sK96UnGx3NjBaqvfTG2dm",
        "0kDHiwkrZutBHfjypFUzc2",
        "3L740L9Y186igjbzxz7Vfr",
        "0KFXE2mLTFdOKkTZEDgJPv",
        "22L7bfCiAkJo5xGSQgmiIO",
        "4x5YzxjrF9wvIIXJV7TveC",
        "7CotyU8EcChJlqOFnxPPmI",
        "0j3mqDTK4Z6lvrLzFCUUz6",
        "6TT7B4MigCJCc0tqKYEpZC",
        "5Z3GHaZ6ec9bsiI5BenrbY",
        "5bgwqaRSS3M8WHWruHgSL5",
        "2x7cfyDxSXc1xxqxZM3hbc",
        "7FGq80cy8juXBCD2nrqdWU",
        "6uWstgXnQXfnAtcowLb9mf",
        "5Dg2h1wsm7ZijCo0yLmbvR",
        "4FqMPJlvfY5Nfo3gRKcNxl",
        "7BKLCZ1jbUBVqRi2FVlTVw",
        "5OKyVJq7nRnWfBbsiCiyfb",
        "4ZHZxAMiuGAejtBmJGEZhx",
        "6tVttAE6HkOhVp3reTBFmb",
        "1aEsTgCsv8nOjEgyEoRCpS",
        "4CxFN5zON70B3VOPBYbd6P",
        "4SQLQfcR0vhyIN4uPBlc0d",
        "4rnyUV17cSZGsz18xJNdjL",
        "3PsHulD1zewglcTPcEPnlk",
        "1QxxBUAx42J8pIFYJJR880",
        "3x3K1RP3Zfi2qeMR8kyrNO",
        "4k0N1HHajVqshJQGkS9YWk",
        "0Zwn67tX4xwrgk4lVroMCS",
        "1nV6VafLPuRSsXgbDY3i6L",
        "4zWhqchiX7mc9qt0Tj933e",
        "1nIRahjeEII1lsDPEn0nJz",
        "3LU1LzDmm5siz3WExknlil",
        "0bTcsfvvELwAupgm0DxhjK",
        "4PdLup4OaCGktZG8cvbkBz",
        "0eXoaFeLY7SR6X9uAtF8L9",
        "4hU0uRpLSwIYW8o4vlTU7A",
        "3cXX26hB3R4lHbZC2LFBao",
        "5OLfObog5za3O71jQgZFsB",
        "3wKLgtriaPGVW9A3AoRE9l",
        "3y7V7vaSrgbjqU3qJlVwTf",
        "2bMEpI8cwnRB4lBnRj59DL",
        "4LArwqcGS1xMwiAMGmv28m",
        "5KPYMz7DUZc6ZdcxNgfL18",
        "0bHLNUoBzK83c61N9W4ohF",
        "0UeYCHOETPfai02uskjJ3x",
        "4NlxBNd38G9nXjCVrbBYre",
        "6vjWim6xU6tPjA42GxSp1U",
        "0TFwlBWVoHEpkFsrVbdFsK",
        "2ISSQPb9LHHiV6ng2NXosL",
        "2u9S9JJ6hTZS3Vf22HOZKg",
        "51ODNNDZm21HU7wI7cccRr",
        "5r5cp9IpziiIsR6b93vcnQ",
        "24LS4lQShWyixJ0ZrJXfJ5",
        "1eyzqe2QqGZUmfcPZtrIyt",
        "68mOSKT4uBkKddEAhlMO61",
        "46lFttIf5hnUZMGvjK0Wxo",
        "7FAFkQQZFeNwOFzTrSDFIh",
        "5kJ4BWZ9Y1qFIwwTbMIxYX",
        "4sNG6zQBmtq7M8aeeKJRMQ",
        "0GO8y8jQk1PkHzS31d699N",
        "4b93D55xv3YCH5mT4p6HPn",
        "0uI7yAKUf52Cn7y3sYyjiX",
        "3nEHrvNNtgLv9rneTAYVr4",
        "5ZUIPLoTLJZrPQh2kFZEUM",
        "2GiJYvgVaD2HtM8GqD9EgQ",
        "6YUTL4dYpB9xZO5qExPf05",
        "7rdUtXasA973gmrr2Xxh3E",
        "59wlTaYOL5tDUgXnbBQ3my",
        "4o0LyB69tylqDG6eTGhmig",
        "3zPco1u9i9bCjkG5pngR5t",
        "4BdGO1CaObRD4La9l5Zanz",
        "0PHWXLXOQXGlyUGq7woVFZ",
        "2AYEOC02WLhUiOoaig2SEH",
        "4iZxeyibg6w4EFCOoAQ6Eh",
        "3PwiD0JaTDiBMWDUW2hXNX",
        "1gk3FhAV07q9Jg77UxnVjX",
        "6K4t31amVTZDgR3sKmwUJJ",
        "5ZvHcR4OSwvEV5IhigbTOT"
    ];
const daysSinceStart = Math.floor((today - startDate) / (1000 * 60 * 60 * 24));
const trackIndex = daysSinceStart >= 0 && daysSinceStart < spotifyTrackIDs.length ? daysSinceStart : 0;

  const trackID = spotifyTrackIDs[trackIndex];

  const spotifyEmbed = document.getElementById('spotifyEmbed');
  spotifyEmbed.src = `https://open.spotify.com/embed/track/${trackID}`;
  spotifyEmbed.style.display = 'block';
});

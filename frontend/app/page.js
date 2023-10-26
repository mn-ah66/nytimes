'use client'
import {useEffect, useState} from "react";
import NewsCard from "@/components/NewsCard";

export default function Home() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}`)
        .then((response) => response.json())
        .then((data) => setNews(data))
        .catch((error) => console.error(error));
  }, []);
  return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <section className="text-gray-600 body-font">
          <div className="container mx-auto">
            <div className="flex flex-col">
              <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
                <h1 className="sm:w-2/5 text-gray-900 font-medium title-font text-2xl mb-2 sm:mb-0">
                  New York Times Latest Stories
                </h1>
                <p className="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0">The New York Times Latest Stories refers to the latest news and articles published by The New York Times, one of the world's leading newspapers. These stories cover a wide range of topics, including current events, politics, business, culture, technology, and more, providing readers with up-to-date and in-depth information on important issues and events from around the globe.</p>
              </div>
            </div>
            <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
              {news.map((story) => (
                  <NewsCard
                      key={story.url}
                      title={story.title}
                      abstract={story.abstract}
                      url={story.url}
                      image={story.multimedia[0].url}
                  />
              ))}
            </div>
          </div>
        </section>
      </main>
  )
}

import { ArrowDown, Bookmark, Plus } from "lucide-react";
import axios from "axios";
import { useEffect, useState } from "react";

const Gallery = () => {
  const [img, setImg] = useState([]);
  const [page, setPage] = useState([]);
  const [loading, setLoading] = useState(false);
  // api fetch

  useEffect(() => {
    const FetchImg = async () => {
      if (loading) return;
      setLoading(true);
      try {
        let reponse = await axios.get(
          `https://picsum.photos/v2/list?page=${page}&limit=30`,
        );
        console.log(reponse.data);
        setImg((Prev) => [...Prev, ...reponse.data]);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    FetchImg();
  }, [page]);

  // scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 300
      ) {
        setPage((prev) => {
          return prev + 1;
        });
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <section>
        <div className="columms-1 sm:columns-2 md:columns-3 gap-4 p-4">
          {img.map((data) => {
            return (
              <div
                key={data.id}
                className="relative mb-4 break-inside-avoid shadow group"
              >
                {/* image */}
                <img
                  src={data.download_url}
                  alt="image"
                  className="w-full object-cover"
                />

                {/* Overlay Div  */}
                <div className="absolute top-0 bg-black/50 inset-0 flex flex-col justify-between p-2 opacity-0 group-hover:opacity-100 transition-all duration-400">
                  {/* top icon */}
                  <div className="flex justify-end gap-2">
                    {/* BookMark icon */}
                    <div className="bg-white p-2 rounded-md ">
                      {" "}
                      <Bookmark />
                    </div>
                    {/* plus icon */}
                    <div className="bg-white p-2 rounded-md ">
                      <Plus />
                    </div>
                  </div>
                  {/* bottom icon */}
                  <div className="flex items-center justify-between">
                    <h1 className="text-white font-bold">{data.author}</h1>
                    <div className="bg-white p-2 rounded-md ">
                      <ArrowDown />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Gallery;

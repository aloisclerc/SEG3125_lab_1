import PaintingList from "./PaintingList";
import { useState } from "react";
import { useEffect } from "react";
import { PaintingArray } from "./PaintingArray";

const Gallery = ({ radioValue, name, author, liked }) => {
  const [paintings, setPaintings] = useState(PaintingArray);
  const [isAll, setIsAll] = useState(true);
  console.log(radioValue.radioValue);
  useEffect(() => {
    if (radioValue !== "all") {
      setIsAll(false);
    } else {
      setIsAll(true);
    }
  }, [radioValue, name, author]);
  return (
    <div className="gallery">
      {!isAll && !liked && (
        <PaintingList
          paintings={paintings.filter(
            (painting) =>
              painting.genre === radioValue &&
              painting.title.toLowerCase().includes(name) &&
              painting.author.toLowerCase().includes(author)
          )}
          title={radioValue + " Paintings"}
        />
      )}
      {isAll && !liked && (
        <PaintingList
          paintings={paintings.filter(
            (painting) =>
              painting.title.toLowerCase().includes(name) &&
              painting.author.toLowerCase().includes(author)
          )}
          title="All Paintings"
        />
      )}
      {!isAll && liked && (
        <PaintingList
          paintings={paintings.filter(
            (painting) =>
              painting.genre === radioValue &&
              painting.title.toLowerCase().includes(name) &&
              painting.author.toLowerCase().includes(author) && painting.liked
          )}
          title={"Liked " + radioValue + " Paintings"}
        />
      )}
      {isAll && liked && (
        <PaintingList
          paintings={paintings.filter(
            (painting) =>
              painting.title.toLowerCase().includes(name) &&
              painting.author.toLowerCase().includes(author) && painting.liked
          )}
          title="All Liked Paintings"
        />
      )}
    </div>
  );
};

export default Gallery;

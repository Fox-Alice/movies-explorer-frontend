import useLocalStorage from "react-use-localstorage";
import { useRef } from "react"; 

  export const Favourite = ({
    id, 
  }) => {
    const [storageItem, setStorageItem] = useLocalStorage(
      'DFX-favourites',
      JSON.stringify([]),
    )
    const storagedArray = useRef(JSON.parse(storageItem))
    const isFavourited = storagedArray.current.includes(id)
  
    const handleToggleFavourite = () => {
      if (!isFavourited) {
        storagedArray.current.push(id)
        setStorageItem(JSON.stringify(storagedArray.current))
        console.log(storagedArray);
      } else {
       const indexFavouritedId = storagedArray.current.indexOf(id)
        storagedArray.current.splice(indexFavouritedId, 1000000000000)
        setStorageItem(JSON.stringify(storagedArray.current))
      }
    }

        const cardSaveButtonClassName = (
        `movies-card__save-icon ${isFavourited ? "movies-card__save-icon_active" : " "}`
    );

    return (
        <button className={cardSaveButtonClassName}
        onClick={handleToggleFavourite}
      >
      </button>
    )
  }
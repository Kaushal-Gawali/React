import { useEffect, useState } from "react";
import { MENU_API } from "../utils/constants";


// custom Hook
const useRastaurantMenu = (resId) => {

    // It is good way to write a code using custom  hooks
  // fetch data

  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(MENU_API + resId);
    const json = await data.json();
    setResInfo(json.data);
  }

  return resInfo;
}

export default useRastaurantMenu;

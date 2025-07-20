import Restaurant_Card from "./Restaurant_Card";
import { useEffect, useState } from "react";
import resList from "../utils/mockData";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { data } from "./data";

const Body = () => {

  // Local state variable - super powerful variable
  const [listOfRestaurants, setlistOfRestaurants] = useState([]);
  const [filterdRestaurant, setfilterdRestaurant] = useState([]);

  const [searchText, setSearchText] = useState("");

  console.log("Body rendered", listOfRestaurants);

  useEffect(() => {
    fetchData();           // inside usEffect we called callback() function                 
  }, []);               

  const fetchData = async () => {           
    // const data = await fetch(
    //   "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.5743545&lng=88.3628734&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    // );

    const json =data

    console.log(json);

    // optional chaining
    setlistOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setfilterdRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  }


  //  check the online status
  const onlineStatus = useOnlineStatus();

  if(onlineStatus === false)
    return (
      <h1>Looks like you are offline!!, please check your internet connection....</h1>
    );


  // conditional rendering
  if(listOfRestaurants.length === 0) {
    return <Shimmer />;
  }


  return (
    <div className="body">
      <div className="filter flex">
        <div className="search m-4 p-4">
          <input type="text" className="border border-solid border-black" 
          value={searchText}
          onChange={(e)=>{
            setSearchText(e.target.value);
          }}
          />

          <button className=" px-3 py-1 bg-emerald-100 m-4 rounded-lg" 
          onClick={()=>{
            // filter the restaurant cards and update the UI
            // searchText
            console.log(searchText);

            const filteredRestaurant = listOfRestaurants.filter(
              (res) => res.info.name.toLowerCase().includes(searchText.toLowerCase())
            );

            setfilterdRestaurant(filteredRestaurant);
          }}>
            
          search</button>
        </div>

        <div className="search m-4 p-4 flex items-center">
          <button className="bg-gray-200  rounded-lg px-2 py-1" onClick={()=>{
          const filteredList = listOfRestaurants.filter((res)=>{
            // Filter Logic here
           return res.info.avgRating > 4
          });
          setlistOfRestaurants(filteredList);
          
        }}>
          Top rated Restaurant
        </button>
        </div>

      </div>
            <div className="flex flex-wrap">
        
        {
          filterdRestaurant.map((restaurant) => (
            <Link
            key={restaurant.info.id}
            to={"/restaurants/"+restaurant.info.id}
            >
            <Restaurant_Card resData={restaurant}/> 
            </Link>         // passing props using map() function
          ))
        }

      </div>
    </div>
  );
};

export default Body;

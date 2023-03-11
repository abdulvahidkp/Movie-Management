import React, { useState } from "react";
import { Warning } from "../../assets/WarningLogo";
import { useDispatch } from "react-redux";
import { setMovies } from "../../redux/features/movieSlice";

function MovieForm() {
  const [formData, setFormData] = useState({
    name: "",
    rating: 0,
    duration: "",
  });
  const [err, setErr] = useState(false);

  const dispatch = useDispatch()

  const handleInputChange = (e) => {
    setErr(false)
    const { name, value } = e.target;
    if (name === "rating" && value > 100) {
      setFormData({
        ...formData,
        [name]: 100,
      });
    } else if (name === 'rating' && value < 0){
      return
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  function validateFormatTime(inputValue) {
    const regex = /^([1-9]\d*\.?\d*|\d*\.\d+)(m|h)$/; // regex pattern for valid time values
    const match = regex.exec(inputValue); // extract numeric value and unit from input value
    if (!match) return null;
    const value = parseFloat(match[1]); // parse numeric value as a float
    const unit = match[2]; // get the unit (m or h)
    if (unit === "m") {
      return (value / 60).toFixed(1); // convert minutes to hours and format to 1 decimal place
    }
    return value; // return value in hours if it's already in hours
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.duration || !formData.rating) return;
    const time = validateFormatTime(formData.duration);
    if (!time) return setErr(true)
    
    dispatch(setMovies({...formData,duration:time}))
    setFormData({
      name: "",
      rating: 0,
      duration: "",
    })
    
  };

  return (
    <form className="p-8 shadow-lg border rounded w-full md:w-1/2 flex-col h-fit " onSubmit={handleFormSubmit}>
      <div className="mt-3">
        <label htmlFor="name" className=" block text-lg">
          Movie Name
        </label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          className="bg-gray-100/50 block  focus:outline-none  focus:border-b-2 focus:border-black p-3 w-full shadow-inner capitalize"
          placeholder="Enter Movie Name"
          required
        />
      </div>
      <div className="my-6">
        <label htmlFor="rating" className=" block text-lg">
          Ratings
        </label>
        <input
          type="number"
          name="rating"
          value={formData.rating}
          onChange={handleInputChange}
          className="bg-gray-100/50 block  focus:outline-none  focus:border-b-2 focus:border-black p-3 w-full shadow-inner"
          placeholder="Enter Rating on a scale of 1 to 100"
          min={1}
          max={100}
          required
        />
      </div>
      <div className="my-6">
        <label htmlFor="duration" className=" block text-lg">
          Duration
        </label>
        <input
          type="text"
          name="duration"
          value={formData.duration}
          onChange={handleInputChange}
          className="bg-gray-100/50 block  focus:outline-none  focus:border-b-2 focus:border-black p-3 w-full shadow-inner"
          placeholder="Enter Duration in hours or minutes"
          required
        />
      </div>
      { 
        err &&
        <div className="flex items-center gap-2 bg-gray-100/50 p-3 rounded text-red-500 border-red-500 border my-6">
          <Warning />
          <p>Please specify the time in hours or minutes (e.g. 2.5h or 150m)</p>
        </div>
      }
      <button className="bg-green-600 hover:bg-green-700 duration-300 shadow-md mt-2 font-bold p-3 px-5 rounded text-white float-right" type="submit">
        Add Movie
      </button>
    </form>
  );
}

export default MovieForm;

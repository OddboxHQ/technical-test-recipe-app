import "./RecipeFilters.css";
import axios from 'axios'
import { useState } from 'react';

interface RecipeFiltersProps {
  returnDataCallback: any
}

function RecipeFilters(props: RecipeFiltersProps) {

  const [startDate, setStartDate] = useState<string>("")
  const [endDate, setEndDate] = useState<string>("")


  const fetch_data = () => {
    console.log('clicked')
    
    // Fetch recipe data from backend
    axios.get("http://localhost:8000/recipes?start_date=" + startDate + "&end_date=" + endDate).then((response) => {
      console.log('response is', response.data);

      // Pass recipe data from API back to the parent page
      props.returnDataCallback(response.data)
    }).catch((error) => console.log(error))
  }

  return (
    <section className="Recipe-filters">
        From: <input type="text" placeholder="YYYY-MM-DD" style={{'marginRight': "20px"}} onChange={(event) => setStartDate(event.target.value)}></input>
        To date: <input type="text" placeholder="YYYY-MM-DD" style={{'marginRight': "20px"}} onChange={(event) => setEndDate(event.target.value)}></input>
        <input type="button" value="Search" onClick={() => fetch_data()} />
    </section>
  );
}

export default RecipeFilters;

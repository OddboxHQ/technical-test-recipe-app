import "./RecipeCard.css";

interface RecipeCardProps {
  title: string;
  description: string;
  image: string;
  created_at: string; // Format will be DD-MM-YYYY
  difficulty: "Easy" | "Medium" | "Difficult";
}

function RecipeCard(props: RecipeCardProps) {
  return (
    <section className="Recipe-card">
      <h3>{props.title}</h3>
      <img width="200" height="200" src={props.image} alt="img" />
      <br />
      <span>Created at: {props.created_at}</span>
      <p>{props.description}</p>

      {props.difficulty == "Easy" && <div id="Easy">Easy</div>}
      {props.difficulty == "Medium" && <div id="Medium">Medium</div>}
      {props.difficulty == "Difficult" && <div id="Difficult">Difficult</div>}
    </section>
  );
}

export default RecipeCard;

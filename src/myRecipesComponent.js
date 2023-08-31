
function MyRecipesComponent({label, image, calories, ingredients, url, totalWeight}){
  
    return(
        <div className="total" >
            
            <div className="container ">
                <h2>{label}</h2>
            </div>
            <div className="container ">
                <p>{calories.toFixed()} calories. </p>
                <p>{totalWeight.toFixed()} gramm</p>
            </div>
            <div className="container ">
                <img src={image}/>
            </div>
            <ul className="container list">
                {ingredients.map((ingredient, index) => (
                    <li key = {index}>
                    <img className="chek" src="https://img.icons8.com/external-kiranshastry-gradient-kiranshastry/64/000000/external-check-multimedia-kiranshastry-gradient-kiranshastry.png " alt="icon"/>
                    {ingredient}
                    </li>
                ))}
            </ul>
           
            <div className="container ">
                <a  className="url" href={url}>Instructions</a>
            </div>
          

        </div>
    )
}
export default MyRecipesComponent;
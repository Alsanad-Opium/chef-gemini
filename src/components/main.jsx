
export default function Main({ addingredient }) {


    function list(formData){
        const item = formData.get('ingredient')
            addingredient(prevIngredients => [...prevIngredients, item])
    }
    // function handleSubmit(event) {
    //     event.preventDefault();
    //     const form = event.target;
    //     const ingredient = form.ingredient.value.trim();

    //     addingredient(prevIngredients => [...prevIngredients, ingredient])
    //     event.target.value = ''

    // }
    return (
        <main className="form-container">
            <form action={list} className="ingredients-form">
                <input className="ingredients-input" type="text" placeholder="Type your ingredients" name="ingredient" />
                <button className="add-ingredients-button" >Add Ingredients</button>
            </form>
        </main>
    )
}
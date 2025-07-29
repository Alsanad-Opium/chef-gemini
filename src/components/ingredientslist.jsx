export default function IngredientsList({ recipe, state, ingredient_list }) {
    return (
        <>

            <section>
                <div className="list">

                    <ul>
                        {ingredient_list}
                    </ul>
                </div>
                {ingredient_list.length >= 4 &&
                    <div className="get-recipe">
                        <div>
                            <h3>Get the recipe for the ingredients mentioned</h3>
                            <p>Click on the button to genraet the recipe for it.</p>
                        </div>
                        <button onClick={() => { state(!recipe) }}>Get</button>
                    </div>
                }
            </section>

        </>
    )
}
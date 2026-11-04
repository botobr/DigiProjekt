import { useState } from "react";

const recipes = [
  { title: "Mézeskalács", time: "60 perc", text: "Puha, fűszeres, díszíthető.", ingredients: ["350 g liszt", "150 g méz", "100 g vaj", "1 tojás", "Mézeskalács fűszer"], instructions: "Gyúrd össze a hozzávalókat, pihentesd a tésztát 30 percig, majd szaggasd ki és süsd 180 °C-on 8-10 percig." },
  { title: "Forralt bor", time: "20 perc", text: "Fahéjjal, szegfűszeggel, narancshéjjal.", ingredients: ["1 üveg vörösbor", "2 fahéjrúd", "5 szem szegfűszeg", "1 narancs", "Méz ízlés szerint"], instructions: "Melegítsd fel a bort a fűszerekkel és a narancshéjjal, de ne forrald fel. Édesítsd mézzel tálalás előtt." },
  { title: "Bejgli", time: "2 óra", text: "Diós és mákos, a klasszikus.", ingredients: ["500 g liszt", "250 g vaj", "2 tojássárgája", "300 g dió vagy mák", "150 g cukor"], instructions: "Készítsd el a tésztát és a tölteléket külön, töltsd meg és tekerd fel. Kend meg tojással, majd süsd aranybarnára." },
  { title: "Forró csokoládé", time: "10 perc", text: "Sűrű, krémes, mályvacukorral.", ingredients: ["500 ml tej", "100 g étcsokoládé", "1 evőkanál kakaópor", "1 teáskanál keményítő", "Mályvacukor"], instructions: "Melegítsd fel a tejet, olvaszd bele a csokoládét és a kakaóport, majd a keményítővel sűrítsd be. Tálald mályvacukorral." },
];

export default function Recipes() {
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  if (selectedRecipe) {
    return (
      <section className="page recipe-detail">
        <button className="back-button" onClick={() => setSelectedRecipe(null)}>
          ← Vissza a receptekhez
        </button>
        <span className="tag">{selectedRecipe.time}</span>
        <h2>{selectedRecipe.title}</h2>
        <p className="lead">{selectedRecipe.text}</p>
        <div className="recipe-content">
          <div>
            <h3>Hozzávalók</h3>
            <ul>
              {selectedRecipe.ingredients.map((ingredient) => <li key={ingredient}>{ingredient}</li>)}
            </ul>
          </div>
          <div>
            <h3>Elkészítés</h3>
            <p>{selectedRecipe.instructions}</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="page">
      <h2>Receptek</h2>
      <p className="lead">Ünnepi finomságok, amiket érdemes kipróbálni.</p>
      <div className="grid">
        {recipes.map((recipe) => (
          <button className="card recipe-card" key={recipe.title} onClick={() => setSelectedRecipe(recipe)}>
            <span className="tag">{recipe.time}</span>
            <h3>{recipe.title}</h3>
            <p>{recipe.text}</p>
          </button>
        ))}
      </div>
    </section>
  );
}

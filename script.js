function generatePlan() {
  let topic = document.getElementById("topic").value.toLowerCase();
  let output = document.getElementById("output");

  let plan = "";

  if (topic.includes("fraction")) {
    plan = `
      <h2>📚 Plan d’étude : Fractions</h2>
      <p>🔥 À comprendre : simplifier, additionner et soustraire des fractions</p>
      <p>🧪 Exercices : 5 questions sur l’addition de fractions</p>
      <p>⏱️ Durée : 25 minutes (5 min apprentissage + 15 min pratique + 5 min révision)</p>
      <p>⚠️ Erreur fréquente : oublier le dénominateur commun</p>
    `;
  } 
  else {
    plan = `
      <h2>📚 Plan d’étude</h2>
      <p>Écris un sujet plus précis (ex : fractions, algèbre, etc.)</p>
    `;
  }

  output.innerHTML = plan;
}

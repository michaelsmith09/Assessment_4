const fortunes = ["Chance favors those in motion.", "Don't just think, act!", "Go take a rest; you deserve it.", "If you continually give, you will continually have.", "It is better to deal with problems before they arise."];

module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },
    getFortune: (req, res) => {

        let randomIndex = Math.floor(Math.random() * fortunes.length);
        let randomFortune = fortunes[randomIndex];

        res.status(200).send(randomFortune);
    },
    addFortune: (req, res) => {
        console.log("worked!")
        const fortune = req.body
        console.log('fortune did add' +fortune)

        fortunes.push(fortune)
        res.status(200).send();
    },
};
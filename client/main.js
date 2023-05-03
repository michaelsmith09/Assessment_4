const complimentBtn = document.getElementById("complimentButton")

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};
//stuff I added
const fortuneBtn = document.getElementById("fortuneButton")
const buttonAdd = document.getElementById("addFortuneBtn")

const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/")
        .then(res => {
            const data = res.data;
            alert(data);
        });
};
const addFortune = () => {
    axios.post("http://localhost:4000/api/fortune/")
        .then(res => {
            alert("Fortune added!");
        });
};


buttonAdd.addEventListener('click', addFortune)
fortuneBtn.addEventListener('click', getFortune)
// stuff I added
complimentBtn.addEventListener('click', getCompliment)
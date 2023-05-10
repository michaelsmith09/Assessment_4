const complimentBtn = document.getElementById("complimentButton")

const baseURL = `http://localhost:4000/api/fortune`

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};
//stuff I added
const fortuneBtn = document.getElementById("fortuneButton")
const foodBtn = document.getElementById("foodButton")
const buttonAdd = document.getElementById("addFortuneBtn")
const delBtn = document.getElementById("delFortuneBtn")

const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/")
        .then(res => {
            const data = res.data;
            alert(data);
        });
};

const getFoodIdea = () => {
    axios.get("http://localhost:4000/api/food/")
        .then(res => {
            const data = res.data;
            alert(data);
        });
};
const addFortune = (body) => {
    // let body = fortune
    axios.post("http://localhost:4000/api/fortune/", body)
        .then(res => {
            alert("Fortune added!");
        });
};
const deleteFortune = (id) => {
    axios.delete(`${baseURL}/${id}`)
    .then(res => {
        alert("Fortune removed.")
    });
};


buttonAdd.addEventListener('submit', addFortune)
fortuneBtn.addEventListener('click', getFortune)
foodBtn.addEventListener('click', getFoodIdea)
delBtn.addEventListener('click', deleteFortune)
// stuff I added
complimentBtn.addEventListener('click', getCompliment)
let films = [
    {
        id: 1,
        naziv: "Inception",
        ocena: 9,
        reziser: "Christopher Nolan",
        trajanje: 148,
        is3D: false,
        slika: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSd6HAqrKF1_jhgn5RWbs86Z0F4WPxByZ1gDt6zXk1YXz8dXZpIC_CUGNg4A59n8a1YafbAfx0af_wFyhfmop-gmPXL64m9O7DHSVgL3oee&s=10"
    },
    {
        id: 2,
        naziv: "Avatar",
        ocena: 8,
        reziser: "James Cameron",
        trajanje: 162,
        is3D: true,
        slika: "https://via.placeholder.com/150"
    }

]

// CRUD functions
const getAll = () => {
    return [...films];
}

const add = (film) =>{
    film.id = Date.now()
    films.push(film)
}
const remove = (id) =>{
    films = films.filter(f => f.id !== id)
}
const update = (updatedFilm) =>{
    films = films.map(f=> f.id === updatedFilm.id ? updatedFilm : f)
}

export default {getAll, add, remove, update};

import axios from "axios"

export function getBooks({ commit }) {
    let url = '/api/books';
    axios.get(url).then((response) => {
        commit("setBooks", response.data.data);
    }).catch(error => {
        console.log(error);
    });
}

export function BookDetails({ commit }, id) {
    let url = '/api/books';
    axios.get(url, { params: { id: id } }).then((response) => {
        commit("setBook", response.data);
    }).catch(function (error) {
        console.log(error);
    });
}

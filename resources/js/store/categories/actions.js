
import axios from "axios"

export function getCategories({ commit }) {
    let url = '/api/categories';
    axios.get(url).then((response) => {
        commit("setCategories", response.data.data);
    }).catch(error => {
        console.log(error);
    });
}

export function CategoryDetails({ commit }, id) {
    let url = '/api/categories';
    axios.get(url, { params: { id: id } }).then((response) => {
        commit("setCategory", response.data);
    }).catch(function (error) {
        console.log(error);
    });
}

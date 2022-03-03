<template>
    <div>
        <Navbar/>
        <Header/>
        <AboutSection/>
        <!----------Start Main Content--------- -->
        <main class="section_p">
            <div class="container">
                <h2
                    class="
						heading-primary
						display-6
						position-relative
						mb-5
						text-capitalize
					"
                >
                    Categories
                </h2>
                <div class="row">
                    <!--......... Start categories........ -->
                    <CategoriesSection :categories="categories"/>
                    <!--......... End categories........ -->
                    <BooksSection :books="books" />

                    <!--.........End books........ -->
                </div>
            </div>
        </main>
        <!-----------End Main Content--------- -->
        <Footer :categories="categories"/>

    </div>
</template>
<script>
import Header from "../components/Header.vue"
import Navbar from "../components/Navbar.vue"
import AboutSection from "../components/AboutSection.vue"
import Footer from "../components/Footer.vue";
import BooksSection from "../components/Books";
import CategoriesSection from "../components/Categories";
import {mapActions, mapGetters} from "vuex";
import {getCategories} from "../store/categories/actions";

export default {
    components: {
        CategoriesSection,
        BooksSection,
        Footer,
        Header,
        Navbar,
        AboutSection
    },
    // computed: {
    //     ...mapGetters({
    //         categories: "categories",
    //         books: "books",
    //     })
    //
    // },
    // methods: {
    //     ...mapActions({
    //         categories: "getCategories",
    //         books: "getBooks",
    //     }),
    //     display(){
    //         console.log(books);
    //     }
    // },
    // mounted() {
    //     this.getCategories();
    //     this.getBooks();
    //
    // }



    data:function (){
        return {
            categories: [],
            books:[]
        }
    },
    mounted() {
        this.loadBooks();
        this.loadCategories();
    },

    methods:{
        loadCategories:function (){
            //load API
            //Assign to var
            //catch errors
            axios.get('/api/categories')
                .then((res)=>{
                    this.categories=res.data.data;
                    // console.log(this.categories);
                })
                .catch(function (error){
                    console.log(error);
                });



        },
        loadBooks:function (){
            axios.get('/api/books')
                .then((res)=>{
                    this.books=res.data.data;
                    // console.log(this.books);
                    this.loading=false;
                })
                .catch(function (error){
                    console.log(error);
                });
        }

    }

}
</script>

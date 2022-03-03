
<template>
    <div>
        <Navbar/>
        <Header/>
        <!----------Start Main Content--------- -->
        <main class="section_p bg-white">
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
                    View Certain Book
                </h2>
                <div class="row ">
                    <!--......... Start categories........ -->
                    <CategoriesSection :categories="categories" />
                    <!--......... End categories........ -->
                    <BookSection :book="book" />

                    <!--.........End books........ -->
                </div>
            </div>
        </main>

        <Footer :categories="categories"/>
    </div>
</template>
<script>
import Header from "../components/Header.vue"
import Navbar from "../components/Navbar.vue"
import { mapGetters, mapActions } from "vuex";
import AboutSection from "../components/AboutSection";
import CategoriesSection from "../components/Categories";
import BookSection from "../components/Book";
import Footer from "../components/Footer";
export default {
    components: {
        Navbar,
        Header,
        AboutSection,
        BookSection,
        CategoriesSection,
        Footer
    },
    // computed: {
    //     ...mapGetters({
    //         categories: "categories",
    //         book: "book",
    //     })
    //
    // },
    // methods: {
    //     ...mapActions({
    //         categories: "getCategories",
    //         book: "BookDetails",
    //     }),
    //
    // },
    // mounted() {
    //     this.getCategories();
    //     this.BookDetails(this.$route.params.bookId);
    //
    // }


    data:function (){
        return {
            bookId: this.$route.params.bookId,
            book:[],
            loBook:[] ||{},
            lBook:[] ||{},
            categories:[]

        }
    },
    mounted() {
        this.loadBook();
        this.loadCategories();

    },
    watch: {
        // call again the method if the route changes
        '$route': 'loadBook'
    },

    methods:{

        loadBook:function (){
            axios.get('/api/books/'+this.bookId)
                .then((res)=>{
                    this.book=res.data.data;
                    // this.saveStorage(this.book);
                    // this.loBook=this.openStorage()|| this.lBook;

                })
                .catch(function (error){
                    console.log(error);
                });
        },
        loadCategories:function (){
            axios.get('/api/categories/')
                .then((res)=>{
                    this.categories=res.data.data;
                    console.log(this.book);
                })
                .catch(function (error){
                    console.log(error);
                });
        },
        // openStorage () {
        //     this.lBook=JSON.parse(localStorage.getItem('book')) ;
        //     console.log(this.lBook.bookfile +"");
        //     return this.lBook;
        //
        // },
        // saveStorage (book) {
        //     localStorage.setItem('book', JSON.stringify(book));
        //
        // },


    }

}
</script>

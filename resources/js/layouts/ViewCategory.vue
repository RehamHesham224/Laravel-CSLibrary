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
                    View Certain Category
                </h2>
                <div class="row">
                    <!--......... Start categories........ -->
                    <CategoriesSection :categories="categories"/>
                    <!--......... End categories........ -->
                    <CategorySection :category="category"  />

                    <!--.........End books........ -->
                </div>
            </div>
        </main>

        <Footer :categories="categories"/>
    </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
import CategorySection from "../components/Category";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import CategoriesSection from "../components/Categories";
export default {
    components: {CategoriesSection, Footer, Header, CategorySection, Navbar},
    // computed: {
    //     ...mapGetters({
    //         categories: "categories",
    //         category: "category",
    //     })
    //
    // },
    // methods: {
    //     ...mapActions({
    //         categories: "getCategories",
    //         category: "CategoryDetails",
    //     }),
    // },
    // mounted() {
    //     this.getCategories();
    //     this.CategoryDetails(this.$route.params.categoryId);
    //
    // }



    data:function (){
        return {
            categoryId: this.$route.params.categoryId,
            category:{},
            categories:[]
        }
    },
    mounted() {
        this.loadCategory();
        this.loadCategories();

        // this.timer = setInterval(this.loadCategory, 300000);

    },
    methods:{

        loadCategory:function (){
            axios.get('/api/categories/'+this.categoryId)
                .then((res)=>{
                    this.category=res.data;
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


    }

}
</script>

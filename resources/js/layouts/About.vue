<template>
    <div>
        <Navbar/>
        <Header/>
        <AboutSection/>
        <Footer :categories="categories"/>
    </div>
</template>
<script>
import Header from "../components/Header.vue"
import Navbar from "../components/Navbar.vue"
import AboutSection from "../components/AboutSection.vue"
import Footer from "../components/Footer";

export default {
    components: {
        Header,
        Navbar,
        AboutSection,
        Footer
    },
    data:function (){
        return {
            categories: [],
        }
    },
    mounted() {
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


    }


}
</script>


<template>

        <div class="col-lg-4 col-md-5">
            <section
                id="categories"
                class="categories"
            >
                                            <div class="list-group" v-for="category in categories"  :key="category.id">

                                                <router-link  class="list-group-item ist-group-item-action" :to="{name:'view-category', params:{categoryId:category.id}}">{{category.name}}</router-link>

                                            </div>
            </section>
        </div>
</template>
<script>


export default {
    name: "CategoriesSection",
    props: ["categories"]

}
</script>

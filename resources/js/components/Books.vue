<template>
    <!--......... Start books........ -->
    <div
        class="col-lg-8 col-md-7 "
        id="books"
    >
        <div  v-if="books" v-for="book in books" class="mt-5 mt-md-0">
            <!-- .................book ......... -->
            <div class="book">
                <div
                    class="card px-3"
                    style="height: 300px;"
                >
                    <div class="container">
                        <div class="row">
                            <div class="col-5">
                                <img
                                    :src="'/thumbnails/' +book.image"
                                    class="
                                                                            mt-5
                        													rounded
                                                                            text-center


                        												" style="height: 200px;"
                                />
                            </div>
                            <div class="col-7">
                                <div class="card-body">
                                    <h5
                                        class="card-title py-5"
                                    >
                                        <router-link  class="text-primary text-decoration-none " :to="{name:'view-book', params:{bookId:book.id}}"><p>{{book.name}}</p></router-link>
                                    </h5>

                                    <router-link :to="{name:'view-book', params:{bookId:book.id}}"
                                        class="
                        														btn
                        														btn-outline-primary
                        														ml-3
                        													"
                                        href="#"
                                        role="button"
                                    >More Info</router-link
                                    >
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- .................book ........... -->
        </div>
    </div>
</template>
<script>

export default {
    name:"BooksSection",
    props:["books"]
}
</script>

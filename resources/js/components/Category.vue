<template>

        <!--......... Start books........ -->
        <div
            class="col-lg-8 col-md-7 mt-5 mt-md-0"
            id="books"
            v-if="category"
        >
            <!-- .................book ......... -->
            <!-- Category name -->
            <h2
                class="
								display-6
								position-relative
								mb-5
								text-capitalize
							"
            >
                {{category[0].name}}
            </h2>
            <div class="book"  v-for="book in category[1]">
                <div
                    class="card"
                    style="
									height: 400px;
									max-width: 540px;
								"
                >
                    <div class="container">
                        <div class="row">
                            <div class="col-4">
                                <img
                                    :src="'/thumbnails/' +book.image"
                                    class="
													img-fluid
													rounded
													mt-5
												"
                                />
                            </div>
                            <div class="col-8">
                                <div class="card-body">
                                    <h5
                                        class="card-title py-5"
                                    >
                                        {{book.name}}
                                    </h5>
                                    <p
                                        class="
														card-text
														text-secondary
													"
                                    >
                                        <small>
                                            {{book.description}}
                                        </small>
                                    </p>

                                    <a
                                        class="
														btn btn-primary
														ml-3
													"
                                        v-bind:href="'/thumbnails/'+book.bookfile"
                                        role="button"
                                    >Download</a
                                    >
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- .................book ........... -->
        </div>

        <!--.........End books........ -->
</template>
<script>
import { mapGetters, mapActions } from "vuex";
export default {
    name:"CategoriesSection",
    props: ["category"],

}
</script>

<template>
    <!-- ---------Start Footer--------- -->
    <footer class="footer pt-5">
        <div class="container">
            <img
                src="/assests/images/logos/logo.svg"
                alt="CIS Library Logo"
                class="footer__logo"
                style="width: 150px"
            />
            <div class="row">
                <div class="col-lg-6 mb-2">
                    <p class="text-white w-75">
                        CS.LIBRARY contains links to free
                        online technical books , that either
                        downloadable or can be viewed
                        online. Our collections include core
                        Computer Science, Science and many
                        more
                    </p>
                </div>
                <div class="col-lg-3 mb-2">
                    <h5>Main Pages</h5>
                    <ul class="footer-nav list-unstyled">
                        <li>
                            <router-link
                                :to="{name:'home'}"
                                class="text-decoration-none pointer-event"
                            >Home</router-link
                            >
                        </li>
                        <li>
                            <router-link
                                :to="{name:'about'}"
                                class="text-decoration-none pointer-event"
                            >About</router-link
                            >
                        </li>
                        <li>
                            <router-link
                                :to="{name:'categories'}"
                                class="text-decoration-none pointer-event "
                            >Categories</router-link
                            >
                        </li>

                    </ul>
                </div>
                <div class="col-lg-3 mb-2">
                    <h5>Main Categories</h5>

                    <ul class="footer-nav list-unstyled "  >

                        <li v-for="category in categories" :key="category.id">
                            <router-link
                                :to="{name:'view-category', params:{categoryId:category.id}}"
                                v-if="category.id < 5"
                                class="text-decoration-none  pointer-event"
                            >{{category.name}}</router-link
                            >
                        </li>

                    </ul>
                </div>
            </div>
        </div>
        <!-- bottom footer -->
        <div class="bottom-footer container">
            <!-- row -->
            <div class="row">
                <!-- Section: Social media -->
                <div class="col-md-6">
                    <section
                        class="
								mb-2
								justify-content-center
								d-flex
								justify-content-md-start
							"
                    >
                        <!--Twitter -->
                        <a
                            class="btn btn-floating mr-1"
                            href="http://www.twitter.com"
                            role="button"
                        ><img
                            src="/assests/images/logos/twitter.png"
                            alt=""
                        /></a>

                        <!-- Facebook -->
                        <a
                            class="btn btn-floating mr-1"
                            href="http://www.facebook.com"
                            role="button"
                        ><img
                            src="/assests/images/logos/facebook.png"
                            alt=""
                        /></a>

                        <!-- Git hub -->
                        <a
                            class="btn btn-floating mr-1"
                            href="http://www.github.com"
                            role="button"
                        ><img
                            src="/assests/images/logos/github.png"
                            alt=""
                        /></a>
                    </section>
                    <!-- Section: Social media -->
                </div>
                <div
                    class="
							col-md-6
							text-white-50
							d-flex
							justify-content-md-end
							justify-content-center
						"
                >
                    copyright by CS.LIBRARY &copy; 2022
                </div>
            </div>
        </div>
    </footer>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
export default {
   name:"Footer",
    props:["categories"]
}
</script>

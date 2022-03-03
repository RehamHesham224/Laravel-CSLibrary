<template>
    <!-----------Start Navbar--------- -->
    <nav
        class="
				main-nav
				navbar navbar-expand-lg
				w-100
				py-3
				text-center
			"
        role="navigation"
        aria-label="Main"
    >
        <div
            class="
					container-fluid
					mx-1 mx-sm-3 mx-lg-5
				"
        >
            <!-- Header Logo -->
            <router-link
                :to="{name:'home'}"

                class="main-nav__brand navbar-brand"
            >
                <img
                    src="/assests/images/logos/logo.svg"
                    alt="logo"
                    class="main-nav__brand-img"
                    style="width: 100px"
                />
                <p class="d-inline-block">CS.LIBRARY</p>
            </router-link>

            <div
                class="
						p-lg-0
						d-none d-lg-flex
						justify-content-space-between
					"
            >
                <!-- Navbar menu -->
                <ul
                    class="
							main-nav__menu
							navbar-nav
							m-auto
							mb-2 mb-lg-0
							fs-5
						"
                >
                    <li
                        class="main-nav__menu-item nav-item"
                    >
                        <router-link
                            :to="{name:'home'}"
                            class="
									main-nav__menu-link
									main-nav__menu-link--active
									nav-link
								"
                            aria-current="page"
                        >Home</router-link>
                    </li>
                    <li
                        class="main-nav__menu-item nav-item"
                    >
                        <router-link
                            :to="{name:'about'}"
                            class="
									main-nav__menu-link
									nav-link
								"
                        >About Us</router-link>
                    </li>
                    <li
                        class="main-nav__menu-item nav-item"
                    >
                        <router-link
                            :to="{name:'view-categories'}"
                            class="s
									main-nav__menu-link
									nav-link
								"
                        >Categories</router-link>
                    </li>
                </ul>
            </div>
            <!-- SignUp button -->
            <button
                class="
						btn btn-block btn-md btn-primary
						mt-3
						fs-5
						d-none d-lg-flex
					"
            >
                Sign UP
            </button>
            <button
                class="
						btn btn-outline-warning btn-block
						bg-gradient
						navbar-toggler
						border-3
						px-2
					"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasRight"
                aria-controls="offcanvas"
            >
                <img
                    style="width: 30px"
                    src="/assests/images/icons/menu.png"
                    alt="menu icon"
                />
            </button>

            <div
                class="
						offcanvas
						offcanvas-start-lg
						offcanvas-start
						bg-dark
					"
                tabindex="-1"
                id="offcanvasRight"
                aria-labelledby="offcanvasRightLabel"
            >
                <div
                    class="
							offcanvas-header
							justify-content-center
							d-flex d-lg-none
						"
                >
                    <figure
                        class="offcanvas__logo"
                        style="width: 200px"
                    >
                        <img
                            src="/assests/images/logos/logo.svg"
                            alt="logo"
                            class="img-fluid"
                        />
                    </figure>
                    <button
                        type="button"
                        class="
								btn-close btn-close-white
								text-reset
								position-absolute
								top-0
								end-0
								p-3
							"
                        data-bs-dismiss="offcanvas"
                        aria-label="Close"
                    ></button>
                </div>
                <div class="offcanvas-body p-lg-0">
                    <!-- Navbar menu -->
                    <ul
                        class="
								main-nav__menu
								navbar-nav
								m-auto
								h4
								mb-2 mb-lg-0
							"
                    >
                        <li
                            class="
									main-nav__menu-item
									nav-item
								"
                        >
                            <a
                                href="index.html"
                                class="
										main-nav__menu-link
										main-nav__menu-link--active
										nav-link
									"
                                aria-current="page"
                            >Home</a
                            >
                        </li>
                        <li
                            class="
									main-nav__menu-item
									nav-item
								"
                        >
                            <a
                                href="about.html"
                                class="
										main-nav__menu-link
										nav-link
									"
                            >About Us</a
                            >
                        </li>
                        <li
                            class="
									main-nav__menu-item
									nav-item
								"
                        >
                            <a
                                href="categories.html"
                                class="
										main-nav__menu-link
										nav-link
									"
                            >Categories</a
                            >
                        </li>
                    </ul>

                    <!-- Buttons -->
                    <div class="main-nav__buttons">
                        <!-- Newsletter button -->
                        <button
                            class="
									btn
									btn-block
									btn-lg
									btn-outline-primary
									mt-3
								"
                        >
                            Sign UP
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </nav>

    <!----------- End Navbar--------- -->
</template>
<script>

</script>

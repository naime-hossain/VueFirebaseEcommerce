<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <v-container>
        <v-row>
          <v-col cols="12">
            <add-product></add-product>
          </v-col>
          <v-col cols="4">
            <product-filter></product-filter>
          </v-col>
          <v-col cols="8">
            <v-row>
              <v-col
                cols="6"
                class="mb-4"
                v-for="product in products"
                :key="product.id"
              >
                <product
                  :name="product.name"
                  :price="product.price"
                  :description="product.description"
                  :brand="product.brand"
                ></product>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Product from "./components/Product";
import AddProduct from "./components/AddProduct";
import ProductFilter from "./components/ProductFilter";
import { db } from "./firebase/db";

export default {
  name: "App",

  components: { Product, AddProduct, ProductFilter },

  data: () => ({
    //
    products: [],
    newProduct: {},
  }),
  firestore: {
    products: db.collection("products"),
  },
};
</script>

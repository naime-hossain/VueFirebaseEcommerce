<template>
  <v-card class="mx-auto" max-width="500">
    <v-list>
      <v-list-item-group v-model="model">
        <v-list-item
          v-for="(item, i) in products"
          :key="i"
          @click="filterProduct(item.brand)"
        >
          <v-list-item-content>
            <v-list-item-title v-text="item.brand"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-card>
</template>
<script>
import { db } from "../firebase/db";
export default {
  name: "ProductFilter",
  data: () => ({
    items: [
      {
        icon: "mdi-inbox",
        text: "Inbox",
      },
      {
        icon: "mdi-star",
        text: "Star",
      },
      {
        icon: "mdi-send",
        text: "Send",
      },
      {
        icon: "mdi-email-open",
        text: "Drafts",
      },
    ],
    model: 1,
    brands: [],
    products: [],
  }),
  firestore: {
    products: db.collection("products"),
  },
  methods: {
    allBrands() {
      // console.log(this.products);
      let products = this.products;
      let brands = [];
      products.forEach((product) => {
        brands.push(product.brand);
        console.log("product");
      });
    },
    filterProduct(brand) {
      this.products = this.products.filter((product) => {
        product.brand == brand;
      });
      console.log(this.products);
    },
  },
  mounted() {
    this.allBrands();
  },
};
</script>
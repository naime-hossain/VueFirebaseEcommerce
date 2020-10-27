<template>
  <v-card class="pa-3">
    <v-form ref="form" v-model="isValid" lazy-validation>
      <v-text-field
        v-model="newProduct.name"
        :counter="50"
        :rules="nameRules"
        label="Name"
        required
      ></v-text-field>

      <v-text-field
        v-model="newProduct.price"
        type="number"
        label="Price"
        required
        :rules="requiredRules"
      ></v-text-field>

      <v-textarea
        filled
        auto-grow
        label="Product Description"
        rows="2"
        row-height="20"
        v-model="newProduct.description"
        required
        :rules="requiredRules"
      ></v-textarea>

      <v-select
        v-model="newProduct.brand"
        :items="items"
        label="Brands"
        required
        :rules="requiredRules"
      ></v-select>

      <!-- <v-btn :disabled="!valid" color="success" class="mr-4" @click="validate">
        Validate
      </v-btn> -->

      <v-btn color="error" class="mr-4" @click="reset"> Reset Form </v-btn>

      <v-btn
        :disabled="isValid"
        :loading="isLoading"
        class="white--text"
        color="deep-purple accent-4"
        depressed
        @click="submitForm"
      >
        Add New Product
      </v-btn>
    </v-form>
  </v-card>
</template>

<script>
import { db } from "../firebase/db";
export default {
  name: "AddProduct",
  props: {
    // name: String,
    // description: String,
    // status: String,
    // price: Number,
    // brand: String,
  },

  data: () => ({
    newProduct: {
      name: "",
      price: "",
      description: "",
      brand: null,
    },

    isValid: true,
    isLoading: false,
    nameRules: [
      (v) => !!v || "Name is required",
      (v) => (v && v.length <= 50) || "Name must be less than 50 characters",
    ],
    requiredRules: [(v) => !!v || "Filed is required"],
    email: "",
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ],

    items: ["Apple", "Itel", "Huawei", "Nokia"],
    checkbox: false,
  }),

  methods: {
    validate() {
      this.$refs.form.validate();
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },
    submitForm() {
      this.isLoading = true;
      let product = this.newProduct;
      if (product) {
        db.collection("products").add(product);
        console.log(this.newProduct);
        this.reset();
        this.isLoading = false;
      }
      this.isLoading = false;
    },
  },
};
</script>

<style>
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: 0.5;
  position: absolute;
  width: 100%;
}
</style>

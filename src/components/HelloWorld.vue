<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-img
          :src="require('../assets/logo-mw.png')"
          class="my-3"
          contain
          height="200"
        />
      </v-col>

      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">
          Teste Master da Web - Front
        </h1>

        <div class="d-flex justify-center align-center">
          <v-col cols="4">
            <v-card>
              <v-card-title>Lista de Produtos</v-card-title>
              <v-card-text>
                <div v-for="(product, index) in products" :key="index">
                  <div class="d-flex justify-start align-center">
                    <div>{{ product.name }} - R$ {{ product.preco }}</div>
                    <v-btn
                      class="ml-auto"
                      fab
                      dark
                      x-small
                      color="purple"
                      @click="addProduct(product)"
                    >
                      <v-icon dark> mdi-plus </v-icon>
                    </v-btn>
                  </div>
                </div>
              </v-card-text>
            </v-card>
          </v-col>

          <v-col cols="4" v-if="cart.length > 0">
            <v-card>
              <v-card-title>Checkout</v-card-title>
              <v-card-text>
                <div v-for="(item, index) in cart" :key="index">
                  <div class="d-flex justify-start align-center">
                    <div>
                      {{ item.product.name }} - R$
                      {{ item.product.preco }} (Quantidade: {{ item.quantity }})
                    </div>
                    <v-btn
                      class="ml-auto"
                      fab
                      dark
                      x-small
                      color="error"
                      @click="removeProduct(index)"
                    >
                      <v-icon dark> mdi-delete </v-icon>
                    </v-btn>
                  </div>
                </div>
              </v-card-text>
            </v-card>
          </v-col>
        </div>
        <v-btn color="primary" @click="sendCart">Finalizar Compra</v-btn>
      </v-col>
    </v-row>
    <template>
      <!-- Resto do seu código -->

      <v-snackbar
        v-if="successMessage"
        v-model="successMessage"
        :timeout="3000"
        color="success"
        top
        right
      >
        {{ successMessage }}
      </v-snackbar>
    </template>

    <br /><br />
    <table class="table table-striped">
      <thead>
        <tr>
          <th>Name</th>
          <th>Preço Unitario</th>
          <th>Quantidade</th>
          <th>Preço total</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="venda in vendas" :key="venda.id">
          <td>{{ venda.produtos.name }}</td>
          <td>{{ venda.produtos.preco }}</td>
          <td>{{ venda.quantidade }}</td>
          <td>
            {{
              (parseFloat(venda.produtos.preco) * venda.quantidade)
                .toFixed(2)
                .replace(".", ",")
            }}
          </td>
        </tr>
      </tbody>
    </table>
  </v-container>
</template>

<script>
import axios from "axios";
export default {
  name: "HelloWorld",
  data() {
    return {
      successMessage: "",
      products: [],
      cart: [],
      vendas: [],
    };
  },
  methods: {
    addProduct(product) {
      const itemIndex = this.cart.findIndex(
        (item) => item.product.id == product.id
      );
      if (itemIndex != -1) {
        this.cart[itemIndex].quantity++;
      } else {
        this.cart.push({ product: product, quantity: 1 });
      }
    },
    removeProduct(index) {
      this.cart.splice(index, 1);
    },
    sendCart() {
      axios
        .post("http://127.0.0.1:8000/api/carts", this.cart)
        .then((response) => {
          this.successMessage = response.data.message;
          this.cart = [];
          this.onListarVendas();
        })
        .catch((error) => {
          console.log(error.response.data);
        });
    },

    onListar() {
      let headers = {
        "Access-Control-Allow-Origin": "*",
      };
      // aqui colocar url da api que consulta os produtos
      const baseURI = "http://127.0.0.1:8000/api/produtos";

      axios
        .get(baseURI, { headers: headers })
        .then((response) => {
          this.products = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    onListarVendas() {
      let headers = {
        "Access-Control-Allow-Origin": "*",
      };
      // aqui colocar url da api que consulta os produtos
      const baseURI = "http://127.0.0.1:8000/api/vendas";

      axios
        .get(baseURI, { headers: headers })
        .then((response) => {
          console.log(response);
          this.vendas = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  mounted() {
    this.onListar();
  },
};
</script>

<template>
  <div>
    <Header/>
    <b-container>
      <b-row>
        <!-- Loop through all the products and output them on their individual cards -->
        <b-col cols="6" sm="6" md="4" class="mb-4" v-for="(product, index) in products" v-bind:key="index">
          <b-card :img-src="product.productImage" :img-alt="product.productTitle" img-top class="mb-2 product-card" :class="{'blue-bg': index % 2 === 1, 'red-bg': index % 2 === 0}" text-variant="white">
            <h2>{{product.productShortTitle}}</h2>
            <p class="lead">{{product.productType}}</p>
            <p class="lead">£{{product.productPrice}}</p>
            <!-- Snipcart product -->
            <b-button class="snipcart-add-item" :class="{'btn-primary': index % 2 === 1, 'btn-success': index % 2 === 0}" :data-item-id="product.productID" :data-item-price="product.productPrice" :data-item-weight="product.productWeight" data-item-shippable="true" :data-item-url="product.productURL" :data-item-description="product.productDesc" :data-item-image="product.productImage" :data-item-name="product.productTitle">Add To Cart</b-button>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
    <b-alert show variant="dark">This is a demo ecommerce website, the checkout is in test mode and no live payments are taken</b-alert>
    <Footer/>
  </div>
</template>

<script>
import Header from '~/components/Header';
import Footer from '~/components/Footer';

export default {
  components: {
    Header,
    Footer
  },
  head() {
    return {
      script: [{ src: 'https://identity.netlify.com/v1/netlify-identity-widget.js', async: true }]
    };
  },
  computed: {
    products() {
      // Return all the products in the store and sort them alphabetically
      var products = this.$store.state.allProducts;
      return products.sort();
    },
  }
}
</script>
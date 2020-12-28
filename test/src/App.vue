<template>
     <div id="app">
      <v-app>
        <Doc ref="modal" :item="newdoc" :items="items" />
        <v-layout row>
          <v-flex xs12 sm6 offset-sm3>
            <v-card>
            <Docs :items="items"/>
            <v-card-text tyle="height: 100px; position: relative">
              <v-btn @click="openModal"
              big
              color="pink"
              dark
              absolute
              bottom
              right
              fab
              >
              <v-icon>add</v-icon>
              </v-btn>
            </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-app>
      </div>
</template>

<script>
import Docs from './components/Docs';
import Doc from './components/Doc';

export default {
  name: 'app',
  components: {
    Docs, Doc
  },
  methods: {
    openModal(){
      this.$refs.modal.show();
    }
  },
  data:() => {
  return {
    newdoc: {
      id: -1,
      name: "New Document",
      exp: "",
      alert1year: true,
      alert6months: true,
      alert3months: true,
      alert1month: true
    },
    items:[
    {
      id: 1,
      name: "Test 1",
      exp: "2019-10-16",
      alert1year: false,
      alert6months: true,
      alert3months: false,
      alert1month: false
    },
    {
      id: 2,
      name: "Test 2",
      exp: "2018-11-16",
      alert1year: false,
      alert6months: false,
      alert3months: false,
      alert1month: true
    } 
    ]
  }
 }
}
</script>

<style>

</style>

<template>
    <div>
      <v-dialog v-model="showModal"
        fullscreen
        hide-overlay
        transition="dialog-bottom-transition"
        scrollable
        >
      <v-card item>
        <v-toolbar color="blue" dark>
        <v-btn icon dark @click="hide">
            <v-icon>close</v-icon>
        </v-btn>
        <v-toolbar-title>{{item.name}}</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items>
            <v-btn dark text @click="save">Save</v-btn>
       </v-toolbar-items>
</v-toolbar>
    <v-card-text>
    <v-list three-line subheader>
    <v-list-item >
        <v-list-item-content>
        <v-list-item-title>
            Document Name
        </v-list-item-title>
        <v-list-item-subtitle></v-list-item-subtitle>
        <v-text-field
            ref="name"
            v-model="name"
            :rules="[() => !!name || 'Required field']"
            required
            >
        </v-text-field>
    </v-list-item-content>
    </v-list-item>
    <v-list-item >
<v-list-item-content>
    <v-list-item-title>
    Expiry Date
    </v-list-item-title>
    <v-list-item-subtitle></v-list-item-subtitle>
    <v-menu
        ref="menu"
        v-model="menu"
        :close-on-content-click="false"
        :nudge-right="40"
        :return-value.sync="date"
        transition="scale-transition"
        offset-y 
        min-width="290px"
        >
        <template v-slot:activator="{ on }">
            <v-text-field
            v-model="date"
            prepend-icon="event"
            readonly
            v-on="on"></v-text-field>
        </template>
        <v-date-picker
            v-model="date"
            :min=date
            max="2099-12-31"
            no-title scrollable>
            <v-spacer></v-spacer>
            <v-btn text color="primary"
            @click="menu = false">Cancel</v-btn>
            <v-btn text color="primary"
            @click="$refs.menu.save(date)">
            OK
            </v-btn>
            </v-date-picker>
        </v-menu>
    </v-list-item-content>
   </v-list-item>
</v-list>
<v-divider></v-divider>
<v-list four-line subheader>
        <v-list-item >
          <v-list-item-action>
            <v-switch
                v-model="alert1year"
                :label="`Alert @ 1.5 & 1 year(s)`"
          ></v-switch>
        </v-list-item-action>
</v-list-item>
<v-list-item >
    <v-list-item-action>
        <v-switch
        v-model="alert6months"
        :label="`Alert @ 6 months`"
        ></v-switch>
    </v-list-item-action>
</v-list-item>
<v-list-item >
    <v-list-item-action>
        <v-switch
        v-model="alert3months"
        :label="`Alert @ 3 months`"
        ></v-switch>
    </v-list-item-action>
    </v-list-item>
<v-list-item >
    <v-list-item-action>
        <v-switch
        v-model="alert1month"
        :label="`Alert @ 1 month or less`"
        ></v-switch>
    </v-list-item-action>
        </v-list-item>
        </v-list>
            </v-card-text>
            
            <div style="flex: 1 1 auto;"></div>
          </v-card>
         </v-dialog>
    </div>
</template>

<script>
export default {
    name:"Doc",
    props:["item"],
    data: () => {
        return {
            name:"",
            date: new Date().toISOString().substr(0,10),
            alert1year:true,
            alert6months:true,
            alert3months:true,
            alert1month:true,
            menu:false,
            showModal:false
        }
    },
    methods: {
        show() {
            this.showModal = true;
        },
        hide() {
            this.showModal = false;
        },
        save() {
            this.showModal = false;
        } 
    }
}
</script>
<style scoped>
</style>
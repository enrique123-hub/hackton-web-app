<template>
  <GoogleMapLoaderVue
    :mapConfig="mapConfig"
    apiKey='AIzaSyCQXGaCgiPDdJY_T4UdqZae3u1LeIsBtmc'>
    <template v-slot="{ google, map }"> 
      <GoogleMapMarkerVue
        v-for="marker in markers"
        :key="marker.id"
        :marker="marker"
        :google="google"
        :map="map"
      />
    </template>
  </GoogleMapLoaderVue>
</template>

<script>
// import GoogleMapLineVue from '@/components/GoogleMapLine.vue';
import GoogleMapLoaderVue from '@/components/GoogleMapLoader.vue';
import GoogleMapMarkerVue from '@/components/GoogleMapMarker.vue';
import { mapSettings } from '@/service/mapSettings';
import { google } from "googleapis";

export default {
  components: {
    GoogleMapLoaderVue,
    GoogleMapMarkerVue
  },

  data() {
    return {
      positions: [],
      markers: [
        {
          id: "a",
          position: { lat: 3, lng: 101 }
        },
        {
          id: "b",
          position: { lat: 5, lng: 99 }
        },
        {
          id: "c",
          position: { lat: 6, lng: 97 }
        }
      ]
    };
  },
  computed: {
    mapConfig() {
      return {
        ...mapSettings,
        center: this.mapCenter
      };
    },

    mapCenter() {
      return this.markers[1].position;
    }
  },
  methods: {
    async getInfo(){
      const auth = new google.auth.GoogleAuth({
          keyFile: "credentials.json",
          scopes: "https://www.googleapis.com/auth/spreadsheets",
        });
      
      // Create client instance for auth
      const client = await auth.getClient();
      
      // Instance of Google Sheets API
      const googleSheets = google.sheets({ version: "v4", auth: client });

      const spreadsheetId = "1bGvoqXbhk66iEtWnPZdRPjQGaqxXh_s7alinRp_bwm8";

      //Get DATA
      const getRows = await googleSheets.spreadsheets.values.get({
          auth,
          spreadsheetId,
          range: "Hoja 1",
      });

      this.positions = getRows.data.values

      console.log(this.positions)

      // return getRows.data.values;
    }
  }
};
</script>

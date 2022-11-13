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
// import { google } from "googleapis";

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
          position: { lat: 31.86478347, lng: -116.5941303 }
        },
        {
          id: "b",
          position: { lat: 31.83173035, lng: -116.6075822 }
        },
        {
          id: "c",
          position: { lat: 31.86774585, lng: -116.655967 }
        },
        {
          id: "d",
          position: { lat: 31.87640101, lng: -116.5878281 }
        },
        {
          id: "e",
          position: { lat: 31.85648594, lng: -116.6086928 }
        },
        {
          id: "f",
          position: { lat: 31.83177461, lng: -116.5973674 }
        },
        {
          id: "f",
          position: { lat: 31.786263, lng: -116.5714817  }
        },
        {
          id: "g",
          position: { lat: 331.84708135, lng: -116.5909234  }
        },
        {
          id: "h",
          position: { lat: 31.80159785, lng: -116.5900924  }
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
  // methods: {
  //   async getInfo(){
  //     const auth = new google.auth.GoogleAuth({
  //         keyFile: "credentials.json",
  //         scopes: "https://www.googleapis.com/auth/spreadsheets",
  //       });
      
  //     // Create client instance for auth
  //     const client = await auth.getClient();
      
  //     // Instance of Google Sheets API
  //     const googleSheets = google.sheets({ version: "v4", auth: client });

  //     const spreadsheetId = "1bGvoqXbhk66iEtWnPZdRPjQGaqxXh_s7alinRp_bwm8";

  //     //Get DATA
  //     const getRows = await googleSheets.spreadsheets.values.get({
  //         auth,
  //         spreadsheetId,
  //         range: "Hoja 1",
  //     });

  //     this.positions = getRows.data.values

  //     console.log(this.positions)

  //     // return getRows.data.values;
  //   }
  // }
};
</script>

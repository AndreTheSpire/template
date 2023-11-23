<template>
  <v-container fluid>
    <v-tabs v-model="activeTab" grow>
      <v-tab :active-class="selectedTabClass">Informasi Pribadi</v-tab>
      <v-tab :active-class="selectedTabClass">Ganti Kata Sandi</v-tab>
    </v-tabs>
    <v-tabs-items v-model="activeTab">
      <v-tab-item>
              <!-- Content for Tab 1 -->
              <div v-if="activeTab === 0">
                <ProfileCard />
              </div>
          
      </v-tab-item>
      <v-tab-item>
   
              <!-- Content for Tab 2 -->
              <div v-if="activeTab === 1">
                <ChangePasswordCard />
              </div>
       
      </v-tab-item>
    </v-tabs-items>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      activeTab: 0, // The initially selected tab (0 for Tab 1, 1 for Tab 2)
    };
  },
};
</script>

<style scoped>
.selectedTabClass {
  background-color: #ff5733; /* Change to the desired background color */
  color: #fff; /* Change to the desired text color */
}
</style>
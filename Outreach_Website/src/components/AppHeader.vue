
<script setup lang=ts>

import { ref, watch, defineEmits, computed } from 'vue'

import { RouterLink } from 'vue-router';

const activeTab = ref<string | null>(null);
const tabs:string[] = ['Home', 'K-12 Lessons', 'UCSD Lab Tours', 'About Us'];

const setActiveTab = (tab: string) => {
  activeTab.value = tab;
};

const clearActiveTab = () => {
  if (!isDropdownHovered.value)
  activeTab.value = null;
};

const isDropdownHovered = ref<boolean>(false);

const dropdownHover = (hovering: boolean) => {
  isDropdownHovered.value = hovering;
  if (!hovering) {
    activeTab.value = null;
  }
};
</script>

<template>
  <header>
    <div class="nav-flex">
  <div>
    <img alt="HKN Logo" class="logo" src="../assets/HKN Vector Blue.svg" />
  </div>
  <h2 style="color: var(--white)">HKN Outreach at UC San Diego</h2>
    </div>
  <nav class="navbar">
      <ul>
          <li @mouseover="setActiveTab(tabs[0])" @mouseleave="clearActiveTab"><RouterLink to="/" :class="{ 'activeTab': activeTab === 'Home' }">Home</RouterLink></li>
          <li @mouseover="setActiveTab(tabs[1])" @mouseleave="clearActiveTab"><RouterLink to="/lessons" :class="{ 'activeTab': activeTab === 'K-12 Lessons' }">K-12 Lessons</RouterLink></li>
          <li @mouseover="setActiveTab(tabs[2])" @mouseleave="clearActiveTab"><RouterLink to="/tours" :class="{ 'activeTab': activeTab === 'UCSD Lab Tours' }">UCSD Lab Tours</RouterLink></li>
          <li @mouseover="setActiveTab(tabs[3])" @mouseleave="clearActiveTab"><RouterLink to="/about" :class="{ 'activeTab': activeTab === 'About Us' }">About Us</RouterLink></li>
          <RouterView/>
        </ul>
    </nav>
</header>

<div class= "browseHeader" id="browseHeader">

</div>
  
</template>


<style scoped>

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.navbar {
    text-align: right;
}

.nav-flex {
margin: 1rem 2rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: larger;
}

nav ul {
  list-style: none;
  display: flex;
  gap: 1rem;
  padding: 0;
  justify-content: flex-start;
  font-size: larger;
}

nav a {
  text-decoration: none;
  color: var(--hkn-blue);
  font-weight: bold;
  position: relative;
}

nav a::after {
  content: '';
  display: block;
  width: 0;
  height: 2px;
  background: var(--hkn-blue);
  transition: width 0.5s;
  position: absolute;
  bottom: -5px;
  left: 0;  
}

nav a.activeTab::after {
  width: 100%;
}

.browseHeader {
  width:100vw;
  background-origin: padding-box;
  background-repeat: repeat;
  box-sizing: auto;
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  height: 12rem;
  background-color: var(--black-mute);
  text-align: center;

}

.logo {
  position: relative;
  display: flex;
  width: 225px;
  height: 175px;
  box-sizing: border-box;
  overflow-x: clip;
  overflow-y: clip;
  place-items: center;
  z-index: 1000;
}


@media (max-width: 924px) {


}

</style>
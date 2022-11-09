<template>
  <div>
    <div class="questionnaire-or-templates-title-container">
      <div class="parallax"></div>
    </div>
    <div class="polygon"></div>
    <div class="questionnaire-or-templates-container" id="wantSite">
      <div class="template-option">
        <div class="option-title text-white">Build your own website</div>
        <router-link :to="{ path: '/questionnaire' }">
          <div class="choose-card"></div>
        </router-link>
      </div>
      <div class="or-container">OR</div>
      <div class="template-option">
        <div class="option-title">Choose a template</div>
        <router-link :to="{ path: '/templates' }">
          <div class="choose-card"></div>
        </router-link>
      </div>
    </div>
  </div>
</template>

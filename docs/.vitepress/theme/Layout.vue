<script setup lang="ts">
import DefaultTheme from 'vitepress/theme'
import { withBase } from 'vitepress'

const { Layout } = DefaultTheme

// Placeholder until the DataLab address for the new site is agreed.
const datalabUrl = '#'

// Placeholder partner boxes; replace with logos when agreed.
const partners = ['Partner', 'Partner', 'Partner', 'Partner', 'Partner']
</script>

<template>
  <Layout>
    <template #nav-bar-content-after>
      <a class="vo-datalab-button" :href="datalabUrl">Open DataLab</a>
    </template>

    <template #layout-bottom>
      <footer class="vo-footer">
        <div class="vo-footer-inner">
          <div class="vo-partners">
            <span v-for="(p, i) in partners" :key="i" class="vo-partner">{{ p }}</span>
          </div>
          <div class="vo-footer-right">
            <nav class="vo-footer-links">
              <a :href="withBase('/about')">About</a>
              <a :href="withBase('/contact')">Contact</a>
              <a :href="withBase('/terms')">Data use terms</a>
              <a :href="withBase('/cite')">How to cite</a>
            </nav>
            <p class="vo-footer-note">An independent platform, with MalariaGEN among its partners</p>
          </div>
        </div>
      </footer>
    </template>
  </Layout>
</template>

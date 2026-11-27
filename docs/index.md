---
layout: home

hero:
  name: Vector Observatory
  text: Data for mosquito research, surveillance and control
  tagline: "[Organism-agnostic tagline: text to be confirmed]"
  actions:
    - theme: brand
      text: Explore the data
      link: /data/
    - theme: alt
      text: Open DataLab
      link: '#'
    - theme: alt
      text: GitHub
      link: https://github.com/vector-observatory

# Cards shown below "The platform" (moved from the default position under the hero).
cards:
  - icon: 🧬
    title: Data
    details: "[Organism-agnostic description: text to be confirmed]"
    link: /data/
    linkText: Data resources
  - icon: 🐍
    title: API
    details: Open-source Python package to explore, visualise and analyse mosquito genomic data, built for cloud-native workflows.
    link: /api/
    linkText: Get started
  - icon: ⚙️
    title: Pipelines
    details: Open-source, reproducible workflows for processing parasite and vector genome data.
    link: /pipelines
    linkText: Pipelines
  - icon: 🎓
    title: Training
    details: Entry level and advanced. Video lectures in English and French, executable notebooks and exercises.
    link: /training
    linkText: Start learning
  - icon: 🤝
    title: Collaborations
    details: Collaborative projects and contributing partner studies, filterable by organism.
    link: /collaborations
    linkText: Projects and studies
  - icon: 📚
    title: Research
    details: The observatory is powering new research into the biology and control of disease vectors.
    link: /research
    linkText: Publications
---

<script setup>
import { VPFeatures } from 'vitepress/theme'
import { useData } from 'vitepress'
const { frontmatter } = useData()
</script>

## The platform

The Vector Observatory is a collaborative effort to bring together and explore the genomes of thousands of mosquitoes, and use those data to improve disease control. It brings together genomic data, tools and expertise from across affected regions, built on equitable data sharing, open science and collaboration.

Through DataLab, users access data, cloud compute, open-source tools and APIs from a web browser, on a standard laptop.

<div class="vo-figures">
  <div><strong>30,000+</strong><span>mosquito genomes</span></div>
  <div><strong>1,000+</strong><span>registered users</span></div>
  <div><strong>[ ]</strong><span>[organism-agnostic figure: to be confirmed]</span></div>
  <div><strong>Free</strong><span>at the point of use</span></div>
</div>

<VPFeatures class="vo-cards" :features="frontmatter.cards" />

## Partners

<div class="vo-logos">
  <span>Partner</span>
  <span>Partner</span>
  <span>Partner</span>
  <span>Partner</span>
  <span>Partner</span>
  <span>Partner</span>
</div>

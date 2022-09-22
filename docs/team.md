---
layout: page
---
<style>
.avatar-img {
  width: 100%;
  height: 100%;
}
</style>

<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers
} from 'vitepress/theme';

const members = [
  {
    avatar: 'https://media-exp1.licdn.com/dms/image/C4D03AQHD65c42GhlsA/profile-displayphoto-shrink_800_800/0/1641324626490?e=1669248000&v=beta&t=FZ7k2acrEu9YnaI46Ct1yWPFK51La-Siy4VP8vsJBkM',
    name: 'Andrei Petrov',
    title: 'Frontend developer',
    links: [
      { icon: 'github', link: 'https://github.com/ndt080' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/andrei-petrov-20a110228/' },
    ]
  },
  {
    avatar: 'https://media-exp1.licdn.com/dms/image/C4D03AQEutJEhvbNH1A/profile-displayphoto-shrink_800_800/0/1638476428565?e=1669248000&v=beta&t=hHPkkpyBO4RuhLlZUv9aybvGMeD87DecK39k7v290tE',
    name: 'Pavel Hardzei',
    title: 'Backend developer',
    links: [
      { icon: 'github', link: 'https://github.com/pavelhardzei' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/pavelhardzei/' },
    ]
  },
]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      Our Team
    </template>
    <template #lead>
      The development of Darktheater is guided by a cool
      team, some of whom have chosen to be featured below.
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers
    :members="members"
  />
</VPTeamPage>

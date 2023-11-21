<template>
  <div class="container" >
    <svg
      width="500px"
      height="200px"
      viewBox="0 0 500 200"
    >
      <rect
        class="rect"
        x="10"
        y="10"
        width="100px"
        height="50px"
        fill="none"
        stroke-width="5"
        stroke="pink"
      ></rect>
    </svg>
  </div>

  <div class="container">
    <svg
      width="440"
      height="440"
      viewBox="0 0 440 440"
    >
      <circle
        cx="220"
        cy="220"
        r="200"
        stroke-width="20"
        stroke="#d1d3d7"
        fill="transparent"
      ></circle>

      <circle
        class="circle"
        cx="220"
        cy="220"
        r="200"
        stroke-width="20"
        stroke="#00a5e0"
        fill="none"
        transform="matrix(0 -1 1 0 0 440)"
      ></circle>
    </svg>
  </div>

  <div class="container">
    <svg
      width="200"
      height="200"
      viewBox="0 0 1025 1024"
    >
      <path
        class="logo"
        id="emoji"
        d="M256.001473 408.004475c0 30.294527 24.556772 54.851298 54.861526 54.851298 30.294527 0 54.851298-24.556772 54.851298-54.851298 0-30.304754-24.556772-54.861526-54.851298-54.861527-30.304754 0-54.861526 24.556772-54.861526 54.861527z m402.287175 0c0 30.294527 24.556772 54.851298 54.851299 54.851298s54.861526-24.556772 54.861526-54.851298c0-30.304754-24.567-54.861526-54.861526-54.861527s-54.851298 24.556772-54.851299 54.861527zM512.001473 0C229.255967 0 0.001473 229.254495 0.001473 512c0 282.745505 229.254495 512 512 512 282.745505 0 512-229.254495 512-512C1024.001473 229.254495 794.746978 0 512.001473 0z m300.572433 812.572433c-39.090372 39.080144-84.573072 69.712185-135.20032 91.200639-52.222773 22.173712-107.882062 33.373072-165.372113 33.373073-57.479824 0-113.139113-11.199361-165.484619-33.373073-50.627247-21.375949-96.109948-52.120495-135.200319-91.200639-39.090372-39.090372-69.712185-84.573072-91.20064-135.20032-22.050979-52.222773-33.25034-107.882062-33.250339-165.372113 0-57.479824 11.199361-113.139113 33.373072-165.484618 21.375949-50.627247 52.120495-96.109948 91.200639-135.20032s84.573072-69.712185 135.20032-91.200639C398.86236 98.063444 454.521649 86.864083 512.001473 86.864083c57.490052 0 113.149341 11.199361 165.484618 33.373072 50.627247 21.375949 96.120176 52.120495 135.20032 91.20064 39.080144 39.080144 69.712185 84.573072 91.200639 135.200319 22.061207 52.222773 33.260567 107.882062 33.260567 165.361886 0 57.490052-11.199361 113.149341-33.373072 165.484618-21.375949 50.627247-52.120495 96.109948-91.200639 135.087815zM685.719411 535.994247H630.74538c-4.796804 0-8.90835 3.661526-9.256093 8.45833-4.336556 56.569557-51.772753 101.254495-109.487814 101.254495s-105.253536-44.684938-109.477587-101.254495c-0.347743-4.796804-4.459289-8.45833-9.256093-8.45833h-54.974031c-5.257052 0-9.378825 4.336556-9.143588 9.603835 5.032042 96.334958 85.145825 173.247463 182.861527 173.247463 97.715701 0 177.829485-76.912505 182.861526-173.247463 0.214782-5.257052-3.896764-9.603835-9.153816-9.603835z m0 0"
        fill="#2C2C2C"
        p-id="1559"
      ></path>
    </svg>
  </div>

  <div class="container">
    <svg
      class="line-container"
      width="400"
      height="400"
      viewBox="0 0 400 400"
    >
      <line
        class="line"
        x1="0"
        y1="50"
        x2="400"
        y2="50"
        fill="none"
        stroke="red"
        stroke-width="20"
      ></line>
    </svg>
  </div>
</template>

<script>
  import { onMounted } from 'vue'

  export default {
    name: 'SvgAnimation',
    setup() {
      onMounted(() => {
        const logo = document.getElementById('emoji')
        const logoLen = Math.ceil(logo.getTotalLength())
        console.log(logoLen)
      })

      return {

      }
    }
  }
</script>

<style lang="scss" scoped>
.container {
  svg {
    border: 1px solid #000;
  }
}

.rect {
  stroke-dasharray: 10 20 30;
}

.circle {
  animation: circle 5s linear infinite;
}

.line {
  stroke-dasharray: 400;
  stroke-dashoffset: 400;
  transition: stroke-dashoffset .5s ease-out;
}

.line-container {
  &:hover {
    .line {
      stroke-dashoffset: 0;
    }
  }
}

.logo {
  fill: none;
  stroke: #333;
  stroke-width: 5;
  animation: logo 5s linear 1 forwards;
}

@keyframes circle {
  from {
    stroke-dasharray: 0 1257;
  }
  to {
    stroke-dasharray: 1257 0;
  }
}

@keyframes logo {
  0% {
    fill: white;
    stroke: #333;
    stroke-dasharray: 7630;
    stroke-dashoffset: 7630;
  }
  50% {
    fill: white;
    stroke: #333;
    stroke-dasharray: 7630;
    stroke-dashoffset: 0;
  }
  75% {
    fill: lightgreen;
    stroke: white;
  }
  100% {
    fill: skyblue;
    stroke: white;
  }
}
</style>
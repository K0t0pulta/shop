<template>
        <div class="container duo">Данные загружаются</div>
</template>

<script>
export default {};
</script>

<style scoped>
.container {
    display: flex;
    position: relative;
    align-items: center;
    justify-content: center;
    height: 100%;
    overflow: hidden;
}
.duo:before {
  height: 50px;
  width: 50px;
  content: '';
  display: block;
  -webkit-animation: spin 1s infinite linear;
          animation: spin 1s infinite linear;
  border-width: 6px;
  border-style: solid;
  border-bottom-color: #f9690e;
  border-top-color: #f9690e;
  border-left-color: #222;
  border-radius: 100%;
  border-right-color: #222; }

@-webkit-keyframes spin {
  to {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg); } }

@keyframes spin {
  to {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg); } }
</style>

<template>
  <aside>
    <div>*******************************</div>
    <slot name="navigation"> </slot>
    <div>*******************************</div>
  </aside>
  <main>
    <slot name="content"></slot>
  </main>
  <footer>
    <slot name="footer"></slot>
  </footer>
</template>

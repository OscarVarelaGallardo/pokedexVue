<script>
import { ref } from 'vue'

export default {
  setup() {
    return {
      icon: ref(false),

    }
  }
}
</script>

<template>
  <div id="q-app" style="min-height: 100vh;">
    <div class="q-pa-md q-gutter-sm">
      <q-btn label="Close Icon" color="primary" @click="icon = true"></q-btn>

      <q-dialog v-model="icon">
        <q-card>
          <q-card-section class="row items-center q-pb-none">
            <div class="text-h6">Close icon</div>
            <q-space></q-space>
            <q-btn icon="close" flat round dense v-close-popup></q-btn>
          </q-card-section>

          <q-card-section>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum repellendus sit voluptate voluptas eveniet
            porro. Rerum blanditiis perferendis totam, ea at omnis vel numquam exercitationem aut, natus minima, porro
            labore.
          </q-card-section>
        </q-card>
      </q-dialog>

    </div>
  </div>
</template>



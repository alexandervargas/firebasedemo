<template>
  <div>
    <h1>Uploader</h1>
    <form v-if="isInitial()">
      <div class="form-group">
        <div class="dropbox text-white">
          <input type="file" class="form-control-file input-file" id="photoUploader" accept="image/jpeg,image/png" @change="uploadImage">
          <p>
          Drop your image here
          </p>
        </div>
      </div>
    </form>
    <div class="progress" v-if="isSaving()">
      <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" :aria-valuenow="progress" aria-valuemin="0" aria-valuemax="100" :style="`width: ${ progress }%`">{{ progress }}%</div>
    </div>
    <div v-if="isUploaded()">
      <div class="alert alert-success" role="alert">
        Your file was successfully uploaded to <a :href="url" target="_blank">{{ url }}</a>
      </div>
      <div class="text-center">
          <img :src="url" class="rounded" :alt="url" width="100%">
      </div>
    </div>
  </div>
</template>


<script>
import { mapState, mapActions, mapMutations, mapGetters } from 'vuex'
import * as constants from '@/store/constants'

export default {
  data () {
    return {
    }
  },
  computed: {
    ...mapState({
      progress: state => state.Uploader.progress,
      url: state => state.Uploader.url
    })
  },
  methods: {
    ...mapActions({
      imageUploader: constants.UPLOADER_UPLOAD_IMAGE
    }),
    ...mapGetters({
      isInitial: constants.UPLOADER_IS_INITIAL,
      isSaving: constants.UPLOADER_IS_SAVING,
      isUploaded: constants.UPLOADER_IS_UPLOADED
    }),
    ...mapMutations({
      setProgress: constants.UPLOADER_SET_PROGRESS,
      setUrl: constants.UPLOADER_SET_URL
    }),
    uploadImage (e) {
      let files = e.target.files
      if (!files.length) {
        return
      }
      let file = files[0]
      const re = /\s+|-/
      let fileName =`${ file.name.split('.')[0].split(re).join('_') }.${ file.type.split('/')[1] }`
      this.imageUploader({ fileName: fileName, file: file })
    }
  },
  beforeDestory () {
    this.setProgress('')
    this.setUrl('')
  }
}
</script>

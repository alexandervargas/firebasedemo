<template>
  <div>
    <h1>Uploader</h1>
    <form v-if="isInitial()">
      <div class="dropbox text-white">
        <div class="form-group">
          <input type="file" class="form-control-file input-file" id="image" accept="image/jpeg,image/png" @change="upload">
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
        Your image was successfully uploaded at <a :href="url" target="_blank">{{ url }}</a>
      </div>
      <img :src="url" class="rounded mx-auto d-block" alt="Your uploaded image" width="100%">
    </div>
    <div class="alert alert-danger" role="alert" v-if="isError()">
      Error: {{ error }}
    </div>
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations, mapGetters } from 'vuex'
import * as constants from '@/store/constants'

export default {
  computed: {
    ...mapState({
      progress: state => state.Uploader.progress,
      url: state => state.Uploader.url,
      error: state => state.Uploader.error.message
    })
  },
  methods: {
    ...mapActions({
      uploadImage: constants.UPLOADER_UPLOAD_IMAGE
    }),
    ...mapMutations({
      setProgress: constants.UPLOADER_SET_PROGRESS,
      setUrl: constants.UPLOADER_SET_URL,
      setError: constants.UPLOADER_SET_ERROR
    }),
    ...mapGetters({
      isInitial: constants.UPLOADER_IS_INITIAL,
      isSaving: constants.UPLOADER_IS_SAVING,
      isUploaded: constants.UPLOADER_IS_UPLOADED,
      isError: constants.UPLOADER_IS_ERROR
    }),
    upload (e) {
      const files = e.target.files
      if (!files.length) {
        return
      }
      const file = files[0]
      const re = /\s+|-/
      const fileName = `${ file.name.split('.')[0].split(re).join('_') }.${ file.type.split('/')[1] }`
      this.uploadImage({ fileName: fileName, file: file })
    }
  },
  beforeDestroy () {
    this.setProgress('')
    this.setUrl('')
    this.setError({ code: '', message: '' })
  }
}
</script>

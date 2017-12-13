import * as firebase from 'firebase'
import * as constants from '@/store/constants'

const state = {
  progress : '',
  url      : '',
  error    : {}
}

const actions = {
  [constants.UPLOADER_UPLOAD_IMAGE]: ({commit}, data) => {
    const storage = firebase.storage().ref()
      .child(`images/uploader/${ data.fileName }`)
      .put(data.file)
    storage.on(firebase.storage.TaskEvent.STATE_CHANGED,
      snapshot => {
        let progress = ( (snapshot.bytesTransferred / snapshot.totalBytes) * 100 ).toFixed(2)
        commit(constants.UPLOADER_SET_PROGRESS, progress)
      },
      error => {
        commit(constants.UPLOADER_SET_ERROR, error)
      },
      success => {
        commit(constants.UPLOADER_SET_URL, storage.snapshot.downloadURL)
        commit(constants.UPLOADER_SET_PROGRESS, '')
      }
    )
  }
}

const mutations = {
  [constants.UPLOADER_SET_PROGRESS]: (state, progress) => {
    state.progress = progress
  },
  [constants.UPLOADER_SET_ERROR]: (state, error) => {
    state.error = error
  },
  [constants.UPLOADER_SET_URL]: (state, url) => {
    state.url = url
  }
}

const getters = {
  [constants.UPLOADER_IS_INITIAL]: state => {
    return state.progress === '' && state.url === ''
  },
  [constants.UPLOADER_IS_SAVING]: state => {
    return state.progress !== '' && state.url === ''
  },
  [constants.UPLOADER_IS_UPLOADED]: state => {
    return state.progress === '' && state.url !== ''
  }
}

export default {
  state,
  actions,
  mutations,
  getters
}

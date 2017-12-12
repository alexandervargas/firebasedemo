<template>
  <div>
    <h1>Uploader</h1>
    <form>
      <div class="form-group">
        <div class="dropbox text-white">
          <input type="file" class="form-control-file input-file" id="photoUploader" accept="image/jpeg,image/png">
          <p>
          Drop your image here
          </p>
        </div>
      </div>
    </form>
    <div class="progress">
        <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style="width: 75%">75%</div>
    </div>
    <div class="alert alert-success" role="alert">
        This is a success alert—check it out!
    </div>
  </div>
</template>


<script>
export default {
}
</script>

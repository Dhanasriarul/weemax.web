<template>
  <div>
    <input type="file" @change="onFileChange" />
    <button @click="submit">Upload</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedFile: null,
    };
  },
  methods: {
    onFileChange(e) {
      this.selectedFile = e.target.files[0];
    },
    async submit() {
      try {
        const formData = new FormData();
        formData.append("image", this.selectedFile, this.selectedFile.name);

        // check the file size is less than 600kb
        // if (this.selectedFile.size > 600000) {
        //   console.log("File size is too big!");
        //   return;
        // }

        const response = await fetch("https://api.weemax.com/api/upload", {
          method: "POST",
          body: formData,
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        } else {
          const result = await response.json();
          console.log(result);
        }
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>

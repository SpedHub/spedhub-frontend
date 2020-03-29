<script>
export default {
  name: "FetchJson",
  props: ["url"],
  data() {
    return {
      json: null,
      loading: true
    };
  },
  created: function() {
    fetch(this.url)
      .then(response => response.json())
      .then(json => {
        setTimeout(() => {
          this.json = json;
          this.loading = false;
        }, 2000);
      });
  },
  render() {
    return this.$scopedSlots.default({
      json: this.json,
      loading: this.loading
    });
  }
};
</script>

<style scoped></style>

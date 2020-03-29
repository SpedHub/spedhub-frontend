<script>
import { createNamespacedHelpers } from "vuex";
import { deepClone } from "@/common/helpers";
const auth = createNamespacedHelpers("auth");

export default {
  name: "Navigation",
  data: () => ({
    links: [
      {
        label: "Home",
        url: "/",
        show: null
      },
      {
        label: "Login",
        url: "/login",
        show: null
      },
      {
        label: "Dashboard",
        url: "/dashboard",
        show: null
      },
      {
        label: "Logout",
        url: "/logout",
        show: null
      }
    ]
  }),
  computed: {
    ...auth.mapGetters(["loggedIn"]),
    activeLinks() {
      return this.links.filter(link => link.show);
    }
  },
  watch: {
    loggedIn: {
      immediate: true,
      handler() {
        this.links = deepClone(this.links);
        this.links.forEach(link => {
          if (link.label === "Login") {
            link.show = !this.loggedIn;
          } else {
            link.show = this.loggedIn;
          }
          this.links.find(link => {
            return link.label === "Home";
          }).show = true;
        });
      }
    }
  },
  methods: {
    ...auth.mapActions(["logout"]),
    async handleLogout() {
      this.logout();
      await this.$router.push("/");
      location.reload();
    }
  },
  render() {
    return this.$scopedSlots.default({
      links: this.links,
      activeLinks: this.activeLinks,
      logout: this.handleLogout
    });
  }
};
</script>

<style scoped></style>

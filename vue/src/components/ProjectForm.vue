<template>
  <div class="sp-box sp-shadow sp-form-group column">
    <form class="sp-voter__main__form">
      <div class="sp-box-header">Create a Project</div>

      <label for="input-title">Title</label>
      <input
        class="sp-input"
        placeholder="Enter Title"
        v-model="title"
        id="input-title"
      />

      <label for="input-description">Description</label>
      <input
        class="sp-input"
        placeholder="Enter Description"
        v-model="description"
        id="input-description"
      />

      <label for="input-end">Duration (in days)</label>
      <input
        type="number"
        class="sp-input"
        placeholder="number of days"
        v-model="duration"
        id="input-duration"
        min="1"
        max="90"
      />

      <label for="input-goal">Goal (number of tokens)</label>
      <input
        type="number"
        class="sp-input"
        placeholder="Enter number of tokens"
        v-model="goal"
        id="input-goal"
      />
      <sp-button :disabled="!loggedIn" @click="submit"
        >Create Project</sp-button
      >
      <div>
        <strong v-if="!loggedIn"
          >Please access a wallet to create a Project</strong
        >
      </div>
    </form>
  </div>
</template>

<style>
label {
  font-weight: bold;
  display: block;
  margin: 4px;
}
</style>

<script>
export default {
  name: "FundraiserForm",
  data() {
    return {
      title: "",
      description: "",
      duration: "30",
      goal: 0,
    };
  },
  computed: {
    currentAccount() {
      if (this._depsLoaded) {
        if (this.loggedIn) {
          return this.$store.getters["common/wallet/address"];
        } else {
          return null;
        }
      } else {
        return null;
      }
    },
    loggedIn() {
      if (this._depsLoaded) {
        return this.$store.getters["common/wallet/loggedIn"];
      } else {
        return false;
      }
    },
  },
  methods: {
    async submit() {
      if (this.goal <= 0) {
        alert("Goal must be > 0!");
        return;
      }

      const formatDate = (d) => {
        const year = d.getFullYear();
        const month = d.getMonth() + 1;
        const day = d.getDate();

        // YYYY-MM-DD
        return `${year}-${month < 10 ? `0${month}` : month}-${
          day < 10 ? `0${day}` : day
        }`;
      };

      const now = new Date();
      console.debug(`Start: ${now}`);
      const start = formatDate(now);
      const endDate = new Date(now.valueOf());
      endDate.setDate(endDate.getDate() + parseInt(this.duration));
      console.debug(`End +${this.duration}: ${endDate}`);
      const end = formatDate(endDate);
      const value = {
        creator: this.currentAccount,
        title: this.title,
        description: this.description,
        start: start,
        end: end,
        goal: `${this.goal}token`,
      };
      console.debug(`Submit ${JSON.stringify(value)}`);
      await this.$store.dispatch(
        "christophsj.fundraiser.fundraiser/sendMsgCreateProject",
        {
          value,
          fee: [],
        }
      );
    },
  },
};
</script>

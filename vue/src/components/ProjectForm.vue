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

        <label for="input-start">Start date</label>
        <input
          type="date"
          class="sp-input"
          placeholder="YYYY.MM.DD"
          v-model="start"
          id="input-start"
          aria-describedby="date-format"
          min="2021-06-01"
          max="2031-01-01"
        />

        <label for="input-end">End Date</label>
        <input
          type="date"
          class="sp-input"
          placeholder="YYYY.MM.DD"
          v-model="end"
          id="input-end"
          aria-describedby="date-format"
          min="2021-06-01"
          max="2031-01-01"
        />

        <label for="input-goal">Goal (number of tokens)</label>
        <input
          type="number"
          class="sp-input"
          placeholder="Enter number of tokens"
          v-model="goal"
          id="input-goal"
        />
        <sp-button :disabled="!loggedIn" @click="submit">Create Fundraiser</sp-button>
        <div><strong v-if="!loggedIn">Please access a wallet to create a Fundraiser</strong></div>
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
      start: "",
      end: "",
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

      var dateToSeconds = (s) => {
        var date = new Date(s);
        return date.getTime() / 1000;
      };

      var start = dateToSeconds(this.start);
      var end = dateToSeconds(this.end);

      const value = {
        creator: this.currentAccount,
        title: this.title,
        description: this.description,
        start: start,
        end: end,
        goal: this.goal,
      };
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

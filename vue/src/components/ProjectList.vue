<template>
  <div class="sp-box sp-shadow column">
    <h2 class="sp-box-header">FUNDRAISERS</h2>
    <div
      v-for="fundraiser in allFundraisers"
      v-bind:key="'fundraiser' + fundraiser.id"
    >
      <SpH3> {{ fundraiser.title }} (ID: {{ fundraiser.id }}) </SpH3>
      <div class="sp-dashed-line" />
      <label for="description"><strong>Description:</strong></label>
      <div id="description">{{ fundraiser.description }}</div>
      <label for="start"><strong> Started at: </strong></label>
      <div id="start">{{ secondsToDateString(fundraiser.start) }}</div>
      <label for="end"><strong>Deadline: </strong></label>
      <div id="end">{{ secondsToDateString(fundraiser.end) }}</div>
      <label for="goal"><strong>Goal: </strong></label>
      <div id="goal">{{ fundSum(fundraiser.id) }} / {{ fundraiser.goal }} Tokens</div>

      <form @submit.prevent="submitFund">
        <div class="subtitle"><strong>Fund Me!</strong></div>
        <input
          class="small-input sp-input"
          placeholder="Enter Amount"
          id="input-amount"
          name="amount"
        />
        <input
          hidden
          disabled
          name="id"
          :value="fundraiser.id"
          type="number"
        />
        <button :disabled="!loggedIn" class="sp-button" type="submit">Submit</button>
      </form>
    </div>
  </div>
</template>

<style>
form {
  margin-top: 20px;
}
.subtitle {
  margin-bottom: 6px;
}
.small-input {
  width: 140px;
}
</style>

<script>
export default {
  data() {
    return {
      selected: "",
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
    funds() {
      return (
        this.$store.getters["christophsj.fundraiser.fundraiser/getFundAll"]({
          params: {},
        })?.Fund ?? []
      );
    },
    loggedIn() {
      if (this._depsLoaded) {
        return this.$store.getters["common/wallet/loggedIn"];
      } else {
        return false;
      }
    },

    allFundraisers() {
      let res = this.$store.getters[
        "christophsj.fundraiser.fundraiser/getProjectAll"
      ]({
        params: {},
      });
      let fundraisers = res?.Project;
      if (fundraisers == null) return [];
      return fundraisers;
    },
    
    activeFundraisers() {
      var fundraisers = this.allFundraisers();

      // TODO: only active fundraisers
      return fundraisers;
    },
  },
  methods: {
    async submitFund(submitEvent) {
      let amount = submitEvent.target.elements.amount.value;
      let id = submitEvent.target.elements.id.value;
      await this.submit(id, `${amount}token`)
    },
    fundSum(id) {
      return this.funds.filter((x) => x.fundraiserID == id).map(x => x.amount).reduce((a, b) => a + b, 0);
    },
    async submit(fundraiserID, amount) {
      const value = { creator: this.currentAccount, fundraiserID, amount };
      console.log(await this.$store.dispatch(
        "christophsj.fundraiser.fundraiser/sendMsgCreateFund",
        {
          value,
          fee: [],
        }
      ));
    },
  },
};
</script>
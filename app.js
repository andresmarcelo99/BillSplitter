class Splitter {
  constructor() {
    this.qty_persons = document.querySelector(".qtyPersons");
    this.cost = document.querySelector(".cost");
    this.tip = document.querySelector(".tip");
    this.split_btn = document.querySelector(".split");
    this.reset_btn = document.querySelector(".reset");
    this.final_cost = document.querySelector(".final_cost");
  }

  splitCost() {
    const finalValue =
      this.cost.value / this.qty_persons.value + Number(this.tip.value);
    this.final_cost.innerHTML = `${finalValue.toFixed(1)}`;
  }

  reset() {
    this.qty_persons.value = "";
    this.cost.value = "";
    this.tip.value = "";
    this.final_cost.value = "0";
  }
}

const mySplitter = new Splitter();

//event listeners
mySplitter.split_btn.addEventListener("click", () => {
  mySplitter.splitCost();
});

mySplitter.reset_btn.addEventListener("click", () => {
  mySplitter.reset();
});

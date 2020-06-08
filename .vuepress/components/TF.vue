<template>
  <div>
    <h1>Experimental</h1>
    <button @click="train">TRAIN</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      xValues: [1, 2, 3, 4],
      yValues: [5, 6, 7, 8]
    };
  },

  methods: {
    train: function() {
      const model = (this.model = tf.sequential());
      model.add(tf.layers.dense({ units: 1, inputShape: [1] }));

      model.compile({ loss: "meanSquaredError", optimizer: "sgd" });

      const xs = tf.tensor2d(this.xValues, [this.xValues.length, 1]);
      const ys = tf.tensor2d(this.yValues, [this.yValues.length, 1]);

      model.weights.forEach(w => {
        console.log(w.name, w.shape);
      });

      model.fit(xs, ys, { epochs: 5 }).then(() => {
        console.log("TRAINING DONE");
      });
    }
  }
};
</script>
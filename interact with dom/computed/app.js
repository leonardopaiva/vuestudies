window.onload = function(){
  new Vue({
    el: '#app',
    data: {
      counter: 0,
      secondCounter: 0
    },
    computed: {
      output: function() {
        console.log('Output called!');
        return this.counter > 5 ? 'Greater 5' : 'Smaller than 5';
      }
    },
    watch: {
      counter: function(value) {
        console.log('watch called!');
      }
    },
    methods: {
      result: function() {
        console.log('Result called!');
        return this.counter > 5 ? 'Greater 5' : 'Smaller than 5';
      },
      teste: function() {
        console.log('teste...');
      }
    }
  });
}


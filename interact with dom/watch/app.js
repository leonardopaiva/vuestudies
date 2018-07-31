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
      counter: function(newValue, oldValue) {
        console.log('watch called....');
        console.log('Novo valor: ', newValue);
        console.log('Antigo valor: ', oldValue);
        setTimeout(() => {
          this.counter = 0;
        }, 3000);
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


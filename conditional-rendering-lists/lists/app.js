window.onload = function(){
  new Vue({
    el: '#app',
    data: {
      title: 'Hello World!',
      ingredients: ['meat', 'fruit', 'cookies'],
      persons: [
        {name: 'Max', age: 27, color: 'red'},
        {name: 'Anna', age: 'unknown', color: 'blue'}
      ]
    },
    methods: {
    }
  });
}


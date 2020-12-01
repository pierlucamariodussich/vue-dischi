let myApp = new Vue ({

  el:'#root',

  data:{
     cds:[],
  },
  mounted: function(){


    axios.get("https://flynn.boolean.careers/exercises/api/array/music")
    .then((result) =>{
      this.cds.push(result.data.response);

      });

    console.log(this.cds)
  }









});

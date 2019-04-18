var vm = new Vue({
    el:'#app',
    data:{
        title:'111'
    },
    mounted() {
        this.createView();
    },
    methods:{
        createView:function () {
            axios.post('data/cartData.json').then(
                function (res) {
                    console.log(res);
                    
                }
            )
        }
    }
})
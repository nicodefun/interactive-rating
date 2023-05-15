Vue.createApp({
    data(){
        return{
            isThankyou: false,
            itemNumber: null,
            visiable: true,
            total: 5

        }
    },

    methods:{
        clickBtn(){
            this.isThankyou= true;
        },
        rating(key){
            this.itemNumber = +key.target.innerText;
            console.log(this.itemNumber);
    }
}}
    
).mount('#app');
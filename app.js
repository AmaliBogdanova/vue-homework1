
const app = {
    data(){
        return{
            title: 'Дз',
            green: 'зеленый',
            red:'красный',
            orange:'оранжевый',
            count: ""
            
          }   
        },
        methods: {
         changeRed(){
            let p = document.querySelector('p');
            p.style.background = ''
            p.style.background = 'red'
         },
         changeGreen(){
            let p = document.querySelector('p');
            p.style.background = ''
            p.style.background = 'green'
            
            /* p.classList.add('green-text')   */
         },
         changeOrange(){
            let p = document.querySelector('p');
            p.style.background = ''
            p.style.background = 'orange'
         }
         }
   
}
Vue.createApp(app).mount(`#app`)
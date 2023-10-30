AFRAME.registerComponent('marker-handler', {
    init:function(){
        this.el.addEventListener('markerFound', ()=>{
            this.handleMarkerFound()
        })

        this.el.addEventListener('markerLost', ()=>{
            this.handleMarkerLost()
        })
    },

    handleMarkerFound:function(){
        var button_div=document.getElementById('button-div')
        button_div.style.display="flex"
        var ratingButton=document.getElementById('rating-button')
        ratingButton.addEventListener('click', ()=>{
            swal({
                icon:'warning',
                title:'Rate Us',
                text:'Works in progress'
            })
        })

        var orderButton=document.getElementById('order-button')
        orderButton.addEventListener('click', ()=>{
            swal({
                icon:'success',
                title:'Order Now',
                text:'You order will be served soon at your table.'
            })
        })
    },

    handleMarkerLost:function(){
        var button_div=document.getElementById('button-div')
        button_div.style.display="none"
        
    }
})
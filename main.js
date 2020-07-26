$(document).ready(function(){
  $('.submit').click(function(event){
    console.log('Clicked button')

    var name = $('.name').val()
    var email = $('.email').val()
    var product = $('.product').val()
    var price = $('.price').val
    var statusElm = $('.status')
    statusElm.empty()

if(name.length > 1){
  statusElm.append('<div>Name is valid</div>'
)
} else{
  event.preventDefault()
  statusElm.append('<div>Please enter your name</div>')

}
    if(email.length > 5 && email.includes('@') && email.includes('.')){
      statusElm.append('<div>Email is valid</div>')
    } else{
      event.preventDefault()
      statusElm.append('<div>Please enter your email</div>')
    }
    if(product.length > 2){
    statusElm.append('<div>Product name is valid</div>')
  } else{
    event.preventDefault()
    statusElm.append('<div>Please enter a product name</div>')

  }
  if(price.length > 1){
  statusElm.append('<div>Price is valid</div>')
} else{
  event.preventDefault()
  statusElm.append('<div>Please enter a price</div>')

}



  })
})

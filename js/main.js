fetch("https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Rock_hyrax_%28Procavia_capensis%29_2.jpg/800px-Rock_hyrax_%28Procavia_capensis%29_2.jpg")
    .then(result=>result.blob()
        .then(result=>{
             var img =document.body.appendChild(document.createElement('img'))
             img.src =  URL.createObjectURL(result)
        }
    )
)


    fetch(
            'https://api.nasa.gov/planetary/apod?api_key=Pj8eKOoYJl3URxYsh4KdurqjQgb7lEoBLzD2idBX&count=10&hd=true', {
                method: 'GET'
            }
        )
        .then(response => response.json())
        .then(result => {
            result.forEach(result => {
                const card = '<a href="' + result.url + '" data-lightbox="gallery" data-title="' + result.title + '"><img class="image"  src="' + result.url + '" alt="Card image cap"></a>';
                    if (result.media_type == "video") {
                        $(".image").css("display", "none");
                    } else{
                        $(".gallery").append(card)                        
                    }
            })
        })
        .catch(error => console.error('error:', error));

    lightbox.option({
        'fitImagesInViewport': true
    })

    $(".btn").click(function () {
        location.reload(true);
    });
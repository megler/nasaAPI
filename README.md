# Fun with Fetch and NASA's API

This is a small project where I played around with fetch you utilize NASA's APOD API.  

## General

On page load, you should get 10 images. If the feed sends a video, it should not display, which would give you less than 10 images. The page is laid out with Flexbox and I used jQuery for scripting.  jQuery was handy because it was easy to incorporate a lightbox for the images without getting bogged down writing something that wasn't my overall goal.

*NOTE:* Sometimes you'll refresh the page and get nothing in return. If nothing happens after about 15 seconds, reload the page. NASA's data can be a little sketchy, but it's free.


### Built With

* [lightbox](https://lokeshdhakar.com/projects/lightbox2/) - Lightbox by Lokesh Dhakar
* [NASA](https://api.nasa.gov/api.html#apod) - NASA's APOD (Astronomy Picture of the Day) API

### Final Thoughts

While NASA will let you GET only, this was a fun afternoon project to play with fetch() vs XHR.  It also allowed me to manipulate JSON data in an easy setting compared to loading up a full framework like Angular or React.  I hope you enjoy all the super cool photos!

### License

This project is licensed under the MIT License - see the [LICENSE.md](https://github.com/megler/html-workflow/blob/master/LICENSE) file for details


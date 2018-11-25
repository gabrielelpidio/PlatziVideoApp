export const makeHTML = (id) => {
  return (`
  <style>
    .video{
      position: relative;
      padding-bottom: 56.25%;
    }
    iframe {
      position: absolute;
      left: 0;
      top: 0;
      bottom: 0;
      right: 0;
      width: 100%;
      height: 100%;
    }
  </style>
  <div class="video">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/${id}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  </div>
  `)
}


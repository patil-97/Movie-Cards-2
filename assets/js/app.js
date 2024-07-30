let img_base_url = "https://image.tmdb.org/t/p/w500";


result = "";

for(let i = 0; i < movieArray.length; i++){
  result += `  <div class="col-md-4 mb-4">
            <div class="card b-radius">
              <figure class="movieCard mb-0">
                <img
                  src="https://image.tmdb.org/t/p/w500${movieArray[i].poster_path}"
                  alt=""
                  title=""
                />
                <figcaption class="movieTitle p-2">
                  <div class="row">
                    <div class="col-10">
                      <h3>${movieArray[i].title}</h3>
                    </div>
                    <div class="col-2 align-self-center">
                      <span class="p-2 bg-warning">${movieArray[i].vote_average}</span>
                    </div>
                  </div>
                 
                </figcaption>
                <div class="movieOverview p-2">
                  <h4>${movieArray[i].title}</h4>
                  <p>
                   ${movieArray[i].overview}
                  </p>
                </div>
              </figure>
            </div>
          </div>`
}

document.getElementById("movie").innerHTML = result;
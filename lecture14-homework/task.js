let params = {
    api_key: "0b2eaed6800943cbb26bccc51c179bd9",
    published_date:"2013-05-22",
};
fetch(`https://api.nytimes.com/svc/books/v3/lists/overview.json?api-key=${params.api_key}&published_date=${params.published_date}`).then((response) => {
    return response.json();
}).then((items) => {
    console.log(items);
});
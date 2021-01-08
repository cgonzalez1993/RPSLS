let url;
let value;

function setUrl(urlName) {
    url = urlName;
}

function getValue() {
    return value;
}

function getData() {
    fetch(url)
        .then(
            data => {
                //console.log(data);
                data.text().then(
                    function (v) {
                        //console.log(v)
                        value = v
                    }
                )
                //data.TYPE tells your fetch to turn your promise into the requested data type, ie data.JSON
            }
        )
}

export { setUrl, getData, getValue }
async function fetchURLs(urls) {
    var results =  []

    for (let url of urls) {
        let res = await fetch(url)
        if (res.status == 200) {
            let text = await res.text()
            results.push(text.toUpperCase())
        } else {
            results.push(`${res.status}: ${url}`)
        }
    }
    return results
}

function *fetchURLs(urls) {
    for (let url of urls) {
        let res = await fetch(url)
        if (res.status == 200) {
            let text = await res.text()
            yield text.toUpperCase()
        } else {
            yield `${res.status}: ${url}`
        }
    }
}

async function main(favoriteSites) {
    var it = fetchURLs(favoriteSites)

    while (true) {
        let res = await it.next()
        if (res.done) break
        console.log(res.value)
    }
}

async function main(favoriteSites) {
    for await (let text of fetchURLs(favoriteSites)) {
        console.log(text)
    }
}

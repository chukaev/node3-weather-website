const request = require('request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?access_token=pk.eyJ1IjoieWNodWthZXYiLCJhIjoiY2p4MDM1eXFmMWV0MDN6cGRydXNvNGFpYyJ9.SuVE7znxKkb84cAOggZr2w&limit=1'

    request({ url, json: true }, (error, res) => {
        if (error) {
            callback(error, undefined)
        } else if (res.body.message != undefined) {
            callback(res.body.message, undefined)
        }
        else if (res.body.features.length === 0) {
            callback('Unable to find location. Try another search.', undefined)
        } else {
            callback(undefined, {
                latitude: res.body.features[0].center[1],
                longitude: res.body.features[0].center[0],
                location: res.body.features[0].place_name
            })
        }
    })
}

module.exports = geocode
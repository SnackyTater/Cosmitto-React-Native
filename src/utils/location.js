
const earthRadius = 6.317;

export const getLocation = () => { }

export const distanceBetween = (pointA, pointB) => {
    const [lngA, latA] = pointA
    const [lngB, latB] = pointB

    const deltaLat = (latB - latA) * Math.PI / 180
    const deltaLong = (lngB - lngA) * Math.PI / 180

    //conver lat to radian
    lngA = lngA * Math.PI / 180
    latA = latA * Math.PI / 180

    const haversine = Math.pow(Math.sin(deltaLat / 2), 2) + Math.pow(Math.sin(deltaLong / 2), 2) * Math.cos(latA) * Math.cos(latB)

    const distance = 2 * Math.asin(Math.sqrt(haversine))

    return distance * earthRadius
}
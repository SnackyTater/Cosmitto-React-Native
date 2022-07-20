import { Dimensions } from 'react-native'

const { width, height } = Dimensions.get('window')

export class metric {
    constructor(value) {
        this.value = value
    }

    VW() {
        return width / 100 * this.value
    }

    VH() {
        return height / 100 * this.value
    }


}
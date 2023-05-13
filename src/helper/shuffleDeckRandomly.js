import axios from 'axios'

const shuffleDeckRandomly = async () => {
    const response = await axios.get("https://blackjack.ekstern.dev.nav.no/shuffle");
    return response.data;
}

export default shuffleDeckRandomly;
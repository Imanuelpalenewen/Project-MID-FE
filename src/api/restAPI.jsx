import axios from "axios"

const url_api = "http://localhost:3001"

const fetchAllData = async () => {
  try {
    const [profile, gallery, socials] = await Promise.all([
      axios.get(`${url_api}/profile`),
      axios.get(`${url_api}/gallery`),
      axios.get(`${url_api}/socials`),
    ])

    return {
      profile: profile.data,
      gallery: gallery.data,
      socials: socials.data,
    }
  } catch (error) {
    console.log(`Error fetching data from API: ${error}`)
    throw error
  }
}

export default fetchAllData
import location from '../../assets/location'

const state = {
  locations: [],
  locationInfo: {},
  locationNewFlag: true
}

const actions = {
  setLocation (context) {
    return new Promise(
      resolve => {
        if (context.state.locations.length === 0) {
          context.commit('LOCATIONS_SET', location.locationList)
          context.state.locationNewFlag = false
        }
        resolve(true)
      }
    )
  },
  setLocationInfo (context, id) {
    return new Promise(
      resolve => {
        context.commit('LOCATIONINFO_SET', context.state.locations[id - 1])
        resolve(true)
      }
    )
  },
  addLocationInfo (context, data) {
    return new Promise(
      resolve => {
        console.log(data)
        context.commit('LOCATIONINFO_ADD', data)
        console.log(context.state.locations)
        resolve(true)
      }
    )
  }
}

const mutations = {
  LOCATIONS_SET (state, data) {
    state.locations = data
  },
  LOCATIONINFO_SET (state, data) {
    state.locationInfo = data
  },
  LOCATIONINFO_ADD (state, data) {
    state.locations.push(data)
  }
}

const getters = {
  getLocations: state => state.locations,
  getLocationInfo: state => state.locationInfo
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}

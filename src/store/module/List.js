
const state = {
  shareList: [{
    'id': 1,
    'location_id': 2,
    'name': '공학1관',
    'address': '충청남도 천안시 동남구 병천면 충절로 1600 공학1관',
    'parkingFee': 600,
    'supportsNFC': false,
    startTime: '10:00',
    endTime: '17:00'
  }],
  ticketInfo: {},
  idCount: 1,
  locationIDCount: 3
}

const actions = {
  addParkingLot (context, data) {
    return new Promise(
      resolve => {
        context.commit('COUNT_PLUS')
        let locationData = Object.assign(data, {
          id: context.state.locationIDCount,
          'parkingFee': 600,
          'supportsNFC': false,
          type: 0
        })
        console.log(locationData)
        context.dispatch('location/addLocationInfo', locationData, { root: true })

        data = Object.assign(data, {
          id: context.state.idCount,
          'location_id': context.state.locationIDCount,
          'parkingFee': 600,
          'supportsNFC': false
        })
        context.commit('SHARE_ADD', data)
        resolve(true)
      }
    )
  },
  setTicketInfo (context, data) {
    return new Promise(
      resolve => {
        console.log(data)
        let time = Date.now() + data.parkingMinutes * 60000
        context.commit('TICKETINFO_SET', { time, parking: data.parkingInfo })
        resolve(true)
      }
    )
  }
}

const mutations = {
  SHARE_ADD (state, data) {
    state.shareList.push(data)
  },
  TICKETINFO_SET (state, data) {
    state.ticketInfo = data
  },
  COUNT_PLUS (state) {
    (state.locationIDCount)++
    (state.idCount)++
  }
}

const getters = {
  getShareList: state => state.shareList,
  getShareInfo: state => id => state.shareList[id - 1],
  getTicketInfo: state => state.ticketInfo,
  getShareCount: state => state.idCount
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
